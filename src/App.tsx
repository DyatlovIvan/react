import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {UncontrollRating} from './components/Rating/UncontrollRating';
import {Accordion} from './components/Accordion/Accordion2';
import {On} from './components/On';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import {Rating, ValueRatingType} from "./components/Rating/Rating";
import {UncontrollOn} from "./components/UncontrollOn";
import {Example1} from "./components/UseMemo";

function App() {
  let [newRating,setNewRating] = useState<ValueRatingType>(0)

  let [newCollapsed,setNewCollapsed] = useState(true)

  let [newOn,setOn] = useState(false)
    return (
        <div className="App">
            {/*<On/>*/}
            <UncontrollOn newOn={newOn} setOn={setOn}/>

            {/*<UncontrollRating/>*/}
            <Rating value={newRating} setNewRating={setNewRating} />

            {/*<UncontrolledAccordion title={'Menu'}/>*/}
            {/*<UncontrolledAccordion title={'Friends'}/>*/}
            <Accordion title = {'Menu'} newCollapsed ={newCollapsed} setNewCollapsed = {setNewCollapsed}/>
            {/*<Accordion title = {'Friends'} collapsed = {false}/>*/}
            <Example1/>
        </div>
    );
}


export default App;
