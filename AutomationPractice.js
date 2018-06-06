import { Selector } from 'testcafe'; // first import testcafe selectors
import xPathToCss from 'xpath-to-css'

fixture `Automation Practice :`// declare the fixture
    .page `http://automationpractice.com/index.php`;

const xpathBlouse = '//*[@id="center_column"]/ul/li/div/div[2]/h5/a'
const cssBlouse = xPathToCss(xpathBlouse)

const xpathSubmit = '//*[@id="add_to_cart"]/button'
const cssSubmit = xPathToCss(xpathSubmit)

const xpathProc = '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span'
const cssProc = xPathToCss(xpathProc)

const xpathCheckout = '//*[@id="center_column"]/p[2]/a[1]/span'
const cssCheckout = xPathToCss(xpathCheckout)

const xpathRegister = '//*[@id="SubmitCreate"]/span'
const cssRegister = xPathToCss(xpathRegister)

const xpathRegisterAccount = '//*[@id="submitAccount"]/span'
const cssRegisterAccount = xPathToCss(xpathRegisterAccount)

const xpathGender = '//*[@id="id_gender1"]'
const cssGender = xPathToCss(xpathGender)

const xpathLogin = '//button[@id=\'SubmitLogin\']//span'
const cssLogin = xPathToCss(xpathLogin)

const xpathProceed = '//*[@id="center_column"]/form/p/button/span'
const cssProceed = xPathToCss(xpathProceed)

const xpathAgree = '//input[@id=\'cgv\']'
const cssAgree = xPathToCss(xpathAgree)

const xpathContinue = '//*[@id="form"]/p/button/span'
const cssContinue = xPathToCss(xpathContinue)

const xpathBankWire = '//a[@class=\'bankwire\']'
const cssBankWire = xPathToCss(xpathBankWire)

const xpathConfirm = '//*[@id="cart_navigation"]/button/span'
const cssConfirm = xPathToCss(xpathConfirm)

var selectDate = Selector('select').filter('[name="days"]')
var selectMonth = Selector('#months')
var monthOption = selectMonth.find('option')
var selectYear = Selector('select').filter('[name="years"]')
var selectState = Selector('#id_state')
var stateOption = selectstate.find('option')

test('Search, Buy, then Register', async t => {
    await t
        .typeText('#search_query_top','blouse')
        .click('button[type=submit]')
        .click(cssBlouse)
        .click(cssSubmit)
        .click(cssProc)
        .click(cssCheckout)
        .typeText('#email_create','test1234567890@test.com')
        .click(cssRegister)
        .click(cssGender)
        .typeText('#customer_firstname','Percobaan')
        .typeText('#customer_lastname','Belakang')
        .typeText('#passwd','percobaanbelakang')
        .click('#days')
        .click(Selector('option').filter('[value="15"]'))
        .expect(selectDate.selectedIndex).eql(15)
        .click(selectMonth)
        .click(monthOption.withText('May'))
        .click('#years')
        .click(Selector('option').filter('[value="1985"]'))
        .expect(selectYear.selectedIndex).eql(34)
        .typeText('#address1','jalan')
        .typeText('#city','kota')
        .click(selectState)
        .click(stateOption.withText('Florida'))
        .typeText('#postcode','12345')
        .typeText('#phone_mobile','080989999')
        .click(cssRegisterAccount)
        .click(cssProceed)
        .click(cssAgree)
        .click(cssContinue)
        .click(cssBankWire)
        .click(cssConfirm)
})

test('Search, Buy, then Login', async t =>{
    await t
        .typeText('#search_query_top','blouse')
        .click('button[type=submit]')
        .click(cssBlouse)
        .click(cssSubmit)
        .click(cssProc)
        .click(cssCheckout)
        .typeText('#email','test1234567@test.com')
        .typeText('#passwd','siapasaya')
        .click(cssLogin)
        .click(cssProceed)
        .click(cssAgree)
        .click(cssContinue)
        .click(cssBankWire)
        .click(cssConfirm)
})