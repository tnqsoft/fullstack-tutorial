<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;

final class AddTodoInput
{
    /**
     * @var string
     * @Assert\NotBlank
     */
    public $detail;
}
