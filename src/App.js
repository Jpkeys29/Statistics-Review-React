import './styles.css';
import {quests} from './questsArray.js'

export default function App() {
  return (
    <>
      {quests.map(function(questi, index) {
        return(
          <div className="questions" key={questi.id}>
            <p>Question:  {questi.title}</p>
            <p> Answer: {questi.text} </p>
          </div>
        )
      })}
    </>
  )
}

// function Question (){
//   return(
//     <div className='questions'>

//     </div>
//   )
// }
// const listQuests = quests.map(quest => <li key={quest.id} >{quest.title} {quest.text} </li>)
// return (
//   <div className='questions'>
//     <ul>{listQuests}</ul>
//   </div>
// )