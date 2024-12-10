import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    const checkFormValidity = () => {
        const form = document.querySelector('form');
        setIsFormValid(form.checkValidity());
    };

    const checkPasswordValidity = () => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
        setIsPasswordValid(regex.test(password))
    };

    useEffect(() => {
        checkFormValidity();
    }, [])

    useEffect(() => {
        checkPasswordValidity();
    }, [password])

    return (
        <>
            <Container className="my-5">
                <h1>Form Submission</h1>
                <Form className="my-4" onChange={checkFormValidity}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            data-testid="emailInput"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            data-testid="passwordInput"
                        />
                    </Form.Group>
                    <Button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!isFormValid || !isPasswordValid}
                        data-testid="submitButton"
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}