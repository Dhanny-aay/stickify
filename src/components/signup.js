import right from '../images/right.png';
import nt1 from '../images/nt1.png';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Signup = () => {

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
            })
        };
        function checkUser(){
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    Navigate('/home')
                }
            })
        };
        checkUser();

    return ( 
        <div className=" bg-[#f1f1f1] w-full h-[100vh] lg:py-[8%] lg:px-[15%]">
            <div className=" w-full h-full bg-transparent shadow flex flex-row">
                <div className=" w-1/2 h-full hidden bg-[#fdd037] rounded-l-md p-6 lg:flex justify-center items-center relative">
                    <span className=" flex flex-row space-x-1 absolute top-6 left-6 font-bold font-Tilt text-xl text-[#000]"><p>Stickify</p><p className=" text-[#fff]">.</p></span>
                    <img src={ nt1 } className=' w-[250px] h-[250px]' alt="" />
                </div>
                <div className=" lg:w-1/2 w-full h-full lg:bg-[#fff] bg-[#fdd037] flex flex-col items-center justify-center rounded-r-md p-8 space-y-5 relative">
                <span className=" flex lg:hidden flex-row space-x-1  font-bold font-Tilt text-xl text-[#000]"><p>Stickify</p><p className=" text-[#fff]">.</p></span>
                    <p className=" font-Labrada text-lg text-left lg:mr-auto font-semibold">Sign Up Before you Continue...</p>
                    <div className=" space-y-6 w-full md:w-[350px] lg:w-full relative">
                        <input id="name" onKeyUp={ setName } className=" w-full p-2 rounded-md font-normal text-sm font-Labrada bg-[#f1f1f1]" placeholder="Full-Name" type="text" />
                        <input id="mail" onKeyUp={setMail} className="bg-[#f1f1f1] rounded-md w-full p-2 font-normal text-sm font-Labrada" placeholder="Email Address" type="text" />
                        <input id="password" onKeyUp={ setPw } className="w-full p-2 rounded-md font-normal text-sm font-Labrada bg-[#f1f1f1]" placeholder="Password" type="text" />
                        <p id='error' className=' font-Labrada text-xs font-medium text-red-700 absolute -bottom-4'></p>
                    </div>
                    <div className='  w-full md:w-[350px] lg:w-full space-y-1 flex flex-col items-center'>
                        <button onClick={ signUp } className=" flex justify-center transition-all space-x-2 items-center w-full md:w-[350px] lg:w-full rounded-md py-2 font-Labrada text-white text-sm font-bold bg-[#000] hover:bg-opacity-70">Sign Up
                        <img src={ right } className='w-6 h-6 ml-2 mt-1' alt="" />
                        </button>
                        <span className=' flex flex-row font-Labrada text-sm space-x-1 text-gray-900'>
                            <p>Already Have an Account?</p>
                            <Link to='/'>
                                <p className=' text-gray-700'>Sign in</p>
                            </Link>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Signup;