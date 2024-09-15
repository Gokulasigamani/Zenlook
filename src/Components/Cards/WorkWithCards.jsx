import React from 'react'

const WorkWithCards = ({icon,countTitle,title}) => {
  return (
    <div className='flex-col justify-center items-center w-[250px]'>

        <div className=' flex-col space-y-1' >

            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-b from-[#00C2FF4D] to-[#FF29C3C7] flex items-center justify-center">
                <img src={icon} alt="icon" width={55} className=""/>
            </div>

            <h1 className='pt-5 text-[32px] font-semibold font-poppins text-[#F8F9FF] text-center'>{countTitle}</h1>

            <h1 className='text-[20px] font-medium font-poppins text-[#F8F9FF] text-center'>{title}</h1>
        </div>

    </div>
  )
}

export default WorkWithCards