import { Button } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useDeleteBookMutation } from "../../redux/features/book/bookApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

const DeleteConfirm = ({ visible, onClose }) => {
 

  const { bookId } = useParams()
  const { _id: userId } = useAppSelector((state) => state.user.user)
  const navigate = useNavigate()

  const [deleteBook, { isError, isSuccess, isLoading, }] =
    useDeleteBookMutation()

  const handleConfirm = () => {
    deleteBook({ bookId, userId })
  }

  useEffect(() => {
    if (!isLoading && isError) {
      
      toast("action can not be done")
    }
  }, [isError, isLoading])

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast('Succefully deleted book')
      navigate("/")
    }
  }, [isSuccess, isLoading,  navigate])

  if (!visible) return null;





  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20">
        <div className="w-[350px] h-52 shadow-lg rounded-md bg-white text-black p-4 flex flex-col items-center justify-center">
      <h2 className="text-xl font-medium">
        Are you sure want to delete This Book?
      </h2>
      <div className="flex justify-evenly mt-5 gap-4">
        <Button  onClick={handleConfirm} size="xs">Confirm</Button>
        <Button onClick={onClose} size="xs">Cancel</Button>
      </div>
    </div>
    </div>
  );
};

export default DeleteConfirm;
