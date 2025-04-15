<?php

return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['https://translate.nguyenkimhung.id.vn/' , 'http://translate.nguyenkimhung.id.vn/' , 'translate.nguyenkimhung.id.vn'],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
