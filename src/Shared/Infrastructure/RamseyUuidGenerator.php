<?php

namespace Src\Shared\Infrastructure;
use Ramsey\Uuid\Uuid as RamseyUuid;
final class RamseyUuidGenerator implements UuidGenerator
{
    public function generate(): string
    {
        return RamseyUuid::uuid4()->toString();
    }
}

