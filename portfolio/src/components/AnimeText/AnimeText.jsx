
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Anime.css'
import {motion} from 'framer-motion'

const quote = {
    initial:{
        opacity: 1,
    },
    animate:{
        opacity: 1,
        transition:{
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial:{
        opacity: 0,
        y:50,
    },
    animate:{
        opacity: 1,
        y:0,
        transition:{
            duration: 1,
        }
    }
}

// eslint-disable-next-line react/prop-types
const AnimeText = ({Text, className=''}) => {
  return (
    <div className="anime-text w-full mx-auto py-2 items-center justify-center text-center overflow-hidden">
        <motion.h1 className={`inline-block w-full text-black font-bold capitalize sm:text-[2.5vw]  ${className}`}
        variants={quote}
        initial= "initial"
        animate = "animate"
        >
            {
                // eslint-disable-next-line react/prop-types
                Text.split(" ").map((word, index)=>
                <motion.span key={word+'-'+index} className="inline-block"
                variants={singleWord}
                // initial="initial"
                // animate="animate"
                >
                    {word}&nbsp;
                </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}

export default AnimeText