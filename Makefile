.PHONY: init
init:
	git submodule init
	git submodule update

.PHONY: update
update:
	git submodule update --remote 

.PHONY: start
start:
	docker-compose -p chaos-playground -f deploy/docker/docker-compose.yaml -f deploy/docker/docker-compose.tools.yaml -f deploy/docker/docker-compose.likes.yaml -f deploy/docker/docker-compose.ecommerce.yaml up -d

.PHONY: stop
stop:
	docker-compose -p chaos-playground -f deploy/docker/docker-compose.yaml -f deploy/docker/docker-compose.tools.yaml -f deploy/docker/docker-compose.likes.yaml -f deploy/docker/docker-compose.ecommerce.yaml down --remove-orphans

.PHONY: tools
tools:
	sudo yum update -y
	sudo amazon-linux-extras install docker nginx1 -y
	sudo curl -L https://github.com/docker/compose/releases/download/v2.17.3/docker-compose-$(uname -s)-$(uname -m) -o /usr/bin/docker-compose
	sudo chmod +x /usr/bin/docker-compose
	docker-compose version
	sudo yum install git -y
	sudo yum install nginx -y

.PHONY: env
env:
	sudo su - 
	service docker start
	sudo chkconfig docker on
	sudo systemctl start nginx.service
	sudo systemctl enable nginx
	sudo systemctl start nginx
	sudo systemctl status nginx
	cd /opt && git clone https://github.com/farhanangullia/chaos-playground.git && cd chaos-playground && make init && docker-compose -p chaos-playground -f deploy/docker/docker-compose.likes.yaml -f deploy/docker/docker-compose.ecommerce.yaml up -d
	cp -f /opt/chaos-playground/reverse-proxy.conf /etc/nginx/nginx.conf
	sudo service nginx restart
	
.PHONY: init update tools start stop env