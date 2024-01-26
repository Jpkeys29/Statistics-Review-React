import './styles.css';
import quests from './questsArray.js'

export default function App() {
  const listQuests = quests.map(quest => <li key={quest.id} >{quest.title} {quest.text} </li>)
  return (
    <div className='questions'>
      <ul>{listQuests}</ul>
    </div>
  )
  }