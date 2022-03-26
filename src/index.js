import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import store from './redux/reduxStore';
import './index.css';
// dispatch={store.dispatch.bind(store)}

// store - это объект созданный redux`ом.
// Ниже в <App/> мы передаём пропс метод dispatch предоставляемый(встроенный) redux`ом.
let rerenderTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App store={store} />
		</React.StrictMode>,
		document.getElementById('root')
	);
};
rerenderTree(store.getState());

// здесь rerenderTree - это колбэк который отдаётся в файл стейта для вызова там при его изменении
// Оборачиваем в анонимную функцию, чтобы запросить state и передать его параметром в функцию rerenderTree
// Так как встроенный метод subscribe в redux не передаёт никаких параметров.
store.subscribe(() => {
	let state = store.getState();
	rerenderTree(state);
});
