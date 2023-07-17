import logo from '../images/logo.png';
import rightArrow from '../images/arrow-right.svg';
import flash from '../images/flash.svg';
import musk from '../images/PlaneRight.png';
import more from '../images/more.png';
import hero from '../images/heroImg.png';
import heromob from '../images/heroMobile.png';
import examse from '../images/examsec.png';
import examse1 from '../images/examsec1.png';
import examse2 from '../images/examsec2.png';
import arrLeft from '../images/arrLeft.png';
import arrRight from '../images/arrRight.png';
import rate from '../images/rate.png';
import addCircle from '../images/addcircle.png';
import queen from '../images/queen.png';
import logoBlk from '../images/logoBlk.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.remove('-translate-y-[500px]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.add('-translate-y-[500px]')
        }
    };


    return ( 

        <>
        <div id="overlay" className=" w-full bg-[#ffffffd3] backdrop-blur-sm h-[500px] flex justify-center items-center -translate-y-[500px] shadow transition-all duration-500 absolute z-[40]">
            <div className=" flex flex-col justify-center items-center space-y-5">
                <p className=" font-Quicksand text-base text-black font-medium">View</p>
                <p className=" font-Quicksand text-base text-black font-medium">Sale</p>
                <p className=" font-Quicksand text-base text-black font-medium">About</p>
                <p className=" font-Quicksand text-base text-black font-medium">Contact</p>
            </div>
            <span className=' absolute translate-x-8 bottom-5 flex flex-row space-x-3 -ml-[62px] font-medium'>
                    <Link to='/login'><button className=' px-3 py-2 text-center text-black font-Quicksand text-base rounded-md'>Sign-in</button></Link>
                    <Link to='/signup'><button className=' px-3 py-2 text-center text-white hover:bg-opacity-40 font-Quicksand text-base bg-[#121212] rounded-md'>Sign Up</button></Link>
            </span>
        </div>
        <motion.div 
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
        className=" flex flex-row justify-between items-center md:px-10 md:py-6 px-4 py-4 z-[9999999999]">
            <span className=' flex flex-row md:space-x-1 items-center z-[9999999999]'>
                <img src={ logo } className=' w-[32px] h-[32px] md:w-auto md:h-auto' alt="" />
                <p className=" font-Baloo text-xl md:text-2xl font-medium">Stickify</p>
            </span>
            <span className=' hidden md:flex flex-row space-x-10 items-center'>
                <p className=' text-base font-Quicksand font-semibold'>Home</p>
                <p className=' text-base font-Quicksand font-semibold'>Feature</p>
                <p className=' text-base font-Quicksand font-semibold'>About</p>
            </span>
            <span className=' hidden md:flex flex-row space-x-4 items-center'>
                <Link to='/signup'><p className='text-lg font-Quicksand hover:text-[#666666] font-bold'>Sign Up</p></Link>
                <Link to='/login'><button className=' w-[140px] h-[60px] pl-5 pr-2 hover:bg-opacity-40 bg-[#121212] rounded-[60px] text-white flex flex-row justify-between items-center'>
                    <p className=' text-lg font-Quicksand font-bold '>Sign in</p>
                    <button className=' w-[45px] h-[45px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center'>
                        <img src={ rightArrow } alt="" />
                    </button>
                </button></Link>
            </span>
            <img src={ more } onClick={ overlay } className='block md:hidden z-[9999999999]' alt="" />
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=' w-full md:p-11 p-5'>
            <div className='flex flex-col lg:flex-row items-center justify-around'>
                <div className=' flex flex-col'>
                    <span className=' flex flex-row items-center justify-center lg:justify-start space-x-2'>
                        <img src={ flash } alt="" />
                        <p className=' text-base font-Quicksand font-semibold'>Level Up Your Productivity Game</p>
                    </span>
                    <span className=' relative mt-3 md:w-[500px] w-[%100]'>
                        <p className=' capitalize text-center lg:text-left w-full md:leading-[52px] font-Baloo text-3xl md:text-[60px] font-semibold '>The Future of Note-Taking and Task Management</p>
                        <motion.img
                        initial={{ opacity: 0, scale: 0.5, x: -200}}
                        animate={{ opacity: 1, scale: 1, x:0 }}
                        transition={{ delay: 0.6, duration:0.25 }}
                        src={ musk } className=' md:w-[150px] md:h-[150px] w-[120px] h-[120px] absolute md:-top-[60px] md:right-0 -top-[45px] -right-12 hidden lg:block' alt="" />
                    </span>
                    <span className=' relative md:w-[500px] hidden w-full md:flex flex-col md:flex-row justify-between items-center mt-8 md:mt-16'>
                        <span className='block ml-auto md:ml-0 w-[120px] h-[120px] bg-[#fce681] rounded-[50%]'></span>
                        <p className='md:w-[350px] w-full font-Quicksand text-sm md:text-[16px] text-[#121212] leading-[25px] font-medium'>Converting your ideas into edited-able sticky notes, make productivity a breeze with Stickify's intuitive note-taking system.</p>
                    </span>
                    <span className=' hidden md:block md:w-[500px] w-full h-[70px] md:h-[80px] relative rounded-[60px] mt-6'>
                        <input type="text" className=' w-full rounded-[60px] border border-[#1212124b]  h-full py-3 px-[24px] placeholder:text-lg placeholder:font-semibold placeholder:text-black placeholder:font-Quicksand text-lg font-semibold font-Quicksand text-black' placeholder='Enter Your Mail' />
                        <Link to='/login'><button className='absolute top-[10px] right-[10px] w-[140px] md:w-[140px] h-[65px] md:h-[60px] pl-5 pr-2 bg-[#121212] hover:bg-opacity-40 rounded-[60px] text-white flex flex-row justify-between items-center'>
                            <p className=' text-base md:text-lg font-Quicksand font-bold '>Sign in</p>
                            <button className=' w-[40px] h-[40px] md:w-[45px] md:h-[45px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center'>
                                <img src={ rightArrow } alt="" />
                            </button>
                        </button></Link>
                    </span>
                </div>
                <div className=''>
                    <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay:0.5 }}
                    src={ hero } className=' h-[500px] w-[465px] -ml-10 md:mt-10 lg:mt-0 hidden md:block' alt="" />
                    <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay:0.5 }}
                    src={ heromob } className=' block md:hidden mt-4' alt="" />
                    <div className=' w-full md:hidden flex flex-row justify-between items-center mt-8'>
                        <span className='block  w-[73px] h-[73px] bg-[#fce681] rounded-[50%]'></span>
                        <p className=' font-Quicksand w-[73%] text-sm text-[#121212] font-medium'>Converting your ideas into edited-able sticky notes, make productivity a breeze with Stickify's intuitive note-taking system.</p>
                    </div>
                    <span className=' md:hidden block w-full h-[50px] ] relative rounded-[60px] mt-6'>
                        <input type="text" className=' w-full rounded-[60px] border border-[#121212]  h-full py-3 px-[24px] placeholder:text-sm placeholder:font-semibold placeholder:text-black placeholder:font-Quicksand text-sm font-semibold font-Quicksand text-black' placeholder='Enter Your Mail' />
                        <Link to='/login'><button className='absolute top-[5px] right-[5px] w-[120px] h-[40px] pl-5 pr-2 bg-[#121212] rounded-[60px] text-white flex flex-row justify-between items-center'>
                            <p className=' text-sm font-Quicksand font-bold '>Sign In</p>
                            <button className=' w-[30px] h-[30px] rounded-[50%] bg-[#f1f1f1] flex justify-center items-center'>
                                <img src={ rightArrow } className=' w-[14px] h-[14px]' alt="" />
                            </button>
                        </button></Link>
                    </span>
                </div>
            </div>
        </motion.div>
        <div className=' w-full md:p-11 p-5'>
            <motion.span 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=' text-center space-y-2'>
                <p className=' font-Baloo text-2xl md:text-3xl font-semibold'>Our Features</p>
                <p className=' font-Quicksand text-base md:text-xl font-normal'>Take Control of Your Tasks and Ideas with Stickify's Customizable Features</p>
            </motion.span>
            <motion.div 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=' flex flex-col lg:flex-row justify-center md:justify-around items-center mt-8 md:mt-11 lg:space-x-20'>
                <img src={ examse } className='' alt="" />
                <span className=' flex flex-col text-center mt-6 lg:mt-0 md:text-left'>
                    <p className=' font-Baloo font-semibold text-2xl'>Digital Sticky Notes</p>
                    <p className=' font-Quicksand text-base font-normal'>Stickify allows users to create and organize digital sticky notes that can be customized to suit their needs. These notes can be easily accessed from any device and are perfect for keeping track of to-do lists, reminders, and important information.</p>
                </span>
            </motion.div>
            <motion.div 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=' flex flex-col-reverse lg:flex-row justify-center md:justify-between items-center mt-11 lg:space-x-20'>
                <span className=' flex flex-col text-center md:text-left'>
                    <p className=' font-Baloo font-semibold mt-6 lg:mt-0 text-2xl'>Collaboration Tools</p>
                    <p className=' font-Quicksand text-base font-normal'>Stickify's collaboration features allow users to share notes and work together on projects in real time. This is perfect for teams or groups who need to stay on the same page and keep everyone up to date on important information. Users can also assign tasks and track progress, making it easy to stay organized and productive.</p>
                </span>
                <img src={ examse1 } className='' alt="" />
            </motion.div>
            <motion.div 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{type:'tween', duration:0.5, delay:0.3}}
            className=' flex flex-col lg:flex-row justify-center md:justify-between items-center mt-11 lg:space-x-20'>
                <img src={ examse2 } className='' alt="" />
                <span className=' flex flex-col text-center md:text-left mt-6 lg:mt-0'>
                    <p className=' font-Baloo font-semibold text-2xl'>Editing Tool</p>
                    <p className=' font-Quicksand text-base font-normal'>Stickify's editing tool allows users to easily modify their notes and customize them to suit their needs. Users can change the font, size, color, and style of their text, as well as add images and drawings to their notes. This makes it easy to create personalized and visually appealing notes that are easy to read and understand.</p>
                </span>
            </motion.div>
        </div>
        <motion.div 
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=' w-full md:p-11 p-5 mt-11'>
            <div className=' flex flex-row justify-center md:justify-between items-center'>
                <p className=' font-Baloo text-3xl font-semibold'>What our users says</p>
                <span className='hidden md:flex flex-row items-center space-x-16'>
                    <button className='w-[50px] h-[50px] rounded-[50%] bg-transparent border border-[#121212] flex items-center justify-center'><img src={arrLeft} alt="" /></button>
                    <button className='w-[50px] h-[50px] rounded-[50%] bg-black flex items-center justify-center'><img src={ arrRight } alt="" /></button>
                </span>
            </div>
            <div className='overflow-x-scroll mt-8 scrollbar-hide'>
                    <div className='inline-flex lg:flex flex-row space-x-[24px] items-center lg:justify-center'>
                        <div className=' md:w-[400px] w-[300px] h-[211px] rounded-[30px] bg-[rgba(252,230,129,0.5)] p-8'>
                            <span className=' flex flex-row '>
                                <button className=' w-[60px] h-[60px] rounded-[50%] bg-[#2b2e30] mr-4'></button>
                                <span className=' flex flex-col'>
                                    <p className=' font-Baloo text-lg space-y-2 font-medium text-[#121212]'>Veek’s Design</p>
                                    <img src={ rate } alt="" />
                                </span>
                            </span>
                            <p className=' mt-6 text-sm font-Quicksand font-medium text-[rgba(6,0,60,0.8)]'>Stickify is a game-changer! The digital sticky notes and reminder system are essential to my daily routine.</p>
                        </div>
                        <div className=' md:w-[400px] w-[300px] h-[211px] rounded-[30px] bg-[rgba(252,230,129,0.5)] p-8'>
                            <span className=' flex flex-row '>
                                <button className=' w-[60px] h-[60px] rounded-[50%] bg-[#2b2e30] mr-4'></button>
                                <span className=' flex flex-col'>
                                    <p className=' font-Baloo text-lg space-y-2 font-medium text-[#121212]'>Dan’s Codes</p>
                                    <img src={ rate } alt="" />
                                </span>
                            </span>
                            <p className=' mt-6 text-sm font-Quicksand font-medium text-[rgba(6,0,60,0.8)]'>Stickify's organization features have helped me become much more productive and organized in my work and personal life..</p>
                        </div>
                        <div className=' md:w-[400px] w-[300px] h-[211px] rounded-[30px] bg-[rgba(252,230,129,0.5)] p-8'>
                            <span className=' flex flex-row '>
                                <button className=' w-[60px] h-[60px] rounded-[50%] bg-[#2b2e30] mr-4'></button>
                                <span className=' flex flex-col'>
                                    <p className=' font-Baloo text-lg space-y-2 font-medium text-[#121212]'>Chika</p>
                                    <img src={ rate } alt="" />
                                </span>
                            </span>
                            <p className=' mt-6 text-sm font-Quicksand font-medium text-[rgba(6,0,60,0.8)]'>Stickify's organization features have helped me become much more productive and organized in my work and personal life..</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        <motion.div
        initial={{y:200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{type:'tween', duration:0.5, delay:0.3}}
        className=' w-full md:p-11 p-5 z-50 mt-11'>
            <div className=' w-full h-[594px] lg:h-[350px] z-30 bg-[#fce681] rounded-[50px] flex flex-col lg:flex-row items-center justify-center p-3 md:px-[20px] lg:px-[88px]'>
                <span className='flex flex-col items-center justify-center lg:items-start'>
                    <p className=' font-Quicksand text-center lg:text-left text-2xl md:text-[30px] md:leading-[48px] font-semibold '>Make productivity a breeze with Stickify's intuitive note-taking system.</p>
                    <Link to='/signup'><button className=' px-6 py-3 bg-black hover:bg-opacity-40 rounded-[60px] block lg:mr-auto  mt-6 text-xl font-Quicksand font-normal text-white'>Sign Up</button></Link>
                </span>
                <img src={ queen } className='' alt="" />
            </div>
        </motion.div>

        <div className=' w-full md:p-11 p-5 z-[-99999999999] relative -mt-[144px] md:bg-[#010101] bg-[#121212] h-auto lg:h-[550px]'>
            <div className=' mt-[100px] pt-11 flex lg:flex-row flex-col justify-between space-y-4 lg:space-y-0 lg:space-x-16 pb-11'>
                <span className=''>
                    <span className=' flex flex-row md:space-x-3 items-center'>
                        <img src={ logoBlk } alt="" />
                        <p className=" font-Baloo text-[#FCE681] text-xl md:text-3xl font-medium">Stickify</p>
                    </span>
                    <p className='text-base font-Quicksand text-[#a5acba] w-[200px] mt-4'>Capture ideas, collaborate with ease, and stay on track with Stickify</p>
                </span>
                <div className=' flex flex-row space-x-16 md:space-x-24'>
                    <span className=' flex space-y-2 flex-col'> 
                        <p className=' font-semibold text-base font-Quicksand text-[#f9f9f9]'>Resources</p>
                        <p className=' font-medium text-base font-Quicksand text-[#a5acba] mt-2'>Community</p>
                        <p className=' font-medium text-base font-Quicksand text-[#a5acba]'>Events</p>
                        <p className=' font-medium text-base font-Quicksand text-[#a5acba]'>Help Center</p>
                        <p className=' font-medium text-base font-Quicksand text-[#a5acba]'>Partners</p>
                    </span>
                    <span className=' flex space-y-2 flex-col'> 
                        <p className=' font-semibold text-base font-Quicksand text-[#f9f9f9]'>Products</p>
                        <p className=' font-medium text-base font-Quicksand text-[#a5acba] mt-2'>Integrations</p>
                        <p className=' font-medium text-base font-Quicksand text-[#a5acba]'>Solutions</p>
                        <p className=' font-medium text-base font-Quicksand text-[#a5acba]'>Features</p>
                        <p className=' font-medium text-base font-Quicksand text-[#a5acba]'>Enterprise</p>
                    </span>
                </div>
                <span className=' flex space-y-2 flex-col'> 
                    <p className=' font-semibold text-base font-Quicksand text-[#f9f9f9]'>Get Email Notifications</p>
                    <p className=' font-medium text-base font-Quicksand text-[#a5acba] mt-2 w-[302px]'>Generate outside the box thinking with the possibility to targtet the low</p>
                    <span className=' w-[302px] h-[46px] relative rounded-[20px]'>
                        <input type="email" className=' w-full h-full rounded-[20px] border border-[#2e3545] bg-transparent placeholder:text-[#a5acab] relative text-[#a5acab] placeholder:font-semibold font-semibold text-base placeholder:text-base p-2' placeholder='Enter email...' />
                        <button className=' absolute top-0 right-0 w-[86px] h-[46px] rounded-r-[20px] bg-[#fce681] text-base text-center font-Quicksand text-[#121212'>Submit</button>
                    </span>
                </span>
            </div>
            <div className='w-full h-[90px] relative'>
                <span className=' absolute flex flex-row justify-between items-center  top-0 left-0  w-full h-full border-t border-white'>
                    <p className=' font-Quicksand text-sm font-normal text-[#a5acba]'>© 2023 Stickify. All Rights Reserved.</p>
                    <p className=' font-Quicksand text-sm font-normal text-[#a5acba]'>Stickify . Socials</p>
                </span>
            </div>
        </div>
        </>
     );
}
 
export default LandingPage;