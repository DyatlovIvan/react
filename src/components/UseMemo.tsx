import React, {useMemo, useState} from "react";

export const Example1 = () => {
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
            // let tempResultA = 1
            for (let i = 1; i <= a; i++) {
                let fake = 0;
                while (fake < 100000000) {
                    fake++
                    const fakevalue = Math.random();
                }
                resultA *= i;
            }
            return resultA
        }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for a:{resultA}</div>
            <div>Result for b:{resultB}</div>
        </div>)
}






const UsersSecret = (props:{users:Array<string>})=>{
    console.log('HelpToReactMemo')
    return(
        <div>
            {props.users.map((el,i) => <div key = {i}>{el}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () =>{
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['Ivan','Sasha','Valera','Katya','Peter'])
    const addUser = () =>{
        const newUser = 'Sveta' + new Date().getTime()
        setUsers([...users,newUser])
    }
    const newArray = useMemo(()=>{
        const newArray =  users.filter(el=>el.toLowerCase().indexOf('a')>-1)
        return newArray
    },[users])

    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <button onClick={addUser}>add</button>
            <Users users = {newArray}/>
            <hr/>
        </div>
    )
}