FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app

# Build static file
RUN npm install
RUN npm run build
COPY ./dist /usr/src/app/dist

# Bundle app source
COPY ./server /usr/src/app/server
WORKDIR /usr/src/app/server
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]