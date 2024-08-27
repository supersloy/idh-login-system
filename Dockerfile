FROM node:20.6.1 as build-step

RUN echo "Set up .env manually or change Dockerfile"

RUN echo "Starting stage 1: Building the static files"
RUN npm cache clear --force
WORKDIR /app
COPY . .
RUN rm -rf node_modules package-lock.json
RUN npm install
RUN npm run build

FROM nginx as hosting-step
RUN echo "Starting stage 2: Hosting the static files"
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/dist /usr/share/nginx/html
EXPOSE 80

STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]