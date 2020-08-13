import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import Fade from 'react-reveal/Fade';
  

function ContactForms() {

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        const formDatas = {
            name: data.name,
            email: data.email,
            message: data.message
        }

        fetch('/', {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formDatas })
        })
            .then(() => {
                alert("Success!");
                e.target.reset();
            })
            .catch(error => alert(error));
    }


    return (

        <div className="formDiv col-12 col-md-7">
            <Fade bottom cascade >
            <div style={{margin:0,width:'100%'}}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" placeholder="Your Name" ref={register({ required: true, maxLength: 78 })} />
                    {errors.name && <p id="errorPara">This is required</p>}
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Your email" ref={register({ required: true })} />
                    <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                    </Form.Text>
                    {errors.email && <p id="errorPara">This is required</p>}
                </Form.Group>
                
                <Form.Group>
                    <Form.Control name='message' as="textarea" rows="3" placeholder="Write..." ref={register({ required: true })} />
                    {errors.message && <p id="errorPara">This is required</p>}
                </Form.Group>
                
                <Button type="submit">Submit</Button>                
            </Form>
            </div>
            </Fade>
        </div>
    );
}
export default ContactForms;
