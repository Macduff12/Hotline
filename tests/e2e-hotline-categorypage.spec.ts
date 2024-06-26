import { test, expect } from '@playwright/test';
import { HotLinePage } from '../page-objects/Hotline/HotLinePage';
import { HotLineCategoryPage } from '../page-objects/Hotline/HotLineCategoryPage';

test.describe('Test Categories HotLine', () => {
    let homePage: HotLinePage;
    let hotLineCategoryPage: HotLineCategoryPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HotLinePage(page);
        hotLineCategoryPage = new HotLineCategoryPage(page);
        await homePage.visit();
    });
    test('HotLine categories Auto', async ({page}) => {
        await hotLineCategoryPage.hotlineClickCategoriesFirst.click()
        await hotLineCategoryPage.hotlineClickFirstAutoShini.click()
        await hotLineCategoryPage.hotlineClickCategoriesAutoFirstFirm.click() 
        await hotLineCategoryPage.hotlineClickCategoriesAutoSecondFirm.click()
        await hotLineCategoryPage.hotlineClickCategoriesAutoThirdFirm.click()
        await hotLineCategoryPage.hotlineClickCategoriesAutoFourthFirm.click()
        await hotLineCategoryPage.hotlineClickCategoriesAutoFifthFirm.click()
        // await hotLineCategoryPage.hotlineClickCategoriesAutoActions.click()
        await hotLineCategoryPage.hotlineClickCategoriesAutoPrice.click()
        await hotLineCategoryPage.hotlineClickCategoriesAutoPrice.fill('5000\n')
        await hotLineCategoryPage.hotlineClickCategoriesAutoPriceOk.click()
        // await hotLineCategoryPage.hotlineClickCategoriesAutoVidgyks.click()
      })
      // test('HotLine categories Technika', async({page}) => {
      //   await hotLineCategoryPage.hotlineClickCategoriesSecond.isVisible();
      //   await hotLineCategoryPage.hotlineClickCategoriesSecond.click();
      //   await hotLineCategoryPage.hotlineClickFirstTechnick.click();
      //   await hotLineCategoryPage.hotlineClickTechnickFirstFirm.click();
      //   await hotLineCategoryPage.hotlineClickTechnickSecondFirm.click();
      //   await hotLineCategoryPage.hotlineClickTechnickThirdFirm.click();
      //   await hotLineCategoryPage.hotlineClickTechnickFourthFirm.click();
      //   await hotLineCategoryPage.hotlineClickTechnickFifthFirm.click();
      //   await hotLineCategoryPage.hotlineClickTechnickClickVidgyks.click();
      //   await hotLineCategoryPage.hotlineClickTechnickClickPrice.click();
      //   await hotLineCategoryPage.hotlineClickTechnickClickPrice.fill('5000\n')
      //   await hotLineCategoryPage.hotlineClickTechnickClickPriceOk.click();
      //   await hotLineCategoryPage.hotlineClickTechnickClickActions.click();
      // })
      test('HotLine categories all for House', async ({page}) => {
        await hotLineCategoryPage.hotlineClickCategoriesThird.click();
        await hotLineCategoryPage.hotlineClickFirstForHouse.click();
        await hotLineCategoryPage.hotlineClickForHouseFirstFirm.click();
        await hotLineCategoryPage.hotlineClickForHouseSecondFirm.click();
        await hotLineCategoryPage.hotlineClickForHouseThirdFirm.click();
        await hotLineCategoryPage.hotlineClickForHouseFourthFirm.click();
        await hotLineCategoryPage.hotlineClickForHouseFifthFirm.click();
        await hotLineCategoryPage.hotlineClickForHouseActions.click();
        await hotLineCategoryPage.hotlineClickForHouseClickPrice.click();
        await hotLineCategoryPage.hotlineClickForHouseClickPrice.fill('5000\n');
        await hotLineCategoryPage.hotlineClickForHouseClickPriceOk.click();
        await hotLineCategoryPage.hotlineClickForHouseVidgyks.click();
      })

      test('HotLine categories for adult', async({page}) => {
        await hotLineCategoryPage.hotlineClickCategoriesFourth.click();
        await hotLineCategoryPage.hotlineClickFirstForAdult.click();
        await hotLineCategoryPage.hotlineClickForAdultFirstFirm.click();
        await hotLineCategoryPage.hotlineClickForAdultSecondFirm.click();
        await hotLineCategoryPage.hotlineClickForAdultThirdFirm.click();
        await hotLineCategoryPage.hotlineClickForAdultFourthFirm.click();
        // await hotLineCategoryPage.hotlineClickForAdultFifthFirm.click()
        // await hotLineCategoryPage.hotlineClickForAdultActions.click();
        await hotLineCategoryPage.hotlineClickForAdultClickPrice.click();
        await hotLineCategoryPage.hotlineClickForAdultClickPrice.fill('10000\n');
        await hotLineCategoryPage.hotlineClickForAdultVidgyks.click();
      })
    test.afterEach(async ({ page }) => {
        await page.close();
    });
})
