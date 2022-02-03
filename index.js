const { Builder, By, Key, until } = require("selenium-webdriver");
const { elementLocated } = require("selenium-webdriver/lib/until");

const driver = new Builder().forBrowser("chrome").build();
const TIMEOUT = 10000;
const sleepTime = 3000;
driver.manage().setTimeouts({ implicit: TIMEOUT });

async function openWebsite() {
  driver.get(
    "https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration"
  );
  // console.log("first method working");

  await driver
    .findElement(By.xpath('//div[@class="logo-containter"]/a/i'))
    .click();
}

async function simpleRegistration() {
  // console.log("second method working");
  await driver
    .findElement(By.xpath('//input[@id="email"]'))
    .sendKeys("example@gmail.com");
  await driver
    .findElement(By.xpath('//input[@id="password"]'))
    .sendKeys("12345");

  await driver.findElement(By.xpath('//button[@id="submit"]')).click();
}

async function radioButtonForm() {
  // console.log("third method working");
  // await driver.get(
  //   "https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration"
  // );

  await driver
    .findElement(By.xpath("//span[contains(text(),'Radio Button Form')]"))
    .click();

  await driver
    .findElement(By.xpath("//input[@id='title']"))
    .sendKeys("this is the titleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

  await driver
    .findElement(By.xpath("//input[@id='description']"))
    .sendKeys("this is a descriptionaaaaaaaaaaaaaaaaaaaaaaaaaaa");

  try {
    for (let i = 1; i < 4; i++) {
      // console.log("for start");
      try {
        driver
          .findElement(
            By.xpath(
              `//label[contains(text(),'Radios')]/following-sibling::div/div[${i}]/label/span[2]`
            )
          )
          .click();
        // console.log(i)
      } catch (err2) {
        console.log("err2", err2);
      }
    }
  } catch (err) {
    console.log("err", err);
  }
  driver.findElement(By.xpath('//button[contains(text(),"Register")]')).click();
}

async function checkBoxForm() {
  //  driver.get(
  //   "https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration"
  // );

  //  driver
  //   .findElement(By.xpath('//div[@class="logo-containter"]/a/i'))
  //   .click();

  await driver
    .findElement(
      By.xpath(
        "//ul[@class='menu-items']/li[1]/ul[contains(@class,'menu-item')]/li[3]"
      )
    )
    .click();

  await driver
    .findElement(By.xpath("//input[@id='name']"))
    .sendKeys("atif hyder");
  await driver
    .findElement(By.xpath("//input[@id='comment']"))
    .sendKeys("atif hyder");

  for (let i = 1; i < 4; i++) {
    try {
      await driver
        .findElement(
          By.xpath(
            `//label[contains(text(),'Reservation')]/following::div/div[${i}]/label/span[1]`
          )
        )
        .click();
    } catch (err) {}
  }
  for (let a = 1; a < 4; a++) {
    try {
      // console.log("second loop start");
      await driver
        .findElement(
          By.xpath(
            `//div[@formgroupname='wantToEatGroup']/nb-checkbox[${a}]/label/span[1]`
          )
        )
        .click();
    } catch (err) {
      // console.log("second loop catch");
    }
  }

  await driver
    .findElement(
      By.xpath(
        "//button[@id='submit' and contains(text(),'Send Reservation Request')]"
      )
    )
    .click();
}

async function dropDownMenuFrom() {
  await driver
    .findElement(
      By.xpath(
        "//ul[@class='menu-items']/li[1]/ul[contains(@class,'menu-item')]/li[4]"
      )
    )
    .click();

  let select1 = await driver.findElement(
    By.xpath("//nb-select[@formcontrolname='select1']/button")
  );

  select1.click();

  for (let b = 1; b < 5; b++) {
    try {
      await driver
        .findElement(
          By.xpath(
            `//nb-option[@value='${b}']`
            // `//div[@id='cdk-overlay-5']/following::div/div[@id='cdk-overlay-4']/nb-card/nb-card-body/nb-option[1]`
          )
        )
        .click();
    } catch (err) {}
  }
  select1.click();

  await driver
    .findElement(By.xpath("//select[@formcontrolname='select2']/option[1]"))
    .click();

  await driver
    .findElement(By.xpath("//nb-select[@formcontrolname='select3']"))
    .click();

  await driver
    .findElement(
      By.xpath(
        "//div[@class='cdk-overlay-connected-position-bounding-box']/div/nb-card/nb-card-body/nb-option[@value='3']"
      )
    )
    .click();

  await driver
    .findElement(By.xpath("//select[@formcontrolname='select4']/option[2]"))
    .click();

  await driver.findElement(By.xpath("//button[@id='submit']")).click();
}

async function datePickerForm() {
  await driver
    .findElement(
      By.xpath(
        "//ul[@class='menu-items']/li[1]/ul[contains(@class,'menu-item')]/li[5]"
      )
    )
    .click();

  await driver
    .findElement(By.xpath("//input[@formcontrolname='dateOne']"))
    .click();

  await driver
    .findElement(
      By.xpath("//nb-calendar-navigation/child::button[@tabindex='0']")
    )
    .click();

  await driver
    .findElement(
      By.xpath("//nb-calendar-picker/*[@class='ng-star-inserted'][1]/*[1]")
    )
    .click();
}

async function fileUploadForm() {
  await driver
    .findElement(
      By.xpath(
        "//ul[@class='menu-items']/li[1]/ul[contains(@class,'menu-item')]/li[6]"
      )
    )
    .click();

  await driver
    .findElement(By.xpath("//input[@formcontrolname='file']"))
    .sendKeys(__dirname + "\\Pakistani.jpg");

  await driver
    .findElement(By.xpath("//button[@id='submit' and @name='submit']"))
    .click();
}

async function iframeForm() {
  await driver
    .findElement(
      By.xpath(
        "//ul[@class='menu-items']/li[1]/ul[contains(@class,'menu-item')]/li[7]"
      )
    )
    .click();

  await driver.switchTo().frame(0);
  await driver.sleep(sleepTime);
  let name = await driver.wait(
    until.elementLocated(By.xpath("//input[@jsname='YPqjbf' and @required]"))
  );
  name.sendKeys("atif hyder");

  await driver.sleep(sleepTime);
  await driver
    .actions()
    .sendKeys(Key.chord(Key.TAB, Key.ARROW_DOWN, Key.ARROW_DOWN))
    .perform();
}
// await driver
//   .actions()
//   .sendKeys(
//     Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)
//   )
//   .perform();

async function allMethods() {
  await openWebsite();
  // await simpleRegistration();
  // await radioButtonForm();

  // await checkBoxForm();
  // await dropDownMenuFrom();

  // await datePickerForm();

  // await fileUploadForm();

  await iframeForm();
}

allMethods();
