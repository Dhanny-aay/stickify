import right from '../images/right.png';
import google from '../images/google.png';
import nt1 from '../images/nt1.png';


const Login = () => {
    return ( 
        <div className=" bg-[#f1f1f1] w-full h-[100vh] lg:py-[8%] lg:px-[15%]">
            <div className=" w-full h-full bg-transparent shadow flex flex-row">
                <div className=" w-1/2 h-full hidden bg-[#fdd037] rounded-l-md p-6 lg:flex justify-center items-center relative">
                    <span className=" flex flex-row space-x-1 absolute top-6 left-6 font-bold font-Tilt text-xl text-[#000]"><p>Stickify</p><p className=" text-[#fff]">.</p></span>
                    <img src={ nt1 } className=' w-[250px] h-[250px]' alt="" />
                </div>
                <div className=" lg:w-1/2 w-full h-full lg:bg-[#fff] bg-[#fdd037] flex flex-col items-center justify-center rounded-r-md p-8 space-y-4 relative">
                    <span className=" flex lg:hidden flex-row space-x-1  font-bold font-Tilt text-xl text-[#000]"><p>Stickify</p><p className=" text-[#fff]">.</p></span>
                    <p className=" font-Labrada text-lg lg:mr-auto font-semibold">Welcome Back</p>
                    <div className=" space-y-6 w-full md:w-[350px] lg:w-full">
                        <input id="mail" className="bg-[#f1f1f1] rounded-md w-full p-2 font-normal text-sm font-Labrada" placeholder="Email Address" type="text" />
                        <input id="password" className="w-full p-2 rounded-md font-normal text-sm font-Labrada bg-[#f1f1f1]" placeholder="Password" type="text" />
                    </div>
                    <button className=" flex justify-center space-x-2 items-center w-full md:w-[350px] lg:w-full rounded-md py-2 font-Labrada text-white text-sm font-bold bg-[#000] hover:bg-opacity-70">Sign in
                    <img src={ right } className='w-6 h-6 ml-2 mt-1' alt="" />
                    </button>
                    <p className=' font-bold text-base font-Labrada'>Or</p>
                    <div className='  w-full md:w-[350px] lg:w-full space-y-1 flex flex-col items-center'>
                        <button className=" flex justify-center space-x-2 items-center w-full md:w-[350px] lg:w-full rounded-md py-2 font-Labrada text-white text-sm font-bold bg-[#000] hover:bg-opacity-70">Sign in With Google
                            <img src={ google } className='w-6 h-6 ml-2 mt-1' alt="" />
                        </button>
                        <span className=' flex flex-row font-Labrada text-sm space-x-1 text-gray-900'>
                            <p>Don't Have an Account?</p>
                            <p className=' text-gray-700'>Sign Up</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Login;