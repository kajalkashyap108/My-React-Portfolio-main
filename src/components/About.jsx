import React from 'react'
import aboutImg from '../assets/About2.png';
import {ABOUT_TEXT} from '../constants';
import { motion } from "framer-motion"
const About = () => {
  return (
    <div  className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'> 🪁About
         <span className='text-neutral-500'> Me.☀️
        </span>
        </h1>
    <div  className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:0.5}} 
             className='flex items-center justify-center'>
                <img src = {aboutImg} alt='About' className='max-w-[200px] lg:max-w-[300px] h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110'></img>
            </motion.div>
            </div>
            <div className='w-full lg:w-1/2 '>
                <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                 className='flex justify-center text-justify lg:justify-start '>
                    <p className='my-4 max-w-xl py-6 font-medium '>
                        Hello! I’m a passionate Computer Science and Engineering graduate from GIET University  in Gunupur,Odisha. My education has equipped me with a solid foundation in both theoretical and practical aspects of computer science.
                        <br></br>
                        <br></br>
                        Proficient in Python, C/C++, JavaScript, and PHP, with hands-on experience in web development using Django and Flask frameworks. Skilled in machine learning libraries like TensorFlow, scikit-learn, NumPy, and pandas.Familiar with HTML/CSS for frontend development and proficient in SQL and Firebase for database management. Additionally, often practice coding questions on various platforms and a adept problem solver.
                        <br></br>
                        <br></br>
                        I have gained hands-on experience through internships, including my role as a Software Developer Intern at DePronto Infotech, where I worked on projects for leading private banks in India.I actively participate in coding challenges on platforms like LeetCode and HackerRank, where I have solved over 250 problems and achieved a 5-star rating. I am also involved in extracurricular activities and hold certifications like AWS Cloud Practitioner Essentials.
                    </p>
                </motion.div>
            </div>
        </div>
    </div> 
  )
}

export default About  