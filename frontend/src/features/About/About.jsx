import React from 'react';
import Title from '../../components/molecule/Title';
import about from '../../images/about.jpg';
import NewsLetterBox from '../../components/organism/NewsLetterBox';

const About = () => {
  return (
    <div className="container mx-auto px-4 mt-40">
      {/* Header Section */}
      <div className="text-center mb-16">
        <Title text1="ABOUT " text2="US" />
        <div className="h-1 w-20 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row gap-12 mb-20">
        <div className="md:w-1/3">
          <img 
            src={about} 
            alt="About CozyLoops" 
            className="w-full h-auto rounded-2xl shadow-lg object-cover transform hover:scale-[1.02] transition-transform duration-300" 
          />
        </div>
        <div className="md:w-2/3 space-y-8 text-gray-600">
          <p className="leading-relaxed">
            At <span className="font-semibold text-gray-800">CozyLoops</span>, we're passionate about bringing high-quality, beautiful yarns to creators of all skill levels. From soft merino wool to vibrant cotton blends, our carefully curated collection is designed to inspire your next project. Whether you're knitting, crocheting, or crafting something unique, we're here to provide the best materials and support for your creativity. Join our community and bring your ideas to life, one stitch at a time! 🧶✨
          </p>
          <p className="leading-relaxed">
            At CozyLoops, we provide high-quality yarn and supplies for all your crafting needs. From soft textures to vibrant colors, our collection is perfect for every maker. Whether you're knitting, crocheting, or creating something unique, we're here to inspire and support your journey.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              Our mission at CozyLoops is to inspire creativity by providing high-quality yarn and crafting supplies. We are dedicated to supporting makers of all levels with premium materials, thoughtful service, and a passion for the art of fiber crafting.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <Title text1="WHY " text2="CHOOSE US" />
          <div className="h-1 w-20 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality Assurance",
              content: "At CozyLoops, quality is our top priority. We meticulously source the finest yarns and materials to ensure every product meets the highest standards. Our commitment to excellence guarantees that every piece you create is made with durable, vibrant, and luxurious fibers that stand the test of time."
            },
            {
              title: "Convenience",
              content: "At CozyLoops, we understand the importance of convenience in your crafting journey. That's why we offer a seamless shopping experience with fast, reliable shipping, easy returns, and a user-friendly website. We aim to make your yarn shopping as effortless as possible, so you can focus on what you love—creating beautiful pieces."
            },
            {
              title: "Exceptional Customer Service",
              content: "At CozyLoops, we pride ourselves on providing exceptional customer service. Our team is dedicated to ensuring that every customer feels valued and supported, from the moment they browse our collection to the delivery of their order. Whether you have a question, need assistance with a product, or require advice on your next project, we're here to help every step of the way. Your satisfaction is our top priority."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsLetterBox />
    </div>
  );
};

export default About;