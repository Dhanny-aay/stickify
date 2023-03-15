import { useEffect, useState } from "react";
const Palette = (props) => {

    const [noteBg, newNoteBg] = useState('');

    //color selector
    const handleClick = e =>{
        newNoteBg(e.target.value);
        // console.log('value is:', e.target.value);
    }
    useEffect(()=>{
        props.GetnoteBgColor(noteBg);
    }, [noteBg])


    return ( 
        <div className="  mt-[64px] z-[999999]">
            <p className=" font-Labrada font-semibold text-lg">Choose Background</p>
            <div className="flex md:flex-row flex-col w-full mt-1">
                <div className=" flex flex-row md:w-1/3 w-full h-[52px]">
                    <input type="button" onClick={handleClick} value='#9747FF' className="bgColor text-transparent noteColor w-[calc(100%/7)] h-full bg-[#9747FF]" />
                    <input type="button" onClick={handleClick} value='#D5B3D6' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#D5B3D6]" />
                    <input type="button" onClick={handleClick} value='#98B6EC' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#98B6EC]" />
                    <input type="button" onClick={handleClick} value='#EAE4EE' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#EAE4EE]" />
                    <input type="button" onClick={handleClick} value='#FFF9E1' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#FFF9E1]" />
                    <input type="button" onClick={handleClick} value='#FFFFFF' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#FFFFFF]" />
                    <input type="button" onClick={handleClick} value='#FF6F00' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#FF6F00]" />
                </div>
                <div className=" flex flex-row md:w-1/3 w-full h-[52px]">
                    <input type="button" onClick={handleClick} value='#FCE681' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#FCE681]" />
                    <input type="button" onClick={handleClick} value='#FF5722' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#FF5722]" />
                    <input type="button" onClick={handleClick} value='#FF4081' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#FF4081]" />
                    <input type="button" onClick={handleClick} value='#F44336' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#F44336]" />
                    <input type="button" onClick={handleClick} value='#E91E63' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#E91E63]" />
                    <input type="button" onClick={handleClick} value='#9C27B0' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#9C27B0]" />
                    <input type="button" onClick={handleClick} value='#673AB7' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#673AB7]" />
                </div>
                <div className=" flex flex-row md:w-1/3 w-full h-[52px]">
                    <input type="button" onClick={handleClick} value='#3F51B5' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#3F51B5]" />
                    <input type="button" onClick={handleClick} value='#2196F3' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#2196F3]" />
                    <input type="button" onClick={handleClick} value='#00BCD4' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#00BCD4]" />
                    <input type="button" onClick={handleClick} value='#009688' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#009688]" />
                    <input type="button" onClick={handleClick} value='#4CAF50' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#4CAF50]" />
                    <input type="button" onClick={handleClick} value='#8BC34A' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#8BC34A]" />
                    <input type="button" onClick={handleClick} value='#FF9800' className="bgColor noteColor w-[calc(100%/7)] text-transparent h-full bg-[#FF9800]" />
                </div>
            </div>
        </div>
     );
}
 
export default Palette;