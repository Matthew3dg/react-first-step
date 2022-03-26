import s from './Header.module.css';
import React from 'react';
import logo from './vk.png';

function Header() {
	return (
		<div className={s.header}>
			<div className={s.headerContent}>
				<div className={s.logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={s.text}>Личный кабинет</div>
			</div>
		</div>
	);
}

export default Header;
