const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
// Задаём начальное состояние для использования при первом инициирующем вызове
let initialState = {
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
			message: 'Привет! Ты позанимался сегодня реактом? Когда будешь свободен?',
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
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 1,
				name: 'Матвей М.',
				message: state.newMessageText,
				avatar:
					'https://cdn.humoraf.ru/wp-content/uploads/2019/03/prikolnyj-ded-foto-humoraf-72.jpg',
			};
			state.messages.push(newMessage);
			return state;

		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newMessageText;
			return state;
		default:
			return state;
	}
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (newMessageText) => {
	return { type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText };
};

export default dialogsReducer;
