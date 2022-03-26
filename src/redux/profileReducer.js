const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// Задаём начальное состояние для использования при первом инициирующем вызове
let initialState = {
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
};

// Используется параметр по умолчанию для первого запуска(инициирующего redux),
// а во всех остальных случаях будет приходить нужная часть стейта
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let postsArrLength = state.posts.length;
			let newPost = {
				id: postsArrLength + 1,
				message: state.newPostText,
			};
			state.posts.push(newPost);
			return state;

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newPostText;
			return state;

		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newPostText) => {
	return { type: UPDATE_NEW_POST_TEXT, newPostText: newPostText };
};

export default profileReducer;
