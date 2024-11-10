Place in this folder both ssl 

rootCA-cpt-web.crt
rootCA-cpt-web.key

Generate new ones using certificate.config and running this command

 openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout rootCA-cpt-web.key -days 3560 -out rootCA-cpt-web.crt -config certificate.config