<?php

namespace App\Controller;

use App\Entity\Category;
use App\Manager\CategoryManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/categories", name="api.categories.")
 */
class CategoryController extends AbstractController
{
    /**
     * @Route(
     *     path="/{id}/todo",
     *     name="todo.list",
     *     methods={"GET"}
     * )
     * @return Response
     */
    public function index(CategoryManager $categoryManager, $id): Response
    {
        return new JsonResponse($categoryManager->getListTodo($id), 200);
    }

    /**
     * @Route(
     *     path="/{id}/todo",
     *     name="todo.add",
     *     methods={"POST"}
     * )
     * @return Response
     */
    public function add(Request $request, CategoryManager $categoryManager, $id): Response
    {
        if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
            $data = json_decode($request->getContent(), true);
        } else {
            $data = $request->request;
        }
        return new JsonResponse($categoryManager->addTodo($id, $data), 201);
    }

    /**
     * @Route(
     *     path="/{id}/todo/{todoId}",
     *     name="todo.resolve",
     *     methods={"PUT"}
     * )
     * @return Response
     */
    public function resolve(CategoryManager $categoryManager, $id, $todoId): Response
    {
        return new JsonResponse($categoryManager->resolveTodo($todoId), 200);
    }
}
