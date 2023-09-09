.PHONY: init
init:
	git submodule init
	git submodule update

.PHONY: update
update:
	git submodule update --remote 

.PHONY: start
start:
	docker-compose -p chaos-playground -f examples/docker/docker-compose.yaml -f examples/docker/docker-compose.tools.yaml -f examples/docker/docker-compose.likes.yaml -f examples/docker/docker-compose.ecommerce.yaml up -d --build

.PHONY: stop
stop:
	docker-compose -p chaos-playground -f examples/docker/docker-compose.yaml -f examples/docker/docker-compose.tools.yaml -f examples/docker/docker-compose.likes.yaml -f examples/docker/docker-compose.ecommerce.yaml down --remove-orphans

.PHONY: tools
tools:
	sudo yum update -y
	sudo amazon-linux-extras install docker -y
	sudo curl -L https://github.com/docker/compose/releases/download/v2.17.3/docker-compose-$(uname -s)-$(uname -m) -o /usr/bin/docker-compose
	sudo chmod +x /usr/bin/docker-compose
	docker-compose version
	sudo yum install git -y

.PHONY: env
env:
	sudo su - 
	service docker start
	sudo chkconfig docker on
	cd /opt && git clone https://github.com/farhanangullia/chaos-playground.git && cd chaos-playground && make init && docker-compose -p chaos-playground -f examples/docker/docker-compose.likes.yaml -f examples/docker/docker-compose.ecommerce.yaml up -d --build

.PHONY: init update tools start stop env