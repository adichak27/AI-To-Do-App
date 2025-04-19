import strawberry
from .types import Todo
from ..database.session import get_db
from ..database.models import TodoModel

@strawberry.type
class Mutation:
    @strawberry.mutation
    def create_todo(self, title: str) -> Todo:
        db = next(get_db())
        todo = TodoModel(title=title, completed=False)
        db.add(todo)
        db.commit()
        db.refresh(todo)
        return Todo(id=todo.id, title=todo.title, completed=todo.completed) 