import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  insertSearchTerm,
  toggleGenre,
  togglePublicationYear,
} from "../../redux/features/filter/filterSlice";
import Select from "react-select";

const SearchBar = () => {
  const { searchTerm, genre, publicationDate } = useAppSelector(
    (state) => state.filter
  );
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const truthyFilter = {
      ...(searchTerm && { searchTerm: searchTerm }),
      ...(genre && { genre: genre }),
      ...(publicationDate && { publicationDate: publicationDate }),
    };
    console.log(truthyFilter);
  };
  const handleSearchField = (event: {
    preventDefault: () => void;
    target: { value: string | undefined };
  }) => {
    dispatch(insertSearchTerm(event.target.value));
  };

  const handleClear = () => {
    dispatch(insertSearchTerm(""));
  };

  const handleGenreChange = (selectedOption: { value: any } | null) => {
    dispatch(toggleGenre(selectedOption?.value || null));
  };
  const handlePublicationYearChange = (selectedOption: any) => {
    dispatch(togglePublicationYear((selectedOption as any)?.value || null));
  };

  const genreOptions = [
    { value: "Fiction", label: "Fiction" },
    { value: "Mystery", label: "Mystery" },
    { value: "Romance", label: "Romance" },
    { value: "Science Fiction", label: "Science Fiction" },
    { value: "Fantasy", label: "Fantasy" },
    { value: "Thriller", label: "Thriller" },
    { value: "Horror", label: "Horror" },
    { value: "Historical Fiction", label: "Historical Fiction" },
    { value: "Adventure", label: "Adventure" },
    { value: "Crime", label: "Crime" },
    { value: "Dystopian", label: "Dystopian" },
    { value: "Young Adult", label: "Young Adult (YA)" },
    { value: "Biography", label: "Biography" },
    { value: "Non-Fiction", label: "Non-Fiction" },
    { value: "Self-Help", label: "Self-Help" },
  ];
  // Generate an array of years from 1800 to the present year
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1799 },
    (_, index) => currentYear - index
  );

  const yearOptions = years.map((year) => ({
    value: year,
    label: year.toString(),
  }));

  return (
    <div className="w-full pt-6 px-3 md:px-5 lg:px-10 mb-5 mx-auto">
      <h2 className="text-2xl text-gray-600 font-bold text-center mb-5">
        Find Your Books
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
        <div className=" flex justify-center lg:justify-start  items-center mt-2">
          <form
            onSubmit={handleSearch}
            className="w-[60%] border-2   rounded-full px-8 flex justify-between items-center h-10 text-sm border-indigo-600"
          >
            <input
              type="text"
              placeholder="Search by title or author..."
              className=" w-full outline-none bg-transparent border-none focus:border-none focus:outline-none   focus:ring-[0px] "
              value={searchTerm}
              onChange={handleSearchField}
            />
            <button type="submit">
              <BiSearch className="h-6 w-6 text-black" />
            </button>
            <button type="button" onClick={handleClear}>
              <RxCross2 className="h-6 w-6 text-black" />
            </button>
          </form>
        </div>
        <div className=" flex items-center justify-center lg:justify-end mt-4 ">
          <div>
            <Select
              options={genreOptions}
              isClearable
              value={
                genreOptions.find((option) => option.value === genre) || null
              }
              onChange={handleGenreChange}
              placeholder="Select Genre"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "blue" : "blue",
                  borderWidth: "2px",
                }),
              }}
            />
          </div>

          <div>
            <Select
              options={yearOptions}
              isClearable
              value={
                yearOptions.find(
                  (option) => option.value === publicationDate
                ) || null
              }
              onChange={handlePublicationYearChange}
              placeholder="Select Publication Year"
              className="rounded-lg px-4 py-2 basic-single"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "blue" : "blue",
                  borderWidth: "2px",
                }),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
