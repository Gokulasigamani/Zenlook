import React from 'react'
import { motion } from 'framer-motion';
import WorkWithCards from '../Cards/WorkWithCards';
import personIcon from '../icons/person-icon.png'
import processIcon from '../icons/process-icon.png'
import starIcon from '../icons/star-linear-icon.png'
import ninjaStar from '../icons/ninja-star-icon.png'

const WorkWith = () => {

    const workWith = [
        {
          icon: personIcon,
          countTitle: "10,00+",
          title: "Happy Customers",
        },
        
        {
          icon: processIcon,
          countTitle: "20,00+",
          title: "Success Processes",
        },
        
        {
          icon: starIcon,
          countTitle: "3+ Years",
          title: "of Experience",
        }
      ];

  return (
    <div className='relative w-full h-[600px]'>

      {/* left ninja-star */}
        <motion.img
          src={ninjaStar}
          width={40}
          height={40}
          alt="Ninja Star"
          className="absolute top-56 left-56 w-12 h-12 z-10"
          animate={{ 
            // rotate: 360,
            y: [0, -8, 0],
            x: [0, 2, -2, 0]
          }}
          transition={{ 
            rotate: { 
              duration: 800,
              ease: 'linear', 
              repeat: Infinity 
            },
            y: {
              duration: 2, 
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse'
            },
            x: {
              duration: 2, 
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse' 
            }
          }}
        />


        <div className='flex-col items-center justify-center mt-28'>

            <h1 className="text-center text-[40px] font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#FF29C39E] to-[#FFFFFF9E]">
                Work with Zen Hook
            </h1>

            <div className="mt-[70px] flex justify-center items-center space-x-4 gap-28">
                {workWith.map((workwith, index) => (
                    <WorkWithCards
                    key={index}
                    icon={workwith.icon}
                    countTitle={workwith.countTitle}
                    title={workwith.title}
                    />
            ))}
        </div>

        </div>

        {/* right ninja-star */}
        <motion.img
          src={ninjaStar}
          width={40}
          height={40}
          alt="Ninja Star"
          className="absolute top-[26rem] right-44 w-12 h-12"
          animate={{ 
            // rotate: 360,
            y: [0, -8, 0],
            x: [0, 2, -2, 0]
          }}
          transition={{ 
            rotate: { 
              duration: 800,
              ease: 'linear', 
              repeat: Infinity 
            },
            y: {
              duration: 2, 
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse'
            },
            x: {
              duration: 2, 
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse' 
            }
          }}
        />

    </div>
  )
}

export default WorkWith