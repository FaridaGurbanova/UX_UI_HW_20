# base image
FROM nginx:alpine

# copy directory to container
COPY . /usr/share/nginx/html