<?php

use App\Http\Controllers\HistorysController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\TranslateController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/languages', [LanguageController::class, 'index']);


// ai ChatGPT 4.0
Route::post('/api/translate', [TranslateController::class, 'translate']);

// api History
Route::post('/api/Historys',  [HistorysController::class, 'index' ]);
Route::post('/api/addHistory',  [HistorysController::class, 'store' ]);


Route::delete('/api/Historys/delete-by-id', [HistorysController::class, 'deleteByIdWithIP']);