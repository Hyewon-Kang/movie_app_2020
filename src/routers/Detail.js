import React from "react";
import "./Detail.css";


class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            const movie= location.state;
            const genres = movie.genres;
             return (
                <section className="detail_data">
                    <div className="movie_img">
                        <img src={movie.poster} alt={movie.title} title={movie.title} />
                        <div className="movie_detail">
                            <h1>{movie.title}<span>&nbsp;&nbsp;({movie.year})</span></h1>
                            <div className="movie_genres">
                                <ul className="movies_genres">
                                    {genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
                                </ul>
                            </div>
                            <div className="movie_summary">
                                <h3>Summary:<br/></h3>
                                <p>&nbsp;&nbsp;{movie.summary}</p>
                            </div>
                        </div>
                    </div>
                    
                </section>
            );
        } else {
            return null;
        }
    }
}

export default Detail;

/*
render가 먼저 실행되고 나서 componentDidMount가 실행되기 때문에
render에서 location을 부르면 에러가 뜸!
=> 해결하기 위해서 if문으로 return  결정

*/

