import React, {useEffect, useState} from "react";
import SearchIcon from "@material-ui/icons/Search"
import {Tabs, Tab, TextField} from "@material-ui/core"
import axios from "axios";
import {API_KEY} from "../services/movie_service";
import {Pagination} from "@material-ui/lab";
import {MoviesInfo} from "../MoviesListCard/info";


const Search = () => {
    const [type, setType] = useState(0)
    const [page, setPage] = useState(1)
    const [searchText, setSearchText] = useState("")
    const [content, setConten] = useState()
    const [numOfPages, setNumOfPages] = useState()


    const fetchSearch = async () => {
        const {data} = await axios.get(
            `   https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        )

        setConten(data.results)
        setNumOfPages(data.totalPages)
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page])


    return (
        <div>
            <div>
                <TextField
                    style={{flex: 1, width: 550}}
                    className={'searchBox'}
                    label={'Search'}
                    variant={'filled'}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <button variant={'contained'} style={{marginLeft: 10}} onClick={fetchSearch}><SearchIcon/></button>

            </div>

            <Tabs value={type}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={(event, newValue) => {
                      setType(newValue);
                      setPage(1)
                  }}
                  style={{paddingBottom: 5}}

            >

                <Tab style={{width: '50%'}} label={'Search movies'}/>
                <Tab style={{width: '50%'}} label={'Search TV'}/>

            </Tabs>


            <div className={'searchContent'}>

                {
                    content && content.map((c) => (
                        <MoviesInfo
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={type ? "tv" : "movie"}
                            vote_average={c.vote_average}/>
                    ))}
            </div>
            {numOfPages > 1 && (
                <Pagination setPage={setPage} numOfPages={numOfPages}/>
            )}

            {
                searchText && !content && (type ? <h2> No series found</h2> : <h2> No movies found</h2>)
            }
        </div>
    )


}
export default Search


//
//
//     // const search = document.getElementById('form')
//
//     const Search = (props) => {
//
//     // const find = find.addEventListener('submit',(e)=>{
//     //
//     //     e.preventDefault()
//     //     const searchTerm = search.value
//     //
//     //     if(searchTerm) {
//     //         getMovies(searchUrl+'&query='+searchTerm)
//     //     }else{
//     //         getMovies(BASE_URL)
//     //     }
//     //
//     // })
//
//     const [searchTerm,setSearchTerm] = useState(' ')
//
//
//
//
// const handleOnSubmit = (e) => {
//     e.preventDefault()
//         fetch(serchAPI + searchTerm)
//             .then((value) => value.json())
//             .then((data)=>{
//                 getMovies(data.results)
//             })
// }
//
// const handleOnChange = (e) => {
//         setSearchTerm(e.target.value)
// }
//
//
//
//     return(
//         <form id={'form'} onSubmit={handleOnSubmit}>
//             <input
//                 className={'top_input'}
//                 type="text"
//                 placeholder={'Type to search...'}
//                 value={searchTerm}
//                 onChange={handleOnChange}
//
//             />
//         </form>
//     )
//
// }
//
// export default Search
