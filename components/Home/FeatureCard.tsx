import Image from 'next/image'
import { Button } from '../ui/button'
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-white/5 p-4 rounded-xl text-center backdrop-blur-md border border-white/10 shadow-md flex flex-col justify-between items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* <div className='flex flex-col items-center max-w-[30%] justify-around h-full'> */}
        <Image src={image} width={400} height={180} alt={title} className='object-cover shadow-xl w-full rounded-md h-44 mb-4' />
        {/* <div className='felx flex-col items-center justify-between text-center'> */}
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/80 mt-2">{description}</p>
          {/* <h2 className='text-xl font-semibold pt-2 pb-1'>Reitanlage</h2> */}
          {/* <p className='px-6'>Lorem ipsum ullam similique perferendis voluptatibus facilis, dolor laborum, ea natus facere.</p> */}
        </div>
        <Button variant="outline" className='rounded-md cursor-pointer text-gray-700 mt-2'>Read More</Button>
      {/* </div> */}
    </motion.div>
  )
}

export default FeatureCard