import s from './ProfileInfo.module.css';
import React from 'react';
import avatar from './avatar.jpg';

function ProfileInfo() {
	return (
		<div className={s.block_info}>
			<div className={s.avatar}>
				<img src={avatar} alt="avatar" />
			</div>
			<div className={s.text}>
				<div className={s.name}>Матвей М.</div>
				<div className={s.info}>День рождения: 25 июня</div>
				<div className={s.info}>Город: Анапа</div>
				<div className={s.info}>Образование: ДГТУ, Прикладная информатика</div>
				<div className={s.info}>
					Веб сайт: https://matthew3dg.github.io/Matthew-Manko-web-site/
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;
