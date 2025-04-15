<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function index()
    {
        $languages = Language::select('id', 'language_name', 'language_code', 'language_name_vi')->get();
        return response()->json($languages);
    }
    

    public function show($id)
    {
        $language = Language::find($id);

        if (!$language) {
            return response()->json(['message' => 'Language not found'], 404);
        }

        return response()->json($language);
    }

    public function store(Request $request)
    {
        $request->validate([
            'language_code' => 'required|unique:languages',
            'language_name' => 'required',
            'language_name_vi' => 'required',
        ]);

        $language = Language::create($request->all());

        return response()->json($language, 201);
    }

    public function update(Request $request, $id)
    {
        $language = Language::find($id);

        if (!$language) {
            return response()->json(['message' => 'Language not found'], 404);
        }

        $language->update($request->all());

        return response()->json($language);
    }

    public function destroy($id)
    {
        $language = Language::find($id);

        if (!$language) {
            return response()->json(['message' => 'Language not found'], 404);
        }

        $language->delete();

        return response()->json(['message' => 'Language deleted']);
    }
}
