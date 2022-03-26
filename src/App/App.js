import s from './App.module.css';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Profile from '../components/Profile/Profile';
import DialogsContainer from '../components/Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from '../components/News/News';
import Music from '../components/Music/Music';

function App(props) {
	return (
		<BrowserRouter>
			<div className={s.wrapper}>
				<Header />
				<div className={s.content}>
					<div className={s.sidebarProfile_row}>
						<Sidebar />
						<Routes>
							<Route
								path="/profile"
								element={<Profile store={props.store} />}
							/>
							{/* По умолчанию все пути долхны совпадать точно,
							 но добавляя * мы делаем возможным не точное совпадение */}
							<Route
								path="/dialogs/*"
								element={<DialogsContainer store={props.store} />}
							/>
							<Route path="/news" element={<News />} />
							<Route path="/music" element={<Music />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
