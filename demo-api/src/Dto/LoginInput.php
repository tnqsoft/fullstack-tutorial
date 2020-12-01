<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

final class LoginInput
{
    /**
     * @var string
     * @Assert\NotBlank
     */
    public $email;

    /**
     * @var string
     * @Assert\NotBlank
     */
    public $password;
}
