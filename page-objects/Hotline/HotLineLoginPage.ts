import { expect, Locator, Page } from '@playwright/test'

export class HotLineLoginPage{
    readonly page: Page;
    // REGISTRATION PAGE
    readonly hotlinePageClickLogin: Locator;
    readonly hotlinePageLoginClickRegistration: Locator;
    readonly hotlineLoginPageClickEmail: Locator;
    readonly hotlineLoginPageClickPassword: Locator;
    readonly hotlineLoginPageClickNickName: Locator;
    readonly hotlineLoginPageInputEmail: Locator;
    readonly hotlineLoginPageInputPassword: Locator;
    readonly hotlineLoginPageInputNickName: Locator;
    readonly hotlineLoginPageClickPhoneNumber: Locator;
    readonly hotlineLoginPageInputPhoneNumber: Locator;
    readonly hotlineLoginPageClickRegistrationButton: Locator;
    readonly hotLineLoginPageScreenshot: Locator;

    // LOGIN PAGE
    readonly hotlineLoginPageClickLoginEmail: Locator;
    readonly hotlineLoginPageInputLoginEmail: Locator;
    readonly hotlineLoginPageClickLoginPassword: Locator; 
    readonly hotlineLoginPageInputLoginPassword: Locator;
    readonly hotlineLoginPageClickLoginPhoneNumber: Locator;
    readonly hotlineLoginPageInputLoginPhoneNumber: Locator;
    readonly hotlineLoginPageClickLoginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // REGISTRATION PAGE
        this.hotlinePageClickLogin = page.locator('(//div[contains(@class, "user-button__image flex middle-xs center-xs") and @data-v-083fac60])[2]')
        this.hotlinePageLoginClickRegistration = page.locator('(//a[@data-v-36610dc4 and @data-v-36610dc4])[2]')
        this.hotlineLoginPageClickEmail = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-61653e49])[1]')
        this.hotlineLoginPageInputEmail = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-61653e49])[1]')
        this.hotlineLoginPageClickNickName = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-61653e49])[2]')
        this.hotlineLoginPageInputNickName = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-61653e49])[2]')
        this.hotlineLoginPageClickPassword = page.locator('(//input[contains(@class, "field") and @data-v-61653e49])[3]')
        this.hotlineLoginPageInputPassword = page.locator('(//input[contains(@class, "field") and @data-v-61653e49])[3]')
        this.hotlineLoginPageClickPhoneNumber = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-61653e49])[1]')
        this.hotlineLoginPageInputPhoneNumber = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-61653e49])[1]')
        this.hotlineLoginPageClickRegistrationButton = page.locator('(//button[contains(@class, "btn btn--graphite") and @data-v-61653e49])[1]')
        this.hotLineLoginPageScreenshot = page.locator('(//div[contains(@class, "template-page")])[1]')


        // LOGIN PAGE
        this.hotlineLoginPageClickLoginEmail = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-3e0f291e])[1]')
        this.hotlineLoginPageInputLoginEmail = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-3e0f291e])[1]')
        this.hotlineLoginPageClickLoginPassword = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-3e0f291e])[2]')
        this.hotlineLoginPageInputLoginPassword = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-3e0f291e])[2]')
        this.hotlineLoginPageClickLoginPhoneNumber = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-3e0f291e])[1]')
        this.hotlineLoginPageInputLoginPhoneNumber = page.locator('(//input[contains(@class, "field m_b-5") and @data-v-3e0f291e])[1]')
        this.hotlineLoginPageClickLoginButton = page.locator('(//button[contains(@class, "btn btn--graphite")])')
    }
    async visit() {
        await this.page.goto('https://hotline.ua/')
    }

}