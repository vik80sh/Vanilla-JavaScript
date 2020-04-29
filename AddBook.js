// Book class: represent a Book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
   
}
// UI Class: handle UI tasks
class UI {
    static displayBooks(){
        const StoredBooks = [
            {
                title: "Book One",
                author: " Vikash",
                isbn: "345634"
            },
            {
                title: "Book Two",
                author: " Mahesh",
                isbn: "12334"
            }
        ]

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book))
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`
        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete'))
            el.parentElement.parentElement.remove();
        
    }
    static clearField(){
        document.querySelector('#title').value = ""
        document.querySelector('#author').value= ""
        document.querySelector('#isbn').value =""
    }
    static alertMessage(message,className){
        const createdDiv = document.createElement('div');
        createdDiv.className = `alert alert-${className}`;
        const textMessage = document.createTextNode(message);
        createdDiv.appendChild(textMessage);
        const haveToAppend = document.querySelector('.container')
        const appendBefore = document.querySelector('#book-form')

        haveToAppend.insertBefore(createdDiv,appendBefore);

        setTimeout(()=>document.querySelector('.alert').remove() , 3000)

    }
}

// Store Class: Hnadles Storage

// Even : display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event : Add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    //Validation
    if(title && author && isbn){
        // Instantiate Book;
        const book = new Book(title,author,isbn);
        UI.addBookToList(book);
        UI.alertMessage("Book Added","success") 
        //clear Feild
        UI.clearField()
    }else{
       UI.alertMessage("please Enter all fileds","danger") 
    }

})
// Event : Remove a Book

document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deleteBook(e.target)
    UI.alertMessage("Book Removed","success") 
})