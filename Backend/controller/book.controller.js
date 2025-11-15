import Book from "../model/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    console.log("err:", err);
    return res.status(500).json({ message: err.message });
  }
};
