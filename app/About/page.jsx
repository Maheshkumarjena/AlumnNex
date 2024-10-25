"use client";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <div className={`px-[3vw] sm:px-8 md:px-12 lg:px-20 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="text-3xl font-bold py-2 ">
        About Us
      </div>
      <hr ></hr>
      <section className="max-w-7xl mx-auto py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Introduction
        </h1>
        <p className="mb-6 text-justify">
          Welcome to the Alumni-Student Interaction Platform for the Technical Education Department, Govt. of Rajasthan—a pioneering initiative designed to bridge the gap between alumni and current students. This platform serves as the first digital space that allows vibrant community service, knowledge, experiences, and guidance—aimed to shape the future of education and careers in Rajasthan.
        </p>
        <p className="mb-6 text-justify">
          In today's fast-evolving world, the role of alumni has never been more critical. They are the torchbearers of experience, success, and foresight. Building on this recognition, our platform provides opportunities for alumni to reconnect with their alma mater and the students, and engage in meaningful mentorship, networking, and collaboration.
        </p>
        <p className="mb-6 text-justify">
          Our platform leverages cutting-edge technologies such as artificial intelligence, machine learning, and natural language processing to make alumni-student interactions seamless and worthwhile. Whether you are an alumni looking to give back or a student eager to grasp the opportunities ahead, this platform is your gateway to a promising and successful future.
        </p>
        <p className="mb-6 text-justify">
          We offer various interactive sessions, discussion forums, mentorship programs, and networking events. Moreover, this platform empowers students with the inspiration, clarity, and support that they need to chart the academic and professional journey. At the same time, alumni can stay connected, share their experiences, and contribute to the development of their alma mater.
        </p>
        <p className="mb-6 text-justify">
          Join us in building a stronger, more connected community where lifelong learning and collaboration thrive. Together, we can make a lasting impact on the technical education landscape in Rajasthan. Welcome to the future of alumni-student interaction!
        </p>
      </section>

      <section className="max-w-7xl mx-auto py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Vision
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To establish Rajasthan as a hub for technical education and innovation.</li>
          <li>To provide students with access to world-class facilities, resources, and mentorship.</li>
          <li>To foster a culture of collaboration, creativity, and entrepreneurship among students, alumni, and industry partners.</li>
        </ul>
      </section>

      <section className="max-w-7xl mx-auto py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Values:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Excellence: We strive for excellence in all aspects of technical education, from curriculum design to faculty expertise.</li>
          <li>Innovation: We encourage innovation, creativity, and experimentation, recognizing that these qualities are essential for success in the rapidly evolving world of technology and entrepreneurship.</li>
          <li>Inclusivity: We believe that technical education should be accessible to all, regardless of background or socio-economic status. We foster a sense of community among students, alumni, and industry partners, recognizing that collaboration and networking are key to success.</li>
        </ul>
      </section>

      <section className="max-w-7xl mx-auto py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Initiatives:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Curriculum Development: We continuously update and refine our curriculum to ensure that it remains relevant and industry-focused.</li>
          <li>Faculty Development: We invest in the professional development of our faculty, ensuring that they remain up-to-date with the latest technologies and teaching methodologies.</li>
          <li>Industry Partnerships: We establish partnerships with leading industries to provide students with opportunities for internships, mentorship, and real-world experience.</li>
          <li>Alumni Engagement: We engage with our alumni community, providing opportunities for networking, mentorship, and career advancement.</li>
        </ul>
      </section>

      <section className="max-w-7xl mx-auto py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Impact:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Empowering Students: We have empowered thousands of students with the skills and knowledge necessary to succeed in their chosen fields.</li>
          <li>Fostering Innovation: We have fostered a culture of innovation and entrepreneurship, with many of our students and alumni going on to start their own successful businesses.</li>
          <li>Contributing to the Economy: We have contributed to the growth and development of the Rajasthan economy, with our graduates making significant contributions across various industries.</li>
        </ul>
      </section>

      <section className="max-w-7xl mx-auto py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Join Our Community
        </h2>
        <p className="mb-6 text-justify">
          We invite you to join our community of students, alumni, and industry partners. Together, we can empower technical education in Rajasthan and create a brighter future for all.
        </p>
        <div className="text-center">
          <a href="#" className={`inline-block px-6 py-3 font-semibold rounded-full ${isDarkMode ? "bg-red-500 text-white" : "bg-red-600 text-white"}`}>
            Join the Network
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
