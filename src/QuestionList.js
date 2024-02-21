// import {quests} from './questsArray.js'
// import { useState } from 'react';

export default function QuestionList ({children,onClick}){
    // const [topic , setTopic] = useState('');
    return (
        <ul>
            <button onClick={onClick}>{children}</button>
        </ul>
    );
}