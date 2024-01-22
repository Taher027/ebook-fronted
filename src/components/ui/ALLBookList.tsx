import { Link } from "react-router-dom";
import { useGetAllBooksQuery } from "../../redux/features/book/bookApi";
import { useAppSelector } from "../../redux/hooks";
import Loader from "./Loader";
import { format } from "date-fns";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


const ALLBookList = () => {
    const filter = useAppSelector(state => state.filter)
    const truthyFilter = {
        ...(filter.searchTerm && {searchTerm:filter.searchTerm}),
        ...(filter.genre && {genre:filter.genre}),
        ...(filter.publicationDate &&{publicationDate:filter.publicationDate})
    }
 console.log(truthyFilter);
    const {data, isLoading }= useGetAllBooksQuery(truthyFilter,{refetchOnMountOrArgChange:true});

    if(isLoading){
        return <Loader/>
    }
    return (
        <div className="flex flex-col w-full  overflow-auto px-10">
      <table className="min-w-full divide-y divide-gray-200 flex-grow">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Thumbnail
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Author
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Genre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Publication Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 overflow-y-auto">
          {data.data.map((book: { _id: Key | null | undefined; thumbnail: string | undefined; title: string | number | boolean | any[] | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; genre: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; publicationDate: string | number | Date; }) => (
            <tr key={book._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={book?.thumbnail}
                  alt={book?.title}
                  className="h-full w-10"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  <Link to={`/books/${book._id}`}>
                    {book?.title?.length > 75
                      ? `${book?.title?.slice(0, 75)}...`
                      : book.title}
                  </Link>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{book.author}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{book.genre}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                {format(new Date(book.publicationDate), "MMMM d, yyyy")}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sticky bottom-0 w-full">
        
      </div>
    </div>
    );
};

export default ALLBookList;