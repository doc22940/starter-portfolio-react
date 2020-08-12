import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactForms extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            name:'',
            email:'',
            message:''          
        }
    }

    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()

        fetch('/', {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
        .then(() => {
            alert("Success!");
            this.resetForm()
        })
        .catch(error => alert(error));
    }
    
    resetForm(){
    
        this.setState({name: '', email: '', message: ''})
     }

    render(){
        
        const {name,email,message} = this.state

        return(

            <div className="formDiv col-12 col-md-7">
                <Form onSubmit={this.submitHandler}>
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
