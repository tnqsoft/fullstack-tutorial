<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

final class ResolveTodoInput
{
    /**
     * @var bool
     * @Assert\NotBlank
     */
    public $isDone;
}
