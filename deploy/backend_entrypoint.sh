#!/usr/bin/env bash

gunicorn aiohttp_server:main --workers=4 \
    --reload \
    --chdir /usr/app \
    --bind 0.0.0.0:${API_PORT} \
    --worker-class aiohttp.GunicornWebWorker \
    --access-logfile /var/log/app/gunicorn-access.log \
    --log-level ${LOG_LEVEL}