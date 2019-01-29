import React from "react";
import Book from "./book";
import Form from "./form";


export default class BookList extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {books:this.props.books}
            this.deleteBook = this.deleteBook.bind(this);
            this.addBook = this.addBook.bind(this);
        }

        deleteBook(id){
            const currentBooks = this.state.books;
            const books = currentBooks.filter(book => book.id !== id);
            this.setState({books:books});
        }

        addBook(title, price){
            this.setState({
                books:this.state.books.concat({
                    id:Date.now(),
                    title,
                    price
                })
            })
        }
    
        render(){
            return (
                <ul className="book-list">
                    {this.state.books.map(book =>{
                        return (
                            <Book 
                            key={book.id} 
                            book={book}
                            author={this.props.authors[book.authorId]}
                            deleteHandler={this.deleteBook}
                            />
                        );
                    })}
                    <Form addBookAction={this.addBook}/>	
                </ul>
            );
        }
    
    }