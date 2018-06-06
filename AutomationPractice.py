import unittest
import time

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class Percobaan(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.set_page_load_timeout(30)

    def test_buy_blouse(self):
        driver = self.driver

        #1. Visit http://automationpractice.com/index.php
        driver.get('http://automationpractice.com/index.php')
        self.assertIn('My Store', self.driver.title)

        #2. Test Search
        search_input = driver.find_element_by_css_selector('#search_query_top')
        search_input.send_keys('Blouse')
        search_submit = driver.find_element_by_css_selector('#search_block_top .btn.button-search')
        search_submit.click()

        #3 Search Results
        #product = self.assertTrue(driver.find_element_by_css_selector('.product_list .product_name'))
        #product_blouse = [a.product-name.title for product_name in product]
        #self.assertEqual('Blouse', product_blouse)

        #4 Add to cart
        add_to_cart_click = driver.find_element_by_css_selector('.product-container .button-container')
        hover = ActionChains(driver).move_to_element(add_to_cart_click)
        hover.perform()
        add_to_cart_click.click()

        driver.implicitly_wait(10)
        checkout = WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.XPATH, "//a[@class='btn btn-default button button-medium']")))
        self.assertIn('Proceed to checkout', driver.page_source)

        # Untuk step selanjutnya yaitu proceed to checkout, saya tidak mengetahui bagaimana caranya. sudah mencoba mencari di google dan bertanya teman
        # namun tetap tidak tahu solusinya. Code yang sudah saya buat tetap ada namun dicomment karena akan terjadi error jika tidak dicomment
        #checkout = driver.find_element_by_xpath("//a[@class='btn btn-default button button-medium']")
        #print(checkout)
        #checkout_click = checkout.find_elements_by_css_selector('btn').getattribute('href')
        #action = ActionChains(driver)
        #action.move_to_element(checkout_click).click().perform()

        #driver.find_element_by_xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span").click()

        #5 Order Summary
        #proceed_checkout_click = self.driver.find_element_by_css_selector('a.button.btn')
        #proceed_checkout_click.click()

        #6 Create Account
        #create_account_input = driver.find_element_by_css_selector('input#email_create')
        #create_account_input.send_keys('test123@test.com')
        #create_account_submit = driver.find_element_by_css_selector('button#SubmitCreate')
        #create_account_submit.click()

        #7 Sign In
        #sign_in_email_input = driver.find_element_by_css_selector('input#email')
        #sign_in_email_input.send_keys('test123@test.com')
        #sign_in_password_input = driver.find_element_by_css_selector('input#passwd')
        #sign_in_password_input.send_keys('12345678')
        #sign_in_submit = driver.find_element_by_css_selector('button#SubmitLogin')
        #sign_in_submit.click()

    def tearDown(self):
        time.sleep(5)
        self.driver.close()


if __name__ == '__main__':
    unittest.main()