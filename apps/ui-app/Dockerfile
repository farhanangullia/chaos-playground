FROM public.ecr.aws/docker/library/node:16-alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci 

COPY . .

RUN npm run build


# Bundle static assets with nginx
FROM public.ecr.aws/nginx/nginx:1.23.4-alpine
ENV NODE_ENV production

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]