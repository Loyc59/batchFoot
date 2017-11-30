const FFF_PATH = 'https://flandres.fff.fr/recherche-clubs/?scl=10428';
const FFF_RANKING_PATH = 'https://flandres.fff.fr/recherche-clubs/?scl=10428&tab=resultats&subtab=ranking';
const SAVE_PATH = './dist/';

module.exports = {
    PAGES: [
        {
            name: 'RESULTATS',
            url: `${FFF_PATH}&tab=resultats`,
            selector1: 'div[class=date_tour]',
            selector2: 'div[class=result-display]',
            dest: `${SAVE_PATH}/resultats/resultats.component.html`,
            balise1: '<div id="results" class="result-option"><div class="results-content"><h3 class="widgettitle"><span>RESULTATS : ',
            balise2: '<div class="result-display">',
            type: 1
        },
        {
            name: 'AGENDA',
            url: `${FFF_PATH}&tab=resultats&subtab=agenda`,
            selector1: 'div[class=date_tour]',
            selector2: 'div[class=result-display]',
            dest: `${SAVE_PATH}/agenda/agenda.component.html`,
            balise1: '<div id="agenda" class="result-option"><div class="results-content"><h3 class="widgettitle"><span>AGENDA : ',
            balise2: '<div class="result-display">',
            type: 1
        },
        {
            name: 'CLASSEMENT SENIORS 1',
            url: `${FFF_RANKING_PATH}&competition=343457&stage=1&group=5&label=SENIORS%20D3`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/senior1/senior1.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
        {
            name: 'CLASSEMENT SENIORS 2',
            url: `${FFF_RANKING_PATH}&competition=344095&stage=1&group=7&label=SENIORS%20D5`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/senior2/senior2.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
        {
            name: 'CLASSEMENT U11 1',
            url: `${FFF_RANKING_PATH}&competition=343743&stage=1&group=13&label=U11%20NIVEAU%201%20FOOT%20EDUCATIF`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u11-1/u11-1.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
        {
            name: 'CLASSEMENT U11 2',
            url: `${FFF_RANKING_PATH}&competition=343745&stage=1&group=4&label=U11%20NIVEAU%203%20FOOT%20EDUCATIF`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u11-2/u11-2.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
        {
            name: 'CLASSEMENT U13',
            url: `${FFF_RANKING_PATH}&competition=343737&stage=1&group=7&label=U13%20NIVEAU%202%20FOOT%20EDUCATIF`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u13/u13.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
        {
            name: 'CLASSEMENT U15',
            url: `${FFF_RANKING_PATH}&competition=344506&stage=1&group=10&label=U%2015%20D2`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u15/u15.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
        {
            name: 'CLASSEMENT U17',
            url: `${FFF_RANKING_PATH}&competition=344460&stage=1&group=4&label=U%2017%20D2`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/u17/u17.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
        {
            name: 'CLASSEMENT FEMININES',
            url: `${FFF_RANKING_PATH}&competition=344394&stage=1&group=2&label=FEMININES%20A%2011%20D1`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/fem/fem.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
        {
            name: 'CLASSEMENT VETERANS 11',
            url: `${FFF_RANKING_PATH}&competition=344602&stage=1&group=2&label=VETERANS%20A%2011%20NIV%202`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/vet11/vet11.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
        {
            name: 'CLASSEMENT VETERANS 7',
            url: `${FFF_RANKING_PATH}&competition=344604&stage=1&group=5&label=VETERANS%20A%207%20NIV%202`,
            selector1: 'div[class=result-option]',
            selector2: 'div[class=result-option]',
            dest: `${SAVE_PATH}/classements/vet7/vet7.component.html`,
            balise1: '<div class="result-option">',
            balise2: '<div class="result-option">',
            type: 2
        },
    ]
}
