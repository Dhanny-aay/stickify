import collection from '../images/collection.png';
import search from '../images/search.png';
import settings from '../images/setting.svg';
import trash from '../images/trash.png';
import add from '../images/add.png';
import edit from '../images/edit.png';
import Popup from './popup';
import { useState } from 'react';


const Home = () => {
    const[showPopup, setShowPopup] = useState(true)
    return (
        <div className=''>
            {showPopup &&(<Popup/>)}
            <div className=" lg:py-[35px] lg:px-[80px] p-6 relative">
                <div className=" navbar flex flex-row justify-between items-center">
                    <p className=' font-Labrada lg:text-3xl text-xl font-bold'>My Notes</p>
                    <span className=" flex flex-row space-x-5">
                        <img src={ search } className=' w-6 lg:w-[32px] cursor-pointer' alt="search" />
                        <img src={ collection } className=' w-6 lg:w-[32px] cursor-pointer' alt="collection" />
                        <img src={ settings } className= ' w-6 lg:w-[32px] cursor-pointer' alt="setting" />
                    </span>
                </div>
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
                <button className=' ml-auto flex px-[16px] mt-2 py-[10px] bg-[#f1f1f1] rounded-[20px] font-Labrada text-base font-semibold '>+  Add Note</button>
                <button className=' w-[60px] h-[60px] rounded-[50%] bg-white shadow-sm fixed bottom-6'></button>
            </div>
        </div>
     );
}
 
export default Home;