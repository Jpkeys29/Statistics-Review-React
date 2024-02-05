import Button from './button.js';
import {quests} from './questsArray.js'
import { useState } from 'react';

export default function Questions ({preguntas}) {
    return(
        <div className='questions' >
            {preguntas.map((ele, index) => (
            <IndividQuestion title={ele.title} answer={ele.answer} num={index+1} key={ele.index}  />
            ))}
        </div>
    )
}

function IndividQuestion({num, title, answer}){
    function handleToggle(){

    }
    return(
        <div className='item'>
            <p className='number'>{num} </p>
            <p className='title'>{title} </p>
            <p className='icon'>-</p>
            <div className='content-box'>
                {answer}
            </div>
        </div>
    )
}

// export default function Question ({num, title, answer, id}){
//     const [isOpen, setIsOpen] = useState(false);

//     function handleToggle(){
//         setIsOpen((isOpen) => !isOpen);
//     }

//     return (   
//         <div className='questions' onClick={handleToggle} >
//             {quests.map((ele, index) => (
//                 <div key={index} className='item'>
//                 <p className='number'>{ele.id}</p> 
//                 <p className='title' >{ele.title}</p>
//                 <p className='icon'>{isOpen ? "-" : "+"}</p>
//                 {isOpen && <div className='content-box' >{ele.answer}</div>}
//                 </div>   
//             ))}
//         </div>          
//     );    
// }

