<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \Src\Pipo\Infrastructure\Model\Pipo;

Route::prefix('pipo')->group(
    function () {
        Route::get('/', function () {
            $pipos = Pipo::all();
            return response()->json($pipos);
        });
    });
