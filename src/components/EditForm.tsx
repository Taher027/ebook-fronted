import { useState } from "react";
import { useEditBookMutation } from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hooks";
import { IBook } from "./HomeBooks/HomeBookItems";


const EditForm = ({ bookDetails }: { bookDetails: IBook }) => { 

  const {user} = useAppSelector(state => state.user)
  console.log(user);
  const {
    _id,
    title: initialTitle,
    thumbnail: initialThumbnail,
    author: initialAuthor,
    genre: initialGenre,
    description: initialDescription,
    publicationDate: initialPublicationDate,
  } = bookDetails;
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [genre, setGenre] = useState(initialGenre);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [description, setDescription] = useState(initialDescription);
  const [publicationDate, setPublicationDate] = useState(
    initialPublicationDate
  );
  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      
      title,
      author,
      genre,
      thumbnail,
      description,
      publicationDate,
      addedBy:user._id
    };
    editBook({ data, id:_id})
    
      
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block font-medium text-gray-700">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          type="text"
          name="title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
        />
      </div>

      <div>
        <label htmlFor="author" className="block font-medium text-gray-700">
          Author
        </label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          type="text"
          name="author"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
        />
      </div>

      <div>
        <label htmlFor="genre" className="block font-medium text-gray-700">
          Genre
        </label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
          name="genre"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
        >
          <option value="">Select Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Adventure">Adventure</option>
          <option value="Crime">Crime</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Young Adult">Young Adult (YA)</option>
          <option value="Biography">Biography</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Self-Help">Self-Help</option>
        </select>
      </div>

      <div>
        <label htmlFor="thumbnail" className="block font-medium text-gray-700">
          Image Url
        </label>
        <input
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
          type="text"
          name="thumbnail"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          name="description"
          maxLength={700}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
        />
      </div>

      <div>
        <label
          htmlFor="publicationDate"
          className="block font-medium text-gray-700"
        >
          Publication Date
        </label>
        <input
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          required
          type="date"
          name="publicationDate"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
        />
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="w-full py-2 px-4 bg-primary-main bg-blue-500 text-white font-semibold rounded-lg focus:outline-none"
      >
        Edit Book
      </button>
      <div>
        {isError && <p className="text-4xl text-red-800"> got error </p> }
        {isSuccess && <p className="text-4xl text-green-700">Edit successfull</p> }
      </div>
    </form>
  );
};

export default EditForm;
