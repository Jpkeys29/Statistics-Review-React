// import Button from './button.js';
import {quests} from './questsArray.js'
import { useState } from 'react';

export default function Questions ({preguntas}) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
// 

function goNext() {
    setQuestionIndex((prevQuestion) => prevQuestion + 1);
}
function goBack() {
    setQuestionIndex((prevQuestion) => prevQuestion - 1)
}
function handleToggle(){
    setIsOpen((currentState) => !currentState)
}
const onLastQuestion = questionIndex === preguntas.length - 1;
const onFirstQuestion = questionIndex === 0;

    return(
        <div className='questions' >
            <button onClick={goNext} disabled={onLastQuestion} >Next Question</button>
            <button onClick={goBack} disabled={onFirstQuestion} >Previous Question</button>
            <p>{questionIndex + 1}</p>
            <h2>{preguntas[questionIndex].title}</h2>
            <button onClick={handleToggle} >Answer</button>
            {isOpen &&<div>
                {preguntas[questionIndex].answer}   
            </div>}
            {/* {preguntas.map((ele, index) => (
            <IndividQuestion 
            title={ele.title} 
            answer={ele.answer} 
            num={index+1} key={ele.index} />
            ))} */}

        </div>
    )
}

// function IndividQuestion({num, title, answer}){
//     const [isOpen, setIsOpen] = useState(false);
//     function handleToggle(){
//         setIsOpen((currentState) => !currentState)
//     }

//     return(
//         <div className='item' onClick={handleToggle}>
//             <p className='number'>{num} </p>
//             <p className='title'>{title} </p>
//             <p className='icon'>{isOpen ? "-" : "+"} </p>
//             {isOpen && <div className='content-box'>
//                 {answer}
//             </div>}
//         </div>
//     )
// }

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

