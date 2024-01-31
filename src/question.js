import {quests} from './questsArray.js'

export default function Question ({num, title, answer}){
    return (
        
        <div className='questions' >
            <p>{num}</p>
            {quests.map((ele, index) => (
                <div key={index} >
                <p className='title' >{ele.title}</p>
                <p>+</p>
                <div>{ele.answer}</div>
                </div>
            ))}
        </div>          
    );    
}
