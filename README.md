
# Style-Docs

<p class="lead">A framework for the rapid development of responsive design deliverables and style guide driven development in the browser.</p>

> “The way we publish on the web is mostly derived from what we know about putting ink on paper. The future of content is in smaller discrete objects that can be assembled into new containers.” - [Karen McGrane](https://twitter.com/karenmcgrane) 

Developing [future friendly](http://futurefriend.ly/), [mobile
first](http://www.lukew.com/ff/entry.asp?933) sites and applications requires
the adoption of more [modern workflows](https://speakerdeck.com/u/stephenhay/p/style-guides-are-the-new-photoshop-fronteers-2012) to accommodate for the [fluid
nature](http://alistapart.com/article/dao) of
[responsive design](http://www.abookapart.com/products/responsive-web-design).
Style-Docs is a framework for [style guide driven
devlopment](https://speakerdeck.com/jina/style-guide-driven-ui-design-with-sass)
using responsive design deliverables highly influenced by [Stephen Hay's](https://twitter.com/stephenhay) excellent
[responsive design
workflow](http://www.amazon.com/Responsive-Design-Workflow-Stephen-Hay/dp/0321887867)


## About Dexy
[Dexy](www.dexy.it) is an incredibly flexible documentation software built on Python that
uses numerous filter plugins to allow for the use of live code examples to be
output into any document you wish. Because everything is based on live code,
updating documentation requires only a single command.  

Using Dexy to build responsive design deliverables is incredibly efficient
because you can display code snippets, or the actual rendered output to
document HTML, CSS and Sass, and JavaScript. Because this documentation is
automatically updated, building and maintaining living, breathing style guides
and pattern libraries is simple.

## About Style-Docs
Style-Docs trys to make as few assumptions as possible in regards to your front-end architecture. While it is setup up to integrate Sass, this too can be customized to incorporate another pre-processor or vanilla CSS. [Bower](www.bower.io) integration makes managing dependencies simple. Integrating your own framework or project scaffolding only requires marking up your custom code with the appropriate comment syntax and then including the correct [Jinja](http://jinja.pocoo.org/) template syntax to output your code snippet or rendered code where ever you want it displayed.

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
utility can be found within their online documentation.

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

Zsh users switch back to your preferred shell

```
$ exec zsh
```

You can now make your first commit

```
$ git commit -m "init commit"
```

You are now setup and ready to begin development on your project. 

## Use
If you are brand new to [Dexy](www.dexy.it) I would highly recommend completing several of the [tutorials](http://www.dexy.it/guide/getting-started.html) and familiarizing your self with [Dexy's commands](http://www.dexy.it/guide/command-line-interface.html). Once you wrap your head around how Dexy's filter system works along with several of the other moving parts used in our specific use case, it becomes pretty strait forward.

Setup Dexy

```
$ Dexy setup
```

Run Dexy (optionally pass the -r flag which resets Dexy before running)

```
$ Dexy -r
```

Dexy will then run and if successful it will output your static site files into
the `output-site` directory. If there were errors, Dexy will print those to the
screen and also record them within the `log` directory.

Dexy also has a built in server that runs on Python and is configured to
symlink your generated site files into your root directory.

To start a server run the following from your root directory

```
$ Dexy serve
```
Copy and paste the output URL into a browser to view your site files.


***
# Anatomy of an Idiomatic Design System

>"It’s time for us to shed the vestigial mindsets we’ve inherited from the advertising world— the closed communications and drama of the “big reveal” — and build new systems based on honesty, inclusion, and genuine communication. We can bring our clients into the process right away letting them see all the flaws and bumps along the way. Through this relationship they will become true partners — rather than confused, anxious bystanders — as we learn to better navigate this strange, evolving digital universe together." - [Matt Griffin](http://alistapart.com/article/client-relationships-and-the-multi-device-web)

Out of the box, Style-Docs includes several documents commonly used throughout the design phase of a responsive build.  These of course won't fit every use case or project requirement, but they can easily be modified, removed, or supplemented in order to tailer fit to any specification. The project documents included by default are intended to steer the direction of a responsive build by providing finer grain detail at each stage of the process while building on the stage previous.

The granularity of your client’s feedback should match the level of detail of
the deliverable they’re looking at. So lo-fi visuals get lo-fi feedback and
sign-off.

### Brand Guidelines
Brand Guidelines, inspired by Dustin Curtis's [Open Brand](http://dcurt.is/the-open-brand), are used to develop brand definitions that can be used properly and referenced consistently by team members of any level of design experience.

### CUTI Report
A "Cuti" report is a User Experience document that identifies a site's Content, Users (and user contexts), Tasks, and Interactions. User Experience methodologies can vary a great deal based on personal preference and project requirements, but they all boil down to a few fundamental definitions. The CUTI report summarizes these definitions in order to keep these findings front and center in order to allow for UX to steer the design and development process.

### Performance Budget

### Style Tile
[Style Tiles](www.styletil.es) are a design deliverable consisting of fonts, colors, and interface elements that communicate the essence of a visual brand for the web. They help form a common visual language between the designers and the stakeholders and provide a catalyst for discussions around the preferences and goals of the client. Style tiles establish a direct connection with actual interface elements without defining layout.

### Style Guide
[Front-End Style Guides](http://24ways.org/2011/front-end-style-guides/) are the visual guidelines for designing discrete web components. [Style guide driven development](https://speakerdeck.com/jina/style-guide-driven-ui-design-with-sass) using [module design and UI patterns](https://speakerdeck.com/anotheruiguy/module-design-ui-dev-patterns) integrates this methodology into the process, rather than simply documentation of an end product. This has enormous benefits in regards to testing and refining components and interactions to be self-contained, discrete, modules that can be rearranged and reorganized to fit different contexts. Early in the style guide development stage, it is often appropriate to use 

[PhantomJS](http://phantomjs.org/) and [CasperJS](http://casperjs.org/) to automate screen shots of different contexts and state styles to present for client signoff. Stephen Hay refers to this as "presentation psychology" and it can greatly reduce development time by postponing much of the cross browser testing until after client signoff. At that point, images can be swapped out for live HTML and thorough browser and device testing can be completed. Similar to the Branding Guidelines document, the Style Guide clearly communicates interface and interaction standards to team members of any design/development knowledge.

### Pattern Library
The Pattern Library is very similar to the Style Guide, the only difference being its intended audiance is the development team.  This document is built directly on top of the Style Guide and includes template includes for the HTML, CSS, Sass, and JavaScript code that supplement the rendered HTML examples. This document is communicates not only how each component looks and behave but also the code necessary to consistently implement.

### Grid
One of the final steps in developing a design system is considering the layout for each of the major content types, components, and interactions for various user contexts. Stephan Hay refers to this stage of the process as "breakpoint graphs". Understanding how each of the components responds at different contexts helps to identify the major breakpoints and also the minor "tweak points". Both [Susy](http://susy.oddbird.net/) and [Singularity](https://github.com/Team-Sass/Singularity) have built in functions to display grid columns using css gradients. Whether you use one of these grid systems, or any other, or roll your own - displaying the layout mechanisms of your design visually helps not only for development and debugging but also serves as a valuable communication tool to describe how a design responds to various contexts to clients and stakeholders.

### Prototype
The prototype phase is the final stage prior to integration with the backend platform. These can remain relatively low-fidelity or plugin design elements from the previous stages. At this stage of the process layouts can be thoroughly tested. 


## Customize
Style-Docs can easily be customized to integrate any documentation requierments.  The primary template pages are written in markdown so adding an additional page is as easy as creating a new named markdown file and adding Jinja include statements to pull in anything you want. Any unneeded pages can simply be deleted. To update navigation to reflect your changes, open up `_template.html` and make any necessary edits - just remember to link to the generated `.html` files, not the `.md` files directly.

If you open up the `includes/` directory, you'll find both a `_header.html` and a `_footer.html`. These partials are used to build the header and footer for each page within your site. You may add any additional directories or files necessary to build out your Style-Docs however you want.


##Inspiration

  * Samantha Warren's [Style Tiles](http://styletil.es/) and [A-List-Apart Article](http://www.alistapart.com/articles/style-tiles-and-how-they-work/)
  * Stephen Hay's [Smashing Conference](http://www.smashingconf.com) presentation [Style Guides Are The New Photoshop](https://speakerdeck.com/u/stephenhay/p/style-guides-are-the-new-photoshop-fronteers-2012)
  * Dustin Curtis's [Open Brand](http://dcurt.is/the-open-brand)

<hr>
### License
© Kwale Design - Original source code dual licensed under [MIT license](http://www.opensource.org/licenses/mit-license.php) / [GPL2 license](http://www.gnu.org/licenses/gpl-2.0.html). Open-sourced projects used within this project retain their original licenses.

