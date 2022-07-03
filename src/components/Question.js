import React from "react";
import {Card, CardBody, CardSubtitle, CardText} from "reactstrap";

const Question= ({question})=> {
    const qsnStyle={
        marginLeft:"30px",
        fontSize:"20px",
        fontWeight:"Bold",
        marginBottom:"20px"
    }
    const opnStyle={
        marginLeft:"25px",
        fontSize:"18px"
    }
    const crctOpnStyle={marginLeft:"25px",
        fontSize:"18px",
        display:"none"
    }

    return(
        <Card>
            <CardBody>
                <CardSubtitle style={qsnStyle}>{question.question}</CardSubtitle>
                <CardText style={opnStyle}>
                    <input type={"checkbox"} />
                    {question.option1}</CardText>
                <CardText style={opnStyle}>
                    <input type={"checkbox"} />
                    {question.option2}</CardText>
                <CardText style={opnStyle}>
                    <input type={"checkbox"} />
                    {question.option3}</CardText>
                <CardText style={opnStyle}>
                    <input type={"checkbox"} />
                    {question.option4}</CardText>
                {/*<CardText id={"correctOption"} style={crctOpnStyle}>*/}
                {/*    Correct Answer is : {question.correctOption}</CardText>*/}
                {/*<CardText style={opnStyle}>*/}
                {/*    {question.language}</CardText>*/}
                {/*<CardText style={opnStyle}>*/}
                {/*    {question.tag1}</CardText>*/}
                {/*<CardText style={opnStyle}>*/}
                {/*    {question.tag2}</CardText>*/}

            </CardBody>
        </Card>
    )
}
export default Question;