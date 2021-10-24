import {ValueRatingType} from "./Rating";

type StarType ={
    select:boolean
    setNewRating:(value:ValueRatingType)=>void
    id: ValueRatingType

} 

export function Star(props:StarType){

    return(
        <span onClick={()=>{props.setNewRating(props.id)}} > {props.select?<b>Star</b>:<>Star</>}</span>
    )
}