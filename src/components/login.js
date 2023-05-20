import right from '../images/right.png';
import load from '../images/load.gif';
import nt1 from '../images/nt1.png';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


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
        className=" bg-[#f1f1f1] w-full h-[100vh]">
            <div className=" w-full h-full bg-transparent shadow flex flex-row">
                <div className=" w-1/2 h-full hidden bg-[#fdd037] rounded-l-md p-6 lg:flex justify-center items-center relative">
                    <span className=" flex flex-row space-x-1 absolute top-6 left-6 font-bold font-Tilt text-xl text-[#000]"><p>Stickify</p><p className=" text-[#fff]">.</p></span>
                    <img src={ nt1 } className=' w-[250px] h-[250px]' alt="" />
                </div>
                <div className=" lg:w-1/2 w-full h-full lg:bg-[#fff] bg-[#fdd037] flex flex-col items-center justify-center rounded-r-md p-[8%] space-y-5 relative">
                    <span className=" flex lg:hidden flex-row space-x-1  font-bold font-Tilt text-xl text-[#000]"><p>Stickify</p><p className=" text-[#fff]">.</p></span>
                    <p className=" font-Labrada text-lg lg:mr-auto font-semibold">Welcome Back</p>
                    <div className=" space-y-6 w-full md:w-[350px] lg:w-full relative">
                        <input id="mail" onKeyUp={ setMail } className="bg-[#f1f1f1] rounded-md w-full p-2 font-normal text-sm font-Labrada" placeholder="Email Address" type="text" />
                        <input id="password" onKeyUp={ setPw } className="w-full p-2 rounded-md font-normal text-sm font-Labrada bg-[#f1f1f1]" placeholder="Password" type="text" />
                        <p id='error' className=' font-Labrada text-xs font-medium text-red-700 absolute -bottom-4'></p>
                    </div>
                    <div className='  w-full md:w-[350px] lg:w-full space-y-1 flex flex-col items-center'>
                        <button onClick={signIn} className=" flex justify-center space-x-2 transition-all items-center w-full md:w-[350px] lg:w-full rounded-md py-2 font-Labrada text-white text-sm font-bold bg-[#000] hover:bg-opacity-70">Sign in
                        <img src={ image } className='w-6 h-6 ml-2 mt-1' alt="" />
                        </button>
                        <span className=' flex flex-row font-Labrada text-sm space-x-1 text-gray-900'>
                            <p>Don't Have an Account?</p>
                            <Link to='/signup'>
                                <p className=' text-gray-700'>Sign Up</p>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>

     );
}
 
export default Login;