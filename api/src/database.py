from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from src.settings import settings


class Base(DeclarativeBase):
    pass


engine = create_async_engine(settings.DATABASE_URL, echo=True)
sessionmaker = async_sessionmaker(engine, expire_on_commit=False)


async def get_session():
    async with sessionmaker() as session:
        yield session
