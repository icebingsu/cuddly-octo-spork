<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class TranslateController extends Controller
{
    public function translate(Request $request)
    {
        $validated = $request->validate([
            'text' => 'required|string',
            'sourceLang' => 'required|string',
            'targetLang' => 'required|string',
        ]);
        $prompt = "Không cần nói dài dòng chỉ cần trả lời đúng câu là được và nếu ngôn ngữ không hiểu thì cữ giữ lại nguyên câu Dịch đoạn sau từ 
        {$validated['sourceLang']} sang {$validated['targetLang']} không cần giải thích:\n\n{$validated['text']}";
        try {
            $client = new Client();
            $apiKey = env('OPENROUTER_API_KEY'); 
            $response = $client->post('https://openrouter.ai/api/v1/chat/completions', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $apiKey,
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'model' => 'meta-llama/llama-4-maverick:free', 
                    'messages' => [
                        ['role' => 'system', 'content' => 'Bạn là một AI dịch ngôn ngữ.'],
                        ['role' => 'user', 'content' =>  $prompt],
                    ],
                    'max_tokens' => 500, 
                ],
            ]);

            $result = json_decode($response->getBody()->getContents(), true);
            // dd( $response);  
            $translatedText = trim($result['choices'][0]['message']['content'] ?? 'Không có kết quả.');

            return response()->json([
                'translated' => $translatedText,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Lỗi: ' . $e->getMessage(),
            ], 500);
        }
    }
}


