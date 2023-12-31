import ALLBookList from "../components/ui/ALLBookList";
import SearchBar from "../components/ui/SearchBar";


const AllBooks = () => {
    return (
        <div className='flex flex-col overflow-hidden' style={{ height: `calc(100vh - ${78}px)` }}>
            <SearchBar />
            <ALLBookList />
        </div>
    );
};

export default AllBooks;