import {useEffect, useState} from 'react';
import {Button, Tab, Tabs, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios";

function Search() {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [content, setContent] = useState();
    const [numOfPage, setNumOfPage] = useState();


    const fetchSearch = async (data) => {
        await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=09569995109a57a2e8c35b35923c769b&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
        setContent(data.results);
        setNumOfPage(data.totalPages);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch(searchText);
    }, [type, page])

    return (
        <div style={{display: 'flex', margin: '15px, 0'}}>
            <TextField
                style={{flex: 1}}
                className={'searchBox'}
                label={'search'}
                variant={'filled'}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant={'contained'} style={{marginLeft: 10}}> <SearchIcon/> </Button>

            <Tabs
                value={type}
                indicatorColor={'primary'}
                textColor={'primary'}
                onChange={(event, newValue) => {
                    setType(newValue);
                    setPage(1)
                }}
                style={{paddingBottom: 5}}
            >
                <Tab style={{width: '50%'}} label={'Search movies'}/>
                <Tab style={{width: '50%'}} label={'Search Tv series'}/>
            </Tabs>
        </div>
    )
}

export {Search};
