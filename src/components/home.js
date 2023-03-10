import collection from '../images/collection.png';
import search from '../images/search.png';
import settings from '../images/setting.svg';
import plus from '../images/plus.png';
import Palette from './palette';
import close from '../images/close.png';
import gallery from '../images/export.png';
import { useState } from 'react';
import Notes from './notes';


const Home = () => {
    const[showPopup, setShowPopup] = useState(false);
    const[showBg, setShowBg] = useState(true);
    const togglePopup = ()=>{
        if(showPopup === false){
            setShowPopup(true);
            setShowBg(false);
        };
    };

    const toggleBg = ()=>{
        if(showBg === false){
            setShowPopup(false);
            setShowBg(true);
        };
    };
    return (
        <div>
           {showPopup && <div id='popUp' className="w-full absolute bg-white lg:py-[35px] lg:px-[80px] p-6 top-0 left-0 z-50">
                <div className=" navbar flex flex-row justify-between items-center">
                        <p className=' font-Labrada lg:text-3xl text-xl font-bold'>Create Note</p>
                        <span className=" flex flex-row justify-center items-center">
                            <img src={ close } onClick={ toggleBg } className=' w-[32px] h-[32px] cursor-pointer' alt="close" />
                        </span>
                </div>
                <div className=' md:mt-[24px] mt-8'>
                    <div className=' w-full flex md:flex-row flex-col mt-4 justify-between md:space-y-0'>
                        <div className=' md:w-[50%] w-full h-[250px] mr-5 flex flex-col space-y-3'>
                            <div className=''>
                                <p className=' font-Labrada font-semibold text-lg'>Topic</p>
                                <input type="text" className=' font-normal text-sm p-3 font-Labrada bg-[#f1f1f1] rounded-[20px] w-full md:h-[60px] h-12 mt-[6px]' />
                            </div>
                            <div className=''>
                                <p className=' font-Labrada font-semibold text-lg'>Description</p>
                                <input type="text" className=' p-3 font-Labrada font-normal text-sm bg-[#f1f1f1] rounded-[20px] w-full md:h-[150px] h-28 mt-[6px]' />
                            </div>
                        </div>
                        <div className=' md:w-[50%] w-full md:h-[250px] h-48 md:ml-5'>
                            <p className=' font-Labrada font-semibold text-lg '>Note</p>
                            <input className=' bg-[#f1f1f1] w-full h-full mt-3 rounded-[20px] p-3 font-Labrada font-normal text-sm'/>
                        </div>
                    </div>
                </div>
                <Palette/>
                <div className=' mt-[62px] w-full h-[150px] bg-[#f1f1f1] rounded-[20px] flex flex-col justify-center items-center space-y-3'>
                    <img src={ gallery } className='' alt="" />
                    <button className=' px-4 py-2 bg-white rounded-[10px] font-Labrada text-base font-semibold'>Choose picture</button>
                    <p className='font-Labrada text-xs font-medium text-[rgba(0,0,0,0.5) ]'>Maximum picture size: 5mb</p>
                </div>
                <button className=' px-4 py-2 font-Labrada text-base font-semibold bg-[#f1f1f1] rounded-[10px] mb-11 mt-6 '>Save Note</button>
            </div>}
          { showBg && <div id='bg' className=" lg:py-[35px] lg:px-[80px] p-6 relative">
                <div className=" navbar flex flex-row justify-between items-center">
                    <p className=' font-Labrada lg:text-3xl text-xl font-bold'>My Notes</p>
                    <span className=" flex flex-row space-x-5">
                        <img src={ search } className=' w-6 lg:w-[32px] cursor-pointer' alt="search" />
                        <img src={ collection } className=' w-6 lg:w-[32px] lg:block hidden cursor-pointer' alt="collection" />
                        <img src={ settings } className= ' w-6 lg:w-[32px] cursor-pointer' alt="setting" />
                    </span>
                </div>
                <Notes/>
                <button onClick={ togglePopup } className=' w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f1f1f1] shadow fixed bottom-6 right-6 md:bottom-16 md:right-16'><img src={ plus } alt="" /></button>
            </div>}
        </div>
     );
}
 
export default Home;