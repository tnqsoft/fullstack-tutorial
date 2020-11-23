<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/", name="api.security.")
 */
class SecurityController extends AbstractController
{
    /**
     * @Route("/login_check", name="login")
     */
    public function index()
    {
    }
}
