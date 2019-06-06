var sofiCommands = {
    navigateSite: function (array) {
        this
        array.forEach(test => {
            this
                .waitForElementPresent('@productsDropdown')
                .moveToElement('@productsDropdown', 10, 10, function () {
                    this
                        .useXpath()
                        .waitForElementVisible(`(//*[@data-ga="nav-link"])[${test.selector}]`)
                        .click(`(//*[@data-ga="nav-link"])[${test.selector}]`)
                })
                .verify.urlContains(test.url)
        })
    }
}

module.exports = {
    url: 'https://www.sofi.com/',
    commands: [sofiCommands],
    elements: {
        productsDropdown: {
            selector: 'a[href="/products/"]',
            locateStrategy: 'css'
        },
    }
}