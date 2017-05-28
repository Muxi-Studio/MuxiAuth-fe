FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Build static file
RUN npm install
RUN npm run build

# Bundle app source
EXPOSE 3000
CMD [ "npm", "start" ]