import ALLBookList from "../components/ui/ALLBookList";
import SearchBar from "../components/ui/SearchBar";

const AllBooks = () => {
  return (
    <div className="w-full">
      <SearchBar />
      <ALLBookList />
    </div>
  );
};

export default AllBooks;
