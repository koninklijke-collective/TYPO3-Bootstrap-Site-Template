TYPO3 Bootstrap Site Extension: Basic installation for websites setup
=====================================================================

Template package for bootstrapping new websites. It includes:

- Configuring standard `config` and `page` objects
- Enabling `EXT:sourceopt` and `EXT:realurl`
- A default backend layout
- Default bootstrap styles that you can override with Sass
- A Gruntfile that compiles and compresses Sass/JavaScript

This setup is fully Google PageSpeed compliant.


Use as blueprint for templating your website
--------------------------------------------
Run `composer create-project -sdev koninklijke-collective/typo3-bootstrap-site-template public/typo3conf/ext/your_extension_template_name`

Installation
------------
- Include the static template (also include the ``fluid_styled_content`` static template)
- Update the baseUrl property in the Gruntfile.js
- Start adding building your template!

How to build
------------
Run ``grunt`` in the ``Build`` folder. Use ``grunt watch`` when you start adding JavaScript and Sass.
