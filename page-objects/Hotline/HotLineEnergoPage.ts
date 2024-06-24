import { expect, Locator, Page } from '@playwright/test'
import { setDriver } from 'mongoose'

export class HotLineEnergoPage{
    readonly page: Page
    readonly hotlinePageEnegroText: Locator
    readonly hotlinePageCategoriaEnergo: Locator
    readonly hotlinePageEnergoStation: Locator
    readonly hotlinePageEnergoStationCheckText: Locator
    readonly hotlinePageEnergoStationClickFirstWithActions: Locator
    readonly hotlinePageEnergoStationClickFirstWithVidgyk: Locator
    // First test functional page generators
    readonly hotlinePageEnergoGenerators: Locator
    readonly hotlinePageEnergoGeneratorsCheckText: Locator
    readonly hotlinePageEnergoGeneratorsClickFirmFirst: Locator
    readonly hotlinePageEnergoGeneratorsClickFirmSecond: Locator
    readonly hotlinePageEnergoGeneratorsClickFirmThird: Locator
    readonly hotlinePageEnergoGeneratorsClickFirmFourth: Locator
    readonly hotlinePageEnergoGeneratorsClickFirmFifth: Locator
    readonly hotlinePageEnergoGeneratorsClickSecondActions: Locator
    readonly hotlinePageEnergoGeneratorsClickSecondVidgyk: Locator
    readonly hotlinePageEnergoGeneratorsClickInputPrice: Locator
    readonly hotlinePageEnergoGeneratorsClickInputPriceOk: Locator
    // Second test functional page powerbank 
    readonly hotlinePageEnergoStationPowerbank: Locator
    readonly hotlinePageEnergoStationPowerBankCheckText: Locator
    readonly hotlinePageEnergoPowerBank: Locator
    readonly hotlinePageEnergoPowerBankCheckText: Locator
    readonly hotlinePageEnergoPowerBankClickFirmFirst: Locator
    readonly hotlinePageEnergoPowerBankClickFirmSecond: Locator
    readonly hotlinePageEnergoPowerBankClickFirmThird: Locator
    readonly hotlinePageEnergoPowerBankClickFirmFourth: Locator
    readonly hotlinePageEnergoPowerBankClickFirmFifth: Locator
    readonly hotlinePageEnergoPowerBankClickActions: Locator
    readonly hotlinePageEnergoPowerBankClickVidgyk: Locator
    readonly hotlinePageEnergoPowerBankClickInputPrice: Locator
    readonly hotlinePageEnergoPowerBankClickInputPriceOk: Locator

    // Third test functional page EnergoBattery 
    readonly hotlinePageEnergoBattery: Locator
    readonly hotlinePageEnergoBatteryCheckText: Locator
    readonly hotlinePageEnergoBatteryClickFirmFirst: Locator
    readonly hotlinePageEnergoBatteryClickFirmSecond: Locator
    readonly hotlinePageEnergoBatteryClickFirmThird: Locator
    readonly hotlinePageEnergoBatteryClickFirmFourth: Locator
    readonly hotlinePageEnergoBatteryClickFirmFifth: Locator
    readonly hotlinePageEnergoBatteryClickInputPrice: Locator
    readonly hotlinePageEnergoBatteryClickInputPriceOk: Locator
    readonly hotlinePageEnergoBatteryClickVidgyk: Locator
    readonly hotlinePageEnergoBatteryClickActions: Locator

    // Fourth test functional page EnergoSunnyBatteries
    readonly hotlinePageEnergoSunnyBatteries: Locator
    readonly hotlinePageEnergoSunnyBatteriesCheckText: Locator
    readonly hotlinePageEnergoSunnyBatteriesClickFirmFirst: Locator
    readonly hotlinePageEnergoSunnyBatteriesClickFirmSecond: Locator
    readonly hotlinePageEnergoSunnyBatteriesClickFirmThird: Locator
    readonly hotlinePageEnergoSunnyBatteriesClickFirmFourth: Locator
    readonly hotlinePageEnergoSunnyBatteriesClickFirmFifth: Locator
    readonly hotlinePageEnergoSunnyBatteriesClickInputPrice: Locator
    readonly hotlinePageEnergoSunnyBatteriesClickInputPriceOk: Locator
    readonly hotlinePageEnergoSunnyBatteriesClickVidgyk: Locator
    readonly hotlinePageEnergoSunnyBatteriesClickActions: Locator

//span[text()="товарів"]
//a[contains(@class, "categories-section__link link--black")][11]
    constructor(page: Page) {
        this.page = page;
        this.hotlinePageEnegroText = page.locator('//a[contains(@class, "categories-section__link link--black")][2]')
        this.hotlinePageCategoriaEnergo = page.locator('//a[contains(@class, "categories-section__link link--black")][2]')
        this.hotlinePageEnergoStation = page.locator('//div[normalize-space(text())="Зарядні станції"]')
        this.hotlinePageEnergoStationCheckText = page.locator('//h1[contains(@class, "catalog-title__main")]')
        this.hotlinePageEnergoStationClickFirstWithActions = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[1]]')
        this.hotlinePageEnergoStationClickFirstWithVidgyk = page.locator('//label[contains(@class, "checkbox flex-inline middle-xs checkbox--reviews")]')
        // First test functional page generators
        this.hotlinePageEnergoGenerators = page.locator('//div[normalize-space(text())="Генератори"]')
        this.hotlinePageEnergoGeneratorsCheckText = page.locator('//h1[contains(@class, "catalog-title__main")]')
        this.hotlinePageEnergoGeneratorsClickSecondActions = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[1]')
        this.hotlinePageEnergoGeneratorsClickFirmFirst = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[1]')
        this.hotlinePageEnergoGeneratorsClickFirmSecond = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[7]')
        this.hotlinePageEnergoGeneratorsClickFirmThird = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[10]')
        this.hotlinePageEnergoGeneratorsClickFirmFourth = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[13]')
        this.hotlinePageEnergoGeneratorsClickFirmFifth = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[17]')
        this.hotlinePageEnergoGeneratorsClickInputPrice = page.locator('(//input[contains(@class, "filter-price__range-field field")])[2]')
        this.hotlinePageEnergoGeneratorsClickInputPriceOk = page.locator('(//button[contains(@class, "filter-price__range-btn btn btn--graphite")])[1]')
        this.hotlinePageEnergoGeneratorsClickSecondVidgyk = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[2]')

        // Second test functional page powerbank
        this.hotlinePageEnergoStationPowerbank = page.locator('//div[normalize-space(text())="Зовнішні акумулятори (Power Bank)"]')
        this.hotlinePageEnergoStationPowerBankCheckText = page.locator('//h1[contains(@class, "catalog-title__main")]')
        this.hotlinePageEnergoPowerBankClickFirmFirst = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[5]')
        this.hotlinePageEnergoPowerBankClickFirmSecond = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[6]')
        this.hotlinePageEnergoPowerBankClickFirmThird = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[12]')
        this.hotlinePageEnergoPowerBankClickFirmFourth = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[17]')
        this.hotlinePageEnergoPowerBankClickFirmFifth = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[19]')
        this.hotlinePageEnergoPowerBankClickActions = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[1]')
        this.hotlinePageEnergoPowerBankClickInputPrice = page.locator('(//input[contains(@class, "filter-price__range-field field")])[2]')
        this.hotlinePageEnergoPowerBankClickInputPriceOk = page.locator('(//button[contains(@class, "filter-price__range-btn btn btn--graphite")])[1]')
        this.hotlinePageEnergoPowerBankClickVidgyk = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[2]') 

        // Third test functional page EnergoBattery Акумулятори, батарейки
        this.hotlinePageEnergoBattery = page.locator('//div[normalize-space(text())="Акумулятори, батарейки"]')
        this.hotlinePageEnergoBatteryCheckText = page.locator('//h1[contains(@class, "catalog-title__main")]')
        this.hotlinePageEnergoBatteryClickFirmFirst = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[2]')
        this.hotlinePageEnergoBatteryClickFirmSecond = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[4]')
        this.hotlinePageEnergoBatteryClickFirmThird = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[5]')
        this.hotlinePageEnergoBatteryClickFirmFourth = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[6]')
        this.hotlinePageEnergoBatteryClickFirmFifth = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[8]')
        this.hotlinePageEnergoBatteryClickActions = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[1]')
        this.hotlinePageEnergoBatteryClickVidgyk = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[2]')
        this.hotlinePageEnergoBatteryClickInputPrice = page.locator('(//input[contains(@class, "filter-price__range-field field")])[2]')
        this.hotlinePageEnergoBatteryClickInputPriceOk = page.locator('(//button[contains(@class, "filter-price__range-btn btn btn--graphite")])[1]')

        //Fourth test functional 
        this.hotlinePageEnergoSunnyBatteries = page.locator('//div[normalize-space(text())="Акумулятори, батарейки"]')
        this.hotlinePageEnergoSunnyBatteriesCheckText = page.locator('//h1[contains(@class, "catalog-title__main")]')
        this.hotlinePageEnergoSunnyBatteriesClickFirmFirst = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[2]')
        this.hotlinePageEnergoSunnyBatteriesClickFirmSecond = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[4]')
        this.hotlinePageEnergoSunnyBatteriesClickFirmThird = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[5]')
        this.hotlinePageEnergoSunnyBatteriesClickFirmFourth = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[6]')
        this.hotlinePageEnergoSunnyBatteriesClickFirmFifth = page.locator('(//div[contains(@class, "checkbox__checkmark checkbox__checkmark-plus") and @data-v-ad7fd7ba])[8]')
        this.hotlinePageEnergoSunnyBatteriesClickActions = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[1]')
        this.hotlinePageEnergoSunnyBatteriesClickVidgyk = page.locator('(//div[contains(@class, "checkbox__checkmark") and @data-v-03d2902e])[2]')
        this.hotlinePageEnergoSunnyBatteriesClickInputPrice = page.locator('(//input[contains(@class, "filter-price__range-field field")])[2]')
        this.hotlinePageEnergoSunnyBatteriesClickInputPriceOk = page.locator('(//button[contains(@class, "filter-price__range-btn btn btn--graphite")])[1]')


        this.hotlinePageEnergoBattery = page.locator('(//a[contains(@class, "section-navigation__link link--black") and @data-v-0692be58])[8]')     
        this.hotlinePageEnergoBatteryCheckText = page.locator('//h1[contains(@class, "catalog-title__main")]')
        this.hotlinePageEnergoSunnyBatteries = page.locator('//div[normalize-space(text())="Сонячні панелі (батареї), електростанції"]')
        this.hotlinePageEnergoSunnyBatteriesCheckText = page.locator('//h1[contains(@class, "catalog-title__main")]')
    }
    async visit() {
        await this.page.goto('https://hotline.ua/')
    }
}