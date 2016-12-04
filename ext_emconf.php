<?php
$EM_CONF[$_EXTKEY] = [
    'title' => 'Base template',
    'description' => 'Base site template package',
    'category' => 'templates',
    'version' => '1.0.0',
    'state' => 'stable',
    'clearCacheOnLoad' => true,
    'author' => 'Jesper Paardekooper',
    'author_email' => 'j.paardekooper@develement.nl',
    'author_company' => 'DevElement',
    'constraints' => [
        'depends' => [
            'typo3' => '6.2.0-8.99.99',
            'realurl' => '',
            'sourceopt' => ''
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
    'autoload' => [
        'psr-4' => [
            'KoninklijkeCollective\\KoningTemplate\\' => 'Classes'
        ]
    ],
];
