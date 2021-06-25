import React from 'react'
import './style.css'
import img3 from '../../assets/messi.jpg';

import {FiFacebook,AiOutlineInstagram,FiTwitter} from 'react-icons/all'

export default function Card({image,cls}) {
    return (
        <div className={cls}>
            <div className="top">
                <img src={image} alt="" />
                <div className="icons"><span><FiFacebook/></span> <span><AiOutlineInstagram/></span>  <span><FiTwitter/></span></div>
            </div>
            <div className="btm">
                <div className="imgContainer">
                    <div className="imgContent"><img src={img3} alt="" />
                        
                    </div>
            
                    
                    <div className="text">
                        <div className="big">Avneesh</div>
                        <div className="small">Manager</div>
                    </div>
                </div>
                <div className="dots">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    )
}
