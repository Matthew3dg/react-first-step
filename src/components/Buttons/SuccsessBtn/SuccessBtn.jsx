import s from './SuccessBtn.module.css';
import React from 'react';

function SuccessBtn(props) {
	return (
		<button onClick={props.onClick} className={s.success_btn}>
			{props.text}
		</button>
	);
}

export default SuccessBtn;
