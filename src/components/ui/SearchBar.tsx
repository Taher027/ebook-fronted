import { BiSearchAlt } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { insertSearchTerm } from "../../redux/features/filter/filterSlice";

const SearchBar = () => {
    const {searchTerm, genre, publicationDate}=useAppSelector(state => state.filter);
    const dispatch = useAppDispatch()

    const handleSearch =(event: React.FormEvent)=>{
        event.preventDefault()
        const truthyFilter = {
            ...(searchTerm && {searchTerm:searchTerm}),
            ...(genre && {genre:genre}),
            ...(publicationDate && {publicationDate:publicationDate})
        }
        console.log(truthyFilter);
    }
    const handleSearchField =(event:{
        preventDefault:() => void
        target:{value:string | undefined}
    })=> {
        dispatch(insertSearchTerm(event.target.value))
    }

    const handleClear =()=>{
        dispatch(insertSearchTerm(""))
    }

    return (
        <div className="w-full flex flex-col items-center justify-center pt-6">
        {/* <AddBookmark open={open} setOpen={setOpen}  /> */}
        <h2 className="text-2xl text-gray-600 font-bold">Find books</h2>
        <div className="w-full flex items-center justify-center px-10">
          <div className="w-1/2 flex justify-start items-center mt-2">
            <form
              onSubmit={handleSearch}
              className="w-[60%] border-2 border-primary-main rounded-full px-8 flex justify-between items-center h-10 text-sm"
            >
              <input
                type="text"
                placeholder="Search by title or author..."
                className="outline-none w-full bg-transparent border-none"
                value={searchTerm}
                onChange={handleSearchField}
              />
              <button type="submit">
                <BiSearchAlt className="h-6 w-6 text-black" />
              </button>
              <button type="button" onClick={handleClear}>
                <RxCross2 className="h-6 w-6 text-black" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SearchBar;