import s from './DialogMessage.module.css';
import React from 'react';

function DialogMessage(props) {
	// для тогочтобы сообщения от меня были справа, а сообщения от собеседника слева
	// мой id = 1
	let messageRowAlign = props.id == 1 ? s.messageAlignEnd : s.messageRow;
	let userData = props.id == 1 ? s.userDataReverse : s.userData;
	return (
		<div className={messageRowAlign}>
			<div className={userData}>
				<div className={s.avatar}>
					<img src={props.avatar} alt="User`s avatar" />
				</div>
				<div className={s.userName}>{props.name}</div>
			</div>
			<div className={s.message}>{props.message}</div>
		</div>
	);
}

export default DialogMessage;
