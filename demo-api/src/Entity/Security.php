<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\SecurityController;
use App\Dto\LoginInput;
use App\Dto\LoginOutput;

/**
 * @ApiResource(itemOperations={},collectionOperations={
 *     "post"={
 *         "method" = "POST",
 *         "path"="/api/login_check",
 *         "route_name"="api.security.login",
 *         "controller"=SecurityController::class,
 *         "status"=200,
 *         "input"=LoginInput::class,
 *         "output"=LoginOutput::class,
 *     }},
 * )
 */
class Security
{
}
