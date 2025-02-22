import React from 'react';


const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote_avg) => {

    if (vote_avg >= 8) { 
        return 'green';
    }
    else if (vote_avg >= 6) { 
        return "orange";
    }
    
    return 'red';
}

const MovieCard = ({title, poster_path, overview, vote_average}) => (
    
    <div className="movie-card">
        <img src={
            poster_path 
            ? (IMG_API + poster_path) 
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            } 
            alt={title} 
        />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={
                `tag ${setVoteClass(vote_average)}`
                }>
                {vote_average}
            </span>
        </div>
        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p> 
        </div>
    </div>
);

export default MovieCard;