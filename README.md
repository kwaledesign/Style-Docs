#Style-Docs

A framework for building responsive design deliverables and styleguides in the browser.

## About Dexy
[Dexy](www.dexy.it) is an incredibly flexible documentation software built on Python that
uses numerous filter plugins to allow for the use of live code examples to be
output into any document you wish. Because everything is based on live code,
updating documentation requires only a single command.  

Using Dexy to build responsive design deliverables is incredibly efficient
because you can display code snippets, or the actual rendered output to
document HTML, CSS and Sass, and JavaScript. Because this documentation is
automatically updated, building and maintaining living, breathing styleguides
and pattern libraries is simple.

## Moving parts
There is a staggering amount of use cases that Dexy can satisfy and, therefore,
quite a few moving parts.  

  * [Jinja](http://jinja.pocoo.org/) - The templating engine for Python which
    allows you to output you code any where you want using the appropriate
    filter.
  * [htmlsections](http://www.dexy.it/filters/Htmlsections.html) - Dexy's HTML
    filter that allows you to split markup according to HTML comments
  * [idio](http://www.dexy.it/filters/Idio.html) - Dexy filter to split
    document at comments that can be used with CSS, Sass, and JavaScript
  * [Pandoc](http://johnmacfarlane.net/pandoc/) - A very powerful markup 
    conversion utility that allows you to convert between markup language
    syntaxes.
  * [PhantomJS](http://phantomjs.org/) - a headless WebKit scriptable with
    a JavaScript API and [CasperJS](http://casperjs.org/) - a navigation
    scripting & testing utility written in JavaScript for PhantomJS. These two
    utilities allow for scriptable screen shots of components that can include
    both state (ie hover and active) and context (screen deminsion).

## Installation
Dexy relies on Python, so you'll need that. Installation instructions for each
utilty can be found within their online documentation.

To install Style-Docs, clone the repository and rename your root directory:

```
$ git clone https://github.com/kwaledesign/Style-Docs <YOUR-PROJECT-NAME>
```

Next, run the `style-docs-setup.sh` script to cleanup your install to automate the removal of unnecessary files, initialize Git, and then remove the setup-script when complete.

If you are a [Zsh](http://zsh.sourceforge.net/) user, you'll need to switch
over to `bash` to run the script.

```
$ exec bash
```

Then run the setup script

```
$ . style-docs-setup.sh
```

Zsh users switch back to your prefered shell

```
$ exec zsh
```

You can now make your first commit

```
$ git commit -m "init commit"
```

You are now setup and ready to begin development on your project. 

##Inspiration

  * Samantha Warren's [Style Tiles](http://styletil.es/) and [A-List-Apart Article](http://www.alistapart.com/articles/style-tiles-and-how-they-work/)
  * Stephen Hay's [Smashing Conference](http://www.smashingconf.com) presentation [Style Guides Are The New Photoshop](https://speakerdeck.com/u/stephenhay/p/style-guides-are-the-new-photoshop-fronteers-2012)
  * Dustin Curtis's [Open Brand](http://dcurt.is/the-open-brand)

<hr>
### License
© Kwale Design - Original source code dual licensed under [MIT license](http://www.opensource.org/licenses/mit-license.php) / [GPL2 license](http://www.gnu.org/licenses/gpl-2.0.html). Open-sourced projects used within this project retain their original licenses.

