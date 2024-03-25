import React, { useState } from "react";
import { Search, CheckCircle, XCircle, PlusCircle } from "lucide-react";

// Dummy data for initial state
const dummyBooksData = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://dummyimage.com/100x100/000/fff",
    pages: 320,
    isRead: false,
  },
  {
    id: 2,
    title: "The Lean Startup",
    author: "Eric Ries",
    cover: "https://dummyimage.com/100x100/111/fff",
    pages: 336,
    isRead: false,
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://dummyimage.com/100x100/222/fff",
    pages: 304,
    isRead: false,
  },
];

function BookLibrary() {
  const [booksData, setBooksData] = useState(dummyBooksData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(dummyBooksData);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = booksData.filter((book) =>
      book.title.toLowerCase().includes(value) ||
      book.author.toLowerCase().includes(value)
    );
    setFilteredBooks(filtered);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = filteredBooks.filter((book) => book.id !== id);
    setFilteredBooks(updatedBooks);
    setBooksData(updatedBooks);
  };

  // Method to mark a book as read or not
  const toggleReadStatus = (id) => {
    const updatedData = booksData.map((book) => {
      if (book.id === id) {
        return { ...book, isRead: !book.isRead };
      }
      return book;
    });
    setBooksData(updatedData);
    setFilteredBooks(updatedData);
  };

  // Method to add a new book
  const handleAddBook = () => {
    const newBook = {
      id: Date.now(), // Simple ID generation based on timestamp
      title: "New Book",
      author: "Unknown Author",
      cover: "https://dummyimage.com/100x100/444/fff",
      pages: 100,
      isRead: false,
    };
    const updatedBooks = [...booksData, newBook];
    setBooksData(updatedBooks);
    setFilteredBooks(updatedBooks);
  };

  return (
    <div className="p-5 space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Book Library</h1>
        <div className="flex items-center space-x-2">
          <input
            className="border p-2 rounded"
            placeholder="Search Books"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search color="currentColor" size={20} />
          <PlusCircle
            className="text-blue-500 cursor-pointer"
            color="currentColor"
            size={24}
            onClick={handleAddBook}
            title="Add New Book"
          />
        </div>
      </header>

      <div className="grid grid-cols-4 gap-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className="flex flex-col items-center bg-white rounded-lg shadow p-4">
            <img src={book.cover} alt={book.title} className="w-24 h-24 rounded md:w-full md:h-auto" />
            <div>
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-gray-700">by {book.author}</p>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle
                className={`${book.isRead ? 'text-green-500' : 'text-gray-400'} cursor-pointer`}
                color="currentColor"
                size={24}
                onClick={() => toggleReadStatus(book.id)}
                title="Mark as Read/Unread"
              />
              <XCircle
                className="text-red-500 cursor-pointer"
                color="currentColor"
                size={24}
                onClick={() => handleDeleteBook(book.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookLibrary;
