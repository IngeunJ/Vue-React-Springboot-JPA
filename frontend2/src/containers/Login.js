import React,{Component} from 'react'
import { Form,Button } from 'react-bootstrap';

class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <form onSubmit="">
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="ID" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
               
                    <Button variant="primary">전송</Button>
                    <Button variant="danger">취소</Button>
                </form>
        )
    }
}
export default Login