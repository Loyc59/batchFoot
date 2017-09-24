var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

/*request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=344394&stage=1&group=2&label=FEMININES%20A%2011%20D1', function(err, resp, html) {
        if (!err){
          $ = cheerio.load(html);
          console.log($('div[class=result-option]').html()); 
      }
});*/

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);
			//console.log($('div[class=results-content]').html()); 

			fs.writeFile("test.html", $('div[class=results-content]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file was saved!");
			}); 
		}
});

console.log('toto');