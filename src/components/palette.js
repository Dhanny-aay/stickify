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
        <div className=" z-[999999]">
            <p className=" font-Baloo font-medium text-lg">Background Color</p>
            <div className="flex lg:flex-row flex-col w-full mt-[16px] lg:space-x-[10px] items-center justify-between">
                <div className=" flex flex-row lg:w-1/2 w-full justify-between h-[52px]">
                    <input type="button" onClick={handleClick} value='#D5B3D6' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#D5B3D6] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#98B6EC' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#98B6EC] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#FFF9E1' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#FFF9E1] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#F1f1f1' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#F1f1f1] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#FF6F00' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#FF6F00] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#3F51B5' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#3F51B5] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#00BCD4' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#00BCD4] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#009688' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#009688] hover:border hover:border-black focus:border focus:border-black" />
                </div>
                <div className=" flex flex-row lg:w-1/2 w-full mt-0 md:mt-3 lg:mt-0 justify-between h-[52px]">
                    <input type="button" onClick={handleClick} value='#FCE681' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#FCE681] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#FF5722' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#FF5722] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#FF4081' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#FF4081] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#E91E63' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#E91E63] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#9C27B0' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#9C27B0] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#4CAF50' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#4CAF50] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#8BC34A' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#8BC34A] hover:border hover:border-black focus:border focus:border-black" />
                    <input type="button" onClick={handleClick} value='#FF9800' className="bgColor noteColor w-[32px] md:w-[50px] rounded-[50%] text-transparent h-[32px] md:h-full bg-[#FF9800] hover:border hover:border-black focus:border focus:border-black" />
                </div>
            </div>
        </div>
     );
}
 
export default Palette;