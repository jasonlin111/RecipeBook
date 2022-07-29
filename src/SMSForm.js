import {useState} from "react";
import style from './SMSForm.module.css'

function SMSForm({message}) {
   const [phone, setPhone] = useState("")
   const updatePhone = (e) => {
      setPhone(e.target.value)
   }

   const send = (e) => {
      e.preventDefault() // prevent page refresh after submit
      fetch(`http://localhost:4000/send-text?recipient=${phone}&textmessage=${message}`)
      setPhone("") // empty phonebox after message is sent
   }
   
   return (
      <div>
         <form className={style.textForm} onSubmit={send}>
         <input className={style.textBar} type="text" value={phone} onChange={updatePhone}/>
         <button className={style.sendButton} type="submit">Send</button>
         </form>
      </div>
   );
   }
   
   export default SMSForm;