import MoviesInfo from "../MovieInfo (contains label, description, badges)/info";
import './MoviesList.css'

function MoviesList(){
    return(
        <div className={'wrap_list'}>
        <div className={'main_content container d-flex'}>
            <MoviesInfo/>
            <MoviesInfo/>
            <MoviesInfo/>
            <MoviesInfo/>
            <MoviesInfo/>
            <MoviesInfo/>
            <MoviesInfo/>
            <MoviesInfo/>
            <MoviesInfo/>
            <MoviesInfo/>
            <MoviesInfo/>
        </div>
        </div>
    )
}

export {MoviesList}
