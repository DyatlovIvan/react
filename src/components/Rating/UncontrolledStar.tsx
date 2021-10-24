type StarType ={
    select:boolean
    setValue:() => void


}

export function UncontrolledStar(props:StarType){

    return<span onClick={()=>{props.setValue()}} > {props.select?<b>Star</b>:<>Star</>}</span>

}