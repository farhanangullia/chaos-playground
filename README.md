<p align="center">
  <a href="https://github.com/farhanangullia/chaos-playground">
    <img alt="Chaos Playground" src="./docs/fire.png" width="48" />
  </a>
</p>
<h1 align="center">
  Chaos Playground
</h1>

<p align="center">
<a href="https://github.com/farhanangullia/chaos-playground/blob/main/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/farhanangullia/chaos-playground?style=flat-square" alt="chaos-playground license" />
</a>
<!-- <a href="https://github.com/farhanangullia/chaos-playground/fork" target="blank">
<img src="https://img.shields.io/github/forks/farhanangullia/chaos-playground?style=flat-square" alt="chaos-playground forks"/>
</a> -->
<!-- <a href="https://github.com/farhanangullia/chaos-playground/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/farhanangullia/chaos-playground?style=flat-square" alt="chaos-playground stars"/>
</a> -->
<a href="https://github.com/farhanangullia/chaos-playground/issues" target="blank">
<img src="https://img.shields.io/github/issues/farhanangullia/chaos-playground?style=flat-square" alt="chaos-playground issues"/>
</a>
<a href="https://github.com/farhanangullia/chaos-playground/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/farhanangullia/chaos-playground?style=flat-square" alt="chaos-playground pull-requests"/>
</a>
</p>

<p align="center"><img src="./docs/chaos-playground.png" alt="chaos-playground png" /></p>

<p align="center">
    <a href="https://chaosplayground.netlify.app" target="blank">View Demo</a>
    ·
    <a href="https://github.com/farhanangullia/chaos-playground/issues/new/choose">Report Issue</a>
    ·
    <a href="https://github.com/farhanangullia/chaos-playground/issues/new/choose">Request Feature</a>
</p>

#### Need to architect and develop more resilient services?
This web portal is composed of micro apps of various software and architectural patterns on various use cases for developers and architects to practice chaos experiments against.


## 🚀 Demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/e1fec818-e5c1-40cd-9603-e888d56a2266/deploy-status)](https://app.netlify.com/sites/chaosplayground/deploys)

Try the app: [Chaos Playground](https://chaosplayground.netlify.app)

## ✨ Features

- **Responsive UI**
- **OAuth Login**
- **Access to 2 micro apps (and counting)**

## 🌟 Micro Apps


| App       	| Services                      	| Language 	| Highlights 	|
|-----------	|-------------------------------	|----------	|------------	|
| Likes App 	| [like-service](https://github.com/farhanangullia/likes-app/tree/main/like-service), [counter-service](https://github.com/farhanangullia/likes-app/tree/main/counter-service) 	| Go       	| Repository Pattern, OpenTelemetry        	|
| eCommerce App 	| [catalog-service](https://github.com/farhanangullia/ecommerce-app/tree/main/catalog-service), [cart-service](https://github.com/farhanangullia/ecommerce-app/tree/main/cart-service), [order-service](https://github.com/farhanangullia/ecommerce-app/tree/main/order-service), [shipping-service](https://github.com/farhanangullia/ecommerce-app/tree/main/shipping-service) 	| Python, Go       	| Hexagonal Architecture, Clean Architecture        	|

## 🛠️ Installation Steps

### Docker
> **_NOTE:_**  By default, Auth is disabled. Set Auth0 values in examples/docker/docker-compose.yaml to enable auth for accessing the apps.

Clone repository:
```
git clone https://github.com/farhanangullia/chaos-playground.git
```

Initialize submodules:
```
make init
```

Deploy with compose:
```
make start
```

> Navigate to the Chaos Playground UI in your web browser by visiting http://localhost:8080.

Clean up:
```
make stop
```

## License

This project is licensed under the Apache-2.0 License.
