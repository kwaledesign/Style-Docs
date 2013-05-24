#Style-Docs

*Responsive Design Workflow*

[Dexy](http://dexy.it)

- [Responsive Design Workflow (slides)](https://speakerdeck.com/u/stephenhay/p/responsive-design-workflow-mobilism-2012) (presented at [Breaking Development 2012, Orlando](http://bdconf.com/2012/orlando), [Mobilism 2012, Amsterdam](http://mobilism.nl/2012) and [Webshaped 2012, Helsinki](http://webshaped.fi/))
- [Style Guides Are The New Photoshop (slides)](https://speakerdeck.com/u/stephenhay/p/style-guides-are-the-new-photoshop-fronteers-2012) (presented at [Smashing Conference 2012](http://www.smashingconf.com) and [Fronteers 2012](http://fronteers.nl/congres/2012))

## Moving parts

Dexy relies on Python, so you'll need that. You'll also need [Dexy](http://dexy.it). Screenshots are made using [CasperJS](http://casperjs.org/) and [PhantomJS](http://phantomjs.org/), so those will have to be installed as well. You can use Dexy's Markdown filter for Markdown conversion, but I use [Pandoc](http://johnmacfarlane.net/pandoc/) for this demo. It's almost as awesome as Dexy.

In addition, the syntax I use for marking blocks of CSS rely on Ana Nelson's [idiopidae-fork](https://bitbucket.org/ananelson/idiopidae-fork).

## Caveat(s)

Dexy is in dizzyingly active development. **This demo uses version 0.6.0**. If you use *any* other version, it will probably not work. There is a new version in development which changes the way configuration (read: the `.dexy` file in this demo) is done, as well as some other things.

You'll probably want to visit the Dexy website and read and try as much as you can of the material there, in order to better understand what Dexy is, what it does and how it does it.

## How to use it

The Dexy website has tutorials which explain pretty well what's going on in this demo. Read up on the `.dexy` file, where the inputs and filters are configured. Also take a look at my slides which quickly walk through the process. 

This is what happens:

1. There is a static web mockup we're working with (`mockup/`). In it, certain blocks of CSS are marked by way of special comments. You can read more about these comments at the Dexy website.
2. There is a `screenshots.js` file which runs when Dexy is run. This takes screenshots of (in this case) specific elements which you want to include in your style guide. These are automatically saved in an `output/` folder when Dexy is run.
3. There is a Markdown file, which is the style guide for this demo. This consists of text formatted using Markdown conventions, but uses Jinja template syntax for indicating where specific screenshots and/or pieces of CSS should be placed.
4. When run, Dexy looks at the `.dexy` file to determine the order it applies its “filters”. In this case, it creates an HTML document by taking `_header.html`, adding the converted content of the markdown file (including the content of the templates in that file) and ending the document with the contents of `_footer.html`. If you're familiar with static site generators like Jekyll, this process will seem similar to you.
5. The files are placed in a folder called `output/`.


##Inspiration

- Samantha Warren's [Style Tiles](http://styletil.es/) and [A-List-Apart Article](http://www.alistapart.com/articles/style-tiles-and-how-they-work/)
-Anna Debenham's [front-end Style
Guides](http://24ways.org/2011/front-end-style-guides/)
- Stephen Hay's [Smashing Conference](http://www.smashingconf.com) presentation [Style Guides Are The New Photoshop](https://speakerdeck.com/u/stephenhay/p/style-guides-are-the-new-photoshop-fronteers-2012)
- Dustin Curtis's [Open Brand](http://dcurt.is/the-open-brand)

