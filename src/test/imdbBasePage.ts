import { WebDriver, Builder, Capabilities, until, By } from 'selenium-webdriver'

export class imdbBasePage {
  driver: WebDriver
  // IMDB PAGE SELECTORS

  // home page Menu button
  menu: By = By.css('.ipc-button__text')

  // home page Search Bar
  searchBar: By = By.xpath("//input[contains(@class, 'imdb-header-search__input _3gDVKsXm3b_VAMhhSw1haV react-autosuggest__input')]")

  // movie result slection button
  searchItemBtn: By = By.xpath(
    "//a[contains(@href, '/title/tt12252296?ref_=nv_sr_srsg_0')]"
  )

  // sign in page imdb sign in button
  imdbSignInBtn: By = By.xpath(
    "//span[contains(@class, 'auth-sprite imdb-logo retina')]"
  )

  // user display name
  displayName: By = By.xpath(
    "//span[contains(@class,'imdb-header__account-toggle--logged-in imdb-header__accountmenu-toggle navbar__user-name navbar__user-menu-toggle__name navbar__user-menu-toggle--desktop')]"
  )

  // homepage sign in button
  imdbHomePagesignInBtn: By = By.xpath(
    "//a[contains(@href, '/registration/signin?ref=nv_generic_lgin')]"
  )

  // movie title view
  movieTitleView: By = By.xpath(
    "//h1[contains(@data-testid, 'hero-title-block__title')]"
  )

  // email input field
  imdbEmailInputField: By = By.xpath("//input[contains(@type, 'email')]")

  // password input field
  imdbPasswordInputField: By = By.xpath("//input[contains(@type, 'password')]")

  // imdb in sign in page sign in button
  imdbSignInNextBtn: By = By.xpath("//input[contains(@id, 'signInSubmit')]")

  // 
  celebs: By = By.css('label[for="nav-link-categories-celebs"]');

  // 
  born: By = By.xpath("//a[contains(@href, '/feature/bornondate/?ref_=nv_cel_brn')]");

  // actor name display
  actor: By = By.xpath("//div[contains(@class, 'lister-item mode-detail')][1]//h3[contains(@class, 'lister-item-header')]//a[contains(@href, '/name/nm4793106')]");
  
  // right navigation button to toggle through videos 
  videoNavigationBtnRight: By = By.xpath(
    "//div[contains(@class, 'ipc-shoveler__arrow ipc-shoveler__arrow--visible ipc-shoveler__arrow--right ipc-pager ipc-pager--visible ipc-pager--right')]"
  );

  // left navigation button to toggle through videos
  videoNavigationBtnLeft: By = By.xpath(
    "//div[contains(@class, 'ipc-shoveler__arrow ipc-shoveler__arrow--visible ipc-shoveler__arrow--left ipc-pager ipc-pager--visible ipc-pager--left')]"
  )

  //Display of the video after toggling 
  videoDisplay: By = By.xpath(
    "//div[contains(@class, 'ipc-slate-card__title-text ipc-slate-card__title-text--clamp-1')]"
  ); 

  //title to be expected from the first video after toggling 
  videoTitle: By = By.xpath(
    "//h5[contains(@class, 'RelationInfostyles__RelationTitle-sc-1a6joiq-1 iMMyKJ')]"
  );

  //IMDb navigation button to toggle through videos to the right 
  videoNavibuttonRight: By = By.xpath(
    "//div[contains(@class, 'ipc-shoveler__arrow ipc-shoveler__arrow--visible ipc-shoveler__arrow--right ipc-pager ipc-pager--visible ipc-pager--right')]"
  );

  //IMDb navigation button to toggle through videos to the left 
  videoNavibuttonLeft: By = By.xpath(
    "//div[contains(@class, 'ipc-shoveler__arrow ipc-shoveler__arrow--visible ipc-shoveler__arrow--left ipc-pager ipc-pager--visible ipc-pager--left')]"
  )
 
  constructor(driver: WebDriver) {
    this.driver = driver
  }

  // IMDB UNIVERSAL METHODS

  // Navigates to an url 
  async navigate(url) {
    await this.driver.get(url)
    return await this.driver.manage().window().maximize()
  }

  // Closes the web browser
  async quit() {
   return await this.driver.quit()
  }

  // Clicks an element
  async click(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy))
    return await this.driver.findElement(elementBy).click()
  }

  // Gets an attribute of an element 
  async getAttribute(elementBy: By, attribute: string) {
    await this.driver.wait(until.elementLocated(elementBy))
    return (await this.driver.findElement(elementBy)).getAttribute(attribute)
  }

  // Enters text into an element input field
  async sendKeys(elementBy: By, keys: string) {
    await this.driver.wait(until.elementLocated(elementBy))
    return await this.driver.findElement(elementBy).sendKeys(keys)
  }

  // Gets the text of an element
  async getText(elementBy: any) {
    await this.driver.wait(until.elementIsVisible(await this.driver.wait(until.elementLocated(elementBy))))
    return (await this.driver.findElement(elementBy)).getText()
  }

  // IMDB SIGN IN PAGE METHODS

  // Inserts email into input field
  async insertEmail(email: string) {
    await this.driver.wait(
      until.elementIsVisible(
        await this.driver.findElement(this.imdbEmailInputField),
      ),
    )
    await this.driver.findElement(this.imdbEmailInputField).click()
    return await this.driver
      .findElement(this.imdbEmailInputField)
      .sendKeys(email)
  }

  // Inserts password into password input field
  async insertPassword(pass: string) {
    await this.driver.wait(
      until.elementIsVisible(
        await this.driver.findElement(this.imdbPasswordInputField),
      ),
    )
    await this.driver.findElement(this.imdbPasswordInputField).click()
    return await this.driver
      .findElement(this.imdbPasswordInputField)
      .sendKeys(pass)
  }

}

