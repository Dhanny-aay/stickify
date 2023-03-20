import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, onSnapshot, query, where, doc, deleteDoc} from 'firebase/firestore';
import trash from '../images/trash.png';
import add from '../images/add.png';
import edit from '../images/edit.png';
import { useEffect, useState } from 'react';
import '../index.css';
import plus from '../images/plus.png';
import bin from '../images/rubbish.png';

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
                const q = query(colref, where('uid', '==', user.uid));
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
    // const [delValue, setDelValue] = useState('');
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

    return ( 
        <div className=''>
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
            <div id='delWarn' className=' translate-x-[100vw] transition-all  bg-[#f1f1f1] rounded-md md:w-[250px] md:h-[90px] w-[200px] h-[80px] flex flex-row fixed right-10 top-[10%] z-[9999999]'>
                <div className=' w-[30%] h-full bg-[#fdd037] rounded-l-md flex justify-center  items-center'>
                    <img src={ bin } alt="" className=' w-6' />
                </div>
                <div className=' flex justify-center items-center p-2'>
                    <p className=' font-Labrada text-base'>Sucessfully Deleted</p>
                </div>
            </div>
            <div id='notes' className='notes mt-[32px] w-full mx-auto flex flex-col md:flex-row flex-wrap justify-between'>
                { note.map((doc) =>(
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] md:w-[30%] lg:w-[28%] lg:flex-[0_1_28%]  rounded-[20px] shadow-sm p-6 relative' style={{ backgroundColor:doc.data().NoteBg }} id={doc.id} key={doc.id}>
                        <p className=' font-Labrada w-full font-semibold text-base '>{doc.data().NoteTopic}</p>
                        <p className=' font-Labrada w-full font-medium mt-1 text-base'>{doc.data().NoteDesc}</p>
                        <p className=' font-Labrada w-full font-normal bg-transparent mt-1 text-sm h-[95px] overflow-x-hidden scrollbar'>{doc.data().NoteContent}</p>
                        <p className='font-Labrada font-medium absolute bottom-5 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-5 flex flex-row items-center space-x-2'>
                                <img src={ edit } className=' w-[20px]' alt="" />
                                <img src={ trash } onClick={ handleClick } className=' w-[20px]' alt="" />
                            </span>
                    </div>
                ))}
                <div className=' shadow-sm h-[220px] my-[15px] md:flex-[0_1_30%] md:w-[30%] lg:w-[28%] lg:flex-[0_1_28%] rounded-[20px] bg-tr p-6 relative bg-[#f1f1f1] flex justify-center items-center flex-col'>
                    <button className=' w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-[#f1f1f1]'><img src={ plus } alt="" /></button>
                    <p className='font-Labrada font-semibold text-base text-black'>Add New Note</p>
                </div>
            </div>
        </div>
        
    );
}
 
export default Notes;