import right from '../images/right.png';
import load from '../images/load.gif';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';
import collab from '../images/collab1.png';


const Login = () => {
    const [image, setImage] = useState(right)
    const Navigate = useNavigate();
    const [mail, mailValue] = useState('');
    const [password, passValue] = useState('');
    
    const firebaseConfig = {
        apiKey: "AIzaSyBAVjs6k8QqgO1JRFFmPCzLrgxnc3HzFQY",
        authDomain: "stickify-24f12.firebaseapp.com",
        projectId: "stickify-24f12",
        storageBucket: "stickify-24f12.appspot.com",
        messagingSenderId: "41169137637",
        appId: "1:41169137637:web:36c5cebfa226efe537c90c",
        measurementId: "G-9JX3X7BFLX"
      };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();

    function setMail(){
        let email = document.getElementById('mail').value;
        mailValue(email);
    };
    function setPw(){
        let password = document.getElementById('password').value;
        passValue(password);
    };

    const signIn = ()=>{
        setImage(load)
        signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential)=>{
        })
        .catch((error)=>{
            const errorCode = error.code;
            // const errorMessage = error.message;
            const err = document.getElementById('error');
            err.innerHTML=errorCode;
            setImage(right)
        })
    };

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                Navigate('/notes')
            }
        })
    }, []);
        
   

    return ( 
        <motion.div 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{x:-100, opacity:0}}
            transition={{delay:0.3}}
        className=" bg-[#FFF6D0] w-full h-[100vh] px-[16px] py-[80px] lg:py-[48px] flex items-center flex-col justify-center md:p-[48px] space-y-6 lg:space-y-0">
            <span className='flex lg:hidden flex-row md:space-x-1 items-center justify-center'>
                <img src={ logo } className='' alt="" />
                <p className=" font-Baloo text-2xl text-[#06003C] md:text-3xl font-medium">Stickify</p>
            </span>
            <div className=" w-full h-full bg-transparent flex flex-row">
                <div className=" w-1/2 h-full hidden bg-transparent lg:flex justify-center items-center relative">
                    <span className='absolute top-0 left-0 flex flex-row md:space-x-1 items-center'>
                        <img src={ logo } alt="" />
                        <p className=" font-Baloo text-xl md:text-2xl font-medium">Stickify</p>
                    </span>
                    <img src={ collab } className=' h-[420px]' alt="" />
                </div>
                <div className=" lg:w-[40%] w-full h-full md:h-[60vh] lg:h-full bg-[#fff] flex flex-col items-center justify-center p-8 px-[6%] space-y-3 rounded-[40px] relative">
                    <p className=" font-Baloo text-lg text-center font-semibold">Log in</p>
                    <p className=" font-Baloo text-2xl md:text-3xl text-center font-semibold">Welcome Back</p>
                    <div className=" space-y-4 w-full md:w-[350px] lg:w-full relative">
                        <input id="mail" onKeyUp={ setMail } className="bg-[#f1f1f1] rounded-[15px] w-full p-2 font-normal text-sm font-Baloo" placeholder="Email Address" type="text" />
                        <input id="password" onKeyUp={ setPw } className="w-full p-2 rounded-[15px] font-normal text-sm font-Baloo bg-[#f1f1f1]" placeholder="Password" type="text" />
                        <p id='error' className=' font-Baloo text-xs font-medium text-red-700 absolute -bottom-4'></p>
                        <p id='error' className=' ml-auto text-right block font-Baloo text-sm font-medium text-[#F4D242]'>Forgot Password?</p>
                    </div>
                    <div className='  w-full md:w-[350px] lg:w-full space-y-4 flex flex-col items-center'>
                        <button onClick={signIn} className=" flex justify-center space-x-2 transition-all items-center w-full md:w-[350px] lg:w-full rounded-[15px] py-2 font-Baloo text-[#121212] text-sm font-bold bg-[#ffe25c] hover:bg-opacity-70">Sign in
                        </button>
                        <span className='  flex flex-row font-Baloo text-sm space-x-1 text-gray-900'>
                            <p>Don't Have an Account?</p>
                            <Link to='/signup'>
                                <p className=' text-[#F4D242]'>Sign Up</p>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>

     );
}
 
export default Login;