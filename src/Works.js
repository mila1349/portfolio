import React, {useContext} from 'react'
import './Works.css'
import {Work} from './Work'
import Carousel from "react-elastic-carousel";
import Navbar from './Navbar'
import {Context} from './Context' 

function Works() {
    const {workProvide}=useContext(Context);
    const [work, setWork]=workProvide; 
    
    return (
        <div className="works">
            <Navbar
                no="03"
                name="Works"
            />


            <div className="work-container">
                <Carousel>
                    {work.map(item=>(
                        <div className="video" >
                            <Work
                                src={item.url}
                                muted
                                autoPlay
                                loop
                            />
                            <div className="overlay" >
                                <h3>{item.name}</h3>
                                <div className="lang">
                                    {
                                        item.lang.map(bahasa=>(
                                            <h3>{bahasa}</h3>
                                        ))
                                    }
                                </div>
                                <div className="btn-container">
                                    <div className="btn" style={item.web!==""?{display:"block"}:{display:"none"}}>
                                        <a href={item.web}>See website</a>
                                    </div> 

                                    <div className="btn" style={item.git!==""?{display:"block"}:{display:"none"}}>
                                        <a href={item.git}>Github</a>
                                    </div> 
                                </div>
                                
                            </div>
                        </div>    
                    ))}
                </Carousel>
            </div>

        </div>
    )
}

export default Works
