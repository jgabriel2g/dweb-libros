import React, {useEffect, useState} from "react";
import './home.css';

import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, query, where } from "firebase/firestore";
import { db } from '../enviroments/enviroments.jsx'

import AppNavbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        description: '',
        year: '',
        stock: true,
    });
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [filter, setFilter] = useState('');

    const getBooks = async () => {
        try {
            let booksCollection = collection(db, 'books');

            if (filter === 'available') {
                booksCollection = query(booksCollection, where('stock', '==', true));
            } else if (filter === 'unavailable') {
                booksCollection = query(booksCollection, where('stock', '==', false));
            }

            const querySnapshot = await getDocs(booksCollection);
            const booksData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setFilteredBooks(booksData);
        } catch (error) {
            console.error('Error al obtener los libros:', error);
        }
    }

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
            getBooks();
        } catch (error) {
            console.error('Error al crear el libro:', error);
        }

    }

    const borrowBook = async (book) => {
        try {
            const bookRef = doc(db, 'books', book.id);
            await updateDoc(bookRef, {
                stock: !book.stock
            });
            getBooks();
        } catch (error) {
            console.error('Error al actualizar el estado de disponibilidad:', error);
        }
    };

    const deleteBook = async (id) => {
        try {
            const bookRef = doc(db, 'books', id);
            await deleteDoc(bookRef);
            getBooks();
        } catch (error) {
            console.error('Error al eliminar el libro:', error);
        }
    };

    useEffect(()=>{
        getBooks();
    }, [filter, getBooks])


    return (
        <React.Fragment>
            <AppNavbar/>
            <h1>Home</h1>
            <div>
                <h3>Listado de libros</h3>
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="available">Disponibles</option>
                    <option value="unavailable">No disponibles</option>
                </select>

                <ul className="book-list">
                    {
                        filteredBooks?.map((book)=>(
                            <li key={book.id} className="book-item">
                                <span>El titulo del libro es: {book.title}</span>
                                <span>El nombre del autor es: {book.author}</span>
                                <span>La descripcion del libro es: {book.description}</span>
                                <span>El año de publicacion es: {book.year}</span>
                                <span className={book.stock ? 'available' : 'not-available'}>
                                  {book.stock ? 'Libro disponible' : 'Libro no disponible'}
                                </span>
                                <button onClick={() => borrowBook(book)}>
                                    {book.stock ? 'Marcar como no disponible' : 'Marcar como disponible'}
                                </button>
                                {/*<button onClick={() => deleteBook(book.id)}>Editar</button>*/}
                                <button onClick={() => deleteBook(book.id)}>Eliminar</button>
                            </li>
                        ))
                    }
                </ul>
                <h3>Agregar Libros</h3>
                <form onSubmit={addBook}>
                    <input
                        type="text"
                        placeholder="Título"
                        value={newBook.title}
                        onChange={(e) =>
                            setNewBook({ ...newBook, title: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Autor"
                        value={newBook.author}
                        onChange={(e) =>
                            setNewBook({ ...newBook, author: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Descripción"
                        value={newBook.description}
                        onChange={(e) =>
                            setNewBook({ ...newBook, description: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Año"
                        value={newBook.year}
                        onChange={(e) =>
                            setNewBook({ ...newBook, year: e.target.value })
                        }
                    />
                    <button type="submit">Agregar</button>
                </form>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;
