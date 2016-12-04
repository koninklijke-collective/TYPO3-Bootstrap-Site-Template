# koning_template
Template package for bootstrapping new websites. It includes:

- Configuring standard ``config`` and ``page`` objects
- Enabling sourceopt and realurl
- A default backend layout
- Default bootstrap styles that you can override with Sass
- A Gruntfile that compiles and compresses Sass/JavaScript

This setup is fully Google PageSpeed compliant.

# How to use
- Install the extension and rename it to your liking (optional)
- Include the static template (also include the ``fluid_styled_content`` static template)
- Update the baseUrl property in the Gruntfile.js
- Start adding building your template!

# How to build
Run ``grunt`` in the ``Build`` folder. Use ``grunt watch`` when you start adding JavaScript and Sass.
