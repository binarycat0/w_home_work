import os
from logging import config

config.dictConfig({
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'default': {
            'format': '%(levelname)s %(asctime)s %(module)s '
                      '%(process)d %(thread)d %(message)s'
        }
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'default'
        },
        'file': {
            'class': 'logging.handlers.RotatingFileHandler',
            'formatter': 'default',
            'filename': os.environ.get('LOG_FILENAME', 'app.log'),
            'maxBytes': 1024,
            'backupCount': 5
        }
    },
    'loggers': {
        '': {
            'handlers': ['console', ],
            'level': os.environ.get('LOG_LEVEL', 'DEBUG'),
        },
    }
})
