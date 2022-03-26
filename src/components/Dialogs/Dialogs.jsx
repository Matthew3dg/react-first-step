import s from './Dialogs.module.css';
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import SuccessBtn from '../Buttons/SuccsessBtn/SuccessBtn';

function Dialogs(props) {
	let addMessageRef = React.createRef();

	let onAddMessage = () => {
		props.addMessage();
	};

	// отправляем и записываем данные в стейт при изменении в поле ввода
	let onUpdateMessageText = () => {
		props.updateMessageText(addMessageRef.current.value);
	};

	return (
		<div className={s.wrapper}>
			<div className={s.header}>Диалоги</div>
			<div className={s.dialogsRow}>
				<div className={s.dialogsList}>
					{/* Перебор всех собеседников(диалогов) */}
					{props.state.dialogs.map((dialog) => {
						return (
							<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
						);
					})}
				</div>
				<div className={s.messages}>
					{/* Перебор всех сообщений */}
					{props.state.messages.map((message) => {
						return (
							<DialogMessage
								key={message.id}
								avatar={message.avatar}
								name={message.name}
								message={message.message}
								id={message.id}
							/>
						);
					})}
					{/* Добавление новых сообщений */}
					<input
						ref={addMessageRef}
						// при вводе каждого символа вызываем функцию отправки в стейт
						onChange={onUpdateMessageText}
						// записываем в поле ввода значения из стейта
						value={props.state.newMessageText}
						placeholder="Введите сообщение"
						className={s.messages_input}
						type="text"
					/>
					<SuccessBtn onClick={onAddMessage} text="Отправить" />
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
