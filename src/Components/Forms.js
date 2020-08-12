import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';

class ContactForms extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            name:'',
            email:'',
            message:''          
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()

        fetch('https://script.google.com/macros/s/AKfycbzN8eHzBwvmKZJRhP1_u3e_jQwjsLhMOCPXPQEAlNrE4tfWEYbF/exec', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST', // or 'PUT'
            body: JSON.stringify(this.state),
        }).then((response) => { 
            if (!response.ok) {
                return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
            }
            response.json()
        }).then(() => {
            alert('Success!');
        }).catch((error) => {
            alert('Our servers are having issues! We couldn\'t send your feedback!', error);
        })       
    }

    resetForm(){
    
        this.setState({name: '', email: '', message: ''})
     }
    

    render(){
        
        const {name,email,message} = this.state

        return(

            <div className="formDiv col-12 col-md-7">
                <Form id='submit-form' onSubmit={this.submitHandler}>
                    <Form.Group>
                    <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={name} onChange={this.changeHandler} placeholder="Your Name" />
                    </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>  
        <Form.Control name='email' value={email} onChange={this.changeHandler} type="email" placeholder="Your email" />
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Control name='message' value={message} onChange={this.changeHandler} as="textarea" rows="3" placeholder="Write..." />
      </Form.Group>
    
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </div>
    
        ); 
    }       

}
export default ContactForms;
