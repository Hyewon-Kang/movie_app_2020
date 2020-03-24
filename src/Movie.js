import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }){
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary.slice(0, 140)}...</p>
            <ul className="movie_genres">
                {genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
            </ul>
        </div>
        
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

//export써줘야 다른 곳에서 import 가능함! 
export default Movie;