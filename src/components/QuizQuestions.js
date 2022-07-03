import React, {useEffect, useState} from "react";
import axios from "axios";
import Question from "./Question";
// import language from "./Choice"

const QuizQuestions = ()=> {
    var language = "Java"; // temporarily, as routing is not enabled yet and while giving the routing features, application is getting buggy

    useEffect(()=>{
        document.title = "Quiz|StudentQuiz";
    },[]);
    const getQuestionsFromServer=()=>{
        axios.get(`http://localhost:8080/questions/language/${language}/5`).then(
            (response)=>{
                console.log(response.data);
                setQuestions(response.data)
            },(error)=>{
                console.log(error);
            }
        )
    }
    const[questions,setQuestions]=useState([]);
    useEffect(()=>{
        getQuestionsFromServer();
    }, [])

    return(
        <div>
            {
                questions.map((item)=> <Question key={item.question} question={item}/>)
            }
        </div>
    )

}
export default QuizQuestions