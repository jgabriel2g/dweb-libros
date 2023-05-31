import React, { useState } from "react";

import { Card, Form, Button } from 'react-bootstrap';
import { auth } from '../enviroments/enviroments.jsx'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('admin@admin.com');
    const [password, setPassword] = useState('admin12345');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Revisa tus credenciales de acceso'
                })
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '18rem' }}>
                <Card.Header className="bg-primary text-white text-center">
                    <Card.Title className="my-2">Iniciar sesión</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingresa tu email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="password" className="mt-2">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="info" className="mt-3 align-items-center" onClick={handleLogin}>
                            Iniciar sesión
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
