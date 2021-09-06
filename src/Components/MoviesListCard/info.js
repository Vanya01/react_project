import location from "../imgs/location.png";
import Stars from "../stars/stars";
import fb from "../imgs/Facebook.png";
import './Info.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenres, getMovies} from "../services/movie_service";
import {GenresFunction} from "../MoviesList/genre";
import {Link} from "react-router-dom";



export function MoviesInfo(){
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let movies = state.movie

    useEffect( (payload)=>{
        getMovies().then(value => dispatch(
            {type: 'FETCH_MOVIES', payload:( value.data.results)
            }))
        getGenres().then(value => dispatch(
            {type:'GET_GENRES',payload:(value.data.genres)
            }))
    },[])



    return(
        <div className={'out_wrap_card d-flex container'}>
        {
            movies && movies.map(value=>
                <div key={value.id} className={'wrap_cards'}>

                    <Link to={`/about/${value.id}`}>

                     <div className={'img_card'}>
                       <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="Poster"/>
                     </div>

                    </Link>

                           <h3>{value.title}</h3>
                     <div className={'wrap_genres d-flex'}>
                        <GenresFunction genresId={value.genre_ids} />
                        <img src={location} alt="location"/>
                     </div>
                          <p>{value.overview}</p>
                                 <hr/>
                     <div className={'stars_and_fb d-flex'}>
                         <Stars/> {value.vote_average}
                         <img src={fb} alt="fb"/>
                    </div>
                </div>)
        }
        </div>

    )}





