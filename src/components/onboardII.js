import logo from '../images/logo.png';
import rightArr from '../images/arrow-right1.png'
import collab from '../images/collab2.png';
import fra from '../images/Fram.png';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const OnboardII = () => {
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
                <img src= { fra } alt="" />
                <span className=' w-full h-[61px] rounded-[30px] p-1 pr-4 bg-[#fce681] flex flex-row items-center justify-between'>
                    <Link className='w-[100px] h-full bg-[#121212] rounded-[30px]' to='/welcomeIII'><button className=' w-full h-full px-4 flex flex-row justify-between items-center'>
                        <p className=' text-lg font-Baloo text-white font-normal'>Next</p>
                        <img src={ rightArr } alt="" />
                    </button></Link>
                    <Link to='/notes'><p className=' font-Baloo text-lg font-medium text-[#121212]'>Skip</p></Link>
                </span>
            </div>
        </motion.div>
     );
}
 
export default OnboardII;