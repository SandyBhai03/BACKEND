import express from "express";

const app = new express();


const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publication_year: 1960,
      genre: ["Fiction", "Classic"],
      description:
        "A classic novel depicting racial injustice in the American South.",
      cover_image: "https://fakeimg.pl/667x1000/cc6600",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publication_year: 1949,
      genre: ["Dystopian", "Science Fiction"],
      description: "A dystopian novel portraying a totalitarian society.",
      cover_image: "https://fakeimg.pl/667x1000/cc6600",
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publication_year: 1813,
      genre: ["Classic", "Romance"],
      description:
        "A classic novel exploring themes of love, marriage, and social norms.",
      cover_image: "https://fakeimg.pl/667x1000/cc6600",
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publication_year: 1925,
      genre: ["Fiction", "Classic"],
      description:
        "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
      cover_image: "https://fakeimg.pl/667x1000/cc6600",
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      publication_year: 1851,
      genre: ["Fiction", "Adventure"],
      description:
        "The epic tale of Captain Ahab's obsession with the white whale.",
      cover_image: "https://fakeimg.pl/667x1000/cc6600",
    },
  ];
  
  app.listen(5100, () => {
    console.log("Server is running on port 5100");
  });
  
  app.get("/", (req, res) => {
    res.send("Learning API'S from Internshala")
  })

  app.get("/books", (req, res) => {
    res.send(books)
  })