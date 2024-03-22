document.addEventListener("DOMContentLoaded", function() {
    // Define inventory list to store book objects
    var inventory = [];
    const searchBtn = document.getElementById("searchBtn");
    var addBtn = document.getElementById("addBtn");

    var nameInput = document.getElementById("bookTitle")
    var authInput = document.getElementById("bookAuth")
    var readInput = document.getElementById("readChoice")

    // Adding event listener to the button
    // addBtn.addEventListener("click", function() {
    //     console.log(nameInput.value);
    //     console.log(authInput.value);
    //     console.log(readInput.value);
        
    // });
    searchBtn.addEventListener("click", function() {
        const searchInput = document.getElementById("searchInput")
        console.log(searchInput.value);
        
    });


    // Function to add a new book to the inventory
    // function add(name, author, read) {
    //     var newBook = {
    //         name: name,
    //         author: author,
    //         read: read
    //     };
    //     inventory.push(newBook);
    // }

    // Function to search for a book by its name
    function search(name) {
        for (var i = 0; i < inventory.length; i++) {
            if (inventory[i].name === name) {
                return inventory[i];
            }
        }
        return null; // Return null if book not found
    }

    // Function to output the contents of the inventory as a table in the HTML DOM
    function output() {
        var table = document.getElementById("bookTable");
        if (!table) {
            table = document.createElement("table");
            table.setAttribute("id", "bookTable");
            document.body.appendChild(table);
        }

        // Clear previous table content
        table.innerHTML = "";

        // Create table header
        var headerRow = table.insertRow();
        var nameHeader = headerRow.insertCell();
        nameHeader.textContent = "Name";
        var authorHeader = headerRow.insertCell();
        authorHeader.textContent = "Author";
        var readHeader = headerRow.insertCell();
        readHeader.textContent = "Read";

        // Create table rows for each book in the inventory
        inventory.forEach(function(book) {
            var row = table.insertRow();
            row.classList.add(book.name); // Add class based on book name

            var nameCell = row.insertCell();
            nameCell.textContent = book.name;

            var authorCell = row.insertCell();
            authorCell.textContent = book.author;

            var readCell = row.insertCell();
            readCell.textContent = book.read ? "Yes" : "No";
        });
    }

    output(); // Display inventory in table format
});