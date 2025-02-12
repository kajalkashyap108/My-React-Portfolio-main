import React from 'react';
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoCPlusPlus, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoFigma } from "react-icons/bi";
import { SiChakraui } from "react-icons/si";
import { motion } from "framer-motion";

const iconMove = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>✨Technologies.🪁</motion.h1>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                {[{
                    icon: <RiReactjsLine className='text-7xl text-cyan-400 group-hover:opacity-50' />, label: "React", duration: 1.5
                }, {
                    icon: <RiTailwindCssFill className='text-7xl text-cyan-400 group-hover:opacity-50' />, label: "Tailwind CSS", duration: 2
                },  {
                    icon: <TbFileTypeSql className='text-7xl text-black-400 group-hover:opacity-50' />, label: "SQL", duration: 2.5
                }, {
                    icon: <BiLogoCPlusPlus className='text-7xl text-neutral-400 group-hover:opacity-50' />, label: "C++", duration: 2.5
                }, {
                    icon: <BiLogoHtml5 className='text-7xl text-orange-500 group-hover:opacity-50' />, label: "HTML", duration: 1.5
                }, {
                    icon: <BiLogoCss3 className='text-7xl text-blue-500 group-hover:opacity-50' />, label: "CSS", duration: 2
                }, {
                    icon: <BiLogoJavascript className='text-7xl text-yellow-500 group-hover:opacity-50' />, label: "JavaScript", duration: 2.5
                }, {
                    icon: <BiLogoFigma className='text-7xl text-purple-500 group-hover:opacity-50' />, label: "Figma", duration: 1.8
                }, {
                    icon: <SiChakraui className='text-7xl text-teal-400 group-hover:opacity-50' />, label: "Chakra UI", duration: 2
                }].map((tech, index) => (
                    <motion.div key={index} variants={iconMove(tech.duration)}
                        initial="initial" animate="animate"
                        className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                        {tech.icon}
                        <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                            {tech.label}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Technologies;
