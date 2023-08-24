import React, {useEffect, useState} from 'react';
import './App.css';



function App() {
    return (
        <>
            <p>Соц сеть</p>
        </>
    )
}
export default App;








type ItemAcordionMenuPropsType = {
    item: string
}
const ItemAcordionMenu = (props: ItemAcordionMenuPropsType) => {
    return (
        <>
            <li>{props.item}</li>
        </>
    )
}