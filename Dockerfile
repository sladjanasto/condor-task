FROM node:latest
RUN mkdir -p /code
WORKDIR /code
COPY ./ /code/
RUN npm install
RUN npm install -g @angular/cli
ENTRYPOINT ng serve --host 0.0.0.0