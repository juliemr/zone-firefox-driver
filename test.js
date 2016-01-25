var webdriver = require('selenium-webdriver');

// get the page.
var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({'browserName': 'firefox'}).
    build();

driver.get('http://localhost:4567');

driver.sleep(1000);

driver.findElement(webdriver.By.css('#thetext')).getText().then(function(text) {
  console.log(text);
});

driver.quit();