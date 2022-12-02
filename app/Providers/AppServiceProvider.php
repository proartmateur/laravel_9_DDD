<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Src\Shared\Infrastructure\RamseyUuidGenerator;
use Src\Shared\Infrastructure\UuidGenerator;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //

         $this->app->bind(
            UuidGenerator::class,
            RamseyUuidGenerator::class
        );

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        $this->loadMigrationsFrom(
            \File::allFiles(base_path("src/**/Infrastructure/migrations"))
        );
    }
}
