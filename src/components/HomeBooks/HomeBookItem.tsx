// import { format } from "date-fns";
// import { Link } from "react-router-dom";

import { format } from "date-fns";
import { Link } from "react-router-dom";
import { IBook } from "./HomeBookItems";

const HomeBookItem = ({ book }: { book: IBook }) => {
  return (
    <Link to={`/books/${book._id}`}>
      <div className="w-full flex gap-3 border rounded-md shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-300">
        <div className="w-1/3 ">
          <img
            className="w-full h-[200px] object-cover rounded-l-lg"
            src={book.thumbnail}
            alt={book.title}
          />
        </div>
        <div className="p-4 w-2/3">
          <h2 className="text-lg font-semibold mb-3">
            {book.title.length > 70
              ? `${book.title.slice(0, 70)}...`
              : book.title}
          </h2>
          <p className="text-sm text-gray-700 mb-2">By{book.author}</p>
          <p className="text-sm text-gray-700 mb-2">Genre{book.genre}</p>
          <p className="text-sm text-gray-700 mb-2">
            Publication Date:{" "}
            {format(new Date(book.publicationDate), "MMMM d, yyyy")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeBookItem;
