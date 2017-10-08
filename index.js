let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');

let config = require('./config');

config.PAGES.forEach(page => {
	getHtml(
		page.name,
		page.url,
		page.selector,
		page.dest,
		page.balise
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
function getHtml(name, url, selector, dest, balise) {
	request(url, (err, resp, html) => {
        if (!err){
			$ = cheerio.load(html);
			
			fs.writeFile(dest, balise+$(selector).html()+"</div>", (err) => {
				if(err) {
					return console.log(err);
				}

				console.log(`The file ${name} saved!`);
			}); 
		}
	});
}
