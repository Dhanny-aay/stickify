import logo from '../images/logo.png';
import rightArr from '../images/arrow-right1.png'
import collab from '../images/collab1.png';
import fra from '../images/Frame.png';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const OnboardIV = () => {
    const Navigate = useNavigate();
    const isMobile = window.innerWidth < 768;
    if(!isMobile){
        Navigate('/notes')
    }
    else{}
    return ( 
        <motion.div 
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        exit={{x:-100, opacity:0}}
        transition={{delay:0.2}}
        className=' flex-col flex justify-center items-center py-6 h-[100vh] md:h-full'>
            <span className='flex flex-row md:space-x-1 items-center justify-center'>
                <img src={ logo } className='' alt="" />
                <p className=" font-Baloo text-2xl text-[#06003C] md:text-3xl font-medium">Stickify</p>
            </span>
            <div className=" w-full h-full space-y-8 flex flex-col justify-center items-center px-4">
                <img src={ collab } className='' alt="" />
                <p className=' font-Baloo text-lg font-normal text-[#121212] text-center'>Organize, Collaborate, and Create with Ease using Stickify's Unique Features.</p>
                <Link className='w-full text-[#121212] font-Baloo text-lg h-[61px] rounded-[30px] flex justify-center items-center bg-[#fce681]' to='/notes'>
                   Get Started
                </Link>
            </div>
        </motion.div>
     );
}
 
export default OnboardIV;