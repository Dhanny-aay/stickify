import search from '../images/search.png';
import user from '../images/user.png';
import exit from '../images/exit.png';
import plus from '../images/plus.png';
import Palette from './palette';
import close from '../images/close.png';
import { useEffect, useState } from 'react';
import Notes from './notes';
import saved from '../images/saved.png';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, query, where} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const Home = () => {
    const Navigate  = useNavigate();

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

    // chexk user + get notes
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [isUser, setisUser] = useState(false)

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                const uid = user.uid;
                newUserUid(uid);
                //get notes
                //collection ref
                const colref = collection(db, 'users');
                // queries 
                const q = query(colref, where('uid', '==', user.uid));
                onSnapshot(q ,(snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        // setNotes(doc);
                        setMail(doc.data().email)
                        setName(doc.data().displayName)
                    });
                  });
            }
            else{
                Navigate('/login')
            }
        })
    }, []);

    const handleClick = ()=>{
        if(isUser == false){
            setisUser(true);
        }
        else if(isUser == true){
            setisUser(false)
        };
    };
   
    const signout = ()=>{
        signOut(auth).then(() => {
            Navigate('/login')
          }).catch((error) => {
            // An error happened.
          });
    };
    
    // popup content
    const date = new Date();
    const[userUid, newUserUid] = useState('');
    const[noteTopic, newNoteTopic] = useState('');
    const[noteDesc, newNoteDesc] = useState('');
    const[noteContent, newNoteContent] = useState('');
    const[noteBg, setNoteBg] = useState('');

    function setNoteTopic(){
        let notetopic = document.getElementById('noteTopic').value;
        // console.log(notetopic);
        newNoteTopic(notetopic);
    };
    function setNoteDesc(){
        let notedesc = document.getElementById('noteDesc').value;
        // console.log(notedesc);
        newNoteDesc(notedesc);
    };
    function setNoteContent(){
        let notecontent = document.getElementById('noteContent').value;
        // console.log(notecontent);
        newNoteContent(notecontent);
    };
    //get bg color from palette component
    const noteBgColor=(value)=>{
        setNoteBg(value)
    };

    // add note content to notes collection
    const saveNote = ()=>{
        const noteDoc = collection(db, 'notes');
        const docData ={
            uid: userUid,
            NoteTopic: noteTopic,
            NoteDesc: noteDesc,
            NoteContent: noteContent,
            NoteBg: noteBg,
            date:date,
        };
        toggleBg();
        addDoc(noteDoc, docData)
        .then(()=>{
            const saveWarn = document.getElementById('saveWarn');
                saveWarn.classList.remove('translate-x-[100vw]')
                removeSave();
        })
        .catch((error)=>{
            alert(error)
        })
    };

    function removeSave(){
        setTimeout(()=>{
            const saveWarn = document.getElementById('saveWarn');
            saveWarn.classList.add('translate-x-[100vw]')
        }, 4500)
}

    

    // dom manipulation for popup 
    const[showPopup, setShowPopup] = useState(false);
    const[showBg, setShowBg] = useState(true);
    const togglePopup = ()=>{
        if(showPopup === false){
            setShowPopup(true);
            setShowBg(false);
        };
    };
    function toggleBg(){
        if(showBg === false){
            setShowPopup(false);
            setShowBg(true);
        };
    };
    return (
        <div>
            <div id='saveWarn' className=' translate-x-[100vw] transition-all  bg-[#f1f1f1] rounded-md md:w-[250px] md:h-[90px] w-[200px] h-[80px] flex flex-row fixed right-10 top-[10%] z-[9999999]'>
                <div className=' w-[30%] h-full bg-[#fdd037] rounded-l-md flex justify-center  items-center'>
                    <img src={ saved } alt="" className=' w-6' />
                </div>
                <div className=' flex justify-center items-center p-2'>
                    <p className=' font-Labrada text-base'>Sucessfully Saved</p>
                </div>
            </div>
           {showPopup && <div id='popUp' className="w-full absolute bg-white lg:py-[35px] lg:px-[80px] p-6 top-0 left-0 z-50">
                <div className=" navbar flex flex-row justify-between items-center">
                        <p className=' font-Labrada lg:text-3xl text-xl font-bold'>Create Note</p>
                        <span className=" flex flex-row justify-center items-center">
                            <img src={ close } onClick={ toggleBg } className=' w-[32px] h-[32px] cursor-pointer' alt="close" />
                        </span>
                </div>
                <div className=' md:mt-[24px] mt-8'>
                    <div className=' w-full flex md:flex-row flex-col mt-4 justify-between md:space-y-0'>
                        <div className=' md:w-[50%] w-full h-[250px] mr-5 flex flex-col space-y-3'>
                            <div className=''>
                                <p className=' font-Labrada font-medium text-lg'>Topic</p>
                                <input onKeyUp={setNoteTopic} id='noteTopic' type="text" className=' font-normal text-sm p-3 font-Labrada bg-[#f1f1f1] rounded-[20px] w-full md:h-[60px] h-12 mt-[6px]' />
                            </div>
                            <div className=''>
                                <p className=' font-Labrada font-medium text-lg'>Description : Max length(32)</p>
                                <input onKeyUp={setNoteDesc} maxLength='32' id='noteDesc' type="text" className=' p-3 font-Labrada font-normal text-sm bg-[#f1f1f1] whitespace-pre rounded-[20px] w-full md:h-[150px] h-28 mt-[6px]' />
                            </div>
                        </div>
                        <div className=' md:w-[50%] w-full md:h-[250px] h-48 md:ml-5'>
                            <p className=' font-Labrada font-medium text-lg '>Note</p>
                            <textarea onKeyUp={setNoteContent} id="noteContent" className='bg-[#f1f1f1] w-full h-full mt-3 rounded-[20px] p-3 font-Labrada font-normal text-sm' cols="30" rows="10"></textarea>
                            {/* <input onKeyUp={setNoteContent} id='noteContent' className=' bg-[#f1f1f1] w-full h-full mt-3 rounded-[20px] p-3 font-Labrada font-normal text-sm'/> */}
                        </div>
                    </div>
                </div>
                <Palette GetnoteBgColor={noteBgColor}/>
                <button onClick={ saveNote } className=' px-4 py-2 font-Labrada text-base font-semibold bg-[#f1f1f1] rounded-[10px] mb-11 mt-6 '>Save Note</button>
            </div>}
          { showBg && <div id='bg' className=" lg:py-[35px] lg:px-[80px] p-6 relative">
                <div className=" navbar flex flex-row justify-between items-center">
                    <p className=' font-Labrada lg:text-3xl text-xl font-bold'>My Notes</p>
                    <span className=" flex flex-row space-x-3 md:space-x-5">
                        <img src={ search } className=' w-6  h-6 lg:h-[32px] lg:w-[32px] cursor-pointer' alt="search" />
                        <div className=' flex flex-col '>
                            <img src={ user } onClick={ handleClick } className=' w-6 lg:w-[32px]  h-6 lg:h-[32px] cursor-pointer' alt="search" />
                            { isUser && <span className=' lg:top-20 top-16 z-[99] right-6 p-4 absolute bg-[#f1f1f1] shadow space-y-2'>
                                <img src={ user } alt="" />
                                <p className=' font-Labrada text-sm font-medium'>{ name }</p>
                                <p className=' font-Labrada text-sm font-medium'>{ mail }</p>
                            </span>}
                        </div>
                        <img src={ exit } onClick={ signout } className= ' w-6  h-6 lg:h-[32px] lg:w-[32px] cursor-pointer' alt="setting" />
                    </span>
                </div>
                <Notes/>
                <button onClick={ togglePopup } className=' w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f1f1f1] shadow fixed bottom-6 right-6 md:bottom-16 md:right-16'><img src={ plus } alt="" /></button>
            </div>}
        </div>
     );
}
 
export default Home;