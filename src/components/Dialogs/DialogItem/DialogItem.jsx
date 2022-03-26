import s from './DialogItem.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
	return (
		<NavLink
			className={(clName) => (clName.isActive ? s.active : s.dialog)}
			to={'/dialogs/' + props.id}
		>
			{props.name}
		</NavLink>
	);
}

export default DialogItem;
