import { SlCalender } from "react-icons/sl";
import { BiBookBookmark } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import Loader from "../components/ui/Loader";
import toast from "react-hot-toast";
import { addToReadList, addWishlist } from "../redux/features/user/userThunk";
import Reviews from "../components/reviews";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import DeleteConfirm from "../components/modal/DeleteConfirm";
import { useState } from "react";
import { Button } from "flowbite-react";

const BookDetails = () => {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnclose = () => {
    setShowMyModal(false);
  };

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);
  const { bookId } = useParams();

  const { data, isLoading } = useGetSingleBookQuery(bookId);
  if (isLoading) {
    return <Loader />;
  }

  const bookDetails = data.data;
  const handleWishlist = () => {
    if (!user.email) {
      toast("user null");
      return;
    }
    const bookId: string = bookDetails._id;

    if (user.wishlist && user.wishlist.includes(bookId)) {
      // If book is already in wishlist
      const updatedWishlist = user?.wishlist?.filter((id) => id !== bookId);
      dispatch(
        addWishlist({
          userId: user._id!,
          userInfo: { wishlist: updatedWishlist },
        })
      );
      toast("removed");
    } else {
      // if book is not in the wishlist
      const updatedWishlist = [...(user.wishlist ?? []), bookId];

      dispatch(
        addWishlist({
          userId: user._id!,
          userInfo: { wishlist: updatedWishlist },
        })
      );
      toast("added");
    }
  };

  const handleReadingList = () => {
    if (!user.email) {
      toast("user null");
      return;
    }

    const bookId: string = bookDetails._id;

    if (user.readingList && user.readingList.includes(bookId)) {
      // Book is already in the readlist
      const updatedReadlist = user.readingList.filter((id) => id !== bookId);
      dispatch(
        addToReadList({
          userId: user._id!,
          userInfo: { readingList: updatedReadlist },
        })
      );
      toast("removed");
    } else {
      // if book is not in the readlist
      const updatedReadlist = [...(user.readingList ?? []), bookId];
      dispatch(
        addToReadList({
          userId: user._id!,
          userInfo: { readingList: updatedReadlist },
        })
      );
      toast("added");
    }
  };

  return (
    <>
      <div>
        <div className="w-full  flex px-3 md:px-6 lg:px-10 pt-12">
          <div className="w-1/3">
            <div className="w-full">
              <img
                className="w-full h-auto"
                src={bookDetails.thumbnail}
                alt=""
              />
            </div>
            <div className="w-full flex flex-col mt-5 md:mt-0 md:flex-row justify-center gap-5 pt-3">
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-gray-100 hover:border hover:text-black text-white rounded-md"
                onClick={handleWishlist}
              >
                {user.wishlist?.includes(bookDetails._id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"}
              </button>
              <button
                className="px-4 py-2 bg-green-500 hover:bg-gray-100 hover:border hover:text-black text-white rounded-md"
                onClick={handleReadingList}
              >
                {user.readingList?.includes(bookDetails._id)
                  ? "Remove from Readlist"
                  : "Add to Readlist"}
              </button>
            </div>
          </div>
          <div className="w-2/3 flex flex-col justify-between h-[500px] px-5">
            <div>
              <h2 className="text-3xl font-bold text-gray-700 text-center ">
                {bookDetails.title}
              </h2>
              <p className="text-center font-bold text-gray-500 pt-2">
                By {bookDetails.author}
              </p>
              <p className="h-[250px] w-full rounded-md overflow-auto border p-4 mt-5 font-serif">
                {bookDetails.description}
              </p>
              {user.email && (
                <div className="pt-12 flex gap-5 -mt-5 md:mt-0">
                  <Link to={`/edit-book/${bookId}`}>
                    {" "}
                    <Button
                      className="transition ease-in-out delay-150 hover:scale-105 duration-100"
                      size="xs"
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button
                    className="transition ease-in-out delay-150 hover:scale-105 duration-100"
                    onClick={() => setShowMyModal(true)}
                    size="xs"
                  >
                    Delete
                  </Button>
                  <DeleteConfirm
                    visible={showMyModal}
                    onClose={handleOnclose}
                  />
                </div>
              )}
            </div>
            <div className=" w-full flex flex-col  md:flex-row mt-4 justify-evenly text-gray-600 font-semibold">
              <p className="flex items-center gap-2">
                <SlCalender />
                <span>Publication Date: {bookDetails.publicationDate}</span>
              </p>
              <p className="flex items-center gap-2">
                <BiBookBookmark /> <span>Genre: {bookDetails.genre}</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" -mt-10 md:mt-0">
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default BookDetails;
