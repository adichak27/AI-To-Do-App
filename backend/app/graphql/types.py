import strawberry
from typing import List

@strawberry.type
class Todo:
    id: int
    title: str
    completed: bool 