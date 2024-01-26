import './styles.css';
import quests from './questsArray.js'

export default function App() {
  return (
    <div className='questions'>
      <h1>Statistics Review Question</h1>
      <Question 
        adorn={{
          // src:'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          width:1000, backgroundColor:'blue', height:500
        }}    
      />
      <Question 
        adorn={{
          // src:'https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          width:1000, backgroundColor:'red', height:500
        }}    
      />
      <Question 
        adorn={{
          // src:'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          width:1000, backgroundColor:'yellow', height:500
        }}    
      />
    </div>
  )
}

function Question({adorn}) {
  // console.log(adorn)
  return (
    <div className='questions'>
      <img
      // src={adorn.src}
      style={{width:adorn.width,
      backgroundColor:adorn.backgroundColor,
      height:adorn.height}}
      />
    </div>
  )
}
