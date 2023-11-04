import uuid

from sqlalchemy import ForeignKey, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from src.database import Base


class Category(Base):
    __tablename__ = "product_categories"

    id: Mapped[int] = mapped_column(primary_key=True)
    image_url: Mapped[str]
    title: Mapped[str] = mapped_column(String(100))
    products: Mapped[list["Product"]] = relationship(back_populates="category")


class Product(Base):
    __tablename__ = "product_items"

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True)
    image_url: Mapped[str]
    title: Mapped[str] = mapped_column(String(100))
    description: Mapped[str] = mapped_column(String(1500))
    price: Mapped[Numeric] = mapped_column(Numeric(10, 2))
    category_id: Mapped[int] = mapped_column(
        ForeignKey("product_categories.id", ondelete="RESTRICT", onupdate="CASCADE")
    )
    category: Mapped["Category"] = relationship(back_populates="products")
