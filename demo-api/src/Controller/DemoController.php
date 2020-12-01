<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DemoController extends AbstractController
{
    /**
     * @Route(
     *     path="/demo",
     *     name="demo",
     *     methods={"GET"}
     * )
     * @return Response
     */
    public function index(): Response
    {
        return new Response('Demo', 200);
    }
}
