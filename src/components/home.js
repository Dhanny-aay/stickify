import search from '../images/search.png';
import moon from '../images/moon.png';
import sun from '../images/sun.png';
import tac from '../images/textalign-center.png';
import tar from '../images/textalign-right.png';
import tal from '../images/textalign-left.png';
import tajl from '../images/textalign-justifyleft.png';
import tajr from '../images/textalign-justifyright.png';
import tajc from '../images/textalign-justifycenter.png';
import sort from '../images/sort.png';
import user from '../images/user.png';
import whiteUser from '../images/whiteUser.png';
import exit from '../images/exit.png';
import whiteExit from '../images/whiteExit.png';
import plus from '../images/adder.png';
import whitePlus from '../images/whiteAdder.png';
import camera from '../images/camera.png';
import whiteCamera from '../images/whiteCamera.png';
import pen from '../images/pen.png';
import whitePen from '../images/whitePen.png';
import mic from '../images/microphone-2.png';
import whiteMic from '../images/whiteMicrophone-2.png';
import bold from '../images/bold.png';
import italic from '../images/italic.png';
import underline from '../images/text-underline.png';
import link from '../images/link.png';
import Palette from './palette';
import whiteClose from '../images/whiteClose.png';
import close from '../images/close.png';
import save from '../images/save.png';
import whiteSave from '../images/whiteSave.png';
import { useEffect, useState } from 'react';
import Notes from './notes';
import saved from '../images/saved.png';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, query, where} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../index.css';


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
    const body = document.body;
    const [bgColor, setBgColor] = useState(''); 
    const [popupColor, setPopupColor] = useState('');
    const [formatColor, setFormatColor] = useState('');
    const [btnColor, setBtnColor] = useState('');
    const [textColor, setTextColor] = useState(''); 
    const [searchColor, setSearchColor] = useState(''); 
    const [overColor, setOverColor] = useState('')
    const [darkMode, setDarkMode] = useState(false);
    useEffect(()=>{
        if(darkMode){
            body.style.background = '#1e1e1e';
            setBgColor('#1e1e1e');
            setPopupColor('#1e1e1e');
            setFormatColor('#303030')
            setSearchColor('#232323');
            setTextColor('#f1f1f1');
            setBtnColor('#121212');
            setOverColor('rgba(241,241,241,0.1');
            
        }
        else if(!darkMode){
            body.style.background = '#f6f6f6';
            setBgColor('#f6f6f6');
            setPopupColor('#fff');
            setFormatColor('#f6f6f6')
            setSearchColor('#ffffff');
            setTextColor('#000');
            setBtnColor('#fff');
            setOverColor('rgba(18,18,18,0.1)');
        }
    }, [darkMode])
    
    //date and time
    // For todays date;
    Date.prototype.today = function () { 
        return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
    }
    // For the time now
    Date.prototype.timeNow = function () {
        return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
    }
    const newDate = new Date();
    // popup content
    const date =  newDate.today();
    const time = newDate.timeNow();
    const[userUid, newUserUid] = useState('');
    const[noteTopic, newNoteTopic] = useState('');
    const[noteDesc, newNoteDesc] = useState('');
    const[noteContent, newNoteContent] = useState('');
    const[noteBg, setNoteBg] = useState('#FF5722');

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
            dateTime:daTim,
            time:time,
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
    const[ editPanel, setEditPanel] = useState(false);
    const [daTim, setDaTim] = useState('')


    const togglePopup = ()=>{
        if(showPopup === false){
            setShowPopup(true);
            setShowBg(false);
            setDaTim(time+', '+date);
        };
    };
    function toggleBg(){
        if(showBg === false){
            setShowPopup(false);
            setShowBg(true);
        };
    };
    return (
        <motion.div
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{x:-100, opacity:0}}
            transition={{delay:0.3}}
         className=' bg-[#f6f6f6]'>
            <div id='saveWarn' className=' translate-x-[100vw] transition-all  bg-[#f1f1f1] rounded-md md:w-[250px] md:h-[90px] w-[200px] h-[80px] flex flex-row fixed right-10 top-[10%] z-[9999999]'>
                <div className=' w-[30%] h-full bg-[#fdd037] rounded-l-md flex justify-center  items-center'>
                    <img src={ saved } alt="" className=' w-6' />
                </div>
                <div className=' flex justify-center items-center p-2'>
                    <p className=' font-Labrada text-base'>Sucessfully Saved</p>
                </div>
            </div>
           {showPopup && <div id='popUp' style={{background:popupColor}} className="w-full absolute lg:py-[35px] lg:px-[80px] p-6 top-0 left-0 z-50 h-[100vh]">
                <div className=" navbar flex flex-row justify-between items-center">
                    { darkMode === false && <img src={ close } onClick={ toggleBg } className=' w-[48px] h-[48px] cursor-pointer' alt="close" />}
                    { darkMode === true && <img src={ whiteClose } onClick={ toggleBg } className=' w-[48px] h-[48px] cursor-pointer' alt="close" />}
                    { darkMode === false && <img src={ save } onClick={ saveNote } className=' w-[48px] h-[48px] cursor-pointer' alt="close" />}
                    { darkMode === true && <img src={ whiteSave } onClick={ saveNote } className=' w-[48px] h-[48px] cursor-pointer' alt="close" />}
                </div>
                <div className=' md:mt-[24px] mt-8'>
                    <div className=' w-full flex flex-col mt-4 md:space-y-0'>
                        <div className=''>
                            <input style={{color:textColor}} onKeyUp={setNoteTopic} placeholder='Topic...' id='noteTopic' type="text" className=' font-normal text-xl p-3 font-Baloo w-[300px] bg-transparent mt-[6px]' />
                        </div>
                        <div className=''>
                            <input readOnly style={{color:textColor}} value={ daTim } type="text" className=' p-3 bg-transparent font-Quicksand font-normal text-sm mt-[0px]' />
                        </div>
                        <div className=' w-full'>
                            <textarea onKeyUp={setNoteContent} style={{color:textColor}} id="noteContent" className='w-full h-[50vh] p-3 font-Quicksand font-normal text-base bg-transparent' placeholder='Note content here....' cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center fixed right-0 left-0 bottom-6'>
                    <div style={{background:overColor}} className=' w-full md:w-[400px] p-6 flex justify-between items-center backdrop-blur-[20px] h-[70px] md:h-[80px] rounded-[120px]'>
                        <motion.button 
                        initial={{scale:1}}
                        whileHover={{scale:1.1}} style={{background:btnColor}} onClick={ togglePopup } className=' w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex justify-center items-center rounded-[50%] shadow blur-[2px]'>
                            { darkMode === false &&<img src={ plus } className=' w-6 md:w-8' alt="" />}
                            { darkMode === true &&<img src={ whitePlus } className=' w-6 md:w-8' alt="" />}
                        </motion.button>
                        <motion.button 
                        initial={{scale:1}}
                        whileHover={{scale:1.1}} style={{background:btnColor}} className=' w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex justify-center items-center rounded-[50%] shadow blur-[2px]'>
                            { darkMode === false &&<img src={ camera } className=' w-6 md:w-8' alt="" />}
                            { darkMode === true &&<img src={ whiteCamera } className=' w-6 md:w-8' alt="" />}
                        </motion.button>
                        <motion.button 
                        initial={{scale:1}}
                        whileHover={{scale:1.1}} style={{background:btnColor}} onClick={()=>{setEditPanel(true)}} className=' w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex justify-center items-center rounded-[50%] shadow'>
                            {darkMode === false && <img src={ pen } className=' w-4 md:w-6 h-6 md:h-8' alt="" />}
                            {darkMode === true && <img src={ whitePen } className=' w-4 md:w-6 h-6 md:h-8' alt="" />}
                        </motion.button>
                        <motion.button 
                        initial={{scale:1}}
                        whileHover={{scale:1.1}} style={{background:btnColor}} className=' w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex justify-center items-center rounded-[50%] shadow blur-[2px]'>
                            { darkMode === false &&<img src={ mic } className=' w-6 md:w-8' alt="" />}
                            { darkMode === true &&<img src={ whiteMic } className=' w-6 md:w-8' alt="" />}
                        </motion.button>
                    </div>
                </div>
                { editPanel && <div  className=' fixed bottom-6 left-0 right-[0px] flex justify-center items-center px-2 md:px-[100px]'>
                    <div style={{background:formatColor}} className=' w-full bg-[#303030] p-5 rounded-[50px] relative'>
                        <div className=' w-full absolute top-1 flex justify-center items-center'>
                            <img src={ sort } onClick={()=>{setEditPanel(false)}} className=' w-[32px]' alt="" />
                        </div>
                        <Palette GetnoteBgColor={noteBgColor}/>
                        <div className=' flex justify-between items-center mt-3'>
                            <button style={{background:btnColor}} className=' w-[70px] h-[50px] flex items-center justify-center bg-white rounded-[50px] blur-[2px]'><img src={ bold } className=' w-[24px] h-[24px] md:w-auto md:h-auto' alt="" /></button>
                            <button style={{background:btnColor}} className=' w-[70px] h-[50px] flex items-center justify-center bg-white rounded-[50px] blur-[2px]'><img src={ italic } className=' w-[24px] h-[24px] md:w-auto md:h-auto' alt="" /></button>
                            <button style={{background:btnColor}} className=' w-[70px] h-[50px] flex items-center justify-center bg-white rounded-[50px] blur-[2px]'><img src={ underline } className=' w-[24px] h-[24px] md:w-auto md:h-auto' alt="" /></button>
                            <button style={{background:btnColor}} className=' w-[70px] h-[50px] flex items-center justify-center bg-white rounded-[50px] blur-[2px]'><img src={ link } className=' w-[24px] h-[24px] md:w-auto md:h-auto' alt="" /></button>
                        </div>
                        <div style={{background:btnColor}} className=' w-full h-[50px] bg-white rounded-[50px] mt-3 flex justify-between items-center px-4'>
                            <img src={ tac } className=' md:w-auto md:h-auto w-[24px] h-[24px] blur-[2px]'alt="" />
                            <img src={ tar } className=' md:w-auto md:h-auto w-[24px] h-[24px] blur-[2px]'alt="" />
                            <img src={ tal } className=' md:w-auto md:h-auto w-[24px] h-[24px] blur-[2px]' alt="" />
                            <img src={ tajr } className=' md:w-auto md:h-auto w-[24px] h-[24px] blur-[2px]' alt="" />
                            <img src={ tajc } className=' md:w-auto md:h-auto w-[24px] h-[24px] blur-[2px]' alt="" />
                            <img src={ tajl } className=' md:w-auto md:h-auto w-[24px] h-[24px] blur-[2px]' alt="" />
                        </div>
                    </div>
                </div>}
            </div>}
          { showBg && <div style={{background:bgColor}} className="whitebg lg:py-[35px] w-full lg:px-[80px] p-6 relative">
                <div className=" navbar flex flex-row justify-between items-center">
                    <p style={{color:textColor}} className=' font-Baloo lg:text-3xl text-xl font-bold'>My Notes</p>
                    <span className=" flex flex-row items-center space-x-3 md:space-x-8">
                        { darkMode === false && <img src={ moon } onClick={()=>{setDarkMode(true)}} className=' w-6  h-6 lg:h-[32px] lg:w-[32px]' alt="" />}
                        { darkMode === true && <img src={ sun } onClick={()=>{setDarkMode(false)}} className=' w-6  h-6 lg:h-[32px] lg:w-[32px]' alt="" />}
                        <div className=' flex flex-col '>
                            { darkMode === false && <img src={ user } onClick={ handleClick } className=' w-6 lg:w-[32px]  h-6 lg:h-[32px] cursor-pointer' alt="search" />}
                            { darkMode === true && <img src={ whiteUser } onClick={ handleClick } className=' w-6 lg:w-[32px]  h-6 lg:h-[32px] cursor-pointer' alt="search" />}
                            { isUser && <motion.span 
                            initial={{y:-100}}
                            animate={{y:0}}
                            transition={{type:'spring', stiffness:80}}
                            className=' bubble-top lg:top-20 top-16 z-[99] right-6 p-4 absolute bg-[#f1f1f1] shadow space-y-2 rounded-md'>
                                {  darkMode === false &&  <img src={ user } alt="" />}
                                {  darkMode === true &&  <img src={ whiteUser } alt="" />}
                                <p className=' font-Labrada text-sm font-medium'>{ name }</p>
                                <p className=' font-Labrada text-sm font-medium'>{ mail }</p>
                            </motion.span>}
                        </div>
                        { darkMode === false && <img src={ exit } onClick={ signout } className= ' w-6  h-6 lg:h-[32px] lg:w-[32px] cursor-pointer' alt="setting" />}
                        { darkMode === true && <img src={ whiteExit } onClick={ signout } className= ' w-6  h-6 lg:h-[32px] lg:w-[32px] cursor-pointer' alt="setting" />}
                    </span>
                </div>
                <input style={{background:searchColor, color:textColor}} placeholder='Search for Notes...' type="text" className=' mt-2 w-[300px] h-[45px] rounded-[42px] py-2 px-5 font-Quicksand placeholder:font-Quicksand font-normal text-base' />
                <div className=' w-full h-[70vh] scrollbar-hide md:scrollbar mt-5 overflow-scroll pr-3 lg:pr-8 scrollBB'>
                    <Notes/>
                </div>
                <div className='w-full flex justify-center items-center left-0 right-0 fixed bottom-4 md:bottom-10 px-6 md:px-0 lg:bottom-6'>
                    <div style={{background:overColor}} className=' w-full md:w-[400px] p-6 flex justify-between items-center backdrop-blur-[20px] h-[70px] md:h-[80px] rounded-[120px]'>
                        <motion.button 
                        initial={{scale:1}}
                        whileHover={{scale:1.1}} style={{background : btnColor}} onClick={ togglePopup } className=' w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex justify-center items-center rounded-[50%] shadow'>
                            { darkMode === false &&<img src={ plus } className=' w-6 md:w-8' alt="" />}
                            { darkMode === true &&<img src={ whitePlus } className=' w-6 md:w-8' alt="" />}
                        </motion.button>
                        <motion.button 
                        initial={{scale:1}}
                        whileHover={{scale:1.1}} style={{background:btnColor}} className=' w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex justify-center items-center rounded-[50%] blur-[2px] shadow'>
                            { darkMode === false &&<img src={ camera } className=' w-6 md:w-8' alt="" />}
                            { darkMode === true &&<img src={ whiteCamera } className=' w-6 md:w-8' alt="" />}
                        </motion.button>
                        <motion.button 
                        initial={{scale:1}}
                        whileHover={{scale:1.1}} style={{background:btnColor}} className=' w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex justify-center items-center rounded-[50%] blur-[2px] shadow'>
                            {darkMode === false && <img src={ pen } className='w-4 md:w-6 h-6 md:h-8' alt="" />}
                            {darkMode === true && <img src={ whitePen } className=' w-4 md:w-6 h-6 md:h-8' alt="" />}
                        </motion.button>
                        <motion.button 
                        initial={{scale:1}}
                        whileHover={{scale:1.1}} style={{background:btnColor}} className=' w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex justify-center items-center rounded-[50%] blur-[2px] shadow'>
                            { darkMode === false &&<img src={ mic } className=' w-6 md:w-8' alt="" />}
                            { darkMode === true &&<img src={ whiteMic } className=' w-6 md:w-8' alt="" />}
                        </motion.button>
                    </div>
                </div>
            </div>}
        </motion.div>
     );
}
 
export default Home;