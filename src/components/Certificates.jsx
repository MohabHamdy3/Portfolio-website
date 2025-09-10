import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ name, description, image, link, date }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="certificate_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-[20px]">{name}</h3>
            {link && (
              <button
                onClick={() => window.open(link, "_blank")}
                className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition"
              >
                View
              </button>
            )}
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <p className="mt-2 text-secondary text-[14px]">{date}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some certificates I’ve earned along my journey in AI/ML,
          software engineering, and development. Each one reflects my dedication
          to continuous learning and growth.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard key={`certificate-${index}`} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
