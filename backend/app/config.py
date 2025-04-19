import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./todo.db")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY")
    CORS_ORIGINS: list = ["http://localhost:3000"]

settings = Settings() 