const FFF_PATH = 'https://flandres.fff.fr/recherche-clubs/?scl=10428';
const FFF_RANKING_PATH = 'https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking';
const SAVE_PATH = './dist/';

module.exports = {
    PAGES: [
        {
            name: 'RESULTATS',
            url: `${FFF_PATH}&tab=resultats`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/resultats/resultats.component.html`,
            balise: '<div id="results" class="result-option">'
        },
        {
            name: 'AGENDA',
            url: `${FFF_PATH}&tab=resultats&subtab=agenda`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/aganda/agenda.component.html`,
            balise: '<div id="agenda" class="result-option">'
        },
        {
            name: 'CLASSEMENT SENIORS 1',
            url: `${FFF_RANKING_PATH}&competition=343457&stage=1&group=5&label=SENIORS%20D3`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/seniors_1.html`,
            balise: '<div class="result-option">'
        },
        {
            name: 'CLASSEMENT SENIORS 2',
            url: `${FFF_RANKING_PATH}&competition=344095&stage=1&group=7&label=SENIORS%20D5`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/seniors_2.html`,
            balise: '<div class="result-option">'
        },
        {
            name: 'CLASSEMENT U11 1',
            url: `${FFF_RANKING_PATH}&competition=343743&stage=1&group=13&label=U11%20NIVEAU%201%20FOOT%20EDUCATIF`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u11_1.html`,
            balise: '<div class="result-option">'
        },
        {
            name: 'CLASSEMENT U11 2',
            url: `${FFF_RANKING_PATH}&competition=343745&stage=1&group=4&label=U11%20NIVEAU%203%20FOOT%20EDUCATIF`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u11_2.html`,
            balise: '<div class="result-option">'
        },
        {
            name: 'CLASSEMENT U13',
            url: `${FFF_RANKING_PATH}&competition=343737&stage=1&group=7&label=U13%20NIVEAU%202%20FOOT%20EDUCATIF`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u13.html`,
            balise: '<div class="result-option">'
        },
        {
            name: 'CLASSEMENT U15',
            url: `${FFF_RANKING_PATH}&competition=344506&stage=1&group=10&label=U%2015%20D2`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u15.html`,
            balise: '<div class="result-option">'
        },
        {
            name: 'CLASSEMENT U17',
            url: `${FFF_RANKING_PATH}&competition=344460&stage=1&group=4&label=U%2017%20D2`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u17.html`,
            balise: '<div class="result-option">'
        },
        {
            name: 'CLASSEMENT FEMININES',
            url: `${FFF_RANKING_PATH}&competition=344394&stage=1&group=2&label=FEMININES%20A%2011%20D1`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/feminines.html`,
            balise: '<div class="result-option">'
        },
        {
            name: 'CLASSEMENT VETERANS 11',
            url: `${FFF_RANKING_PATH}&competition=344602&stage=1&group=2&label=VETERANS%20A%2011%20NIV%202`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/veterans_11.html`,
            balise: '<div class="result-option">'
        },
        {
            name: 'CLASSEMENT VETERANS 7',
            url: `${FFF_RANKING_PATH}&competition=344604&stage=1&group=5&label=VETERANS%20A%207%20NIV%202`,
            selector: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/veterans_7.html`,
            balise: '<div class="result-option">'
        },
    ]
}
