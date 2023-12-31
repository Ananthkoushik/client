import React from 'react'


import './AskQuestion.css'

const AskQuestion = () => {

    return (
        <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Ask a public Question</h1>
                <form>
                    <div className='ask-form-container'>
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you're asking a question to another person</p>
                            <input type="text" name='questionTitle' id='ask-ques-title' placeholder='e.g Is there as R function finding the index of an element in a vector?'/>
                        </label>
                        <label htmlFor="ask-ques-title">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer you question </p>
                            <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
                        </label>
                        <label htmlFor="ask-ques-title">
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input type="text" name='questionTitle' id='ask-ques-title' placeholder='e.g (XML TYPESCRIT WORDPRESS)'/>
                        </label>
                    </div>
                    <input type="submit" value="Reivew your question" className='review-btn'/>
                </form>

            </div>
        </div>

  )
}

export default AskQuestion