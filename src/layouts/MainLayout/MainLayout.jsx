// import React from 'react';
import './MainLayout.css';

function MainLayout({ favoritesCount = 0, children }) {
	return (
		<div className="main-layout">
			<header className="header">
				<div className="header-logo">
					<svg width="20" height="24" viewBox="0 0 20 24" fill="none">
						<path
							d="M2 2C2 1.44772 2.44772 1 3 1H17C17.5523 1 18 1.44772 18 2V22L10 17L2 22V2Z"
							stroke="#7c6ff0"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<nav className="header-nav">
					<span className="header-link header-link-active">Поиск фильмов</span>
					<span className="header-link">
            Мои фильмы
						{favoritesCount > 0 && (
							<span className="header-badge">{favoritesCount}</span>
						)}
					</span>
					<span className="header-link">
            Войти
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path
								d="M5 2H2v10h3M9 4l3 3-3 3M12 7H5"
								stroke="#f5f6fa"
								strokeWidth="1.3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</span>
				</nav>
			</header>
			<main className="main-content">{children}</main>
		</div>
	);
}

export default MainLayout;
