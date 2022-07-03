import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import AddQuestion from "./components/AddQuestion";
import Header from "./components/Header";
import Choice from "./components/Choice";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Container} from "reactstrap";
import Question from "./components/Question";
import QuizQuestions from "./components/QuizQuestions";


function App() {
  return (
    <div>
        <hr/>
        {/*<Question*/}
        {/*question={{correctOption:"Thread scheduler",*/}
        {/*    language:"Java",*/}
        {/*    question:"What decides thread priority?",*/}
        {/*    option1:"Process",*/}
        {/*    option2:"Process scheduler",*/}
        {/*    option3:"Thread",*/}
        {/*    option4:"Thread scheduler",*/}
        {/*    tag1:"Advanced",*/}
        {/*    tag2:"Multi-Threading"}}/>*/}
        <QuizQuestions/>
        <hr/>



        {/*for some reason below routing is making my code buggy*/}
        {/*<Router>*/}
        {/*    <Header/>*/}
        {/*    <Route path={"/home"} component={Home} exact/>*/}
        {/*    <Route path={"/teacher"} component={AddQuestion} exact/>*/}
        {/*    <Route path={"/student"} component={Choice} exact/>*/}
        {/*    <Choice/>*/}
        {/*</Router>*/}



    </div>
  );
}

export default App;
