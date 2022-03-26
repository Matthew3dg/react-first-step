import s from './Posts.module.css';
import React from 'react';
import Post from './Post/Post';
import SuccessBtn from '../../Buttons/SuccsessBtn/SuccessBtn';

function Posts(props) {
	let addPostRef = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onUpdatePostText = () => {
		props.updatePostText(addPostRef.current.value);
	};

	return (
		<div className={s.posts}>
			<div className={s.posts_header}>Новые записи</div>
			<input
				onChange={onUpdatePostText}
				value={props.newPostText}
				ref={addPostRef}
				placeholder="Что у вас новенького?"
				className={s.posts_input}
				type="text"
			/>
			{/* Передаём в пропсах функцию для добавления поста.
				То есть onClick здесь это наш атрибут, а не встроенный обработчик
			*/}
			<SuccessBtn onClick={onAddPost} text="Добавить запись" />
			{props.posts.map((post) => {
				return <Post key={post.id} message={post.message} />;
			})}
		</div>
	);
}

export default Posts;
