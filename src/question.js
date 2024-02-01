import {quests} from './questsArray.js'
import { useState } from 'react';

export default function Question ({num, title, answer}){
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <div className='questions' >
            {quests.map((ele, index) => (
                <div key={index} className='item' >
                <p className='number'>{ele.id}</p> 
                <p className='title' >{ele.title}</p>
                <p className='icon' >-</p>
                <div className='content-box' >{ele.answer}</div>
                </div>
            ))}
        </div>          
    );    
}

