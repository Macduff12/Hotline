import { test, expect } from '@playwright/test';
import { HotLinePage } from '../page-objects/Hotline/HotLinePage';
import { HotLineEnergoPage } from '../page-objects/Hotline/HotLineEnergoPage';

test.describe('HotLine Home Page Check Information', () => {
    let homePage: HotLinePage;
    let hotLineEnergoPage: HotLineEnergoPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HotLinePage(page);
        hotLineEnergoPage = new HotLineEnergoPage(page);
        await homePage.visit();
    });

    test('HotLine check Categories and some information', async ({ page }) => {
        await expect(homePage.hotlinePageCategories).toBeVisible();
        await expect(homePage.hotlinePageText).toBeVisible();
        await expect(homePage.hotlinePageCheckKatalog).toBeVisible();

        await homePage.hotlinePageMilitarySection.isVisible();
        await homePage.hotlinePageEnergySection.click();
        await page.goBack();
        await homePage.hotlinePageMilitarySection.click();
        await page.goBack();
        await homePage.hotlinePageCheckCategory4.isVisible();
        await homePage.hotlinePageCheckCategory4.click();
        await page.goBack();
        await homePage.hotlinePageCheckCategory5.isVisible();
        await homePage.hotlinePageCheckCategory5.click();
        await page.goBack();
        await homePage.hotlinePageCheckCategory6.isVisible();
        await homePage.hotlinePageCheckCategory6.click();
        await page.goBack();
        await homePage.hotlinePageCheckCategory7.isVisible();
        await homePage.hotlinePageCheckCategory7.click();
        await page.goBack();
        await homePage.hotlinePageCheckCategory8.isVisible();
        await homePage.hotlinePageCheckCategory8.click();
        await page.goBack();
        await homePage.hotlinePageCheckCategory9.isVisible();
        await homePage.hotlinePageCheckCategory9.click();
        await page.goBack();
        await homePage.hotlinePageCheckCategory10.isVisible();
        await homePage.hotlinePageCheckCategory10.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory11.isVisible();
        await homePage.hotlinePageCheckCategory11.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory12.isVisible();
        await homePage.hotlinePageCheckCategory12.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory13.isVisible();
        await homePage.hotlinePageCheckCategory13.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory14.isVisible();
        await homePage.hotlinePageCheckCategory14.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory15.isVisible();
        await homePage.hotlinePageCheckCategory15.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory16.isVisible();
        await homePage.hotlinePageCheckCategory16.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory17.isVisible();
        await homePage.hotlinePageCheckCategory17.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory18.isVisible();
        await homePage.hotlinePageCheckCategory18.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory19.isVisible();
        await homePage.hotlinePageCheckCategory19.click();
        await page.goBack()
        await homePage.hotlinePageCheckCategory20.isVisible();
        await homePage.hotlinePageCheckCategory20.click();
        await page.goBack()
    });
    // test('Hotline Check HomePage Things', async ({ page }) => {

    //     await homePage.hotlinePageRuClickSpisok.isVisible();
    //     await homePage.hotlinePageRuClickSpisok.click();
    //     await homePage.hotlinePageRuClickSpisokClose.isVisible();
    //     await homePage.hotlinePageRuClickSpisokClose.click();

    //     await homePage.hotlinePageRuClickLoved.isVisible();
    //     await homePage.hotlinePageRuClickLoved.click();

        
    //     await homePage.hotlinePageSelectLanguage.isVisible();
    //     await homePage.hotlinePageSelectLanguage.click();
    //     await homePage.hotlinePageSelectRu.isVisible();
    //     await homePage.hotlinePageSelectRu.click();
     
    // })
    test('Test check Energo and click Generators', async ({page}) => {
        await hotLineEnergoPage.hotlinePageEnegroText.isVisible();
        await hotLineEnergoPage.hotlinePageCategoriaEnergo.isVisible();
        await hotLineEnergoPage.hotlinePageCategoriaEnergo.click();
        await hotLineEnergoPage.hotlinePageEnergoGenerators.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoGenerators.click();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsCheckText.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickSecondActions.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickSecondActions.click();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickSecondActions.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmFirst.isVisible(); 
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmFirst.click();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmFirst.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmSecond.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmSecond.click();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmSecond.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmThird.isVisible(); 
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmThird.click();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmThird.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmFourth.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmFourth.click();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmFourth.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmFifth.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmFifth.click();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickFirmFifth.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickInputPrice.click();
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickInputPrice.fill('40000\n');
        await hotLineEnergoPage.hotlinePageEnergoGeneratorsClickInputPriceOk.click();
        // await hotLineEnergoPage.hotlinePageEnergoGeneratorsCheckText.isVisible();
        // await page.goBack()
        // await page.goBack()
        // await hotLineEnergoPage.hotlinePageEnergoBatteryCheckText.isVisible();
        // await page.goBack()
        // await hotLineEnergoPage.hotlinePageEnergoSunnyBatteries.click();
        // await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesCheckText.isVisible();
    })

    test('Test check Enegro and click power banks', async ({page}) => {
        await hotLineEnergoPage.hotlinePageEnegroText.isVisible();
        await hotLineEnergoPage.hotlinePageCategoriaEnergo.isVisible();
        await hotLineEnergoPage.hotlinePageCategoriaEnergo.click();
        await hotLineEnergoPage.hotlinePageEnergoStationPowerbank.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoStationPowerbank.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickActions.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickActions.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickActions.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoStationCheckText.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmFirst.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmFirst.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmFirst.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmSecond.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmSecond.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmSecond.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmThird.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmThird.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmThird.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmFourth.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmFourth.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmFourth.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmFifth.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmFifth.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickFirmFifth.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickInputPrice.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickInputPrice.fill('15000\n')
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickInputPriceOk.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickVidgyk.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickVidgyk.click();
        await hotLineEnergoPage.hotlinePageEnergoPowerBankClickVidgyk.isChecked();
    })
    test('Test check Energo and click Battery', async({page}) => {
        await hotLineEnergoPage.hotlinePageEnegroText.isVisible();
        await hotLineEnergoPage.hotlinePageCategoriaEnergo.click();
        await hotLineEnergoPage.hotlinePageEnergoBattery.click();
        await hotLineEnergoPage.hotlinePageEnergoBatteryCheckText.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmFirst.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmFirst.click();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmFirst.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmSecond.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmSecond.click();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmSecond.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmThird.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmThird.click();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmThird.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmFourth.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmFourth.click();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmFourth.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmFifth.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmFifth.click();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickFirmFifth.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickActions.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickActions.click();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickActions.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickInputPrice.click()
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickInputPrice.fill("1000\n")
        await hotLineEnergoPage.hotlinePageEnergoBatteryClickVidgyk.click();
    })
    test('Test check Energo and click SunnyBattery', async({page}) => {
        await hotLineEnergoPage.hotlinePageEnegroText.isVisible();
        await hotLineEnergoPage.hotlinePageCategoriaEnergo.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteries.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesCheckText.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmFirst.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmFirst.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmFirst.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmSecond.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmSecond.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmSecond.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmThird.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmThird.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmThird.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmFourth.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmFourth.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmFourth.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmFifth.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmFifth.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickFirmFifth.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickActions.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickActions.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickActions.isChecked();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickInputPrice.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickInputPriceOk.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickVidgyk.isVisible();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickVidgyk.click();
        await hotLineEnergoPage.hotlinePageEnergoSunnyBatteriesClickVidgyk.isChecked();
    })
    test.afterEach(async ({ page }) => {
        await page.close();
    });
});