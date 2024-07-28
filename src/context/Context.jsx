import {createContext, useState} from "react";
import run from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('')
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('')


    const delayPara = (index, nextWord) => {
          setTimeout(() => {
            setResultData(prev => prev + nextWord)
          },75*index)
    }

    const onSent = async (props) => {
        setResultData('') // result data will be reset so that our prev response will be removed from our state variable
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const res = await run(input)
        let resArray = res.split('**')
        let partsResponseBold;
        for (let i = 0; i < resArray.length; i++)
        {
            if(i === 0 || i%2 !== 1){
                partsResponseBold += resArray[i]
            }else{
                partsResponseBold += '<b>' + resArray[i] + '</b>'
            }
        }
        let splitResponseNewLine = partsResponseBold.split('*').join('</br>')
        setResultData(splitResponseNewLine)
        let newResponseArray = splitResponseNewLine.split(' ')
        for (let i = 0; i<newResponseArray.length; i++)
        {
            const nextWord = newResponseArray[i]
            delayPara(i, nextWord+' ')
        }
        setLoading(false)
        setInput('')

    }

    const ContextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,

    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider