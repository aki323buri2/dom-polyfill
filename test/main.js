import React from 'react';
import { render } from 'react-dom';
import mainSaga from './mainSaga';
import reducers from './reducers';
import App from './App';
import { createApp } from 'redux-saga-app';
global.debug = true;
Promise.resolve().then(e =>
{
	const app = createApp(App, reducers);
	render(app, document.body.appendChild(document.createElement('div')));
	app.run(mainSaga);
});