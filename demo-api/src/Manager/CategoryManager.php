<?php

namespace App\Manager;

use App\Entity\Todo;
use App\Repository\CategoryRepository;
use App\Repository\TodoRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Exception\HttpException;

class CategoryManager
{
    /**
     * @var TodoRepository
     */
    private $todoRepository;

    /**
     * @var CategoryRepository
     */
    private $categoryRepository;

    /**
     * @var EntityManager
     */
    private $em;

    public function __construct(
        TodoRepository $todoRepository,
        CategoryRepository $categoryRepository,
        EntityManagerInterface $em
    )
    {
        $this->todoRepository = $todoRepository;
        $this->categoryRepository = $categoryRepository;
        $this->em = $em;
    }

    public function getListTodo($id)
    {
        $category = $this->categoryRepository->find($id);
        if (!$category) {
            throw new HttpException(404, 'Category not found');
        }

        $list = $this->todoRepository->findAllByCategory($category);
        $result = [];
        foreach ($list as $item) {
            $result[] = [
                'id' => $item->getId(),
                'detail' => $item->getDetail(),
                'isDone' => $item->getIsDone(),
            ];
        }

        return $result;
    }

    public function resolveTodo($id)
    {
        $todoItem = $this->todoRepository->find($id);
        if (!$todoItem) {
            throw new HttpException(404, 'Todo not found');
        }
        $todoItem->setIsDone(true);
        $this->em->persist($todoItem);
        $this->em->flush();

        return [
            'id' => $todoItem->getId(),
            'detail' => $todoItem->getDetail(),
            'isDone' => $todoItem->getIsDone(),
        ];
    }

    public function addTodo($id, $data)
    {
        $category = $this->categoryRepository->find($id);
        if (!$category) {
            throw new HttpException(404, 'Category not found');
        }
        $todoItem = new Todo();
        $todoItem->setDetail($data['detail']);
        $todoItem->setIsDone(false);
        $todoItem->setCategory($category);
        $this->em->persist($todoItem);
        $this->em->flush();

        return [
            'id' => $todoItem->getId(),
            'detail' => $todoItem->getDetail(),
            'isDone' => $todoItem->getIsDone(),
        ];
    }
}
