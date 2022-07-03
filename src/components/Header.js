import React from "react";
import {Button, Container} from "reactstrap";
import {useEffect} from "react";
import {Link} from "react-router-dom";

function Header({name,title}){
    useEffect(() => {
        document.title = "Quiz";
    }, []);
    const butn ={height:"50px",
        width:"180px",
        borderRadius:"50px",
        cursor:"pointer",
        fontSize:"23px"};
    const titl = {textAlign: "center",
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        lineHeight:"100px",
        marginTop:"300px"};
    return(
        <div>
            <h1 style={titl}>
                <h1>Welcome to Quiz</h1>
                <Container>
                    {/*routing is making my app buggy. i am unsure of the reason*/}
                    {/*<Link to={"/home"}>*/}
                    {/*    Start*/}
                    {/*</Link>*/}
                    <Button style={butn}
                            color={"primary"}>Start</Button>
                </Container>
            </h1>
        </div>
    )
}
export default Header;