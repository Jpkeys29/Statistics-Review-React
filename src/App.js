import './styles.css';
import {DESCRIPT, quests} from './questsArray.js'
import Question from './question.js';
import QuestionList from './QuestionList.js'

export default function App() {

  function handleToggle (selectedQuestions){
    console.log(selectedQuestions);
  } 
  return (
    <div>
      <Question preguntas={quests} />
      {/* <Question preguntas={DESCRIPT} /> */}
  
      <section className='sidebar'>
        <h2>Topics</h2>
        <menu>
          <QuestionList preguntas={quests} onClick={() => handleToggle(quests)}>Experiment Design</QuestionList>
          <QuestionList preguntas={DESCRIPT} onClick={() => handleToggle(DESCRIPT)}>Descriptive Statistics</QuestionList>
          <QuestionList onClick={handleToggle}>Introduction To Probability</QuestionList>
          <QuestionList onClick={handleToggle}>Rules of Probability</QuestionList>
        </menu>
      </section>
    </div>
  );
}       

