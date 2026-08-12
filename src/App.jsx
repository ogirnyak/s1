// import React from 'react';
import Title from './components/Title/Title';
import Paragraph from './components/Paragraph/Paragraph';
import Button from './components/Button/Button';
import './App.css';

function App() {
	return (
		<div className="app">
			<Title text="Поиск" />
			<Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
			<Button text="Искать" onClick={() => {}} />
		</div>
	);
}

export default App;
