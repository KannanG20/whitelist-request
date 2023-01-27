import React, { useState } from 'react'
import {  collection, addDoc } from 'firebase/firestore';
import { db } from './FirebaseConfig';

const Whitelist = () => {

    const [discordTag, setDiscordTag] = useState("");
    const [pbId, setPbId] = useState("");
    const [clan, setClan] = useState("");
    const [success, setSuccess] = useState(false);
    const[err, setErr] = useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await addDoc(collection(db, "users"), {
                DiscordTag : discordTag,
                pbID : pbId,
                clan : clan,
            })
            setSuccess(true);
        } catch(error) {
            setErr(true);
        } 
        setDiscordTag("");
        setClan("");
        setPbId("");
    }

  return (
    <div className='container'>
        <h1>OMEGA WHITELIST REQUEST</h1>
        <form onSubmit={handleSubmit}>
            <label for="name">Discord Tag :</label>
            <input type='text' id='name' placeholder="ex: spy#0880" onChange={(e)=>setDiscordTag(e.target.value)} value={discordTag}></input>
            <label for="pbId">pb ID (In-Game) :</label>
            <input type='text' id='pbId' placeholder="ex: pbIF4MkIg" onChange={(e)=>setPbId(e.target.value)} value={pbId}></input>
            <label for="clan">Are you a member of any clan? :</label>
            <input type='text' id='clan' onChange={(e)=>setClan(e.target.value)} value={clan}></input>
            <button>submit</button>
        </form> 
        {success && 
            <h5 className='success'>Your request has been sent!</h5>
        }
        {err && 
            <h5 className='error'>something is wrong..</h5>
        }
        <p>Join on Discord for trial test : <a href='https://discord.gg/MVuf4rJHwz' target='_blank'>Discord</a></p>
    </div>
  )
}

export default Whitelist