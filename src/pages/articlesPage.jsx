import { useParams } from "react-router-dom";


export function ArticlePage(props) {

    let {id} = useParams();

    return(
        <h1> Article ID is {id}! </h1>
    )

}