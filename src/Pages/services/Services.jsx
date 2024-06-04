import React, { useEffect } from 'react';
import SEO from './SEO/SEO'
import Sem1 from './Sem/Sem1'
import SMO from './SMO/SMO'
import SMM from './SMM/SMM'
import Graphics from './GraphicsDesign/Graphic'

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])
  return (
    <>
        <SEO />
        <Sem1 />
        <SMO />
        <SMM />
        <Graphics />
    </>
  )
}

export default Services