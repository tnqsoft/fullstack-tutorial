<?php

namespace App\Controller;

use App\Manager\UserManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/users", name="api.users.")
 */
class UsersController extends AbstractController
{
    /**
     * @Route("/", name="list")
     */
    public function index(UserManager $userManager): Response
    {
        $data = $userManager->getListUsers();
        return $this->json($data);
    }
}
