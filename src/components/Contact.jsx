import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const myRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const phone='201203579604'
  const text='اهلا بكم'
const whats=`https://wa.me/${phone}?text=${text}`;
  useEffect(() => {
    const loadScript = (url) => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = resolve;
        document.head.appendChild(script);
      });
    };

    const initVanta = async () => {
      // 1. تحميل المحرك الأساسي
      if (!window.THREE) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
      }
      // 2. تحميل ملف السحاب تحديداً
      if (!window.VANTA || !window.VANTA.CLOUDS) {
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js');
      }

      // 3. تشغيل التأثير بإعدادات السحاب الواقعية
      if (!vantaEffect && myRef.current && window.VANTA.CLOUDS) {
        setVantaEffect(
          window.VANTA.CLOUDS({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            // --- إعدادات السحاب الواقعي ---
            backgroundColor: 0x2170b8, // لون السماء الزرقاء
            skyColor: 0x68b8d7,       // تدرج لون السماء
            cloudColor: 0xadc1de,     // لون السحب
            cloudShadowColor: 0x183550, // ظل السحب ليعطي عمق
            sunColor: 0xff9919,       // لون توهج الشمس
            sunGlareColor: 0xff6633,  // لمعان الشمس
            sunlightColor: 0xff9933,  // لون الضوء الساقط
            speed: 1.00               // سرعة حركة السحاب
          })
        );
      }
    };

    initVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={myRef} 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        zIndex: 1, 
        color: 'white', 
        textAlign: 'center', 
        background: 'rgba(84, 56, 150, 0.1)', 
        backdropFilter: 'blur(10px)', 
        padding: '50px', 
        borderRadius: '30px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '10px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>تواصل معنا</h2>
       
        
        <button onClick={()=>window.open(whats,'_blank')} style={{
          padding: '12px 35px',
          borderRadius: '50px',
          border: 'none',
          background: 'white',
          color: '#212bb8ff',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: '0.3s'
        }}>
          ارسل استفسارك
        </button>
      </div>
    </div>
  );
};

export default Contact;