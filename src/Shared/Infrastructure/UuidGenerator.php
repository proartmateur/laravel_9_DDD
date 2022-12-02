<?php

namespace Src\Shared\Infrastructure;

interface UuidGenerator
{
    public function generate(): string;
}
