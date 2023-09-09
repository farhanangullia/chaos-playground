.PHONY: init
init:
	git submodule init
	git submodule update --remote 

.PHONY: start
start:
	docker-compose -p chaos-playground -f examples/docker/docker-compose.yaml -f examples/docker/docker-compose.tools.yaml -f examples/docker/docker-compose.likes.yaml -f examples/docker/docker-compose.ecommerce.yaml up -d --build                                                                                                                

.PHONY: stop
stop:
	docker-compose -p chaos-playground -f examples/docker/docker-compose.yaml -f examples/docker/docker-compose.tools.yaml -f examples/docker/docker-compose.likes.yaml -f examples/docker/docker-compose.ecommerce.yaml down --remove-orphans                          

.PHONY: init start stop