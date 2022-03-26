import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
// Объединяем все редьюсеры в один объект и передаём в функцию combineReducers
// Указываем за какую страницу отвечает какой редьюсер
// redux формирует обычный для нас state с этими полями(profilePage,dialogsPage)
let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
});

// Создаём store(объект) спомощью метода redux`a
// В данном store есть встроенный метод dispatch
let store = createStore(reducers);

export default store;
