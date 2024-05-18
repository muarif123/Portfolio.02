import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard=({experience})=>{
  return(
    <>
    <VerticalTimelineElement 
  contentStyle={{background:"#1d1836",color:"#fff"}}
  contentArrowStyle={{borderRight:"7px solid #232631"}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
    </div>
  }

  
  
  >

    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p style={{margin:0}} className='text-secondary text-[16px] font-semibold'>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>

      {experience.points.map((point,index)=>(
        <li className='text-white-100 text-[14px] pl-1 tracking-wider' key={`experience-point-${index}`}>
          {point}


        </li>
      ))}
    </ul>



  </VerticalTimelineElement>
    
    </>
  )
  
}

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience</h2>

    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience,index)=>{
          return(
            <>
            <ExperienceCard key={index} experience={experience}>

            </ExperienceCard>
            </>
          )
        })}
      </VerticalTimeline>
       
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")