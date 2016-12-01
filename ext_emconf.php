<?php
$EM_CONF[$_EXTKEY] = array(
    'title' => 'Template',
    'description' => 'Site template package',
    'category' => 'templates',
    'version' => '1.0.0',
    'state' => 'stable',
    'clearCacheOnLoad' => true,
    'author' => 'Jesper Paardekooper',
    'author_email' => 'j.paardekooper@develement.nl',
    'author_company' => 'DevElement',
    'constraints' => array(
        'depends' => array(
            'typo3' => '6.2.0-8.99.99'
        ),
        'conflicts' => array(),
        'suggests' => array(),
    ),
    'autoload' => array(
        'psr-4' => array(
            'KoninklijkeCollective\\KoningTemplate\\' => 'Classes'
        )
    ),
);
