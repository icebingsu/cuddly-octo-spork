<?php
namespace App\Http\Controllers;

use App\Models\HistorysModel;
use Illuminate\Http\Request;

class HistorysController extends Controller
{
    public function index(Request $request)
    {
        $ip_address = $request->input('IP_indress');
    
        if (!$ip_address) {
            return response()->json([
                'message' => 'ip_address không được cung cấp'
            ], 400);
        }
    
        $history = \App\Models\HistorysModel::where('status', 'success')
        ->where('ip_address', $ip_address)
        ->orderBy('updated_at', 'desc') 
        ->paginate(10);
    
    
        if ($history->isEmpty()) {
            return response()->json([
                'message' => 'Bạn không có lịch sử dịch thuật!'
            ], 404);
        }
    
        return response()->json([
            'message' => 'Lấy dữ liệu lịch sử thành công',
            'data' => $history->items(),
            'pagination' => [
                'current_page' => $history->currentPage(),
                'last_page' => $history->lastPage(),
                'per_page' => $history->perPage(),
                'total' => $history->total(),
            ]
        ]);
    }
    
    
    

    public function store(Request $request)
    {
        if (!$request->has('ip_address') || !$request->has('original_text') || !$request->has('translated_text') || !$request->has('source_language_id') || !$request->has('target_language_id')) {
            return response()->json([
                'message' => 'Thiếu thông tin cần thiết để lưu lịch sử.',
            ], 400); 
        }
    
        $history = \App\Models\HistorysModel::create([
            'ip_address' => $request->ip_address,
            'original_text' => $request->original_text,
            'translated_text' => $request->translated_text,
            'source_language_id' => $request->source_language_id,
            'target_language_id' => $request->target_language_id,
            'status' => $request->status ?? 'fail', 
        ]);
    
        return response()->json([
            'message' => 'Lưu lịch sử dịch thành công',
            'data' => $history
        ], 201); 
    }


    public function deleteByIdWithIP(Request $request)
    {
        $id = $request->input('id');
        $ip_address = $request->input('IP_indress');

        if (!$id || !$ip_address) {
            return response()->json([
                'message' => 'Thiếu id hoặc IP_indress để xóa.'
            ], 400);
        }

        $history = HistorysModel::where('id', $id)
            ->where('ip_address', $ip_address)
            ->first();

        if (!$history) {
            return response()->json([
                'message' => 'Không tìm thấy lịch sử phù hợp với id và IP đã cung cấp.'
            ], 404);
        }

        $history->delete();

        return response()->json([
            'message' => 'Xóa lịch sử thành công',
            'deleted_id' => $id
        ]);
    }
}
