describe ("testing GitHub start page for form fields", function(){
	beforeEach(function() {
		browser.get("https://github.com/");
	});
it ("form fields should capture the valid value", function() {
	element(by.id('user[login]')).sendKeys("ThisIsName100");
	var UserName = element(by.id('user[login]'))
	expect(UserName).toEqual("ThisIsName100");
	
	element(by.id('user[email]')).sendKeys("ThisIsMail100@gmail.com");
	var UserEmail = element(by.id('user[email]'));
	expect(UserEmail).toEqual("ThisIsMail100@gmail.com");
	
	 element(by.id('user[password]')).sendKeys("ThisIsThePassword100");
	
	element(by.css('button')).click();
	expect(element(by.css('#flash flash-error my-3')).isPresent()).toBe(false);
	});
	}); 