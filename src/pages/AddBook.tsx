

const AddBook = () => {
    return (
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form  className="space-y-4">
            <div>
              <label htmlFor="title" className="block font-medium text-gray-700">
                Title
              </label>
              <input
                required
                type="text"
                id="title"
                name="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
              />
            </div>
    
            <div>
              <label htmlFor="author" className="block font-medium text-gray-700">
                Author
              </label>
              <input
                required
                type="text"
                id="author"
                name="author"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
              />
            </div>
    
            <div>
              <label htmlFor="genre" className="block font-medium text-gray-700">
                Genre
              </label>
              <select
                required
                id="genre"
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
                required
                type="text"
                id="thumbnail"
                name="thumbnail"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
              />
            </div>
    
            <div>
              <label htmlFor="description" className="block font-medium text-gray-700">
                Description
              </label>
              <textarea
                required
                id="description"
                name="description"
                maxLength={700}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
              />
            </div>
    
            <div>
              <label htmlFor="publicationDate" className="block font-medium text-gray-700">
                Publication Date
              </label>
              <input
                required
                type="date"
                id="publicationDate"
                name="publicationDate"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-main"
              />
            </div>
    
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary-main bg-blue-500 text-white font-semibold rounded-lg focus:outline-none"
            >
              Add Book
            </button>
          </form>
        </div>
      );
};

export default AddBook;