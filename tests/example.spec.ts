import { test, expect } from '@playwright/test'

import { loadHomepage, assertTitle } from '../helpers'

// test('Simple basic test', async ({ page }) => {
//   await page.goto('https://www.example.com')
//    const pageTitle = await page.locator('h1')
//    await expect(pageTitle).toContainText('Example Domain')
//  })
//  test.only('Check on Element My Work', async ({ page }) => {
//   await page.goto('http://montera-rp.unaux.com/')
//   const pageTitle = await page.locator('h1')
//   await expect(pageTitle).toContainText('Mantera Role Play')

//   const checkButton = await page.locator('button')
// await expect(checkButton).toContainText('Как начать играть')

 //    const checkButtonDownloadRadmirLauncher = await page.locator('h2')
//    await expect(checkButtonDownloadRadmirLauncher).toContainText('Скачайте')
// })
// test('Check on Element KyivZifroviy', async ({ page }) => {
//   await page.goto('https://guide.kyivcity.gov.ua/special-projects');

//   const pageTitle = await page.locator('h1');
//   await expect(pageTitle).toContainText('Спецпроєкти');

//   const checkText = await page.locator('a');
//   await expect(checkText).toContainText('Детальніше');
// });
// test.only('Check on Element Wikipedia Shevchenko', async ({ page }) => {
//   await page.goto('https://uk.wikipedia.org/wiki/%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_%D0%A2%D0%B0%D1%80%D0%B0%D1%81_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87');

//   const pageTitle = await page.locator('h1');
//   await expect(pageTitle).toContainText('Шевченко Тарас Григорович');
//   await page.click('text=«Кобзар»');
//   await page.click('text=української літератури')
//   // await page.click('text=української літературної мови')

//   // const pageTitle2 = await page.locator('text');
//   // await expect(pageTitle2).toHaveText('Перші роки в Петербурзі. Викуп з кріпацтва (1831—1838)')
//   await page.click('text=Життєпис')
//   await page.click('text=Ранні роки')
//   await page.click('text=Перші роки в Петербурзі. Викуп з кріпацтва (1831—1838)')
//   await page.click('text=Перші роки в Петербурзі. Викуп з кріпацтва (1831—1838)')
//   await page.click('text=Другий приїзд в Україну. Археографічна комісія (1845—1847)')
//   await page.click('text=Перший арешт. Кара солдатчиною (1847)')

// });



// test('Clickin on Elements', async ({ page }) => {
//   await page.goto('http://zero.webappsecurity.com/index.html')
//   await page.click('#signin_button')
//   await page.click('text=Sign in')

//    const errorMessage = await page.locator('.alert-error')
//    await expect(errorMessage).toContainText('Login and/or password are wrong.')
//  })

//  test.skip('Selectors', async ({ page }) => {
//   await page.click('text=some text')

// //   // Css Selectors
// await page.click('button')
// await page.click('#id')
// await page.click('.class')

// // //   // Only visible Css Selector
// // await page.click('.submit-button:visible')

// // //   // Combinations
// // await page.click('#username .first')

// // //   // XPath
// // await page.click('//button')
// })

// test.describe('My first test suite', () => {
//   test('Working with Inputs @myTag', async ({ page }) => {
//     await page.goto('http://zero.webappsecurity.com/index.html')
//     await page.click('#signin_button')

//     await page.type('#user_login', 'some username')
//     await page.type('#user_password', 'some password')
//     await page.click('text=Sign in')

//     const errorMessage = await page.locator('.alert-error')
//     await expect(errorMessage).toContainText('Login and/or password are wrong.')
//   })

  // test.only('Assertions @myTag', async ({ page }) => {
  //   await page.goto('https://guide.kyivcity.gov.ua/special-projects');
  //   await page.waitForLoadState('networkidle');
    
  //   const element2 = await page.locator('//a[text()="Туризм"]')
  //   await expect(element2).toContainText('Туризм')
  //   await expect(element2).toHaveCount(1);

  //   const element = await page.locator('h1')
  //   await expect(element).toBeVisible()
  //   await expect(element).toHaveText('Спецпроєкти')
  //   await expect(element).toHaveCount(1)

  // })
// })

// test.describe('Hooks', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://example.com/')
//   })

//   test('Screenshots', async ({ page }) => {
//     // 1. step is load website
//     // await page.goto('https://example.com/')
//     // 2. take screenshot of full page
//     await page.screenshot({ path: 'screenshot.png', fullPage: true })
//   })

//   test('Single element Screenshot', async ({ page }) => {
//     // await page.goto('https://example.com/')
//     const element = await page.$('h1')
//     await element.screenshot({ path: 'single_element_screenshot.png' })
//   })
// })

// test.only('Custom Helpers', async ({ page }) => {
//   await loadHomepage(page)
//   // await page.pause()
//   await assertTitle(page)
// })
