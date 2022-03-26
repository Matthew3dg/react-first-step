import s from './Sidebar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
	return (
		<div className={s.list}>
			<NavLink
				className={(clName) => (clName.isActive ? s.active : s.list_item)}
				to="/profile"
			>
				Моя страница
			</NavLink>
			<NavLink
				className={(clName) => (clName.isActive ? s.active : s.list_item)}
				to="/dialogs"
			>
				Диалоги
			</NavLink>
			<NavLink
				className={(clName) => (clName.isActive ? s.active : s.list_item)}
				to="/news"
			>
				Новости
			</NavLink>
			<NavLink
				className={(clName) => (clName.isActive ? s.active : s.list_item)}
				to="/music"
			>
				Музыка
			</NavLink>
		</div>
	);
}

export default Sidebar;
