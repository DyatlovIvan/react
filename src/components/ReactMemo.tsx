import React, {useState} from "react";

const NewMessagesCounter = (props: {count:number}) => {
    return(
        <div>
            {props.count}
        </div>
    )
}
const UsersSecret = (props:{users:Array<string>})=>{
    console.log('Users')
    return(
        <div>
            {props.users.map((el,i) => <div key = {i}>{el}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const ReactMemo = () =>{
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['Ivan','Sasha','Valera','Katya'])
    const addUser = () =>{
        const newUser = 'Sveta' + new Date().getTime()
        setUsers([...users,newUser])
    }
    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count = {counter}/>
            <Users users = {users}/>
            <hr/>
        </div>
    )
}