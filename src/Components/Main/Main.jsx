import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {

    const{onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
      
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
            {!showResult
            ?<>
                <div className="greet">
                <p><span>Hello, Sresta.</span></p>
                <p>how can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Explore the hidden gems of the countryside on your road trip.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>How to come up with creative ideas for my project?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Best messaging apps for instant communication.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>What are the best practices for writing efficient code?.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                </div>
            </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here.' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input
                            ?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                            :null
                        }
                    </div>
                </div>
                <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your Privacy and Gemini Apps</p>
            </div>
        </div>

    </div>
  )
}

export default Main
