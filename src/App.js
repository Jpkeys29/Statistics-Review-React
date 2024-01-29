import './styles.css';
import {quests} from './questsArray.js'
import Question from './question.js';

export default function App() {
  return (
    <div>
      <Question questions={quests} />
    </div>
        )
}       
// function Question ({questions}){
//   console.log(questions)
//   return(
//     <div className='questions' >
//         {quests.map(pregunta => (
//       <div className="questions" >
//         <p className="item" >Question: 
//           <span>{pregunta.title}</span>
//         </p>
//         <p>Answer: 
//           {pregunta.text}
//         </p>
//       </div>
//         ))}
//     </div>
//   );
// }