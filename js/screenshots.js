var casper = require('casper').create({
    viewportSize: {
        width: 800,
        height: 600
    }
});

casper.start('/Applications/MAMP/htdocs/Style-Docs/demo/demo.html', function() {
});

casper.then(function () {
    this.captureSelector('imgs/button.png', 'button');
});

casper.run();
