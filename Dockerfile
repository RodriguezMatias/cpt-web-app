FROM node:20.10.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

# Copy the NGINX configuration file to the appropriate location
COPY nginx.conf /etc/nginx/nginx.conf

# Copy certs to container

COPY ssl/rootCA-cpt-web.crt  /usr/share/nginx/certs
COPY ssl/rootCA-cpt-web.key  /usr/share/nginx/certs

COPY --from=build app/dist/cpt-web /usr/share/nginx/html


EXPOSE 80