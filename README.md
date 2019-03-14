# w_home_work
web app fibonacci number
   
## Required:

- docker
    - [Mac OS](https://docs.docker.com/docker-for-mac/install/)
    - [Windows](https://docs.docker.com/docker-for-windows/install/)
    - [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce)
    - [Centos](https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce)
- docker-compose
    - [Install Docker Compose](https://docs.docker.com/compose/install/)

## RUN

    docker-compose build
    docker-compose up
    
    # daemon 
    # docker-compose up -d
    
    # default
    http://localhost:3000/


## REBUILD
    
    docker-compose down -- rmi local
    docker-compose build
    