require('./commandsInvoicing')


Cypress.Commands.add('mockGeolocation', (latitude = 30, longitude = -98) => {
	cy.window().then(($window) =>  {
		cy.stub($window.navigator.geolocation, 'getCurrentPosition', (callback) => {
	   		return callback({ coords: { latitude, longitude } });
		});
	});
});