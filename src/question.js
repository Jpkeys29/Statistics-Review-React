import Button from './button.js';
import {quests} from './questsArray.js'

export default function Question ({num, title, answer}){
    return (
        <div className='item' >
            <p>{num}</p>
            <p>{title}</p>
            <p>+</p>
            <div>{answer}</div>
        </div>
    )   
}
