import './Main.css'
import {assets} from "../../assets/assets.js";
import {useContext} from "react";
import {Context} from "../../context/Context.jsx";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    } = useContext(Context)

    return(
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt=''/>
            </div>
            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <p>Product Description</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className='card'>
                        <p>Career fields</p>
                        <img src={assets.bulb_icon} alt=""/>
                    </div>
                    <div className='card'>
                        <p>Technological developments</p>
                        <img src={assets.message_icon} alt=""/>
                    </div>
                    <div className='card'>
                        <p>Knowledge test</p>
                        <img src={assets.code_icon} alt=""/>
                    </div>
                </div>

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input type='text' placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt=""/>
                            <img src={assets.send_icon} alt=""/>
                        </div>
                    </div>
                        <p className='bottom-info'>
                            Gemini can show incorrect information about various topics, including people, so make sure to check if the answers it gives are accurate.
                        </p>

                </div>
            </div>
        </div>
    )
}

export default Main