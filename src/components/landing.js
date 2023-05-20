import logo from '../images/logo.svg';
import rightArrow from '../images/arrow-right.svg';
import flash from '../images/flash.svg';
import musk from '../images/PlaneRight.png';
import more from '../images/more.png';
import hero from '../images/heroImg.svg';

const LandingPage = () => {
    return ( 
        <>
        <div className=" flex flex-row justify-between items-center md:px-10 md:py-6 px-4 py-2">
            <span className=' flex flex-row md:space-x-1 items-center'>
                <img src={ logo } alt="" />
                <p className=" font-Baloo text-xl md:text-2xl font-medium">Stickify</p>
            </span>
            <span className=' hidden md:flex flex-row space-x-4 items-center'>
                <p className=' text-base font-Quicksand font-semibold'>Home</p>
                <p className=' text-base font-Quicksand font-semibold'>Feature</p>
                <p className=' text-base font-Quicksand font-semibold'>About</p>
                <p className=' text-base font-Quicksand font-semibold'>Contacts</p>
            </span>
            <span className=' hidden md:flex flex-row space-x-4 items-center'>
                <p className='text-lg font-Quicksand font-bold'>Sign Up</p>
                <button className=' w-[170px] h-[60px] pl-5 pr-2 bg-[#121212] rounded-[60px] text-white flex flex-row justify-between items-center'>
                    <p className=' text-lg font-Quicksand font-bold '>Sign in</p>
                    <button className=' w-[50px] h-[50px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center'>
                        <img src={ rightArrow } alt="" />
                    </button>
                </button>
            </span>
            <img src={ more } className='block md:hidden' alt="" />
        </div>
        <div className=' w-full md:p-11 p-5'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className=' flex flex-col'>
                    <span className=' flex flex-row items-center space-x-2'>
                        <img src={ flash } alt="" />
                        <p className=' text-base font-Quicksand font-semibold'>Level Up Your Productivity Game</p>
                    </span>
                    <span className=' relative mt-3 md:w-[500px] w-[73%]'>
                        <p className=' capitalize w-full md:leading-[52px] font-Baloo text-2xl md:text-[60px] font-semibold '>The Future of Note-Taking and Task Management</p>
                        <img src={ musk } className=' md:w-[150px] md:h-[150px] w-[120px] h-[120px] absolute md:-top-[60px] md:right-0 -top-[0px] -right-8'  alt="" />
                    </span>
                    <span className=' relative md:w-[500px] w-full flex flex-col md:flex-row justify-between items-center mt-8 md:mt-16'>
                        <span className='block ml-auto md:ml-0 w-[120px] h-[120px] bg-[#fce681] rounded-[50%]'></span>
                        <p className='md:w-[350px] w-full font-Quicksand text-sm md:text-[16px] text-[#121212] leading-[25px] font-medium'>Converting your ideas into edited-able sticky notes, make productivity a breeze with Stickify's intuitive note-taking system.</p>
                    </span>
                    <span className=' md:w-[500px] w-full h-[70px] md:h-[80px] relative rounded-[60px] mt-6'>
                        <input type="text" className=' w-full rounded-[60px] border border-[#121212]  h-full p-3 placeholder:text-lg placeholder:font-semibold placeholder:text-black placeholder:font-Quicksand text-lg font-semibold font-Quicksand text-black' placeholder='Enter Your Mail' />
                        <button className='absolute top-2 right-1 w-[140px] md:w-[170px] h-[50px] md:h-[60px] pl-5 pr-2 bg-[#121212] rounded-[60px] text-white flex flex-row justify-between items-center'>
                            <p className=' text-base md:text-lg font-Quicksand font-bold '>Sign in</p>
                            <button className=' w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center'>
                                <img src={ rightArrow } alt="" />
                            </button>
                        </button>
                    </span>
                </div>
                <div>
                    <img src={ hero } className=' h-[500px] w-[465px]' alt="" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default LandingPage;