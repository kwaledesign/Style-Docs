# Begin description.html import

{{ (d['components/descriptions.md|pandoc|htmlsections']['buttons']) }}

# Button Image:
<img src="imgs/button.png" alt="" />

# Button HTML:
{{ highlight(d['components/sections.html|htmlsections']['buttons'], "html") }}

# Sass Header:
{{ d['sass/style-docs/_components.scss|idio']['sass-header'] }}

# Button CSS:
{{ d['demo/style.css|idio']['buttons'] }}

# Buttons:
{{ (d['components/sections.html|htmlsections']['buttons']) }}

