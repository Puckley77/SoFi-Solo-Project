var pageObjects = {}

var testAssets = require('../testAssests/sofiAssets')

module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.sofi()
        pageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Navigating SoFi Website': browser => {
        pageObjects
            .navigateSite(testAssets)
    }

}