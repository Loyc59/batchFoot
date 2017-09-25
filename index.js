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
			//console.log($('div[class=result-option]').html()); 

			fs.writeFile("results.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of results was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=agenda', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("agenda.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of agenda was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=343457&stage=1&group=5&label=SENIORS%20D3', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_senior1.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of senoir 1 was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=344095&stage=1&group=7&label=SENIORS%20D5', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_senior2.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of senoir 2 was saved!");
			}); 
		}
});


request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=343743&stage=1&group=13&label=U11%20NIVEAU%201%20FOOT%20EDUCATIF', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_u11_1.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of U11 1 was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=343745&stage=1&group=4&label=U11%20NIVEAU%203%20FOOT%20EDUCATIF', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_u11_2.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of U11 2 was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=343737&stage=1&group=7&label=U13%20NIVEAU%202%20FOOT%20EDUCATIF', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_u13.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of U13 was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=344506&stage=1&group=10&label=U%2015%20D2', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_u15.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of U15 was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=344460&stage=1&group=4&label=U%2017%20D2', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_u17.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of U17 was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=344394&stage=1&group=2&label=FEMININES%20A%2011%20D1', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_fem.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of feminine was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=344604&stage=1&group=5&label=VETERANS%20A%207%20NIV%202', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_vet7.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of veteran 7 was saved!");
			}); 
		}
});

request('https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking&competition=344602&stage=1&group=2&label=VETERANS%20A%2011%20NIV%202', function(err, resp, html) {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile("class_vet11.html", $('div[class=result-option]').html(), function(err) {
				if(err) {
					return console.log(err);
				}

				console.log("The file of classement of veteran 11 was saved!");
			}); 
		}
});

console.log('toto');
