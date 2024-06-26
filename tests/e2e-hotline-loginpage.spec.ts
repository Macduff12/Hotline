import { test, expect } from '@playwright/test';
import { HotLineLoginPage } from '../page-objects/Hotline/HotLineLoginPage';
import { HotLinePage } from '../page-objects/Hotline/HotLinePage';
import { setDriver } from 'mongoose';
test.describe('Test Login Page - hotline', () =>{
    let hotLineLoginPage: HotLineLoginPage;
    let hotLinePage: HotLinePage;

    test.beforeEach(async ({ page }) => {
        hotLinePage = new HotLinePage(page);
        hotLineLoginPage = new HotLineLoginPage(page);
        await hotLineLoginPage.visit();
    });

    test('Registration HotLine with email', async ({page}) => {
        await hotLineLoginPage.hotlinePageClickLogin.isVisible();
        await hotLineLoginPage.hotlinePageClickLogin.click();
        await hotLineLoginPage.hotlinePageLoginClickRegistration.isVisible();
        await hotLineLoginPage.hotlinePageLoginClickRegistration.click();
        await hotLineLoginPage.hotlineLoginPageClickEmail.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickEmail.click();
        await hotLineLoginPage.hotlineLoginPageInputEmail.fill('tommyislate1@gmail.com')
        await hotLineLoginPage.hotlineLoginPageClickNickName.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickNickName.click();
        await hotLineLoginPage.hotlineLoginPageInputNickName.fill('testdima123454234');
        await hotLineLoginPage.hotlineLoginPageClickPassword.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickPassword.click();
        await hotLineLoginPage.hotlineLoginPageInputPassword.fill('AutomationTester123321')
        await hotLineLoginPage.hotlineLoginPageClickRegistrationButton.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickRegistrationButton.click();
        await hotLineLoginPage.hotLineLoginPageScreenshot.screenshot({path: 'screenshots/screenshot1.png'})
    })
    test('Registration HotLine with phone number', async({page}) =>{
        await hotLineLoginPage.hotlinePageClickLogin.isVisible();
        await hotLineLoginPage.hotlinePageClickLogin.click();
        await hotLineLoginPage.hotlinePageLoginClickRegistration.isVisible();
        await hotLineLoginPage.hotlinePageLoginClickRegistration.click();
        await hotLineLoginPage.hotlineLoginPageClickPhoneNumber.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickPhoneNumber.click()
        await hotLineLoginPage.hotlineLoginPageInputPhoneNumber.fill('+380971422372');
        await hotLineLoginPage.hotlineLoginPageClickNickName.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickNickName.click();
        await hotLineLoginPage.hotlineLoginPageInputNickName.fill('testdima123453');
        await hotLineLoginPage.hotlineLoginPageClickPassword.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickPassword.click();
        await hotLineLoginPage.hotlineLoginPageInputPassword.fill('AutomationTester123321');
        await hotLineLoginPage.hotlineLoginPageClickRegistrationButton.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickRegistrationButton.click();
        await hotLineLoginPage.hotLineLoginPageScreenshot.screenshot({path: 'screenshots/screenshot.png'})
    })
    // test('Login HotLine with email ', async({page}) => {
    //     await hotLineLoginPage.hotlinePageClickLogin.isVisible();
    //     await hotLineLoginPage.hotlinePageClickLogin.click();
    //     await hotLineLoginPage.hotlineLoginPageClickLoginEmail.isVisible()
    //     await hotLineLoginPage.hotlineLoginPageClickLoginEmail.click();
    //     await hotLineLoginPage.hotlineLoginPageInputLoginEmail.fill('tommyislate1@gmail.com')
    //     await hotLineLoginPage.hotlineLoginPageClickLoginPassword.isVisible();
    //     await hotLineLoginPage.hotlineLoginPageClickLoginPassword.click();
    //     await hotLineLoginPage.hotlineLoginPageInputLoginPassword.fill('testerAutoma123312');
    //     await hotLineLoginPage.hotlineLoginPageClickLoginButton.isVisible();
    //     await hotLineLoginPage.hotlineLoginPageClickLoginButton.click();
    //     await hotLineLoginPage.hotLineLoginPageScreenshot.screenshot({path:'screenshots/screenshot2.png'})
    // })
    test('Login HotLine with phone number ', async({page}) => {
        await hotLineLoginPage.hotlinePageClickLogin.isVisible();
        await hotLineLoginPage.hotlinePageClickLogin.click();
        await hotLineLoginPage.hotlineLoginPageClickLoginPhoneNumber.isVisible()
        await hotLineLoginPage.hotlineLoginPageClickLoginPhoneNumber.click();
        await hotLineLoginPage.hotlineLoginPageInputLoginPhoneNumber.fill('380971422372')
        await hotLineLoginPage.hotlineLoginPageClickLoginPassword.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickLoginPassword.click();
        await hotLineLoginPage.hotlineLoginPageInputLoginPassword.fill('testerAutoma123312');
        await hotLineLoginPage.hotlineLoginPageClickLoginButton.isVisible();
        await hotLineLoginPage.hotlineLoginPageClickLoginButton.click();
        await hotLineLoginPage.hotLineLoginPageScreenshot.screenshot({path:'screenshots/screenshot3.png'})
    })
    
} )
