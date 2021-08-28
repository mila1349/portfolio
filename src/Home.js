import React, {useState, useEffect} from 'react'
import { useSpring, animated } from 'react-spring'
import './Home.css'
import {Link} from "react-router-dom";

function Home() {
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    const [{ w, h }, set] = useSpring(() => ({ width: '20px', height: '20px'}));
    
    useEffect(() => {
        const moveCursor = (e) => { 
            const x = e.clientX - 16
            const y = e.clientY - 16
            setCursorXY({ x, y })
        }

        window.addEventListener('mousemove', moveCursor)


        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    
    return (
        <div className="home">
            <animated.div className="cursor"
                style={{
                transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
                width:w,
                height:h
              }}
              ></animated.div>
            
            <Link to="/profile">
            <div className="home-option"
                onMouseOver={() => set({ w: '150px', h: '150px' })}
                onMouseLeave={() => set({ w: '20px', h: '20px' })}
            >
                <h1>Pro</h1>
                <h2>file</h2>
                <p>01</p>
            </div>
            </Link>

            <Link to="/skills">
            <div className="home-option"
                onMouseOver={() => set({ w: '150px', h: '150px' })}
                onMouseLeave={() => set({ w: '20px', h: '20px' })}
            >
                <p>02</p>
                <h1>Ski</h1>
                <h2>lls</h2>
            </div>
            </Link>

            <Link to="/works">
            <div className="home-option"
                onMouseOver={() => set({ w: '150px', h: '150px' })}
                onMouseLeave={() => set({ w: '20px', h: '20px' })}
            >
                <h1>Wo</h1>
                <h2>rks</h2>
                <p>03</p>
            </div>
            </Link>

            <Link to="/design">
            <div className="home-option"
                onMouseOver={() => set({ w: '150px', h: '150px' })}
                onMouseLeave={() => set({ w: '20px', h: '20px' })}
            >
                <p>04</p>
                <h1>Des</h1>
                <h2>ign</h2>
            </div>
            </Link>

            <Link to="/contact">
            <div className="home-option"
                onMouseOver={() => set({ w: '150px', h: '150px' })}
                onMouseLeave={() => set({ w: '20px', h: '20px' })}
            >
                <h1>Con</h1>
                <h2>tact</h2>
                <p>05</p>
            </div>
            </Link>
        </div>
    )
}

export default Home
