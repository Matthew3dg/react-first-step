import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
	_state: {
		profilePage: {
			posts: [
				{
					id: 1,
					message:
						'Привет всем! Сегодня я начал верстать страницу для изучения React.js!',
				},
				{
					id: 2,
					message: 'И снова здравствуйте! А сегодня я разбираюсь с пропсами!',
				},
				{
					id: 3,
					message: 'Добрый вечер! Сейчас я выношу данные в отдельный массив!',
				},
			],
			newPostText: '',
		},
		dialogsPage: {
			dialogs: [
				{
					id: 1,
					name: 'Андрей Т.',
				},
				{
					id: 2,
					name: 'Влад М.',
				},
				{
					id: 3,
					name: 'Дима Ю.',
				},
				{
					id: 4,
					name: 'Алексей М.',
				},
				{
					id: 5,
					name: 'Коля Ф.',
				},
				{
					id: 6,
					name: 'Боря Г.',
				},
				{
					id: 7,
					name: 'Дима А.',
				},
			],
			messages: [
				{
					id: 2,
					name: 'Андрей Т.',
					message:
						'Привет! Ты позанимался сегодня реактом? Когда будешь свободен?',
					avatar:
						'https://s1.1zoom.ru/b5050/639/Dogs_Painting_Art_Ray_Wow_Glasses_Snout_515328_1600x1200.jpg',
				},
				{
					id: 1,
					name: 'Матвей М.',
					message:
						'Привет! Да, отлично позанимался, вынес сегодня данные в массивы и использовал метод .map для их перебора. Давайте в 8 встретимся на табачке?',
					avatar:
						'https://cdn.humoraf.ru/wp-content/uploads/2019/03/prikolnyj-ded-foto-humoraf-72.jpg',
				},
				{
					id: 2,
					name: 'Андрей Т.',
					message: 'Ну здорово, how are you today? Погнали сегодня гулять.',
					avatar:
						'https://s1.1zoom.ru/b5050/639/Dogs_Painting_Art_Ray_Wow_Glasses_Snout_515328_1600x1200.jpg',
				},
				{
					id: 1,
					name: 'Матвей М.',
					message:
						'Ага! Сегодня вынес данные в отдельный файл и прокинул их через свойства в нужные компоненты.',
					avatar:
						'https://cdn.humoraf.ru/wp-content/uploads/2019/03/prikolnyj-ded-foto-humoraf-72.jpg',
				},
				{
					id: 1,
					name: 'Матвей М.',
					message:
						'Погнали конечно! Надо Владу написать и спросить во сколько он освободится.',
					avatar:
						'https://cdn.humoraf.ru/wp-content/uploads/2019/03/prikolnyj-ded-foto-humoraf-72.jpg',
				},
			],
			newMessageText: '',
		},
	},
	_callSubscriber() {
		console.log('State changed...');
	},
	getState() {
		return this._state;
	},

	// Принимаем полбэк rerenderTree из index.js и присваиваем его местной функции.
	//паттерн observer
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		profileReducer(store.getState().profilePage, action);
		dialogsReducer(store.getState().dialogsPage, action);

		this._callSubscriber(this._state);
	},
};

export default store;
