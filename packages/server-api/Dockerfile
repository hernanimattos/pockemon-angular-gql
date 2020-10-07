FROM node:12.18.3

WORKDIR "/user/app"

COPY package*.json .
COPY index.js .

RUN ls -al -R

EXPOSE 4000

RUN npm install -g nodemon
RUN npm install
CMD nodemon index


