import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, onSnapshot, query, where, doc, deleteDoc, orderBy, updateDoc} from 'firebase/firestore';
import trash from '../images/trash.png';
import edit from '../images/edit.png';
import { useEffect, useState } from 'react';
import '../index.css';
import sort from '../images/sort.png';
import bin from '../images/rubbish.png';
import { motion } from 'framer-motion';

const Notes = () => {

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

      const [note, setNote] = useState([]);
    //   const [docId, setDocId] = useState('');


    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                const uid = user.uid;
                //get notes
                //collection ref
                const colref = collection(db, 'notes');
                // queries 
                const q = query(colref, where('uid', '==', user.uid), orderBy("date", "asc"));
                onSnapshot(q ,(snapshot) => {
                    const Notes =[];
                    snapshot.forEach((doc)=>{
                        Notes.push(doc);
                    });
                    setNote(Notes);
                })
            }
            else{
                // Navigate('/login')
            }
        })
    }, [Notes]);


    const [popup, setPopup] = useState(false);
    const [noteId, setNoteId] = useState('');

    const getDelValue =(e)=>{
        const val = e.target.value;
        if(val == 'Cancel'){
            setPopup(false);  
        }
        else if(val=='Delete'){
            setPopup(false);
            deleteDoc(doc(db, "notes", noteId))
            .then(()=>{
                const delWarn = document.getElementById('delWarn');
                delWarn.classList.remove('translate-x-[100vw]')
                removeWarn();
            })
            .catch((error)=>{
            })
        }
    }
    function removeWarn(){
            setTimeout(()=>{
                const delWarn = document.getElementById('delWarn');
                delWarn.classList.add('translate-x-[100vw]')
            }, 4500)
    }


    const handleClick = e =>{
        setPopup(true)
        // alert('hello')
        const bin = e.target.parentElement;
        const docId = bin.parentElement.getAttribute('id');
        setNoteId(docId);
    }

    // edit note functions and states

    const [noteEdit, setnoteEdit] = useState(false);
    const [topic, setTopic] = useState('');
    const [desc, setDesc] = useState('');
    const [content, setContent] = useState('');

    const handleEditClick = e =>{
        setnoteEdit(true)
        const bin = e.target.parentElement;
        const docId = bin.parentElement.getAttribute('id');
        setNoteId(docId);
        const elements = bin.parentElement.children;
        const top = elements[1].innerHTML;
        const desc = elements[2].innerHTML;
        const cont = elements[3].innerHTML;
        setTopic(top);
        setDesc(desc);
        setContent(cont);
    }

    const getNewTopic = (e)=>{
        const newtop = e.target.value;
        setTopic(newtop)
    }
    const getNewDesc = (e)=>{
        const newDesc = e.target.value;
        setDesc(newDesc)
    }
    const getnewContent = (e)=>{
        const newDesc = e.target.value;
        setContent(newDesc)
    }

    const getEditValue =(e)=>{
        const val = e.target.value;
        if(val == 'Cancel'){
            setnoteEdit(false);  
        }
        else if(val=='Save'){
            setnoteEdit(false);
            const docRef = doc(db, "notes", noteId);
            const newData ={
                NoteTopic:topic,
                NoteDesc: desc,
                NoteContent:content,
            };
            updateDoc(docRef, newData)
            .then(()=>{
                const upWarn = document.getElementById('upWarn');
                upWarn.classList.remove('translate-x-[100vw]')
                removeUpWarn();
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
    function removeUpWarn(){
        setTimeout(()=>{
            const upWarn = document.getElementById('upWarn');
            upWarn.classList.add('translate-x-[100vw]')
        }, 4500)
}

    return ( 
        <div className=' w-full'>
            {popup && <div className=' fixed h-[100vh] top-0 left-0 w-[100vw] bg-[rgba(0,0,0,0.3)] z-[99999] flex justify-center items-center'>
                <div className=' bg-[#f1f1f1] py-6 px-10 rounded-[20px] flex flex-col justify-center items-center relative'>
                    <p className=' font-Labrada text-lg font-semibold'>You are about to delete a note</p>
                    <p className=' font-Labrada text-base text-gray-500 font-medium mt-3'>This will delete your note permanently</p>
                    <p className=' font-Labrada text-base text-gray-500 font-medium'>Are you Sure?</p>
                    <span className='  flex space-x-4 mt-3'>
                        <input type="button" onClick={getDelValue} value="Cancel" className=' font-Labrada' />
                        <input type="button" onClick={getDelValue} value="Delete" className=' px-2 py-1 text-white bg-red-700 rounded-md font-Labrada' />
                    </span>
                </div>
            </div>}
            <div id='delWarn' className=' translate-x-[100vw] transition-all duration-100 bg-[#f1f1f1] rounded-md md:w-[250px] md:h-[90px] w-[200px] h-[80px] flex flex-row fixed right-10 top-[10%] z-[9999999]'>
                <div className=' w-[30%] h-full bg-[#fdd037] rounded-l-md flex justify-center  items-center'>
                    <img src={ bin } alt="" className=' w-6' />
                </div>
                <div className=' flex justify-center items-center p-2'>
                    <p className=' font-Labrada text-base'>Sucessfully Deleted</p>
                </div>
            </div>
            <div id='upWarn' className=' translate-x-[100vw] transition-all duration-75 bg-[#f1f1f1] rounded-md md:w-[250px] md:h-[90px] w-[200px] h-[80px] flex flex-row fixed right-10 top-[10%] z-[9999999]'>
                <div className=' w-[30%] h-full bg-[#fdd037] rounded-l-md flex justify-center  items-center'>
                    <img src={ bin } alt="" className=' w-6' />
                </div>
                <div className=' flex justify-center items-center p-2'>
                    <p className=' font-Labrada text-base'>Sucessfully Saved</p>
                </div>
            </div>
            <div id='notes' className='notes w-auto mx-auto space-x-1 flex md:flex-row flex-wrap justify-between '>
                { note.map((doc) =>(
                    <motion.div
                    initial={{x:250}}
                    animate={{x:0}}
                    transition={{type:'spring', stiffness:50}}
                    className=' h-[150px] my-[5px] pb-10 w-[48%] overflow-hidden md:w-[49%] lg:w-[49.5%] rounded-[40px] shadow-sm p-6 relative' style={{ backgroundColor:doc.data().NoteBg }} id={doc.id} key={doc.id}>
                        <div className=' w-full absolute top-1 right-0 left-0 flex justify-center items-center'>
                            <img src={ sort } className=' w-[32px]' alt="" />
                        </div>
                        <p className=' font-Quicksand w-full font-semibold text-sm md:text-base '>{doc.data().NoteTopic}</p>
                        <p className=' font-Quicksand w-full font-medium mt-1 text-sm md:text-base'>{doc.data().dateTime}</p>
                        <p className=' font-Quicksand overflow-hidden w-full font-normal bg-transparent mt-1 text-xs md:text-sm mb-6'>{doc.data().NoteContent}</p>
                    </motion.div>
                ))}
            </div>
            {noteEdit && <div className=' w-[100vw] flex justify-center items-center h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] z-[99999] px-3'>
                <div className=' bg-[#fff] rounded-[20px] px-6 py-8 w-full md:w-auto'>
                    <div className=' space-y-4 flex flex-col w-full'>
                        <span className=' flex flex-col space-y-2'>
                            <label htmlFor="noteTopic" className=' font-Labrada font-medium text-lg'>Note Topic</label>
                            <input className=' font-Labrada p-2 text-sm w-full md:w-[350px] h-[50px] bg-[#f1f1f1] rounded-md' defaultValue={topic} onChange={getNewTopic} type="text" />
                        </span>
                        <span className=' flex flex-col space-y-2'>
                            <label htmlFor="noteDesc" className=' font-Labrada font-medium text-lg'>Note Description</label>
                            <input className=' font-Labrada p-2 text-sm w-full md:w-[350px] h-[50px] bg-[#f1f1f1] rounded-md' defaultValue={desc} onChange={getNewDesc} type="text" />
                        </span>
                        <span className=' flex flex-col space-y-2'>
                            <label htmlFor="note" className=' font-Labrada font-medium text-lg'>Note</label>
                            <textarea className=' font-Labrada p-2 text-sm w-full md:w-[350px] h-[170px] bg-[#f1f1f1] rounded-md' defaultValue={content} onChange={getnewContent} type="text" >
                            </textarea>
                        </span>
                        <span className=' flex flex-row ml-auto space-x-5'>
                            <input type="button" onClick={ getEditValue } className=' font-Labrada font-medium text-base' value="Cancel" />
                            <input type="button" onClick={ getEditValue } className=' font-Labrada font-medium py-1 px-2 bg-black text-white rounded-md text-base' value="Save" />
                        </span>
                    </div>
                </div>
            </div>}
        </div>
        
    );
}
 
export default Notes;