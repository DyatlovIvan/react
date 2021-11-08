import { Star } from "./Star";
import React from "react";

export type ValueRatingType=0|1|2|3|4|5

type RatingType = {
    value:ValueRatingType
    setNewRating:(value:ValueRatingType) => void
}


export const Rating = React.memo(RatingMemo)


export function RatingMemo(props:RatingType) {

    return (
        <div>
            <Star select={props.value > 0} setNewRating = {props.setNewRating} id={1} />
            <Star select={props.value > 1} setNewRating = {props.setNewRating} id={2}/>
            <Star select={props.value > 2} setNewRating = {props.setNewRating} id={3}/>
            <Star select={props.value > 3} setNewRating = {props.setNewRating} id={4}/>
            <Star select={props.value > 4} setNewRating = {props.setNewRating} id={5}/>

        </div>
    )
}