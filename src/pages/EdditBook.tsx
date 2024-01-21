import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import Loader from "../components/ui/Loader";
import EditForm from "../components/EditForm";


const EdditBook = () => {
  const { bookId } = useParams();
 

const {data, isLoading, isError} = useGetSingleBookQuery(bookId)

let content = null;
 if(isLoading){
    content = <Loader/>
 }
 if(!isLoading && isError){
  content = <div><p className="text-4xl text-red-900">There is an Error occured</p></div>
 }
 if(!isLoading && !isError){
  content = <EditForm bookDetails ={data?.data}/>
 }

  



  return (
    <div className="p-8 h-screen overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
      {content}
    </div>
  );
};

export default EdditBook;
