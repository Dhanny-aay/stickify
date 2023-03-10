import trash from '../images/trash.png';
import add from '../images/add.png';
import edit from '../images/edit.png';

const Notes = () => {
    return ( 
        <div className='notes mt-[32px] w-full mx-auto flex flex-col md:flex-row flex-wrap justify-between'>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#C8D8EF] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#EAE4EE] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#D5B3D6] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#98B6EC] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#FFF9E1] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#FCE681] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                </div>
    );
}
 
export default Notes;