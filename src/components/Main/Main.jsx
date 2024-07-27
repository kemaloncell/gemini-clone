import './Main.css'
import {assets} from "../../assets/assets.js";

const Main = () => {
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
                        <p>11 non possipsam natus rem. Accusamus dot, ratione repellendus!</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className='card'>
                        <p>222non possipsam natus rem. Accusamus dot, ratione repellendus!</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className='card'>
                        <p>333non possipsam natus rem. Accusamus dot, ratione repellendus!</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className='card'>
                        <p>444non possipsam natus rem. Accusamus dot, ratione repellendus!</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main