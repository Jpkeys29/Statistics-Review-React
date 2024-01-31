import {quests} from './questsArray.js'

export default function Question ({num, title, answer}){
    return (
        
        <div className='questions' >
            {quests.map((ele, index) => (
                <div key={index} className='item' >
                <p className='number'>{index}</p> 
                <p className='title' >{ele.title}</p>
                <p className='icon' >+</p>
                <div className='content-box' >{ele.answer}</div>
                </div>
            ))}
        </div>          
    );    
}
