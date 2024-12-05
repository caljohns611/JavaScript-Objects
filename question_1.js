// task 1
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  
    // task 2
    this.displayInfo = function() {
      console.log(`"${this.title}" by ${this.author}, ${this.pages} pages`);
    };
  }
  
  // Task 3
  let books = [];
  
  
  function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    books.push(newBook);
    console.log(`Book added: "${title}" by ${author}`);
  }
  
  
  function searchByTitle(title) {
    let foundBooks = [];
    
    
    for (let i = 0; i < books.length; i++) {
      if (books[i].title.toLowerCase().includes(title.toLowerCase())) {
        foundBooks.push(books[i]);
      }
    }
  
    
    if (foundBooks.length > 0) {
      console.log(`Books found with title "${title}":`);
      for (let i = 0; i < foundBooks.length; i++) {
        foundBooks[i].displayInfo();
      }
    } else {
      console.log(`No books found with title "${title}".`);
    }
  }
  
  
  function searchByAuthor(author) {
    let foundBooks = [];
    
    
    for (let i = 0; i < books.length; i++) {
      if (books[i].author.toLowerCase().includes(author.toLowerCase())) {
        foundBooks.push(books[i]);
      }
    }
  
    
    if (foundBooks.length > 0) {
      console.log(`Books found by author "${author}":`);
      for (let i = 0; i < foundBooks.length; i++) {
        foundBooks[i].displayInfo(); 
      }
    } else {
      console.log(`No books found by author "${author}".`);
    }
  }
  
  
  function displayBooks() {
    if (books.length > 0) {
      console.log('Library Collection:');
      for (let i = 0; i < books.length; i++) {
        books[i].displayInfo(); 
      }
    } else {
      console.log('The library is empty.');
    }
  }
  
  // Task 4
  function filterBooksByPages() {
    let filteredBooks = books.filter(book => book.pages > 100);
    
    console.log('Books with more than 100 pages:');
    if (filteredBooks.length > 0) {
      filteredBooks.forEach(book => book.displayInfo());
    } else {
      console.log('No books with more than 100 pages.');
    }
  }
  
  
  function modifyBookTitlesAndAuthors() {
    let modifiedBooks = books.map(book => {
      book.title = "Title: " + book.title;
      book.author = "Author: " + book.author;
      return book;
    });
  
    console.log('Modified Books:');
    modifiedBooks.forEach(book => book.displayInfo());
  }
  
  
  
  
  addBook('1984', 'George Orwell', 328);
  addBook('To Kill a Mockingbird', 'Harper Lee', 281);
  addBook('Brave New World', 'Aldous Huxley', 268);
  addBook('The Little Prince', 'Antoine de Saint-Exupéry', 96);
 
  displayBooks();
  
  filterBooksByPages();
  
  modifyBookTitlesAndAuthors();
  
  searchByTitle('1984');
  searchByTitle('Harry Potter');
  
  searchByAuthor('George Orwell');
  searchByAuthor('Aldous Huxley');
  
  searchByTitle('The Great Gatsby');
  searchByAuthor('Unknown Author');
  