import React from 'react';
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {
	let dialogsPage = props.store.getState().dialogsPage;
	let newMessageText = props.store.getState().dialogsPage.newMessageText;
	let addMessage = () => {
		if (newMessageText != '') {
			props.store.dispatch(addMessageActionCreator());
			// обнуляем поле ввода после добавления сообщения
			props.store.dispatch(updateNewMessageTextActionCreator(''));
		} else {
			alert('Вы оставили поле ввода пустым. Введите сообщение.');
		}
	};
	// отправляем и записываем данные в стейт при изменении в поле ввода
	let updateMessageText = (currentChar) => {
		props.store.dispatch(updateNewMessageTextActionCreator(currentChar));
	};

	return (
		<Dialogs
			addMessage={addMessage}
			updateMessageText={updateMessageText}
			state={dialogsPage}
		/>
	);
}

export default DialogsContainer;
