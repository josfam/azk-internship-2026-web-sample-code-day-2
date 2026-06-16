"""Routes for user-related operations."""

from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel

user_router = APIRouter(prefix="/users", tags=["users"])


@user_router.get("/count", status_code=status.HTTP_200_OK)
def get_user_count():
    """Return a placeholder user count (DB not configured)."""
    return JSONResponse(content={"user_count": 0})


class NameIn(BaseModel):
    name: str


@user_router.post("/reverse", status_code=status.HTTP_200_OK)
def reverse_name(payload: NameIn):
    """Reverse the provided name and return original + reversed."""
    try:
        name = payload.name or ""
        reversed_name = name[::-1]
        return JSONResponse(content={"name": name, "reversed": reversed_name})
    except Exception:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"message": "Failed to reverse name."},
        )
