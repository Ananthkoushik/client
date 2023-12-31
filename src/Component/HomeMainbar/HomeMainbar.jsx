import React from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'


const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  var questionsList = [{
    id: 1,
    votes: 3, 
    no0fAnswers: 2,
    questionTitle: "What is a function?", 
    questionBody: "It meant to be", 
    questionTags: ["java","node js", "react js","mongdb"],
    userPosted: "mano",
    askedOn: "jan 1"
  },{
    id: 2,
    votes: 0,
    no0fAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "mano", 
    askedOn: "jan 1"
  },{
    id: 3,
    votes: 71, 
    no0fAnswers: 0,
    questionTitle: "What is a function?",
    questionBodv: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "mano",
    askedOn: "jan 1"
  }]

  const checkAuth = () => {
    if(user === null){
      alert("login or signup to ask a question")
      navigate('/Auth')
    }
   
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1>: <h1>All Questions</h1>
        }
        <Link to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</Link>

      </div>
      <div>
        {
          questionsList === null ?
          <h1>Loading...</h1> :
          <>
                <p>{ questionsList.length} questions</p>
                <QuestionList questionsList={questionsList}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar