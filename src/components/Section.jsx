

import { motion } from 'framer-motion';

const Section = () => {
  // إعدادات الحركة عشان متكررهاش لكل كارت
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // بيبدأ خفي ونازل لتحت شوية
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // تأخير بسيط بين كل كارت والتاني (تأثير متسلسل)
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const products = [
    { id: 1, img: 'img/hodees/bahr.jpg' },
    { id: 2, img: 'img/tshirt/united.jpg' },
    { id: 3, img: 'img/hodees/eagle2.jpg' },
    { id: 4, img: 'img/Desktop/New folder (4)/1.jpg' },
    { id: 5, img: 'img/Desktop/New folder (3)/fb.jpg' },
    { id: 6, img: 'img/-/-/F1 grid post.jpg' },
  ];

  return (
    <div className="section">
      <div>
        <h1 className="text-center">
          <span className="badge bg-primary text-center mt-5">NEW DROPS</span>
        </h1>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-between">
          {products.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <motion.div
                custom={index} // بنبعت رقم الكارت عشان الـ delay
                initial="hidden"
                whileInView="visible" // بيشتغل لما تعمل Scroll وتوصل عنده
                viewport={{ once: false, amount: 0.2 }} // once: true يعني الحركة تحصل مرة واحدة بس
                variants={cardVariants}
                className="card h-50 c"
              >
                <img src={item.img} className="card-img-top" alt="clothes" />
                
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;