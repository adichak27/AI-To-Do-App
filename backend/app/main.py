from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database.session import engine
from .database import models
from .graphql.schema import schema
from strawberry.fastapi import GraphQLRouter
from .config import settings

# Create empty database table on initial startup
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# GraphQL setup
graphql_app = GraphQLRouter(schema)
app.include_router(graphql_app, prefix="/graphql")

@app.get("/")
def read_root():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 