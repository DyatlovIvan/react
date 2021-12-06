import {useEffect, useState} from "react";

// export const UseEffect = () => {
//     const [text, setText] = useState('')
//     useEffect(() => {
//         const handler = (e: KeyboardEvent) => {
//             console.log(text)
//             setText((text) => text + e.key)
//         }
//         console.log()
//         document.addEventListener("keypress", handler)
//         return()=>{
//             document.removeEventListener("keypress", handler)
//         }
//
//     }, [])
//
//     return (
//         <>
//             text: {text}
//         </>
//     )
// }

// export const UseEffect = () => {
//     const [text, setText] = useState('')
//     useEffect(() => {
//         const handler = (e: KeyboardEvent) => {
//             console.log(text)
//             setText(text + e.key)
//         }
//         console.log()
//         document.addEventListener("keypress", handler)
//         return()=>{
//             document.removeEventListener("keypress", handler)
//         }
//
//     }, [text])
//
//     return (
//         <>
//             text: {text}
//         </>
//     )
// }


export const UseEffect = () => {
    const [text, setText] = useState('')
    useEffect(() => {
        const timeoutId = setInterval(() => {
                setText('3 secounts')
            },
            3000)
        return () => {
            clearTimeout(timeoutId)
            // document.removeEventListener("keypress", handler)
        }

    }, [text])

    return (
        <>
            text: {text}
        </>
    )
}