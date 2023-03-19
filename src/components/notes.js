import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, onSnapshot, query, where, doc} from 'firebase/firestore';
import trash from '../images/trash.png';
import add from '../images/add.png';
import edit from '../images/edit.png';
import { useEffect, useState } from 'react';
import '../index.css';

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

      const [note, setNote] = useState([])

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

    return ( 
        <div id='notes' className='notes mt-[32px] w-full mx-auto flex flex-col md:flex-row flex-wrap justify-between'>
            { note.map((doc) =>(
                <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%]  rounded-[20px] bg-[${doc.data().noteBg}] p-6 relative' style={{ backgroundColor:doc.data().NoteBg }} key={doc.id}>
                    <p className=' font-Labrada font-semibold text-base text-black'>{doc.data().NoteTopic}</p>
                    <p className=' font-Labrada font-medium mt-1 text-sm'>{doc.data().NoteDesc}</p>
                    <p className=' font-Labrada font-normal mt-1 text-sm'>{doc.data().NoteContent}</p>
                    <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                    <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                </div>
            ))}
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#C8D8EF] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className=' font-Labrada font-normal bg-transparent mt-1 text-sm h-[95px] overflow-x-hidden scrollbar' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare nisl id erat suscipit, eget egestas velit tincidunt. Phasellus venenatis enim eget massa condimentum suscipit sed convallis libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sed libero eget odio posuere convallis. Quisque ut lacus sed quam vestibulum aliquet. Aliquam id risus vitae sapien.</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#EAE4EE] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className=' font-Labrada font-normal mt-1 text-sm'>chdvdjvh djkdkjdj jdk jdhyss scol;csus  ccsjyuol gcsklshttgbscbc c usukl hduycij sgtj</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#D5B3D6] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#98B6EC] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#FFF9E1] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                    <div className=' h-[220px] my-[15px] md:flex-[0_1_30%] lg:flex-[0_1_28%] rounded-[20px] bg-[#FCE681] p-6 relative'>
                        <p className=' font-Labrada font-semibold text-base'>Topic</p>
                        <p className=' font-Labrada font-medium mt-1 text-sm'>Brief description</p>
                        <p className='font-Labrada font-medium absolute bottom-6 left-6 text-sm'>Date</p>
                        <span className=' absolute right-6 bottom-6 flex flex-row items-center space-x-2'>
                            <img src={ edit } className=' w-[20px]' alt="" />
                            <img src={ add } className=' w-[20px]' alt="" />
                            <img src={ trash } className=' w-[20px]' alt="" />
                        </span>
                    </div>
                </div>
    );
}
 
export default Notes;