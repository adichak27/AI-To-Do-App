import strawberry
from typing import List
from .types import Todo
from .queries import Query
from .mutations import Mutation

schema = strawberry.Schema(query=Query, mutation=Mutation) 