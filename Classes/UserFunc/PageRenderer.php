<?php
namespace KoninklijkeCollective\KoningTemplate\UserFunc;

use \TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * User func: Page renderer
 *
 * @package KoninklijkeCollective\KoningTemplate\UserFunc
 */
class PageRenderer
{
    /**
     * This method prints the critical css (that is created by grunt-penthouse) inline in the <head> tag,
     * as recommended by Google PageSpeed
     *
     * @see https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery
     * @param array $conf
     * @return string
     */
    public function criticalCss($content, array $conf)
    {
        $file = GeneralUtility::getFileAbsFileName($conf['file']);

        if (file_exists($file)) {
            $css = GeneralUtility::getUrl($file);
            return '<style type="text/css">' . $css . '</style>';
        }
        return '';
    }
}
