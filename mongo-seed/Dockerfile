FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongodb --db iky-ai --collection product --type json --file /init.json --jsonArray