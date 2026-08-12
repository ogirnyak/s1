import { useState } from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import Title from './components/Title/Title';
import Paragraph from './components/Paragraph/Paragraph';
import SearchInput from './components/SearchInput/SearchInput';
import Button from './components/Button/Button';
import MovieList from './components/MovieList/MovieList';

import './App.css';


const movies = [
	{ id: 1, title: 'Black Widow', poster: 'https://picsum.photos/seed/blackwidow/300/400', rating: 324, inFavorites: false },
	{ id: 2, title: 'Shang Chi', poster: 'https://picsum.photos/seed/shangchi/300/400', rating: 124, inFavorites: false },
	{ id: 3, title: 'Loki', poster: 'https://picsum.photos/seed/loki/300/400', rating: 235, inFavorites: false },
	{ id: 4, title: 'How I Met Your Mother', poster: 'https://picsum.photos/seed/himym/300/400', rating: 123, inFavorites: false },
	{ id: 5, title: 'Money Heist', poster: 'https://picsum.photos/seed/moneyheist/300/400', rating: 8125, inFavorites: true },
	{ id: 6, title: 'Friends', poster: 'https://picsum.photos/seed/friends/300/400', rating: 123, inFavorites: false },
	{ id: 7, title: 'The Big Bang Theory', poster: 'https://picsum.photos/seed/bigbang/300/400', rating: 12, inFavorites: false },
	{ id: 8, title: 'Two And a Half Men', poster: 'https://picsum.photos/seed/twoandahalf/300/400', rating: 456, inFavorites: false }
];

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
			<MovieList movies={movies} />
		</MainLayout>
	);
}

export default App;
