import { UpdateFollower } from 'react-mouse-follower';
import blog1 from '../../assets/blogs/blog1.jpg';
import blog2 from '../../assets/blogs/blog2.jpg';
import blog3 from '../../assets/blogs/blog3.jpg';
import blog4 from '../../assets/blogs/blog4.jpg';

const blogData = [
  {
    id: 1,
    title: 'blog sdf sdfsdv rfezfrfgfdgfdgfd',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi fugiat aliquam id delectus aspernatur obcaecati iure, sequi voluptates odio ea ullam',
    img: blog1,
  },
  {
    id: 2,
    title: 'blogfdfdgfdgfdgfd fdgfdgfdg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi fugiat aliquam id delectus aspernatur obcaecati iure, sequi voluptates odio ea ullam',
    img: blog2,
  },
  {
    id: 3,
    title: 'blog dsfsdfsdf dgfdgfdgfgfgfdgdfg',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi fugiat aliquam id delectus aspernatur obcaecati iure, sequi voluptates odio ea ullam',
    img: blog3,
  },
  {
    id: 4,
    title: 'blogdfvfd ghhgjhgjersfbfggbfghb',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi fugiat aliquam id delectus aspernatur obcaecati iure, sequi voluptates odio ea ullam',
    img: blog4,
  },
];

function Blog() {
  return (
    <>
      <section className="bg-gray-50 py-14">
        <div className="container">
          <h1 className=" text-3xl text-center font-bold font-poppins pb-8">
            Blogs
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {blogData.map((data) => (
              <UpdateFollower
                key={data.id}
                mouseOptions={{
                  backgroundColor: 'black',
                  zIndex: 999,
                  followSpeed: 1.5,
                  text: 'read',
                  textFontSize: '3px',
                  scale: 5,
                }}
              >
                <div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                  <img src={data.img} alt="blog image" />
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold line-clamp-1">
                      {data.title}
                    </h1>
                    <p className="line-clamp-2">{data.desc}</p>
                  </div>
                </div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
