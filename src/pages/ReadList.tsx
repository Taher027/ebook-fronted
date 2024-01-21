import { IBook } from "../components/HomeBooks/HomeBookItems";
import ReadingListItem from "../components/ReadingListItem";
import Loader from "../components/ui/Loader";
import { useGetUserReadingListQuery } from "../redux/features/user/userApi";
import emptySvg from '../assets/empty.svg'
import { Footer } from "flowbite-react";
import { useAppSelector } from "../redux/hooks";
const ReadList = () => {
  const {user}=useAppSelector(state => state.user)
  const { data, isLoading } = useGetUserReadingListQuery(user.userId, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="py-10">
        <h1 className="text-3xl text-center font-bold text-gray-700">
          Currently Reading
        </h1>
      </div>
      <div className="flex flex-col  overflow-auto px-10">
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
                Finished
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 overflow-y-auto">
            {data?.data?.readingList?.map((book: IBook) => (
              <ReadingListItem key={book._id} book={book} />
            ))}
          </tbody>
        </table>
        {data?.data?.readingList?.length === 0 && (
          <div>
            <div className="flex items-center justify-center pt-12">
              <div className="">
                <img src={emptySvg} alt="Loading" className="h-60 w-60" />
                <p className="text-center text-2xl py-3">List is empty</p>
              </div>
            </div>
          </div>
        )}
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ReadList;
