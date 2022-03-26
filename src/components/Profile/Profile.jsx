import s from './Profile.module.css';
import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
	return (
		<div className={s.wrapper}>
			<div className={s.cover}>
				<img
					src="https://image.winudf.com/v2/image/Y29tLmJsd3AubmF0dXJlX3NjcmVlbl82XzE1MzczNjQwMTRfMDA2/screen-6.jpg?fakeurl=1&type=.jpg"
					alt="cover"
				/>
			</div>
			<div className={s.content}>
				<ProfileInfo />
				<PostsContainer store={props.store} />
			</div>
		</div>
	);
}

export default Profile;
