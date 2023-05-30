import right from '../images/right.png';
import logo from '../images/logo.png';
import load from '../images/load.gif';
import collab from '../images/collab.png';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const Signup = () => {

    const [image, setImage] = useState(right)

    const Navigate = useNavigate();
    const [name, nameValue] = useState('');
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
        const db = getFirestore(app);

        function setName(){
            let name = document.getElementById('name').value;
            nameValue(name);
        };

        function setMail(){
            let email = document.getElementById('mail').value;
            mailValue(email);
        };
        function setPw(){
            let password = document.getElementById('password').value;
            passValue(password);
        };

        const signUp = ()=>{
            setImage(load)
            createUserWithEmailAndPassword(auth, mail, password)
            .then((userCredential)=>{
                const user =userCredential.user;
                const userDoc = collection(db, 'users');
                const docData ={
                    uid:user.uid,
                    email: mail,
                    displayName: name,
                }
                addDoc(userDoc, docData)
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                const err = document.getElementById('error');
                err.innerHTML=errorCode;
                setImage(right)
            })
        };

        const isMobile = window.innerWidth < 768;

        useEffect(()=>{
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    if(!isMobile){
                        Navigate('/notes')
                    }
                    else{
                        Navigate('/welcomeI')
                    }
                }
            })
        }, []);
            
        
    return ( 
        <div className=" bg-[#FFF6D0] w-full h-[100vh] px-[16px] py-[80px] lg:py-[48px] flex items-center flex-col justify-center md:p-[48px] space-y-6 lg:space-y-0">
            <span className='flex lg:hidden flex-row md:space-x-1 items-center justify-center'>
                <img src={ logo } className='' alt="" />
                <p className=" font-Baloo text-2xl text-[#06003C] md:text-3xl font-medium">Stickify</p>
            </span>
            <motion.div 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{x:-100, opacity:0}}
            transition={{delay:0.3}}
            className=" w-full h-full bg-transparent flex flex-row">
                <div className=" w-1/2 h-full hidden bg-transparent lg:flex justify-center items-center relative">
                    <span className='absolute top-0 left-0 flex flex-row md:space-x-1 items-center'>
                        <img src={ logo } alt="" />
                        <p className=" font-Baloo text-xl md:text-2xl font-medium">Stickify</p>
                    </span>
                    <img src={ collab } className=' h-[420px]' alt="" />
                </div>
                <div className=" lg:w-[40%] w-full h-full md:h-[60vh] lg:h-full bg-[#fff] flex flex-col items-center justify-center py-12 px-[6%] space-y-6 rounded-[40px] relative">
                    <p className=" font-Baloo text-2xl md:text-3xl text-center font-semibold">Create an Account</p>
                    <div className=" space-y-6 w-full md:w-[350px] lg:w-full relative">
                        <input id="name" onKeyUp={ setName } className=" w-full p-2 rounded-[10px] font-normal text-sm  font-Baloo bg-[#f1f1f1]" placeholder="Full-Name" type="text" />
                        <input id="mail" onKeyUp={setMail} className="bg-[#f1f1f1] rounded-[10px] w-full p-2 font-normal text-sm font-Baloo" placeholder="Email Address" type="text" />
                        <input id="password" onKeyUp={ setPw } className="w-full p-2 rounded-[10px] font-normal text-sm font-Baloo bg-[#f1f1f1]" placeholder="Password" type="text" />
                        <p id='error' className=' font-Baloo text-xs font-medium text-red-700 absolute -bottom-4'></p>
                    </div>
                    <div className='  w-full md:w-[350px] lg:w-full space-y-6 md:space-y-10 flex flex-col items-center'>
                        <button onClick={ signUp } className=" flex justify-center transition-all space-x-2 items-center w-full md:w-[350px] lg:w-full rounded-[15px] py-2 font-Baloo text-[#121212] text-base font-medium bg-[#ffe25c] hover:bg-opacity-80">Create Account
                        </button>
                        <p className=' text-center font-Baloo text-sm md:text-base font-medium'>By creating an account you agree to Stickify’s <span className=' text-[#F4D242]'>Terms of Service</span> and <span className=' text-[#F4D242]'>Privacy Policy</span>.</p>
                        <span className='flex flex-row font-Baloo text-sm space-x-1 text-gray-900'>
                            <p>Already Have an Account?</p>
                            <Link to='/login'>
                                <p className=' text-[#F4D242]'>Sign in</p>
                            </Link>
                        </span>
                        {/* <span className='absolute bottom-2 md:flex flex-row font-Baloo text-sm space-x-1 hidden text-gray-900'>
                            <p className=' font-Quicksand text-xs font-normal text-[#a5acba]'>© 2023 Stickify. All Rights Reserved.</p>
                        </span> */}
                    </div>
                    
                </div>
            </motion.div>
        </div>
     );
}
 
export default Signup;