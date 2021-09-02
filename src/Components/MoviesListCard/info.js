import location from "../imgs/location.png";
import Stars from "../stars/stars";
import fb from "../imgs/Facebook.png";
import './Info.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenres, getMovies} from "../services/movie_service";

export function MoviesInfo(){
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let movies = state.movie
    let genres = state.genre


    useEffect( ()=>{
        getMovies().then(value => dispatch( {type: 'FETCH_MOVIES', payload: value.data.results}))
    },[])


     useEffect(()=>{

         getGenres().then(value => dispatch({type:'GET_GENRES',payload:value.data.genres}))

     },[])

    // console.log(value.data.genres)
    // dispatch({type:'GET_GENRES',payload:value.data.name})
    console.log(genres)




    return(
        <div className={'out_wrap_card d-flex container'}>
        {
            movies && movies[0].map(value=>
                <div key={value.id} className={'wrap_cards'}>

                <div className={'img_card'}>
                    <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="Poster"/>
                </div>
                    <h3>{value.title}</h3>


                    <p>
                        <img src={location} alt="location"/> {
                        genres && genres[0].map(value=> <div>{value.name}</div>)
                    }</p>


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





// export default function MoviesInfo(){
//
//     let dispatch = useDispatch()
//     let state = useSelector(state => state)
//     let {movies} = state
//
//
//     useEffect(()=>{
//         getMovies().then(value => dispatch({type: 'FETCH_MOVIES', payload: value.data.results} ))
//
//     },[])
//
//     return(
//
//         <div className="movies_list ">
//             {
//                 movies && movies.map( value => {
//                     return (
//                         <div>
//                             {value.title}
//                         </div>
//                     )
//                 })
//             }
//
//             <div className="movie_card ">
//                 <img src={card} alt="card"/>
//                 <h3> </h3>
//                 <p><img src={location} alt="location"/> Movies </p>
//                 <p>Lorem Ipsum is simply dummy text of the printing & typesetting </p>
//                 <hr/>
//                 <div className={'stars d-flex'}>
//                     <Stars/>
//                     <img src={fb} alt="facebook"/>
//                 </div>
//             </div>
//         </div>
//
//
//
//
//     )
// }