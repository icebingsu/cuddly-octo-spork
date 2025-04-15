<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HistorysModel extends Model
{
    //
    protected $table = 'translations_history';
    
    protected $fillable = [
        'ip_address', 'original_text', 'translated_text', 'source_language_id', 'target_language_id', 'status'
    ];
}
