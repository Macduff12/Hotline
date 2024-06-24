import { expect, Locator, Page } from '@playwright/test'

export class HotLinePage {
    readonly page: Page
    readonly hotlinePageText: Locator 
    readonly hotlinePageCategories: Locator
    readonly hotlinePageChangeLang: Locator
    readonly hotlinePageTextCategory: Locator
    readonly hotlinePageCheckKatalog: Locator
    readonly hotlinePageMilitarySection: Locator
    readonly hotlinePageEnergySection: Locator
    readonly hotlinePageFinanceSection: Locator   
    readonly hotlinePageCheckCategory4: Locator    
    readonly hotlinePageCheckCategory5: Locator   
    readonly hotlinePageCheckCategory6: Locator    
    readonly hotlinePageCheckCategory7: Locator    
    readonly hotlinePageCheckCategory8: Locator    
    readonly hotlinePageCheckCategory9: Locator    
    readonly hotlinePageCheckCategory10: Locator   
    readonly hotlinePageCheckCategory11: Locator    
    readonly hotlinePageCheckCategory12: Locator    
    readonly hotlinePageCheckCategory13: Locator    
    readonly hotlinePageCheckCategory14: Locator    
    readonly hotlinePageCheckCategory15: Locator  
    readonly hotlinePageCheckCategory16: Locator    
    readonly hotlinePageCheckCategory17: Locator    
    readonly hotlinePageCheckCategory18: Locator
    readonly hotlinePageCheckCategory19: Locator
    readonly hotlinePageCheckCategory20: Locator
//                      2
//                      2
//                      2
//                      2
    readonly hotlinePageSelectLanguage: Locator
    readonly hotlinePageSelectRu: Locator
    readonly hotlinePageSelectLanguageUa: Locator
    readonly hotlinePageSelectUa: Locator
    readonly hotlinePageRuClickSpisok: Locator
    readonly hotlinePageRuClickSpisokClose: Locator
    readonly hotlinePageRuClickLoved: Locator
    readonly hotlinePageRuCloseLoved: Locator


    constructor(page: Page) {        
        this.page = page;
        this.hotlinePageText = page.locator('.search-section__text')
        this.hotlinePageCategories = page.locator('.categories-section__inner')
        this.hotlinePageChangeLang = page.locator('[data-v-c649ec9a]')
        this.hotlinePageTextCategory = page.locator('.content-block__title')
        this.hotlinePageCheckKatalog = page.locator('//span[text()="товарів"]')
        this.hotlinePageEnergySection = page.locator('//button[contains(@class, "color-switcher flex middle-xs center-xs hidden-below-xl")]')
        this.hotlinePageMilitarySection = page.locator('//div[contains(@class, "lang-button flex middle-xs center-xs header__lang-icon")]')
        this.hotlinePageFinanceSection = page.locator('[data-eventlabel="HOTLINE.FINANCE"]') 
        this.hotlinePageCheckCategory4 = page.locator('[data-eventlabel="Авто і Мото"]') 
        this.hotlinePageCheckCategory5 = page.locator('[data-eventlabel="Побутова техніка"]') 
        this.hotlinePageCheckCategory6 = page.locator('[data-eventlabel="Все для дому"]')
        this.hotlinePageCheckCategory7 = page.locator('[data-eventlabel="Дача, сад"]')
        this.hotlinePageCheckCategory8 = page.locator('[data-eventlabel="Дитячі товари"]')
        this.hotlinePageCheckCategory9 = page.locator('[data-eventlabel="Зоотовари"]')
        this.hotlinePageCheckCategory10 = page.locator('[data-eventlabel="Інструменти"]')
        this.hotlinePageCheckCategory11 = page.locator('//a[contains(@class, "categories-section__link link--black")][11]')
        this.hotlinePageCheckCategory12 = page.locator('//a[contains(@class, "categories-section__link link--black")][12]')
        this.hotlinePageCheckCategory13 = page.locator('//a[contains(@class, "categories-section__link link--black")][13]')
        this.hotlinePageCheckCategory14 = page.locator('//a[contains(@class, "categories-section__link link--black")][14]')
        this.hotlinePageCheckCategory15 = page.locator('//a[contains(@class, "categories-section__link link--black")][15]')
        this.hotlinePageCheckCategory16 = page.locator('//a[contains(@class, "categories-section__link link--black")][16]')
        this.hotlinePageCheckCategory17 = page.locator('//a[contains(@class, "categories-section__link link--black")][17]')
        this.hotlinePageCheckCategory18 = page.locator('//a[contains(@class, "categories-section__link link--black")][18]')
        this.hotlinePageCheckCategory19 = page.locator('//a[contains(@class, "categories-section__link link--black")][19]')
        this.hotlinePageCheckCategory20 = page.locator('//a[contains(@class, "categories-section__link link--black")][20]')

//                      2
//                      2
//                      2
//                      2
        this.hotlinePageSelectLanguage = page.locator('//div[contains(@class, "lang-button flex middle-xs center-xs header__lang-icon")]')
        this.hotlinePageSelectRu = page.locator('//div[contains(@class, "lang-item")][2]')
        this.hotlinePageRuClickSpisok = page.locator('//div[contains(@class, "button__icon flex") and@]')
        this.hotlinePageRuClickSpisokClose = page.locator('//div[contains(@class, "popover-body__close-icon btn-close")]')
        this.hotlinePageRuClickLoved = page.locator('//div[contains(@class, "button")  and @data-v-d121e446 and @data-v-6991b12c]')
        this.hotlinePageRuCloseLoved = page.locator('//div[contains(@class, "popover-body__close-icon btn-close")]')
        this.hotlinePageSelectLanguageUa = page.locator('//div[contains(@class, "lang-button flex middle-xs center-xs header__lang-icon")]')
        this.hotlinePageSelectLanguageUa = page.locator('//div[contains(@class, "lang-item")][1]')

    }  
    async visit() {
        await this.page.goto('https://hotline.ua/')
    }
}



