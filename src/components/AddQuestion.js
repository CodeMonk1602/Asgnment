import React, {useEffect, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";


function AddQuestion(title) {
    const inptStyle={textAlign: "center",
        fontSize:"20px"};
    const btnStyle={height:"50px",
        width:"180px",
        borderRadius:"50px",
        cursor:"pointer",
        fontSize:"23px",
        marginLeft:"575px"};
    useEffect(() => {
        document.title = "Teacher|Add Question";
    }, []);
    const [question,setQuestion]=useState({});
    const handleForm = (e) => {
        console.log(question);
        postQuestionToServer(question);
        e.preventDefault()
    }
    const  postQuestionToServer= (qsn) => {
        axios.post(`http://localhost:8080/createQuestion`,qsn).then(
            (response)=>{
                console.log(response);
                console.log("successfully added the question")
            },
            (error)=>{
                console.log(error);
                console.log("error while adding question");
            }
        )
    }
    return(
        <Form onSubmit={handleForm} style={{marginLeft:"300px", marginRight:"300px", marginTop:"50px"}}>
            <FormGroup style={{textAlign: "center",
                fontSize:"23px",
                fontWeight:"Bold",
                color:"blue"}} >
                <Label for={"question"} >Question</Label>
                <Input
                    style={{textAlign: "center",
                        fontSize:"22px"}}
                    type={"text"}
                    placeholder={"Enter the Question"}
                    name={"Question"}
                    id={"question"}
                    onChange={(event)=>{
                        setQuestion({...question, question:event.target.value })
                    }}
                />

            </FormGroup>
            <FormGroup style={{textAlign: "center",
                fontSize:"23px", color:"blue"}}>
                <Label for="option1">Options</Label>
                <Input
                    style={inptStyle}
                    type={"text"}
                    placeholder={"Enter the Option A"}
                    name={"Option A"}
                    id={"option1"}
                    onChange={(event)=>{
                        setQuestion({...question, option1:event.target.value })
                    }}
                />
                <Input
                    style={inptStyle}
                    type={"text"}
                    placeholder={"Enter the Option B"}
                    name={"Option B"}
                    id={"option2"}
                    onChange={(event)=>{
                        setQuestion({...question, option2:event.target.value })
                    }}
                />
                <Input
                    style={inptStyle}
                    type={"text"}
                    placeholder={"Enter the Option C"}
                    name={"Option C"}
                    id={"option3"}
                    onChange={(event)=>{
                        setQuestion({...question, option3:event.target.value })
                    }}
                />
                <Input
                    style={inptStyle}
                    type={"text"}
                    placeholder={"Enter the Option D"}
                    name={"Option D"}
                    id={"option4"}
                    onChange={(event)=>{
                        setQuestion({...question, option4:event.target.value })
                    }}
                />

            </FormGroup>
            <FormGroup style={{textAlign: "center",
                fontSize:"22px", color:"blue"}}>
                <Label for={"correctOption"} >Correct Answer</Label>
                <Input
                    style={inptStyle}
                    type={"text"}
                    placeholder={"Enter the Correct Answer"}
                    name={"CorrectOption"}
                    id={"correctOption"}
                    onChange={(event)=>{
                        setQuestion({...question, correctOption:event.target.value })
                    }}
                />

            </FormGroup>
            <FormGroup style={{textAlign: "center",
                fontSize:"22px", color:"blue"}}>
                <Label for="language">Programming Language</Label>
                <Input
                    style={inptStyle}
                    type={"select"}
                    name={"LanguageId"}
                    id={"language"}
                    onChange={(event)=>{
                        setQuestion({...question, language:event.target.value })
                    }}
                >
                    <option>
                        Java
                    </option>
                    <option>
                        Python
                    </option>
                </Input>
            </FormGroup>
            <FormGroup style={{textAlign: "center",
                fontSize:"22px", color:"blue"}}>
                <Label for="tag1">Tag1</Label>
                <Input
                    style={inptStyle}
                    type={"select"}
                    name={"TagId"}
                    id={"tag1"}
                    onChange={(event)=>{
                        setQuestion({...question, tag1:event.target.value })
                    }}
                >
                    <option>
                        Basics
                    </option>
                    <option>
                        Advanced
                    </option>

                </Input>

            </FormGroup>
            <FormGroup style={{textAlign: "center",
                fontSize:"22px", color:"blue"}}>
                <Label for="tag2">Tag2</Label>
                <Input
                    style={inptStyle}
                    type={"select"}
                    name={"TagId"}
                    id={"tag2"}
                    onChange={(event)=>{
                        setQuestion({...question, tag2:event.target.value })
                    }}
                >

                    <option>
                        Functions
                    </option>
                    <option>
                        OOPs
                    </option>
                    <option>
                        Multi-Threading
                    </option>
                    <option>
                        Data Structures
                    </option>
                </Input>

            </FormGroup>
            <Button type={"submit"} style={btnStyle}>
                Submit
            </Button>
            <Button style={{display:"block", marginLeft:"1200px"}}>
                Back
            </Button>

        </Form>
    )
}

export default AddQuestion;