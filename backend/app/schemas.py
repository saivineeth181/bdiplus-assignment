from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str
    description: str | None = None
    status: str | None = "pending"

class TaskCreate(TaskBase):
    pass

class TaskUpdate(TaskBase):
    pass

class Task(TaskBase):
    id: int

    class Config:
        orm_mode = True

