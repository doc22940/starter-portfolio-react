import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


function ContactForms() {

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const { register, handleSubmit, errors } = useForm();
    const [disableButton, setDisableButton] = useState(false);

    const onSubmit = (data, e) => {

        setDisableButton(true)
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
                alert("ThankYou for your time!");
                e.target.reset();
                setDisableButton(false)
            })
            .catch(error => {
                alert(error)
                setDisableButton(false)
            });
    }


    return (

        <div className="formDiv col-12 col-md-7"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="1200"
            data-aos-once="false"
            data-aos-mirror="true"
        >

            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group>
                    <Form.Label>NAME</Form.Label>
                    <Form.Control name="name" placeholder="Your Name" ref={register({ required: true, maxLength: 78 })} />
                    {errors.name && <p id="errorPara">What's your Name?</p>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Your email" ref={register({ required: true })} />
                    <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                        </Form.Text>
                    {errors.email && <p id="errorPara">Email helps us to connect.</p>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>MESSAGE</Form.Label>
                    <Form.Control name='message' as="textarea" rows="3" placeholder="Write..." ref={register({ required: true })} />
                    {errors.message && <p id="errorPara">I'm so excited to hear from you!</p>}
                </Form.Group>

                <Button id="submitButton" disabled={disableButton} block type="submit">Submit</Button>

            </Form>

        </div>
    );
}
export default ContactForms;
