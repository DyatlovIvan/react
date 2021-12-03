import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion2';
import {On} from './components/On';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import {Rating, ValueRatingType} from "./components/Rating/Rating";
import {UncontrollOn} from "./components/UncontrollOn";
import {Example1, HelpToReactMemo} from "./components/UseMemo";
import {ReactMemo} from "./components/ReactMemo";
import {Clock} from "./Clock/Clock";

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
            <ReactMemo/>

            <Example1/>
            <HelpToReactMemo/>
            <Clock/>
        </div>
    );
}


export default App;
