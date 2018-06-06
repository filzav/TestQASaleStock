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

const xpathregister = '//*[@id="SubmitCreate"]/span'
const cssregister = xPathToCss(xpathregister)

const xpathregisteraccount = '//*[@id="submitAccount"]/span'
const cssregisteraccount = xPathToCss(xpathregisteraccount)

const xpathgender = '//*[@id="id_gender1"]'
const cssgender = xPathToCss(xpathgender)

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

var selectdate = Selector('select').filter('[name="days"]')
var selectmonth = Selector('#months')
var monthoption = selectmonth.find('option')
var selectyear = Selector('select').filter('[name="years"]')
var selectstate = Selector('#id_state')
var stateoption = selectstate.find('option')

test('buy then register', async t => {
    await t
        .typeText('#search_query_top','blouse')
        .click('button[type=submit]')
        .click(cssblouse)
        .click(csssubmit)
        .click(cssproc)
        .click(csscheckout)
        .typeText('#email_create','test1234567890@test.com')
        .click(cssregister)
        .click(cssgender)
        .typeText('#customer_firstname','Percobaan')
        .typeText('#customer_lastname','Belakang')
        .typeText('#passwd','percobaanbelakang')
        .click('#days')
        .click(Selector('option').filter('[value="15"]'))
        .expect(selectdate.selectedIndex).eql(15)
        .click(selectmonth)
        .click(monthoption.withText('May'))
        .click('#years')
        .click(Selector('option').filter('[value="1985"]'))
        .expect(selectyear.selectedIndex).eql(34)
        .typeText('#address1','jalan')
        .typeText('#city','kota')
        .click(selectstate)
        .click(stateoption.withText('Florida'))
        .typeText('#postcode','12345')
        .typeText('#phone_mobile','080989999')
        .click(cssregisteraccount)
        .click(cssproceed)
        .click(cssagree)
        .click(csscontinue)
        .click(cssbankwire)
        .click(cssconfirm)
})

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