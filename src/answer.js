import Button from './button.js';
import {quests} from './questsArray.js'

function Answer(){
    return (
        <div className='questions'>
            {quests.map(respu => (
            <div className='questions' key={respu.id} >
                <span>{respu.text} </span>
            </div>
            
            ))}
        </div>
    )
}

export default Answer;