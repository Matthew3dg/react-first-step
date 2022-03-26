import React from 'react';
import Posts from './Posts';
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';

function PostsContainer(props) {
	let posts = props.store.getState().profilePage.posts;
	let newPostText = props.store.getState().profilePage.newPostText;

	let addPost = () => {
		if (newPostText != '') {
			props.store.dispatch(addPostActionCreator());
			// обнуляем поле ввода после добавления поста
			props.store.dispatch(updateNewPostTextActionCreator(''));
		} else {
			alert('Вы оставили поле ввода пустым. Введите текст поста.');
		}
	};

	let updatePostText = (currentChar) => {
		props.store.dispatch(updateNewPostTextActionCreator(currentChar));
	};

	return (
		<Posts
			addPost={addPost}
			updatePostText={updatePostText}
			newPostText={newPostText}
			posts={posts}
		/>
	);
}

export default PostsContainer;
