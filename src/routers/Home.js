import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

/*
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}
const foodILike = [
  {
    id:1,
    name : "kimchi",
    image : "https://m.hansanggung.com/web/product/big/hansanggung1_44.jpg",
    rating: 5 
  },
  {
    id:2,
    name : "samgiopsal",
    image : "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    rating: 4.9
  },
  {
    id:3,
    name : "dduckboki",
    image : "https://pbs.twimg.com/media/D_66s5wUcAI2927.jpg",
    rating: 4.8
  },
  {
    id:4,
    name : "gyukatsu",
    image : "https://cdn.imweb.me/upload/S201612185855798c0088d/5c9dc98cb8668.jpg",
    rating: 4.7
  },
  {
    id:5,
    name : "chicken",
    image : "https://lh3.googleusercontent.com/proxy/2ctCGnh45ICH3gx3cyGY42P1OYlfRGfvvOjppOB23L0CX_CIDZa91PYSiPc-VSujG_WGtIIm-nCgdIDc-v4EGSU9RyMRoeHv2lX4ngdJxqZRwCC9h4BUxFMzIDldCpFN",
    rating: 4.6
  }
];
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}
*/

class Home extends React.Component{

  /*
  constructor(props){
    super(props); //호출하지 않으면 에러가 남
    console.log("hello");
  }
  add = () => {
    this.setState(current =>({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  //update될 때마다 호출됨
  componentDidUpdate(){
    console.log("i just updated");
  }
  //component가 떠날 때마다 호출됨
  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }
  
  */

 state = {
    isLoading: true,
    movies: []
  };
  //async는 비동기. await는 axious가 끝날 때까지 기다렸다가 실행
  getMovies = async() => {
    const {data: 
      {data: {movies}}
    
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading. . . </span>
          </div>
         ) : (
           <div className="movies">
             {movies.map(movie => (
               <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  />
             ))}
           </div>
         )}
      </section>
    );
  }
}
/* 
function App()는 html Component
react application은 !!한번에 하나!!ㅞㅡ의 component만 redering 할 수 있음!
line4=> Food의 fav 속성을 갖고 옴
line16=> fav라는 이름의 속성을  kimchi라는 value로 줌
line48=> isRequired를 없애면 name이 없어도 오류X 왜? 필수 아니니까
line73=> setState를 할 때마다 react는 새로운 state와 함께 render함 
map은 array의 각 item에서 function을 실행하는 array를 가지는 JS function이며
그 function의 result를 갖는 array를 나에게 줌
react는  class component의 render를 자동으로 실행함
class component를 사용하는 이유는 state, state는 object이고 data가 변함
mounting()은 태어나는 것과 같음 Update(), Unmounting()은 component가 죽는 것을 의미함
axios는 fetch 위의 작은 layer
*/
export default Home;