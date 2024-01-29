import './styles.css';
import {quests} from './questsArray.js'

export default function App() {
  return (
    <div>
      <Question quests={quests} />
    </div>
        )
}       
function Question ({quests}){
  return(
    <div className='questions'>
        {quests.map(pregunta => (
      <div className="questions" key={pregunta.id}>
        <p>Question: 
          <span>{pregunta.title}</span>
        </p>
        <p>Answer: 
          {pregunta.text}
        </p>
      </div>
        ))}
    </div>
        );
}