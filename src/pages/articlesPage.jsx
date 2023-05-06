import { useParams } from "react-router-dom";


export function ArticlePage(props) {

    let {id, photoId} = useParams();

    return(
        <div>
            <h1> Article ID is {id}! </h1>
            <h1> Photo ID is {photoId}! </h1>
        </div>
    )

}