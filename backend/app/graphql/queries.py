import strawberry
from typing import List
from .types import Todo
from ..database.session import get_db
from ..database.models import TodoModel

@strawberry.type
class Query:
    @strawberry.field
    def todos(self) -> List[Todo]:
        db = next(get_db())
        todos = db.query(TodoModel).all()
        return [Todo(id=todo.id, title=todo.title, completed=todo.completed) for todo in todos] 