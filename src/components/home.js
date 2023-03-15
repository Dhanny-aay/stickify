import group from '../images/collection.png';
import search from '../images/search.png';
import settings from '../images/setting.svg';
import plus from '../images/plus.png';
import Palette from './palette';
import close from '../images/close.png';
import gallery from '../images/export.png';
import { useState } from 'react';
import Notes from './notes';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, query, where, doc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


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

    // chexk user
    function checkUser(){
        onAuthStateChanged(auth, (user)=>{
            if(user){
                const uid = user.uid;
                newUserUid(uid);
                //get notes
                //collection ref
                const colref = collection(db, 'notes');
                // queries 
                const q = query(colref, where('uid', '==', user.uid));
                onSnapshot(q ,(snapshot) => {
                    snapshot.docs.map((doc) => {
                    })
                  })
            }
            else{
                // Navigate('/login')
            }
        })
    };
    checkUser();
    
    // popup content
    const[userUid, newUserUid] = useState('');
    const[noteTopic, newNoteTopic] = useState('');
    const[noteDesc, newNoteDesc] = useState('');
    const[noteContent, newNoteContent] = useState('');
    const[noteBg, setNoteBg] = useState('');

    function setNoteTopic(){
        let notetopic = document.getElementById('noteTopic').value;
        console.log(notetopic);
        newNoteTopic(notetopic);
    };
    function setNoteDesc(){
        let notedesc = document.getElementById('noteDesc').value;
        console.log(notedesc);
        newNoteDesc(notedesc);
    };
    function setNoteContent(){
        let notecontent = document.getElementById('noteContent').value;
        console.log(notecontent);
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
            NoteBg: noteBg
        };
        addDoc(noteDoc, docData)
        .then(()=>{

        })
        .catch(()=>{

        })
    };
    

    // dom manipulation for popup 
    const[showPopup, setShowPopup] = useState(false);
    const[showBg, setShowBg] = useState(true);
    const togglePopup = ()=>{
        if(showPopup === false){
            setShowPopup(true);
            setShowBg(false);
        };
    };
    const toggleBg = ()=>{
        if(showBg === false){
            setShowPopup(false);
            setShowBg(true);
        };
    };
    return (
        <div>
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
                                <p className=' font-Labrada font-semibold text-lg'>Topic</p>
                                <input onKeyUp={setNoteTopic} id='noteTopic' type="text" className=' font-normal text-sm p-3 font-Labrada bg-[#f1f1f1] rounded-[20px] w-full md:h-[60px] h-12 mt-[6px]' />
                            </div>
                            <div className=''>
                                <p className=' font-Labrada font-semibold text-lg'>Description</p>
                                <input onKeyUp={setNoteDesc} id='noteDesc' type="text" className=' p-3 font-Labrada font-normal text-sm bg-[#f1f1f1] rounded-[20px] w-full md:h-[150px] h-28 mt-[6px]' />
                            </div>
                        </div>
                        <div className=' md:w-[50%] w-full md:h-[250px] h-48 md:ml-5'>
                            <p className=' font-Labrada font-semibold text-lg '>Note</p>
                            <input onKeyUp={setNoteContent} id='noteContent' className=' bg-[#f1f1f1] w-full h-full mt-3 rounded-[20px] p-3 font-Labrada font-normal text-sm'/>
                        </div>
                    </div>
                </div>
                <Palette GetnoteBgColor={noteBgColor}/>
                <div className=' mt-[62px] w-full h-[150px] bg-[#f1f1f1] rounded-[20px] flex flex-col justify-center items-center space-y-3'>
                    <img src={ gallery } className='' alt="" />
                    <button className=' px-4 py-2 bg-white rounded-[10px] font-Labrada text-base font-semibold'>Choose picture</button>
                    <p className='font-Labrada text-xs font-medium text-[rgba(0,0,0,0.5) ]'>Maximum picture size: 5mb</p>
                </div>
                <button onClick={ saveNote } className=' px-4 py-2 font-Labrada text-base font-semibold bg-[#f1f1f1] rounded-[10px] mb-11 mt-6 '>Save Note</button>
            </div>}
          { showBg && <div id='bg' className=" lg:py-[35px] lg:px-[80px] p-6 relative">
                <div className=" navbar flex flex-row justify-between items-center">
                    <p className=' font-Labrada lg:text-3xl text-xl font-bold'>My Notes</p>
                    <span className=" flex flex-row space-x-5">
                        <img src={ search } className=' w-6 lg:w-[32px] cursor-pointer' alt="search" />
                        <img src={ group } className=' w-6 lg:w-[32px] lg:block hidden cursor-pointer' alt="collection" />
                        <img src={ settings } className= ' w-6 lg:w-[32px] cursor-pointer' alt="setting" />
                    </span>
                </div>
                <Notes/>
                <button onClick={ togglePopup } className=' w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f1f1f1] shadow fixed bottom-6 right-6 md:bottom-16 md:right-16'><img src={ plus } alt="" /></button>
            </div>}
        </div>
     );
}
 
export default Home;