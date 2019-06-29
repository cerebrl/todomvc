/// <reference path="./definitions/tsd.d.ts" />

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { configureStore } from './store/redux-store';
import routes from './initiators/client-routes';

declare var window: any;

document.addEventListener("DOMContentLoaded", function () {

	let serverState =  window.__REACT_ENGINE__;
	let store = configureStore({
		todos: serverState.todos,
		filter: serverState.filter
	});

	store.subscribe(function () { console.log(store.getState()) });

	routes(store);

	render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
	);
})
