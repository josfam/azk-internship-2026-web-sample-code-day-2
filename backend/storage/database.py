"""Minimal database shim for apps that don't use a DB yet.

This file intentionally provides no real database connection. The original
project used Pydantic settings and SQLAlchemy; for this exercise those
have been removed so the app can run without DB configuration.
"""

from typing import Generator, Optional


def db_init(settings: Optional[object] = None):
    """No-op DB initializer for local/dev when DB is unused."""
    return None


def get_db() -> Generator[None, None, None]:
    """Dependency stub that yields None (no DB session)."""
    yield None


def close_db():
    """No-op close function."""
    return None
