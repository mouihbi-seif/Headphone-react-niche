import { UpdateFollower } from 'react-mouse-follower';
import Icon1 from '../../assets/icons/obj1.png';
import Icon2 from '../../assets/icons/obj2.png';
import Icon3 from '../../assets/icons/obj3.png';
import { motion } from 'framer-motion';

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const servicesData = [
  {
    id: 1,
    title: 'Security',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad autem ipsam? Itaque labore laborum sed tempora dolorum temporibus consectetur',
    img: Icon1,
    delay: 0.5,
  },
  {
    id: 2,
    title: 'Gurantee',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad autem ipsam? Itaque labore laborum sed tempora dolorum temporibus consectetur',
    img: Icon2,
    delay: 0.8,
  },
  {
    id: 3,
    title: 'Affordability',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad autem ipsam? Itaque labore laborum sed tempora dolorum temporibus consectetur',
    img: Icon3,
    delay: 1.1,
  },
];
const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-bold text-center pb-10"
          >
            Services
          </motion.h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesData.map((data) => (
              <UpdateFollower
                key={data.id}
                mouseOptions={{
                  backgroundColor: 'white',
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: 'darken',
                  backgroundElement: <img src={data.img} alt="icon" />,
                }}
              >
                <motion.div
                  variants={fadeUp(data.delay)}
                  initial="hidden"
                  whileInView="show"
                  className="flex flex-col justify-center items-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
                >
                  <img src={data.img} alt="icon" className="w-[100px] mb-4" />
                  <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">{data.title}</h1>
                    <p className="text-center text-sm text-black/75">
                      {data.desc}
                    </p>
                  </div>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;