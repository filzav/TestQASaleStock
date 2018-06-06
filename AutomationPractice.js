import { Selector } from 'testcafe'; // first import testcafe selectors
import xPathToCss from 'xpath-to-css'

fixture `Buy Then Login :`// declare the fixture
    .page `http://automationpractice.com/index.php`;

const xpathblouse = '//*[@id="center_column"]/ul/li/div/div[2]/h5/a'
const cssblouse = xPathToCss(xpathblouse)

const xpathsubmit = '//*[@id="add_to_cart"]/button'
const csssubmit = xPathToCss(xpathsubmit)

const xpathproc = '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span'
const cssproc = xPathToCss(xpathproc)

const xpathcheckout = '//*[@id="center_column"]/p[2]/a[1]/span'
const csscheckout = xPathToCss(xpathcheckout)

const xpathlogin = '//button[@id=\'SubmitLogin\']//span'
const csslogin = xPathToCss(xpathlogin)

const xpathproceed = '//*[@id="center_column"]/form/p/button/span'
const cssproceed = xPathToCss(xpathproceed)

const xpathagree = '//input[@id=\'cgv\']'
const cssagree = xPathToCss(xpathagree)

const xpathcontinue = '//*[@id="form"]/p/button/span'
const csscontinue = xPathToCss(xpathcontinue)

const xpathbankwire = '//a[@class=\'bankwire\']'
const cssbankwire = xPathToCss(xpathbankwire)

const xpathconfirm = '//*[@id="cart_navigation"]/button/span'
const cssconfirm = xPathToCss(xpathconfirm)

test('buy then login', async t =>{
    await t
        .typeText('#search_query_top','blouse')
        .click('button[type=submit]')
        .click(cssblouse)
        .click(csssubmit)
        .click(cssproc)
        .click(csscheckout)
        .typeText('#email','test1234567@test.com')
        .typeText('#passwd','siapasaya')
        .click(csslogin)
        .click(cssproceed)
        .click(cssagree)
        .click(csscontinue)
        .click(cssbankwire)
        .click(cssconfirm)
})