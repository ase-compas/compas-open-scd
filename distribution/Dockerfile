FROM ghcr.io/ase-compas/mirror/compas-base-nginx:1.31.2

COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY dist/. /usr/share/nginx/html

ENV NGINX_PORT=8080
EXPOSE 8080

VOLUME /etc/nginx/
VOLUME /usr/share/nginx/html/cim
VOLUME /usr/share/nginx/html/conf
VOLUME /usr/share/nginx/html/nsdoc
