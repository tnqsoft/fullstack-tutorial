composer require "lexik/jwt-authentication-bundle"
composer require make
composer require orm
composer require security
composer require doctrine/annotations
// NelmioCorsBundle
composer req cors

// All in one
composer require "lexik/jwt-authentication-bundle" make orm security "doctrine/annotations"

./bin/console make:user
openssl genrsa -out config/jwt/private.pem -aes256 4096
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem
php bin/console make:migration
php bin/console doctrine:migrations:migrate
symfony serve
./bin/console make:controller
./bin/console make:command
bin/console app:create-user

symfony serve --allow-http
