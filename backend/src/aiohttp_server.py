import datetime

import logging

logger = logging.getLogger(__name__)

import aiohttp_cors
from aiohttp import web

from logic.logic import get_fibonacci


async def index(request):
    return web.json_response({"datetime": datetime.datetime.now().timestamp()})


async def fibonacci(request):
    data = await request.json()
    logger.debug(data.get('depth', 10))
    try:
        result = await get_fibonacci(data.get('depth', 10))
    except Exception as ex:
        return web.json_response({"error": str(ex)})

    return web.json_response({"data": result})


async def main():
    app = web.Application()

    app.router.add_get('/', index)
    app.router.add_post('/api/fibonacci', fibonacci)

    # Configure default CORS settings.
    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
    })

    # Configure CORS on all routes.
    for route in list(app.router.routes()):
        cors.add(route)

    return app
