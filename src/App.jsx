import { useState } from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import Title from './components/Title/Title';
import Paragraph from './components/Paragraph/Paragraph';
import SearchInput from './components/SearchInput/SearchInput';
import Button from './components/Button/Button';
import './App.css';

function App() {
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		console.log('Поиск:', query);
	};

	return (
		<MainLayout favoritesCount={2}>
			<Title text="Поиск" />
			<Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
			<div className="search-row">
				<SearchInput
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Введите название"
				/>
				<Button text="Искать" onClick={handleSearch} />
			</div>
		</MainLayout>
	);
}

export default App;
