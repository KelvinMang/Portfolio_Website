import React from 'react'
import Hao_Jian_Mang_Resume from '../../assets/Hao_Jian_Mang_Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={Hao_Jian_Mang_Resume} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA