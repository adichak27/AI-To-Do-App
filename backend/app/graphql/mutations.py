import strawberry
from typing import Optional
from datetime import datetime, timezone
from .types import Todo
from ..database.session import get_db
from ..database.models import TodoModel
from ..services.ai import generate_todo_suggestion

@strawberry.type
class Mutation:
    @strawberry.mutation
    async def generate_todo(self) -> Todo:
        db = next(get_db())
        try:
            # Get existing todos
            existing_todos = db.query(TodoModel).all()
            todos_context = "\n".join([f"- {todo.title}" for todo in existing_todos])
            
            # Generate new todo using AI
            prompt = f"Based on these existing todos:\n{todos_context}\nSuggest a new, related todo task."
            new_todo_title = await generate_todo_suggestion(prompt)
            
            # Create new todo
            todo = TodoModel(
                title=new_todo_title,
                completed=False,
                created_at=datetime.now(timezone.utc)
            )
            db.add(todo)
            db.commit()
            db.refresh(todo)
            
            return Todo(id=todo.id, title=todo.title, completed=todo.completed)
        except Exception as e:
            db.rollback()
            raise Exception(f"Failed to generate todo: {str(e)}")
        finally:
            db.close()

    @strawberry.mutation
    def create_todo(self, title: str) -> Todo:
        db = next(get_db())
        try:
            todo = TodoModel(
                title=title,
                completed=False,
                created_at = datetime.now(timezone.utc)

            )
            db.add(todo)
            db.commit()
            db.refresh(todo)
            
            return Todo(id=todo.id, title=todo.title, completed=todo.completed)
        except Exception as e:
            db.rollback()
            raise Exception(f"Failed to create todo: {str(e)}")
        finally:
            db.close()

    @strawberry.mutation
    def delete_todo(self, id: int) -> Todo:
        db = next(get_db())
        try:
            todo = db.query(TodoModel).filter(TodoModel.id == id).first()
            if not todo:
                raise Exception(f"Todo with id {id} not found")
            
            # Create return value before deletion
            return_todo = Todo(id=todo.id, title=todo.title, completed=todo.completed)
            
            db.delete(todo)
            db.commit()
            return return_todo
        except Exception as e:
            db.rollback()
            raise Exception(f"Failed to delete todo: {str(e)}")
        finally:
            db.close()

    @strawberry.mutation
    def toggle_todo(self, id: int) -> Todo:
        db = next(get_db())
        try:
            todo = db.query(TodoModel).filter(TodoModel.id == id).first()
            if not todo:
                raise Exception(f"Todo with id {id} not found")
            
            todo.completed = not todo.completed
            db.commit()
            db.refresh(todo)
            
            return Todo(id=todo.id, title=todo.title, completed=todo.completed)
        except Exception as e:
            db.rollback()
            raise Exception(f"Failed to toggle todo: {str(e)}")
        finally:
            db.close() 