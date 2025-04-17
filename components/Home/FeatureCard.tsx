import Image from 'next/image'
import { Button } from '../ui/button'
import { motion } from "framer-motion";
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string | Partial<Record<number, string>>;
  image: string;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-white/5 p-4 rounded-xl text-center backdrop-blur-md border border-white/10 shadow-md flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
        <Image src={image} width={400} height={180} alt={title} className='object-cover shadow-xl w-full rounded-md h-44 mb-2' />
        <div className='flex flex-1 flex-col gap-2'>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {typeof description === 'string' ? (
            <p className="text-sm text-white/80">{description}</p>
          ) : (
            <ul className="text-sm text-white/80 space-y-1 text-left">
              {Object.entries(description)
                .filter(([_, value]) => value)
                .map(([key, value]) => (
                  <li key={key}>
                    {key}. {value}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <Link href="/reiterferien">
          <Button variant="outline" className='mt-5'>Read More</Button>
        </Link>
      {/* </div> */}
    </motion.div>
  )
}

export default FeatureCard