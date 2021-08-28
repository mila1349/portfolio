import React, {useState, createContext} from 'react'

import Budget from "./video/budget-demo.mp4"
import Hotel from "./video/hotel-demo.mp4"
import Restaurant from "./video/restaurant-demo.mp4"

import Ohii1 from "./image/ohii-landing.PNG"
import Ohii2 from "./image/ohii.png"
import Hotel1 from "./image/hotel-landing.PNG"
import Hotel2 from "./image/hotel.png"
import Rest1 from "./image/restaurant-landing.PNG"
import Rest2 from "./image/restaurant.png"


export const Context=createContext();

export const StateProvider=props=>{
    const [work, setWork]=useState([
        {
            url:Restaurant,
            name:'Restaurant System',
            lang:['React.js','Firebase','Realtime Database'],
            web:"https://restaurant-8c9dd.web.app/",
            git:"https://github.com/mila1349/restaurant-management"
        },
        {
            url:Hotel,
            name:"Booking Hotel System",
            lang:['PHP','Mysql'],
            web:"",
            git:"https://github.com/mila1349/booking-hotel-web-app"
        },
        {
            url:Budget,
            name:"Budget-Planner",
            lang:['React.js','Redux'],
            web:"https://budget-planner-web.netlify.app/",
            git:"https://github.com/mila1349/budget-planner"
        }
    ])

    const [design, setDesign]=useState([
        {
            small:Ohii1,
            big:Ohii2
        },
        {
            small:Hotel1,
            big:Hotel2
        },
        {
            small:Rest1,
            big:Rest2
        }
    ])


    return <Context.Provider 
        value={{
            workProvide:[work, setWork],
            designProvide:[design, setDesign]
        }}>{props.children}</Context.Provider>
        
}