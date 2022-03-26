import s from './Post.module.css';
import React from 'react';
import avatar from './avatar.jpg';

function Post(props) {
	return (
		<div className={s.post}>
			<div className={s.avatar}>
				<img src={avatar} alt="avatar" />
			</div>
			<div className={s.post_text}>{props.message}</div>
		</div>
	);
}

export default Post;
