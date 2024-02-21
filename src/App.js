import './styles.css';
import {quests} from './questsArray.js'
import Question from './question.js';
import QuestionList from './QuestionList.js'

export default function App() {
  function handleToggle (){
    console.log('Funciona!');
  } 
  return (
    <div>
      <Question preguntas={quests}/>
      <section className='sidebar'>
        <h2>Topics</h2>
        <menu>
          <QuestionList onClick={handleToggle}>Experiment Design</QuestionList>
          <QuestionList onClick={handleToggle}>Descriptive Statistics</QuestionList>
          <QuestionList onClick={handleToggle}>Introduction To Probability</QuestionList>
          <QuestionList onClick={handleToggle}>Rules of Probability</QuestionList>
        </menu>
      </section>
    </div>
  );
}       

