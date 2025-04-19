from ..database.models import TodoModel
from sqlalchemy.orm import Session

def create_todo(db: Session, title: str) -> TodoModel:
    todo = TodoModel(title=title, completed=False)
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo

def get_todos(db: Session):
    return db.query(TodoModel).all() 