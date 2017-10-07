let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');

let config = require('./config');

config.PAGES.forEach(page => {
	getHtml(
		page.name,
		page.url,
		page.selector,
		page.dest
	);
});

/**
 * Get Html
 * 
 * @param {*} name 
 * @param {*} url 
 * @param {*} selector 
 * @param {*} dest 
 */
function getHtml(name, url, selector, dest) {
	request(url, (err, resp, html) => {
        if (!err){
			$ = cheerio.load(html);

			fs.writeFile(dest, $(selector).html(), (err) => {
				if(err) {
					return console.log(err);
				}

				console.log(`The file ${name} saved!`);
			}); 
		}
	});
}
