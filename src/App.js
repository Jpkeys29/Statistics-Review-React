import './styles.css';
import {quests} from './questsArray.js'

export default function App() {
  return (
    <>
      {quests.map(function(data, index) {
        return(
          <div className="questions" key={data.id}>
            Question title :  {data.title}
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