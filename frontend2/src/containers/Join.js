import React,{Component} from 'react'
import { Form,Button,Col } from 'react-bootstrap';

class Join extends Component{
    
    constructor(props){
        super(props);
        this.state={
            customerId:'',
            password:'',
            customerName:'',
            phone:'',
            city:'',
            address:''
            
        }
    }
    render(){
        return(
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="customerId">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="customerId" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col} controlId="customerName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group as={Col} controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">회원가입</Button>
        </Form>
        )
    }
}
export default Join