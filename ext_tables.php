<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/TypoScript/',
    'Koning: Template'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::appendToTypoConfVars(
    'BE',
    'defaultUserTSconfig',
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:koning_template/Configuration/TSConfig/User/default.t3s">'
);
