import { expect, Locator, Page } from '@playwright/test'

export class HotLineCategoryPage{
    readonly page: Page
    readonly hotlinePageCategories: Locator
    // First category
    readonly hotlineClickCategoriesFirst: Locator
    readonly hotlineClickFirstAutoShini: Locator
    readonly hotlineClickCategoriesAutoFirstFirm: Locator
    readonly hotlineClickCategoriesAutoSecondFirm: Locator
    readonly hotlineClickCategoriesAutoThirdFirm: Locator 
    readonly hotlineClickCategoriesAutoFourthFirm: Locator
    readonly hotlineClickCategoriesAutoFifthFirm: Locator
    readonly hotlineClickCategoriesAutoActions: Locator
    readonly hotlineClickCategoriesAutoVidgyks: Locator
    readonly hotlineClickCategoriesAutoPrice: Locator
    readonly hotlineClickCategoriesAutoPriceOk: Locator
    // Second category
    readonly hotlineClickCategoriesSecond: Locator
    readonly hotlineClickFirstTechnick: Locator
    readonly hotlineClickTechnick: Locator
    readonly hotlineCheckTextTechnick: Locator
    readonly hotlineClickTechnickFirstFirm: Locator
    readonly hotlineClickTechnickSecondFirm: Locator
    readonly hotlineClickTechnickThirdFirm: Locator
    readonly hotlineClickTechnickFourthFirm: Locator
    readonly hotlineClickTechnickFifthFirm: Locator
    readonly hotlineClickTechnickClickVidgyks: Locator
    readonly hotlineClickTechnickClickActions: Locator
    readonly hotlineClickTechnickClickPrice: Locator
    readonly hotlineClickTechnickClickPriceOk: Locator

    // Third category
    readonly hotlineClickCategoriesThird: Locator
    readonly hotlineClickFirstForHouse: Locator
    readonly hotlineCheckTextForHouse: Locator
    readonly hotlineClickForHouseFirstFirm: Locator
    readonly hotlineClickForHouseSecondFirm: Locator
    readonly hotlineClickForHouseThirdFirm: Locator
    readonly hotlineClickForHouseFourthFirm: Locator
    readonly hotlineClickForHouseFifthFirm: Locator
    readonly hotlineClickForHouseActions: Locator
    readonly hotlineClickForHouseVidgyks: Locator
    readonly hotlineClickForHouseClickPrice: Locator
    readonly hotlineClickForHouseClickPriceOk: Locator

    // Fourth category
    readonly hotlineClickCategoriesFourth: Locator
    readonly hotlineClickFirstForAdult: Locator
    readonly hotlineCheckTextForAdult: Locator
    readonly hotlineClickForAdultFirstFirm: Locator
    readonly hotlineClickForAdultSecondFirm: Locator
    readonly hotlineClickForAdultThirdFirm: Locator
    readonly hotlineClickForAdultFourthFirm: Locator
    readonly hotlineClickForAdultFifthFirm: Locator
    readonly hotlineClickForAdultActions: Locator
    readonly hotlineClickForAdultVidgyks: Locator
    readonly hotlineClickForAdultClickPrice: Locator
    readonly hotlineClickForAdultClickPriceOk: Locator


    // Fifth category
    readonly hotlineClickCategoriesFifth: Locator


    constructor(page: Page){
        this.page = page
        // First category
        this.hotlineClickCategoriesFirst = page.locator('//a[contains(@class, "categories-section__link link--black")][4]')
        this.hotlineClickFirstAutoShini = page.locator('(//a[contains(@class, "section-navigation__link link--black") and @data-v-0692be58])[2]')
        this.hotlineClickCategoriesAutoFirstFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[1]')
        this.hotlineClickCategoriesAutoSecondFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[5]')
        this.hotlineClickCategoriesAutoThirdFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[9]')
        this.hotlineClickCategoriesAutoFourthFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[15]')
        this.hotlineClickCategoriesAutoFifthFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[20]')
        this.hotlineClickCategoriesAutoActions = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[1]')
        this.hotlineClickCategoriesAutoVidgyks = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[2]')
        this.hotlineClickCategoriesAutoPrice = page.locator('(//input[contains(@class, "filter-price__range-field field")])[2]')
        this.hotlineClickCategoriesAutoPriceOk = page.locator('(//button[contains(@class, "filter-price__range-btn btn btn--graphite")])[1]')

        //Second category
        this.hotlineClickCategoriesSecond = page.locator('//a[contains(@class, "categories-section__link link--black")][5]')
        this.hotlineClickFirstTechnick = page.locator('(//a[contains(@class, "section-navigation__link link--black") and @data-v-0692be58])[1]')
        this.hotlineClickTechnickFirstFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[1]')
        this.hotlineClickTechnickSecondFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[3]')
        this.hotlineClickTechnickThirdFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[5]')
        this.hotlineClickTechnickFourthFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[8]')
        this.hotlineClickTechnickFifthFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[14]')
        this.hotlineClickTechnickClickVidgyks = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[2]')
        this.hotlineClickTechnickClickActions = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[1]')
        this.hotlineClickTechnickClickPrice = page.locator('(//input[contains(@class, "filter-price__range-field field")])[2]')
        this.hotlineClickTechnickClickPriceOk = page.locator('(//button[contains(@class, "filter-price__range-btn btn btn--graphite")])[1]')

        //Third category
        this.hotlineClickCategoriesThird = page.locator('//a[contains(@class, "categories-section__link link--black")][6]')
        this.hotlineClickFirstForHouse = page.locator('(//a[contains(@class, "section-navigation__link link--black") and @data-v-0692be58])[1]')
        this.hotlineCheckTextForHouse = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[1]')
        this.hotlineClickForHouseFirstFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[1]')
        this.hotlineClickForHouseSecondFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[3]')
        this.hotlineClickForHouseThirdFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[5]')
        this.hotlineClickForHouseFourthFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[8]')
        this.hotlineClickForHouseFifthFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[14]')
        this.hotlineClickForHouseActions = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[1]')
        this.hotlineClickForHouseVidgyks = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[2]')
        this.hotlineClickForHouseClickPrice = page.locator('(//input[contains(@class, "filter-price__range-field field")])[2]')
        this.hotlineClickForHouseClickPriceOk = page.locator('(//button[contains(@class, "filter-price__range-btn btn btn--graphite")])[1]')

        //Fourth category
        this.hotlineClickCategoriesFourth = page.locator('//a[contains(@class, "categories-section__link link--black")][8]')
        this.hotlineClickFirstForAdult = page.locator('(//a[contains(@class, "section-navigation__link link--black") and @data-v-0692be58])[1]')
        this.hotlineClickForAdultFirstFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[1]')
        this.hotlineClickForAdultSecondFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[3]')
        this.hotlineClickForAdultThirdFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[5]')
        this.hotlineClickForAdultFourthFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[8]')
        this.hotlineClickForAdultFifthFirm = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[12]')
        this.hotlineClickForAdultActions = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[1]')
        this.hotlineClickForAdultVidgyks = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[2]')
        this.hotlineClickForAdultClickPrice = page.locator('(//input[contains(@class, "filter-price__range-field field")])[2]')
        this.hotlineClickForAdultClickPriceOk = page.locator('(//button[contains(@class, "filter-price__range-btn btn btn--graphite")])[1]')
    }
    async visit() {
        await this.page.goto('https://hotline.ua/')
    }
}