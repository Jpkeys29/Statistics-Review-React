import Button from './button.js';
import {quests} from './questsArray.js'

function Question ({questions}){
    function answer(){
        alert(quests.map((quest) => quest.text));
    }
      return(
        <div className='questions'>
            {quests.map(pregunta=> (
          <div className="questions" key={pregunta.id} >
            <p className="item" >Question: 
              <span>{pregunta.title}</span>
            </p>
            <Button answer={answer} />
            <p>Answer: 
              {pregunta.text}
            </p>
          </div>
            ))}
        </div>
      );
}
export default Question;