
<div class="annotation--slide">
  <h3>Performance Annotations</h3>
  <ol class="annotation">
    <li>Annotation one</li>
    <li>Annotation two</li>
    <li>Annotation three</li>
    <li>Annotation four</li>
  </ol>
</div>

<div class="main copy">

# Performance

<p class="lead">Performance is user experience.</p>

Amazon's web team found that [100ms delay correlated into a 1% decrease in sales](http://www.websiteoptimization.com/speed/tweak/psychology-web-performance/). This is what makes the [1000ms time to glass](http://alistapart.com/blog/post/breaking-the-1000ms-time-to-glass-mobile-barrier) goal so vitally important and the idea of [setting a performance budget](http://timkadlec.com/2013/01/setting-a-performance-budget/) early in the project in an effort to [treat performance as an essential design feature](http://bradfrostweb.com/blog/post/performance-as-design/) throughout. Beyond following [best practices](http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/) as a developer to avoid [bloated sites](http://browserdiet.com/), and implementing a solution for [responsive images](http://responsiveimages.org/), it is equally important to communicate the importance of performance and articulate the impact of every design decision has on the performance budget. Setting a performance budget early in the project life cycle is important because it is often the single most restrictive design restraint and, therefore, very hard to implement retroactively.  All graphic assets, design decisions, JavaScript interactions should be made while considering their implications on the performance budget.

>The important point is to look at every decisionright through the design/build processas something that has consequence. Having a pre-defined ‘budget’ is a cleartangible way to frame decisions about what can and can’t be be includedand at a suitably early stage in the project. It can also potentially provide some justification to the client about why certain things have been omitted (or ratherswapped out for something else). - [Clearleft, "Responsive Design on a Budget"](http://clearleft.com/thinks/responsivedesignonabudget/)

## Performance Budget

<p class="lead">Example: 500kb limit per page and an average 1500ms load time on mobile 3G network.</p>

### Feature Evaluation
When considering adding a design feature to a site that will exceed the net performance budget, proceed with one of the following:

  1. Optimize an existing feature or asset on the page.

  2. Remove an existing feature or asset from the page.

  3. Don’t add the new feature or asset.

***
### Branding Assets
These are usually non-negotiable because they are essential to the company's identity and often already established through other channels.  Branding assets can be served at different sizes to the appropriate context, but list only the weight of the largest size here. After major breakpoints are identified, this asset can be optimized to ensure the appropriate size is served to the appropriate user context.

### Web Fonts
Loading multiple external web fonts can have a tremendous impact on performance.  List the web fonts here in order of priority with their use and their fallbacks.

### Raster Images
List the images used in the design elements for each template (ie headers and background images). List the sizes of the largest assets here and optimize once major breakpoints are identified. List the images for each content type. Optimize sizes after major breakpoints are identified.

### JavaScript
From a non-technical perspective, list the features or interactions requiering JavaScript and the weight of each script. Always use [progressive enhancement](http://jakearchibald.com/2013/progressive-enhancement-still-important/) when building dynamic interactions and make appoint to explain what this means for legacy browsers in the context of overall performance gains.


<div id="performanceBudget"></div>

<canvas id="performanceChart" width="400" height="400"></canvas>

## Performance Evaluation of Current Site
For redesign projects, an accurate analysis of the site's current performance helps to identify potential bottlenecks and areas of improvement. 

  * [Google Pagespeed](https://developers.google.com/speed/pagespeed/)
  * [Web Page Test](http://www.webpagetest.org/)
  * [Pingdom Performance Tool](http://tools.pingdom.com/fpt/)
  * Google Chrome Dev Tools

</div>

