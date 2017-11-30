let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');

let config = require('./config');

config.PAGES.forEach(page => {
	getHtml(
		page.name,
		page.url,
		page.selector1,
		page.selector2,
		page.dest,
		page.balise1,
		page.balise2,
		page.type
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
function getHtml(name, url, selector1, selector2, dest, balise1, balise2, type) {
	request(url, (err, resp, html) => {
        if (!err){
			$ = cheerio.load(html);
			
			if (type == 1)
			{
				fs.writeFile(dest, balise1+$(selector1).html()+"</span></h3>"+balise2+$(selector2).html()+"</div></div>", (err) => {
					if(err) {
						return console.log(err);
					}
					console.log(`The file ${name} saved!`);
				});
			}
			else
			{
				fs.writeFile(dest, balise1+$(selector1).html()+"</div>", (err) => {
					if(err) {
						return console.log(err);
					}
					console.log(`The file ${name} saved!`);
				});
			} 
		}
	});
}
