import './MovieCard.css';

function MovieCard({ title, poster, rating, inFavorites }) {
	return (
		<div className="movie-card">
			<div className="movie-poster-wrap">
				<img className="movie-poster" src={poster} alt={title} />
				<div className="movie-rating">
					<svg width="12" height="12" viewBox="0 0 12 12" fill="#f5b400">
						<path d="M6 0l1.8 3.7 4.2.6-3 3 0.7 4.2L6 9.6 2.3 11.5 3 7.3 0 4.3l4.2-.6L6 0z" />
					</svg>
					<span>{rating}</span>
				</div>
			</div>
			<div className="movie-info">
				<p className="movie-title">{title}</p>
				<div className={`movie-favorite ${inFavorites ? 'movie-favorite-active' : ''}`}>
					{inFavorites ? (
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path
								d="M3 1.5h8v11l-4-2.5-4 2.5v-11z"
								stroke="currentColor"
								strokeWidth="1.3"
								strokeLinejoin="round"
							/>
						</svg>
					) : (
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path
								d="M4 6V2.5a1.5 1.5 0 013 0V4h3.5A1.5 1.5 0 0112 5.7l-.8 4.8a1.5 1.5 0 01-1.5 1.25H4a1 1 0 01-1-1V6z"
								stroke="currentColor"
								strokeWidth="1.2"
								strokeLinejoin="round"
							/>
						</svg>
					)}
					<span>{inFavorites ? 'В избранном' : 'В избранное'}</span>
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
