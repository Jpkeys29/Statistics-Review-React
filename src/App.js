import './styles.css';
import {quests} from './questsArray.js'
import Question from './question.js';

export default function App() {
  return (
    <div>
      <Question preguntas={quests}/>
    </div>
  );
}       

