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

composer require api-platform/core:dev-master
https://api-platform.com/docs/core/dto/
https://symfonycasts.com/screencast/api-platform/swagger#play

/**
 * @ApiResource(itemOperations={},collectionOperations={
 *     "post_login"={
 *         "method" = "POST",
 *         "path"="/api/login_check",
 *         "route_name"="api.security.login",
 *         "controller"=SecurityController::class,
 *         "output"=LoginOutput::class,
 *         "status"=200
 *     }}
 * )
 */
 
 https://api-platform.com/docs/core/content-negotiation/
 https://github.com/api-platform/api-platform/issues/199
 https://github.com/api-platform/api-platform/issues/1202
 https://api-platform.com/docs/core/serialization/#using-serialization-groups

Selecting a Different PHP Version¶
If you have multiple PHP versions installed on your computer, you can tell Symfony which one to use creating a file called .php-version at the project root directory:
cd my-project/
echo 7.2 > .php-version
echo 7 > .php-version

symfony local:php:list
