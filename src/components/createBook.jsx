import {Button, Form, FormControl} from "react-bootstrap";
import React, {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../enviroments/enviroments.jsx";
import AppNavbar from "../components/navbar.jsx";

const createBook = () => {
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        description: '',
        year: '',
        stock: true,
    });

    const addBook = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db,'books'), newBook);
            setNewBook({
                title: '',
                author: '',
                description: '',
                year: '',
                stock: true,
            });
        } catch (error) {
            console.error('Error al crear el libro:', error);
        }

    }

    return(
        <React.Fragment>
            <AppNavbar />
            <h3>Agregar Libros</h3>
            <Form onSubmit={addBook}>
                <Form.Group className="mb-3">
                    <Form.Label>Título</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Título"
                        value={newBook.title}
                        onChange={(e) =>
                            setNewBook({ ...newBook, title: e.target.value })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Autor</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Autor"
                        value={newBook.author}
                        onChange={(e) =>
                            setNewBook({ ...newBook, author: e.target.value })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Descripción"
                        value={newBook.description}
                        onChange={(e) =>
                            setNewBook({ ...newBook, description: e.target.value })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Año</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Año"
                        value={newBook.year}
                        onChange={(e) =>
                            setNewBook({ ...newBook, year: e.target.value })
                        }
                    />
                </Form.Group>
                <Button type="submit">Agregar</Button>
            </Form>
        </React.Fragment>
    )
}

export default createBook
