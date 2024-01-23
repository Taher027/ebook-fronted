

import { useEffect, useState } from 'react';
import { useGetAllBooksQuery } from '../../redux/features/book/bookApi';
import Loader from '../ui/Loader';
import HomeBookItem from './HomeBookItem';
export interface IBook {
    _id: number;
    title: string;
    author: string;
    genre: string;
    description:string;
    publicationDate: string;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
  }
const HomeBookItems = () => {
   
    const [sortedBooks, setSortedBooks] = useState<IBook[]>([])
  const { data, isLoading } = useGetAllBooksQuery(sortedBooks, {
    refetchOnMountOrArgChange: true,
  })

  useEffect(() => {
    if (!isLoading && data.data.length !== 0) {
      const sortedList = [...data.data].sort((a: IBook, b: IBook) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)
        return dateB.getTime() - dateA.getTime()
      })
      setSortedBooks(sortedList)
    }
  }, [data, isLoading])

  if (isLoading) {
    return <Loader/>
  }
   
    return (
        <div className='py-10 px-10'>
            <h2 className=" text-center text-4xl font-semibold  -skew-x-12 underline underline-offset-8 decoration-red-500 ">
          Features Books
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20">
        {data?.data?.slice(0, 12).map((book: IBook) => (
          <HomeBookItem key={book._id} book={book} />
        ))}
      </div>

        </div>
    );
};

export default HomeBookItems;

