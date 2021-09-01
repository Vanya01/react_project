import card from "../imgs/cardItem.png";
import location from "../imgs/location.png";
import Stars from "../stars/stars";
import fb from "../imgs/Facebook.png";
import './Info.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {discoverMovie} from "../services/movie_service";



export default function MoviesInfo(){
    let dispatch = useDispatch()
    let state = useSelector(state => state)
    let {movie} = state

    useEffect(()=>{
        discoverMovie().then(value => dispatch({type: 'FETCH_MOVIES', payload: value.data.results} ))

    },[])


    return(
        <div className="movies_list ">
            <div className="movie_card ">
                <img src={card} alt="card"/>
                <h3> </h3>
                <p><img src={location} alt="location"/> Movies </p>
                <p>Lorem Ipsum is simply dummy text of the printing & typesetting </p>
                <hr/>
                <div className={'stars d-flex'}>
                    <Stars/>
                    <img src={fb} alt="facebook"/>
                </div>
            </div>
            {

            }

        </div>



    )
}