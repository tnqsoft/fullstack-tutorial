<?php

namespace App\DataTransformer;

use ApiPlatform\Core\DataTransformer\DataTransformerInterface;
use App\Dto\LoginOutput;
use App\Entity\Security;

final class LoginOutputDataTransformer implements DataTransformerInterface
{
    /**
     * {@inheritdoc}
     */
    public function transform($data, string $to, array $context = [])
    {
        $output = new LoginOutput();
        $output->token = $data->token;
        var_dump($output->token);
        die;
        return $output;
    }

    /**
     * {@inheritdoc}
     */
    public function supportsTransformation($data, string $to, array $context = []): bool
    {
        return LoginOutput::class === $to && $data instanceof Security;
    }
}
