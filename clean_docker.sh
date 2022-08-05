docker container stop web
docker container rm web
docker container stop db
docker container rm db
docker-compose rm db
docker-compose rm web
docker system prune --volumes
