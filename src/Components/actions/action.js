import {Route} from "react-router-dom";
import {PosterPreview} from "../PosterPreview/posterPrewiev";

function Card(props){
    let { match:{url}} = props

    return(
        <div>
     <Route path={`${url}/:id`} render={(props)=>{
               return <PosterPreview {...props}/>
     }
     }/>

        </div>

    )
 }

export {Card}