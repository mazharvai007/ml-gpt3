/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './article.css';

const Article = ({ imgURL, date, title }) => {
	return (
		<div className="gpt3__blog-container__article">
			<div className="gpt3__blog-container__article-image">
				<img src={imgURL} alt="blog image" />
			</div>

			<div className="gpt3__blog-container__article-content">
				<div className="gpt3__blog-container__article-content__wrap">
					<p>{date}</p>
					<h3>{title}</h3>
				</div>
				<p>Read Full Article</p>
			</div>
		</div>
	);
};

export default Article;
