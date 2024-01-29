import homeBanner from '../../assets/homeBanner/HomeBanner.jpg'

const HomeBanner = () => {
    return (
        <div className='relative w-full h-[70vh] flex justify-center' style={{backgroundImage:`url(${homeBanner})`, backgroundPosition:"center", backgroundSize:"cover"}}>
            <div className='w-full top-0 left-0 h-full absolute bg-black opacity-65 z-5'></div>
            <div className='text-white relative flex items-center justify-center text-xl -skew-x-12 z-10'><h3 className='text-2xl px-5 font-semibold'>“Books are the mirrors of the soul.”  ― Virginia Woolf</h3></div>
        </div>
    );
};

export default HomeBanner;