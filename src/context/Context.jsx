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



    const onSent = async (props) => {
        setResultData('') // result data will be reset so that our prev response will be removed from our state variable
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const res = await run(input)
        setResultData(res)
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