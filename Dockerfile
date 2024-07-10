FROM node:20.6.1
RUN echo "Starting react container..."
WORKDIR /app

COPY . .

RUN rm -rf node_modules package-lock.json
RUN npm install

EXPOSE 80
RUN echo "Starting react app..."

CMD ["npm", "run", "dev"]