# Style-Docs

A framework for the rapid development of responsive design deliverables and style guide driven development in the browser.

> “The way we publish on the web is mostly derived from what we know about putting ink on paper. The future of content is in smaller discrete objects that can be assembled into new containers.” - [Karen McGrane](https://twitter.com/karenmcgrane) 

Developing [future friendly](http://futurefriend.ly/), [mobile
first](http://www.lukew.com/ff/entry.asp?933) sites and applications requires
the adoption of more [modern workflows](https://speakerdeck.com/u/stephenhay/p/style-guides-are-the-new-photoshop-fronteers-2012) to accommodate for the [fluid
nature](http://alistapart.com/article/dao) of
[responsive design](http://www.abookapart.com/products/responsive-web-design)
and wide browser support for the [ever growing number of
devices](http://opensignal.com/reports/fragmentation-2013/) through the use of
[progressive
enhancement](http://jakearchibald.com/2013/progressive-enhancement-still-important/).
Style-Docs is a framework for [style guide driven
devlopment](https://speakerdeck.com/jina/style-guide-driven-ui-design-with-sass)
using [responsive design deliverables](http://daverupert.com/2013/04/responsive-deliverables/) highly influenced by [Stephen Hay's](https://twitter.com/stephenhay) excellent
[responsive design
workflow](http://www.amazon.com/Responsive-Design-Workflow-Stephen-Hay/dp/0321887867)

## About Style-Docs
Style-Docs trys to make as few assumptions as possible in regards to your front-end architecture. While it is setup up to integrate Sass, this too can be customized to incorporate another pre-processor or vanilla CSS. 


***
# Anatomy of an Idiomatic Design System

>"It’s time for us to shed the vestigial mindsets we’ve inherited from the advertising world— the closed communications and drama of the “big reveal” — and build new systems based on honesty, inclusion, and genuine communication. We can bring our clients into the process right away letting them see all the flaws and bumps along the way. Through this relationship they will become true partners — rather than confused, anxious bystanders — as we learn to better navigate this strange, evolving digital universe together." - [Matt Griffin](http://alistapart.com/article/client-relationships-and-the-multi-device-web)

## Responsive Deliverables
Out of the box, Style-Docs includes several documents commonly used throughout the design phase of a responsive build.  These of course won't fit every use case or project requirement, but they can easily be modified, removed, or supplemented in order to tailer fit to any specification. The project documents included by default are intended to steer the direction of a responsive build by providing finer grain detail at each stage of the process while building on the stage previous.

### Specification Document
Discovery is the most important step in the process. Uncover as much as possible about the project in order to accurately scope. Uncover as much as possible about restraints for accurate discovery brief. This is the guiding document for the entire project - reference it often and use it to justify decisions and hold stakeholders accountable. This helps to protect the integrity of the process from personal oppinions.

### Brand Guidelines
Brand Guidelines, inspired by Dustin Curtis's [Open Brand](http://dcurt.is/the-open-brand), are used to develop brand definitions that can be used properly and referenced consistently by team members of any level of design experience.

### CUTI Report
A "Cuti" report is a User Experience document that identifies a site's Content, Users (and user contexts), Tasks, and Interactions. User Experience methodologies can vary a great deal based on personal preference and project requirements, but they all boil down to a few fundamental definitions. The CUTI report summarizes these definitions in order to keep these findings front and center in order to allow for UX to steer the design and development process.

### Performance Budget
Besides the discovery brief, the performance budget is the most important
deliverable within the entire responsive process because it lays out the most
important project restraints. Also, the performance budget is very useful in
the way it forces stakeholders to focus on problems and restraints, rather than
specific solutions. This document should be referenced throughout the process
and referenced for every design decision. 

### Style Tile
[Style Tiles](www.styletil.es) are a design deliverable consisting of fonts, colors, and interface elements that communicate the essence of a visual brand for the web. They help form a common visual language between the designers and the stakeholders and provide a catalyst for discussions around the preferences and goals of the client. Style tiles establish a direct connection with actual interface elements without defining layout.

### Grid
One of the final steps in developing a design system is considering the layout for each of the major content types, components, and interactions for various user contexts. Stephan Hay refers to this stage of the process as "breakpoint graphs". Understanding how each of the components responds at different contexts helps to identify the major breakpoints and also the minor "tweak points". Both [Susy](http://susy.oddbird.net/) and [Singularity](https://github.com/Team-Sass/Singularity) have built in functions to display grid columns using css gradients. Whether you use one of these grid systems, or any other, or roll your own - displaying the layout mechanisms of your design visually helps not only for development and debugging but also serves as a valuable communication tool to describe how a design responds to various contexts to clients and stakeholders.

### Prototype
The prototype phase is the final stage prior to integration with the backend platform. These can remain relatively low-fidelity or plugin design elements from the previous stages. At this stage of the process layouts can be thoroughly tested. 

## Customize
Style-Docs can easily be customized to integrate any documentation requierments.  The primary template pages are written in markdown so adding an additional page is as easy as creating a new named markdown file and adding Jinja include statements to pull in anything you want. Any unneeded pages can simply be deleted. To update navigation to reflect your changes, open up <code>_template.html</code> and make any necessary edits - just remember to link to the generated <code>.html</code> files, not the </code>.md</code> files directly.

If you open up the <code>includes/</code> directory, you'll find both a <code>_header.html</code> and a <code>_footer.html</code>. These partials are used to build the header and footer for each page within your site. You may add any additional directories or files necessary to build out your Style-Docs however you want.

# Guidelines for designing in the browser

  1. Start with restraints and seek to understand the problem before considering solutions. Never impose solutions to old problems onto new problems. Focus thinking on defining problems outside of the context of any specific solution

  2. Sketching is faster than Photoshop. Sketching is thinking.

  3. If it's not in the browser, it isn't real.  Get into the browser as soon as possible, but continuously return to the sketch pad to quickly explore ideas before commiting to code.

  4. If it's not in Git, it doesn't exist. Version control everything using sem-ver

  5. Work fluidly between concept and detail to learn how one informs the other. Ensure that the granularity of your client's feedback matches the level of detail of the deliverable. (Lo-fi visuals get lo-fi feedback and vis versa).

  6. Remove as much friction as possible between prototype code and production code.  Develop a framework. Use a scaffolding process (Yeoman or Compass extension or Git and Bash scripts), Use a build pipeline and automate this process with Grunt.

  7. Archetecture is critical. Use Sass. Adhere to SMACSS. Write OOCSS. Use BEM naming convention. Document this methodology and your specific implementation within your coding standards so that you can test against this standard to ensure compliance.

  9. Style guide driven development. Automate this process with Dexy. Code review frequently throughout the entire process. 

  10. Test driven development. Test for syntax, test for coding standards, test for reference (browser test and style guide), test for regression. Automate as much of this as possible with tools like CSSCSS, PhantomJS, CasperJS, Ghoststory, Cucumber, Lint, CSSEST, Browser Stack, etc... (Use a 'frozen DOM' and your Style Guide to avoid false-positives due to content changes). Test on _real_ devices as soon as possible.

  11. Words have meaning. When eliciting feedback from client, always frame the question in the context of a previously approved deliverable, the user, or a specific use case. Never ask for feedback in a way that allows room for personal preference.

  12. Make design decisions holistically, not sequentially. Every 'micro-level' design decision should fit well within the 'macro-level'.

  13. Make design decisions conditionally with the understanding that things will change as assumptions are challenged as you continue toward a final solution. Continuously ask "what if?", "why is this wrong?" and constantly challenge solutions. Avoid prideful investment in solutions.

##Inspiration

  * Samantha Warren's [Style Tiles](http://styletil.es/) and [A-List-Apart Article](http://www.alistapart.com/articles/style-tiles-and-how-they-work/)
  * Stephen Hay's [Smashing Conference](http://www.smashingconf.com) presentation [Style Guides Are The New Photoshop](https://speakerdeck.com/u/stephenhay/p/style-guides-are-the-new-photoshop-fronteers-2012)
  * Dustin Curtis's [Open Brand](http://dcurt.is/the-open-brand)

<hr>

### License
© Kwale Design - Original source code dual licensed under [MIT license](http://www.opensource.org/licenses/mit-license.php) / [GPL2 license](http://www.gnu.org/licenses/gpl-2.0.html). Open-sourced projects used within this project retain their original licenses.

