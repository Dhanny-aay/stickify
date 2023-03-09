const Palette = () => {
    return ( 
        <div className="  mt-[64px] z-[999999]">
            <p className=" font-Labrada font-semibold text-lg">Choose Background</p>
            <div className="flex md:flex-row flex-col w-full mt-1">
                <div className=" flex flex-row md:w-1/3 w-full h-[52px]">
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#9747FF]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#D5B3D6]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#98B6EC]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#EAE4EE]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#FFF9E1]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#FFFFFF]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#FF6F00]" />
                </div>
                <div className=" flex flex-row md:w-1/3 w-full h-[52px]">
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#FCE681]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#FF5722]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#FF4081]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#F44336]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#E91E63]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#9C27B0]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#673AB7]" />
                </div>
                <div className=" flex flex-row md:w-1/3 w-full h-[52px]">
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#3F51B5]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#2196F3]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#00BCD4]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#009688]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#4CAF50]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#8BC34A]" />
                    <input type="button" className=" noteColor w-[calc(100%/7)] h-full bg-[#FF9800]" />
                </div>
            </div>
        </div>
     );
}
 
export default Palette;