import { FaCheckCircle } from 'react-icons/fa';
import myImg2 from '../../assets/about img 2.png';

function WhyUs() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
      <section className='w-full lg:w-1/2'>
        <img className="w-full h-auto lg:h-96 rounded-3xl bg-yellow-50" src={myImg2} alt="Placeholder" />
      </section>
      <section className='text-left md:m-10 w-full lg:w-1/2 lg:ml-10'>
        <h6 className='text-[#f7931e] text-center md:text-left text-xl md:text-2xl' data-aos="fade-up">WHY CHOOSE US</h6>
        <h1 className='text-3xl text-black  font-bold pt-5' data-aos="fade-up" data-aos-delay="100">Drive Your Business<br/> With SDT's Expertise</h1>
        
        <div className='mt-8'>
          <div className='flex items-center' data-aos="fade-up" data-aos-delay="200">
            <FaCheckCircle className='text-green-500 mr-2' />
            <b>Innovative Solutions</b>
          </div>
          <p className='text-sm mt-2'>SDT offers innovative solutions tailored to your business needs, ensuring you stay ahead in the competitive digital landscape.</p>
        </div>

        <div className='mt-8'>
          <div className='flex items-center' data-aos="fade-up" data-aos-delay="200">
            <FaCheckCircle className='text-green-500 mr-2' />
            <b>Proven Results</b>
          </div>
          <p className='text-sm mt-2'>Our track record of delivering proven results speaks for itself. Join hands with SDT for digital success.</p>
        </div>

        <div className='mt-8'>
          <div className='flex items-center' data-aos="fade-up" data-aos-delay="200">
            <FaCheckCircle className='text-green-500 mr-2' />
            <b>Customer Satisfaction</b>
          </div>
          <p className='text-sm mt-2'>We prioritize customer satisfaction, offering seamless support and personalized services that exceed expectations.</p>
        </div>
        
      </section>
    </div>
  );
}

export default WhyUs;
