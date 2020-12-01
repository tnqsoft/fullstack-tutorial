<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Dto\LoginOutput;
use App\Dto\LoginInput;

/**
 * @Route("/", name="api.security.")
 */
class SecurityController extends AbstractController
{
    /**
     * @Route(
     *     path="/login_check",
     *     name="login",
     *     methods={"POST"}
     * )
     */
    public function index()
    {
    }
}
