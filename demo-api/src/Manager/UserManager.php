<?php

namespace App\Manager;

use App\Repository\UserRepository;

class UserManager
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getListUsers()
    {
        return $this->userRepository->findAll();
    }
}
