FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./package.json /usr/src/app/
RUN npm install
RUN npm run build

# Bundle app source
COPY ./server /usr/src/app/server
COPY ./dist /usr/src/app/dist

WORKDIR /usr/src/app/server

EXPOSE 3000
CMD [ "npm", "start" ]