import { Button, Form } from 'react-bootstrap'

import './SignIn.css'

function SignIn() {
    return (
        <>
            <div id='SignIn'></div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <input className='ctrl' type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <input className='ctrl' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="ck mb-3" controlId="formBasicUser">
                    <Form.Check type="checkbox" label="Keep me signed in on this device" />
                </Form.Group>
                <Button className='btn rounded-5 px-5 mb-4' variant="success" type="submit">
                    Sign In
                </Button>
            </Form>
        </>
    )
}



export default SignIn