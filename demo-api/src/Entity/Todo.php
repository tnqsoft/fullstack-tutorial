<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use App\Controller\CategoryController;
use App\Repository\TodoRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use App\DTO\ResolveTodoInput;
use App\DTO\AddTodoInput;

/**
 * @ApiResource(itemOperations={
 *          "get_by_category"={
 *              "method"="GET",
 *              "path"="/categories/{id}/todo",
 *              "requirements"={"id"="\d+"},
 *              "controller"=CategoryController::class
 *          },
 *          "resolve_todo"={
 *              "method"="PUT",
 *              "path"="/categories/{id}/todo/{todoId}",
 *              "controller"=CategoryController::class,
 *              "input"=ResolveTodoInput::class,
 *              "openapi_context" = {
 *                  "summary" = "Resolve Todo",
 *                  "parameters"={
 *                      {
 *                          "name" = "id",
 *                          "in" = "path",
 *                          "required" = "true",
 *                          "type" = "number"
 *                      },
 *                      {
 *                          "name" = "todoId",
 *                          "in" = "path",
 *                          "required" = "true",
 *                          "type" = "number"
 *                      }
 *                  }
 *              }
 *          },
 *          "add_todo"={
 *              "method"="POST",
 *              "path"="/categories/{id}/todo",
 *              "controller"=CategoryController::class,
 *              "input"=AddTodoInput::class,
 *              "openapi_context" = {
 *                  "summary" = "Add Todo",
 *                  "parameters"={
 *                      {
 *                          "name" = "id",
 *                          "in" = "path",
 *                          "required" = "true",
 *                          "type" = "number"
 *                      }
 *                  }
 *              }
 *          },
 *     },
 *     collectionOperations={},
 * )
 * @ORM\Entity(repositoryClass=TodoRepository::class)
 */
class Todo
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $detail;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isDone;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="todos")
     * @ORM\JoinColumn(nullable=false)
     * @MaxDepth(1)
     * @ApiProperty(readableLink=true)
     */
    private $category;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDetail(): ?string
    {
        return $this->detail;
    }

    public function setDetail(?string $detail): self
    {
        $this->detail = $detail;

        return $this;
    }

    public function getIsDone(): ?bool
    {
        return $this->isDone;
    }

    public function setIsDone(?bool $isDone): self
    {
        $this->isDone = $isDone;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }
}
