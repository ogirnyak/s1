import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList({ movies }) {
	return (
		<div className="movie-list">
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					title={movie.title}
					poster={movie.poster}
					rating={movie.rating}
					inFavorites={movie.inFavorites}
				/>
			))}
		</div>
	);
}

export default MovieList;
