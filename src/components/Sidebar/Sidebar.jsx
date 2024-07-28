import './Sidebar.css'
import {assets} from "../../assets/assets.js";
import {useContext, useState} from "react";
import {Context} from "../../context/Context.jsx";
const Sidebar = () =>{
    const [extented, setExtended] = useState(false)
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt='' />
                 <div onClick={() => newChat()} className='new-chat'>
                     <img src={assets.plus_icon} alt=''/>
                     {extented ? <p>New Chat</p> : null}
                 </div>
                {extented
                    ? <div className='recent'>
                    <p className='recent-title'>Recent</p>
                        {prevPrompts.map(item => {
                            return (
                                <div onClick={() => loadPrompt(item)} className='recent-entry'>
                                    <img src={assets.message_icon} alt=''/>
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            )
                        })
                        }

                    </div>
                    : null
                }
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} alt=''/>
                    {extented ? <p>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} alt=''/>
                    {extented ? <p>Activity</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} alt=''/>
                    {extented ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
