import React from "react";
import {Container,Button} from "reactstrap";
import {useEffect} from "react";

const  Home = () => {
    useEffect(() => {
        document.title = "Quiz|Home";
    }, []);
    const titl={textAlign: "center",
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        lineHeight:"50px",
        marginTop:"300px"};
    const teacherButton={height:"50px",
        width:"180px",
        borderRadius:"50px",
        cursor:"pointer",
        fontSize:"23px",
        marginRight:"15px",
        backgroundColor:"blue"};
    const studentButton={height:"50px",
        width:"180px",
        borderRadius:"50px",
        cursor:"pointer",
        fontSize:"23px",
        marginLeft:"15px",
        backgroundColor: "green"};
    const containerStyle={textAlign: "center",
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        lineHeight:"100px",
        marginTop:"10px"};

    return(
        <div>
            <h1>
                <h1 style={titl}>I am a</h1>
                <Container style={containerStyle}>
                    <Button style={teacherButton}>Teacher</Button>
                    <Button style={studentButton}>Student</Button>
                </Container>
            </h1>
        </div>
    )
}

export default Home;