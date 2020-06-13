console.log("************** DELIVERABLE 04 *********************");

// 4. READ BOOKS

// Crea una función isBookRead que reciba una lista de libros y un título 
// y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano. 
// En caso de no existir el libro devolver false.
// TIP: Existe un método de Array.prototype que te ayudará a 
// buscar según un patrón.

interface BookType {
    title: string;
    isRead: boolean;
}

function isBookRead(books: BookType[] = [], titleToSearch: string = ""): boolean {
    const findedBook: BookType = books.find(book => book.title === titleToSearch);
    return findedBook ? findedBook.isRead : false;
}

const books: BookType[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

console.log(`## Exercise 04 - READ BOOKS ## 
"Devastación" is read?: ${isBookRead(books, "Devastación")}
"Canción de hielo y fuego" is read?: ${isBookRead(books,"Canción de hielo y fuego")}
"Los Pilares de la Tierra" is read?: ${isBookRead(books, "Los Pilares de la Tierra")}`);