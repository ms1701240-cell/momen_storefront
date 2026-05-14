const commonSpecs = {
  priceDetails: "يظهر السعر تلقائيًا حسب الدولة والعملة المختارة، مع شفافية كاملة في التكلفة قبل إتمام الطلب.",
  quality: "Premium, wash-proof HD print",
  Material: "Premium soft cotton, available in local & imported fabrics",
  colorsGuide: "مجموعة ألوان أساسية متوفرة لكل مقاس، مع عرض اللون الحقيقي للمنتج قبل الشراء لضمان اختيارك المناسب.",
  size: "S/md/l/xl/XXL ",
  globalShipping: "إمكانية الشحن إلى جميع دول العالم، مع عرض تكلفة الشحن ومدة التوصيل حسب موقعك.",
  variety: "مجموعة واسعة من التصميمات والمنتجات، مع خيارات متعددة من الخامات المحلية والمستوردة لتختار ما يناسبك.",
  closing: "منتج يجمع بين التصميم العصري، الجودة العالية، والتفاصيل الدقيقة… اطلبه الآن واستمتع بتجربة شراء عالمية."
};
const sport = {
  
  quality: "Durable High-Definition Print",
  Material: "Lightweight Performance Material",
  desc2: "An athletic cut designed for a modern fit that enhances mobility and structure, making it perfect for training, match days, or everyday wear.",
  size: "S/M/L/XL/XXL/3XL"
};
const y2kProduct = {
  
  desc2: "Crafted from high-quality breathable fabric, this T-shirt delivers exceptional comfort while maintaining durability for everyday wear. The soft cotton blend feels smooth on the skin and provides lightweight flexibility, making it perfect for long days, casual outings, or styling unique streetwear looks.Each design in the Limited Y2K Collection features distinctive graphics influenced by retro tech aesthetics, vintage sports culture, cyber-inspired visuals, and bold typography. These unique prints are created using high-quality printing techniques that help preserve color vibrancy and graphic detail over timeThe versatile relaxed fit allows easy styling with baggy jeans, cargos, joggers, or layered outfits, making it a perfect addition to any modern streetwear wardrobe. Whether you're going for a minimalist Y2K vibe or a bold statement look, this T-shirt adapts to your personal style",
  Material: "Premium Breathable Cotton Blend",
  size: "S/M/L/XL/XXL", // ضفتلك المقاسات الشائعة
  // بما إنك في React، المسار بيبدأ من فولدر الـ public
  quality: "Premium breathable cotton blend with durable",
  
};
const sharedDetails = {
  desc2: "Upgrade your everyday style with the Limited Collection T-Shirt. This exclusive collection features carefully crafted graphic prints and premium fabric to deliver a perfect balance between fashion and functionality, inspired by modern street culture and contemporary trends.",
  size: "S/M/L/XL/XXL",
  
  material: "High-quality cotton blend",
  fit: "Regular / Relaxed Fit",
  care: "Machine wash cold, do not bleach, wash inside out."
};


export const products={
  jeans:[ 
   
],
hoodies:[
{name:'Eagle Vision Hoodie',title:"The distinctive back design reflects freedom, focus, and energy in every detail A look that combines strength and elegance with a modern streetwear vibe",
desc2:'A high-quality blended Milton cotton hoodie, inspired by the power and sharp vision of the eagleThe distinctive back design reflects freedom focus, and energy in every detail Its heavy fabric keeps you warm while providing a soft comfortable feel for everyday wear',
size:' Available in all sizes (S to XXL)',
img:'img/hodees/eagle1.jpg',img2:'img/hodees/eagle2.jpg',Material:" Blended Milton cotton",
color:' White with artistic black print',
quality:' blended Milton cotton hoodie',prize:''},
{name:'Bahr Hoodie The Warmth of a Story the Elegance of a Memory',
  title:' Crafted from premium blended Milton cotton, it offers perfect warmth and a soft touch for ultimate comfort in every momentWith its simple yet elegant design, it perfectly complements any winter look', 
  desc2:'The Bahr Hoodie is more than just a piece of clothing — it’s a story to be toldInspired by the tale of “Bahr”, which speaks of someone who returned to the sea whenever they missed the one they loved — where the waves carried their beautiful memories',


  size:'S – M – L – XL – 2XL – 3XL',

  img:'img/hodees/bahr.jpg',
  
  color:'',

  img2:'img/hodees/bahr2.jpg',

  quality:' Warmth and comfort of the highest quality',

  Material:' Premium blended Milton cotton',
  prize:''
},
{name:'',
  title:'',
  desc2:'',
  size:'',
  img:'img/hodees/',
  color:'',
  img2:'',
  quality:'',
  Material:'',
prize:''
}
],
sport:[
{name:'Manchester United “The Treble Fest 1999” T-Shirt',
  title:'This white t-shirt celebrates Manchester United’s legendary achievement in 1999, when the team won the historic treble — the Premier League, FA Cup, and UEFA Champions League — known as The Treble Fest 1999',
  desc2:'Features a vertical front graphic design showcasing iconic moments from the three decisive matches, along with the names of some of the club’s most famous playersPaul Scholes, Jaap Stam, Andy Cole, Ole Gunnar Solskjær, Dwight Yorke, Roy Keane, David Beckham & more',
  color:'White with multicolor graphic print',
  img:'img/tshirt/united.jpg',
  size:'S – M – L – XL – 2XL – 3XL',
  img2:'img/tshirt/united2.jpg',
  quality:'100% high-quality natural cotton',
  Material:'soft, comfortable, and perfect ',prize:300},
 
 {name:'__Manchester City De Bruyne Oversized T-shirt this __oversized fit__ Manchester City t-shirt',
  title:'__Manchester City De Bruyne Oversized T-shirt this __oversized fit__ Manchester City t-shirt, featuring the legendary Kevin De Bruyne’s iconic number 17',
  img:'/img/sportshirt/DeBruyne.jpg',
  img2:'img/sportshirt/d.jpg',
  ...sport,prize:300},

  {name:'_ROMA_ Premium T-Shirt',
  title:'_ROMA_ Premium T-Shirt',
  img:'img/sportshirt/_ROMA_ Premium T-Shirt.jpg',
  ...sport,prize:300},

  {name:'arsenal shirt',
  title:'arsenal shirt',
  img:'img/sportshirt/arsenal shirt.jpg',
  ...sport,prize:300},

  {name:'AS Roma De Rossi Team T-Shirt',
  title:'AS Roma De Rossi Team T-Shirt',
  img:'img/sportshirt/AS Roma De Rossi Team T-Shirt.jpg',
  ...sport,prize:300},

  {name:'AS Roma Slogan T-Shirt',
  title:'AS Roma Slogan T-Shirt',
  img:'img/sportshirt/AS Roma Slogan T-Shirt.jpg',
  ...sport,prize:300},

  {name:'AS Roma Team T-Shirt',
  title:'AS Roma Team T-Shirt',
  img:'img/sportshirt/AS Roma Team T-Shirt.jpg',
  ...sport,prize:300},

  {name:'Barcelona Inspiration T-Shirt',
  title:'Barcelona Inspiration T-Shirt',
  img:'img/sportshirt/Barcelona Inspiration T-Shirt.jpg',
  ...sport,prize:300},

  {name:'Barcelona Officially Licensed Soccer',
  title:'Barcelona Officially Licensed Soccer T-shirt Cotton Tee -05 Xl',
  img:'img/sportshirt/Barcelona Officially Licensed Soccer T-shirt Cotton Tee -05 Xl.jpg',
  ...sport,prize:300},

  {name:'Barcelona',
  title:'Barcelona',
  img:'img/sportshirt/Barcelona.jpg',
  ...sport,prize:300},

   {name:'hala madrid shirt',
  title:'hala madrid shirt',
  img:'img/sportshirt/hala madrid shirt.jpg',
  ...sport,prize:300},

   {name:'lfc',
  title:'lfc',
  img:'img/sportshirt/lfc.jpg',
  ...sport,prize:300},

   {name:'liverpool shirt',
  title:'liverpool shirt',
  img:'img/sportshirt/liverpool shirt.jpg',
  ...sport,prize:300},

   {name:'Liverpool Tshirt',
  title:'Liverpool Tshirt',
  img:'img/sportshirt/Liverpool Tshirt.jpg',
  ...sport,prize:300},

   {name:'Manchester City _Man CIty Globe_ T-Shirt -',
  title:'Manchester City _Man CIty Globe_ T-Shirt -',
  img:'img/sportshirt/Manchester City _Man CIty Globe_ T-Shirt -.jpg',
  ...sport,prize:300}, 

   {name:'Manchester Is Red TShirt',
  title:'Manchester Is Red TShirt',
  img:'img/sportshirt/Manchester Is Red TShirt.jpg',
  ...sport,prize:300},

   {name:'mancity shirt',
  title:'mancity shirt',
  img:'img/sportshirt/mancity shirt.jpg',
  ...sport,prize:300},

   {name:'Manchester United adidas DNA T-Shirt - Red',
  title:'Manchester United adidas DNA T-Shirt - Red',
  img:'img/sportshirt/Manchester United adidas DNA T-Shirt - Red.jpg',
  ...sport,prize:300},

   {name:'Manchester United adidas Culture Bar T-Shirt - Red',
  title:'Manchester United adidas Culture Bar T-Shirt - Red',
  img:'img/sportshirt/Manchester United adidas Culture Bar T-Shirt - Red.jpg',
  ...sport,prize:300},
  {
    name: "Raphinha",
    title: "Raphinha Barcelona T-Shirt _ Barca Shirt",
    img: "img/sportshirt/Raphinha Barcelona  T-Shirt _ Barca Shirt.jpg",
     ...sport,prize:300
  },
  {
    name: "Real Madrid Black",
    title: "Real Madrid Los Blancos Black Script T-Shirt",
    img: "img/sportshirt/Real Madrid Los Blancos Black Script T-Shirt,.jpg",
     ...sport,prize:300
  },
  {
    name: "Real Madrid (1)",
    title: "Real Madrid T-Shirt (1)",
    img: "img/sportshirt/Real Madrid T-Shirt (1).jpg",
     ...sport,prize:300
  },
  {
    name: "Real Madrid (2)",
    title: "Real Madrid T-Shirt (2)",
    img: "img/sportshirt/Real Madrid T-Shirt (2).jpg",
     ...sport,prize:300
  },
  {
    name: "Real Madrid White",
    title: "Real Madrid T-Shirt",
    img: "img/sportshirt/Real Madrid T-shirt.jpg",
     ...sport,prize:300
  },
  {
    name: "Real Shirt",
    title: "real shirt",
    img: "img/sportshirt/real shirt.jpg",
     ...sport,prize:300
  },
  {
    name: "Ronaldo",
    title: "ronaldo shirt",
    img: "img/sportshirt/ronaldo shirt.jpg",
     ...sport,prize:300
  },
  {
    name: "Manchester United",
    title: "T-shirt MANCHESTER UNITED",
    img: "img/sportshirt/T-shirt MANCHESTER UNiTED.jpg",
     ...sport,prize:300
  },
  {
    name: "United Black",
    title: "united shirt",
    img: "img/sportshirt/united shirt.jpg",
     ...sport,prize:300
  }
],
cars: [
    {
      id: 101, // ضفتلك ID عشان الـ Map في ريأكت ميزعلش
      name: 'F1 grid post T-Shirt',
      title: 'Legendary JDM vibes with high-quality graphic print',
      img: 'img/-/-/F1 grid post.jpg',
      prize: 450,
      color: 'Midnight Purple / Black',
      ...commonSpecs // هنا بقى السحر.. كل الكلام اللي فوق دخل هنا أوتوماتيك
    },
    {
      id: 102,
      name: 'Holy Trinity_ Hypercar T-Shirt',
      title: 'Precision and speed captured in a premium cotton fabric',
      img: 'img/-/-/_Holy Trinity_ Hypercar T-Shirt - Automotive.jpg',
      prize: 500,
      color: 'Lizard Green / White',
      ...commonSpecs
    },
    {
      id: 103,
      name: 'Porsche911 T-Shirt',
      title: 'The ultimate driving machine on the ultimate t-shirt',
      img: 'img/-/-/911.jpg',
      prize: 400,
      color: 'Alpine White / Grey',
      ...commonSpecs
    },
     {
      id: 104,
      name: 'Lewis Hamiltons F1 Merch Oversized Shirt',
      title: 'The ultimate driving machine on the ultimate t-shirt',
      img: 'img/-/-/Lewis Hamiltons F1 Merch Oversized Shirt.jpg',
      prize: 400,
      color: 'Alpine White / Grey',
      ...commonSpecs
    },
     {
      id: 105,
      name: 'Level up grid post T-Shirt',
      title: 'The ultimate driving machine on the ultimate t-shirt',
      img: 'img/-/-/Level up grid post.jpg',
      prize: 400,
      color: 'Alpine White / Grey',
      ...commonSpecs
    },
     {
      id: 106,
      name: 'Glimmora Camiseta T-Shirt',
      title: 'The ultimate driving machine on the ultimate t-shirt',
      img: 'img/-/-/Glimmora Camiseta casual de manga corta con cuello redondo y estampado de eslogan de carreras callejeras para hombres.jpg',
      prize: 400,
      color: 'Alpine White / Grey',
      ...commonSpecs
    },
     {
      id: 107,
      name: 'F1MERCH OVERSIZEDSHIRT T-Shirt',
      title: 'The ultimate driving machine on the ultimate t-shirt',
      img: 'img/-/-/F1MERCH OVERSIZEDSHIRT.jpg',
      prize: 400,
      color: 'Alpine White / Grey',
      ...commonSpecs
    },
     {
      id: 108,
      name: 'F1 Y2K Crew Neck T-Shirt',
      title: 'The ultimate driving machine on the ultimate t-shirt',
      img: 'img/-/-/F1 Y2K Crew Neck.jpg',
      prize: 400,
      color: 'Alpine White / Grey',
      ...commonSpecs
    },
  ],
  Streetstyle:[
    {
      id:114,
      name:'Dream Printed T-Shirt',
      title:'High-Quality Wax Printed Cotton Retro Fashion Brand T-Shirt, Suitable For Summer T-Shirt With A Certain Thickness, Holiday Gift-New Autumn_Winter Collection_ Unisex Relaxe',
      price:'',
      desc2:'[Dream] is the true definition of modern street style  Crafted from 100% premium cotton, it delivers a soft, breathable feel that keeps you comfortable all day long. Featuring high-quality printing that resists fading and withstands repeated washing, this tee is made to last  Available in multiple sizes Essential color options to match every style',
      quality :'100% high-quality cotton fabric',
      Material:'Soft, breathable, and skin-friendly material',
      size:'sm/md/xl/2x/3x/4x/5x/6x',
      img:'img/free style/New folder/dream.jpg',
    },
    {
      id:115,
      name:'If Allah Is With Us, Who Can Resist Us_1 T-Shirt',
      title:'Designed for those who value both quality and bold style, [Product Name] delivers a strong streetwear statement',
       desc2:'If you looking for a t-shirt that combines comfort with a bold personality, [Product Name] is your perfect choice   Made from high-quality imported heavyweight cotton, it offers excellent breathability and all-day comfort — even in warm weather',
      quality:'Reinforced seams for durability',
      Material:'Premium heavyweight cotton',
 size:'sm/md/xl/2x/3x/4x/5x/6x',
      img:'img/free style/New folder (2)/resist.jpg'
    },
    {
      id:116,
      name:'[_Allah Listens To Our Prayers_] – Everyday Essential T-Shirt',
      title:'is crafted for everyday comfort while maintaining a modern silhouette',
      desc2:'Pre-shrunk cotton fabric Anti-pilling finish Lightweight yet durableAvailable in multiple sizes Easy to style with jeans, cargo, or shorts An essential piece for every season',
      quality:'Lightweight yet durable',
      Material:'Pre-shrunk cotton fabric',
       size:'sm/md/xl/2x/3x/4x/5x/6x',
      img:'img/free style/New folder (3)/players.jpg'
    },
    {
      id:117,
     name:'[Good Things Coming Overfit Short-Sleeve T-Shirt] – Modern Fit Urban Tee',
     title:'Elevate your look with [Product Name], inspired by global streetwear culture',
       desc2:'Stand out with a distinctive look in [Good Things Coming Overfit Short-Sleeve T-Shirt]. Carefully crafted from high-quality materials that maintain their shape even after long-term use. The print is sharp and clear, produced with advanced technology to prevent cracking',
      quality:'Balanced modern fit',
      Material:'Breathable cotton construction',
       size:'sm/md/xl/2x/3x/4x/5x/6x',
      img:'img/free style/New folder (4)/Good Things Coming Overfit Short-Sleeve T-Shirt.jpg'
    },
    {
      id:118,
    name: "Premium Oversized Graphic Shirt",
      title: "Make a statement with a bold oversized tee designed for standout street fashion",
      quality: "Detailed, high-resolution graphic print with long-lasting color",
      desc2: "Built for those who express themselves through style. Features a relaxed oversized cut and shrink-resistant material for daily wear",
      Material: "High-density cotton fabric",
       size:'sm/md/xl/2x/3x/4x/5x/6x',
      img:'img/free style/New folder (5)/download (6).jpg'
    },
    {
      id:119,
      name: "Introverted – Classic Crewneck Cotton Tee",
      title: "A refined take on a classic design, combining minimal aesthetics with premium craftsmanship",
      quality: "Strong neckline structure with durable double-stitched",
      desc2: "An everyday staple featuring a smooth texture for all-day comfort. Easy care and machine washable for long-lasting wear",
      Material: "100% natural cotton",
       size:'sm/md/xl/2x/3x/4x/5x/6x',
      img:'img/free style/New folder (6)/Introverted.jpg'
    },
    {
      id:120,
      name: "Urban Graphic Street Tee - Wedsadl",
      title: "Inspired by city culture, crafted for trend-conscious individuals who love urban style",
      quality: "Advanced crack-resistant print technology",
      desc2: "Your go-to piece for effortless urban style. Designed for casual and streetwear outfits with a breathable and lightweight fabric",
      Material: "Premium Acid Wash Cotton",
      img:'img/free style/New folder (9)/Wedsadl Oversized Tshirts for Men Graphic Vintage Tees Streetwear Shirts Acid Wash Tshirt Positive Letter Print Cotton Tops.jpg'
    },
    {
      id:121,
      name: "OVER – Breathable Premium Cotton T-Shirt",
      title: "Comfort starts with the right fabric. Elevate your style with high-density cotton for all-day comfort",
      quality: "Professional-grade printing with advanced technology",
      desc2: "Versatility and performance combined. Features shape retention after washing and a flexible fit that gives you confidence and freedom in any season",
      Material: "Soft-touch Breathable Premium Cotton",
       size:'sm/md/xl/2x/3x/4x/5x/6x',
      img:'img/free style/New folder (10)/over.jpg'
    },
    {
      id:122,
      name: "High-Quality Printed Tee – Urban Letters",
      title: "Invest in premium quality with a design built for durability and modern aesthetics",
      quality: "Precision-printed graphics with fade-resistant ink technology",
      desc2: "A dependable addition to any wardrobe, designed for long-term wear with carefully selected cotton fabric that maintains its look",
      Material: "Premium Selected Cotton",
       size:'sm/md/xl/2x/3x/4x/5x/6x',
      img:'img/free style/New folder (11)/Men.jpg'
    },
    {
      id:123,
       name: "Streetwear Premium Edition",
      title: "Crafted for those who demand excellence, offering premium comfort and bold character",
      quality: "High-quality, long-lasting print resistant ",
      desc2: "Designed to reflect individuality with a modern silhouette. Ideal for daily streetwear, easy to pair, and provides a soft yet structured feel",
      Material: "100% Carefully Selected Cotton",
       size:'sm/md/xl/2x/3x/4x/5x/6x',
      img:'img/free style/New folder (12)/download (5).jpg'
    },
    {
      id:125,
       name: "Wake Up, Lived Dream” T-Shirt – Exclusive & Stylish Design",
      title: "Whether you’re chasing your dreams or just want a statement piece that blends motivation with contemporary fashion, this T-shirt is your ultimate choice. Turn heads with an exclusive design that reflects your unique style and mindset.",
      quality: "The high-quality print is durable and fade-resistant ",
      desc2: "Elevate your everyday style with this “Wake Up, Lived Dream” T-Shirt, a perfect blend of comfort, quality, and motivation. Crafted from 100% premium cotton, this tee is soft, breathable, and ideal for all-day wear, whether you’re out with friends, at the gym, or just relaxing at home.",
      Material: "Made from 100% soft, premium cotton",
       size:'sm/md/xl/2x/3x/4x/5x/6x',
       img:'img/free style/shirt.jpeg'
    }
  ],
  darks:[
     {
    id: 1,
    name: "Tayer Dark Collection Tee",
    title: "Signature Oversized Fit",
    desc2:
      "Embrace the Shadow. Define Your Freedom with a premium oversized tee inspired by modern streetwear and dark aesthetics.",
    quality: "240 GSM Heavyweight, Reinforced Stitching",
    Material: "100% Premium Cotton",
    size: "sm/md/xl",
    priceFront: "250 EGP",
    priceFull: "300 EGP",
    img: "img/dark/313.jpg",
  },

  {
    id: 2,
    name: "Tayer Midnight Pulse",
    title: "Urban Relaxed Fit",
    desc2:
      "Minimal design with deep black tones and premium comfort made for everyday streetwear styling.",
    quality: "260 GSM Heavyweight Fabric",
    Material: "Soft-Treated Cotton",
    size: "sm/md/xl",
    priceFront: "300 EGP",
    priceFull: "350 EGP",
    img: "img/dark/BLACK DRAP.jpg",
  },

  {
    id: 3,
    name: "Tayer Eclipse Tee",
    title: "Minimal Street Edition",
    desc2:
      "Luxury oversized silhouette crafted for confidence, comfort, and modern urban fashion.",
    quality: "280 GSM Premium Quality",
    Material: "100% Organic Cotton",
    size: "sm/md/xl",
    priceFront: "250 EGP",
    priceFull: "300 EGP",
    img: "img/dark/BST.jpg",
  },

  {
    id: 4,
    name: "Tayer Silent Wings",
    title: "Classic Dark Fit",
    desc2:
      "Timeless darkwear piece with subtle branding and a sleek modern appearance.",
    quality: "Fade Resistant Print",
    Material: "Premium Cotton Blend",
    size: "sm/md/xl",
    priceFront: "300 EGP",
    priceFull: "350 EGP",
    img: "img/dark/Streetwear.jpg",
  },

  {
    id: 5,
    name: "Tayer Night Vision",
    title: "Modern Oversized Tee",
    desc2:
      "Built for comfort and bold street presence with heavyweight breathable cotton.",
    quality: "Pre-Shrunk Fabric",
    Material: "240 GSM Cotton",
    size: "sm/md/xl",
    priceFront: "250 EGP",
    priceFull: "300 EGP",
    img: "img/dark/VA.jpg",
  },

  {
    id: 6,
    name: "Tayer Shadow Core",
    title: "Premium Streetwear Fit",
    desc2:
      "The perfect balance between simplicity and luxury with a smooth premium finish.",
    quality: "Double-Stitched Durability",
    Material: "100% High-Grade Cotton",
    size: "sm/md/xl",
    priceFront: "300 EGP",
    priceFull: "350 EGP",
    img: "img/dark/Version 2 teer.jpg",
  },

  {
    id: 7,
    name: "Tayer Phantom Black",
    title: "Essential Oversized Tee",
    desc2:
      "A bold minimalist tee designed to stand out through quality, fit, and dark aesthetics.",
    quality: "280 GSM Luxury Heavyweight",
    Material: "Silk-Soft Cotton",
    size: "sm/md/xl",

    priceFront: "250 EGP",
    priceFull: "300 EGP",
    img: "img/dark/ZERO.jpg",
  },
  ],
  shirt:[
    {

    }
  ],
  bants:[
    {

    }
  ],
  basictops:[
    {

    }
  ],
  cropstops:[
    {
 
    ...sharedDetails,
    name: "Capability – Vintage Car Graphic Crop Top",
    title: "Capability – Vintage Car Graphic Crop Top hannel bold energy with the “Capability” graphic crop top. Designed with a striking vintage car print and gothic-style lettering, this piece delivers strong streetwear attitude with an edgy aesthetic",

 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "Detailed high-definition graphic print",
    
    img: "/img/shirt girl tops/shirt girl tops/New folder (7)/Women Slim Fit Short Sleeve T-Shirt With Car Letter Print, Suitable For Summer.jpg"
  },
     {
    ...sharedDetails,
    name: "Racing Car – Graphic Slim Fit Top",
    title: "Racing Car – Graphic Slim Fit Top Fuel your outfit with bold racing energy in the “Racing Car” graphic slim-fit top",
 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "High-definition racing graphic print",
    
    img: "/img/y2k/y2k/Casual Slogan Printed Car Pattern Round Neck Slim Fit Women's T-Shirt RACING CAR 28 SPEEDING The Fastest DARE TO START JUSTICE AND VALOR.jpg"
  },
   {
    ...sharedDetails,
    name: "Retro – Vintage Inspired Crop Top",
    title: "Retro – Vintage Inspired Crop Top Bring back timeless vibes with the “Retro” crop top — a perfect blend of vintage aesthetics and modern street style",
 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "High-quality durable pink print",
    
    img: "/img/y2k/y2k/download (7).jpg"
  },
   {
    ...sharedDetails,
    name: "Just A Girl – Statement Crop Top",
    title: "Just A Girl – Statement Crop Top Strong attitude. The “Just A Girl” crop top is designed for girls who express confidence in the most effortless way. With its clean typography and minimalist aesthetic, this piece blends softness with quiet power",

 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "High-quality durable pink print",
    
    img: "/img/y2k/y2k/Butterfly Knot & Letter Print Round Neck Short Sleeve T-Shirt For Casual Summer Look.jpg"
  },
   {
    ...sharedDetails,
    name: "A Little Bit Dramatic – Black Crop Top",
    title: "Unapologetically bold and effortlessly chic, the “A Little Bit Dramatic” crop top is made for girls who own every moments",
 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "High-quality durable pink print",
    
    img: "/img/y2k/y2k/Women's Slogan Printed Short Sleeve Crop Top, Summer.jpg"
  },
   {
    ...sharedDetails,
    name: "Take A Ride – Graphic Crop Top",
    title: "Take A Ride – Graphic Crop Top Bold, free, and made for movement — the “Take A Ride” graphic crop top brings fearless energy to your everyday ",
 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "High-definition durable graphic print",
    
    img: "/img/y2k/y2k/Bikercore Car & Letter Graphic Crop Tee.jpg"
  },
   {
    ...sharedDetails,
    name: "Spider Print Crew Neck",
    title: "Spider Print Crew Neck T-shirt - Black & Red",
   
    prize:   'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "Premium soft cotton-blend with high-quality metallic spider print.",
    
    img: "/img/y2k/y2k/｜Spider Print Crew Neck T-shirt, Y2k Short Sleeve Crop T-shirt For Spring &Women's Clothing.jpg"
  },
   {
    ...sharedDetails,
   name: "Casual Animal Spider",
    title: "Casual Animal Spider Pattern Round Neck - Red",
  
    prize: 'EGY: 150 / AED:3.20' ,
    Material: "Soft Cotton-blend fabric",
    quality: "Premium soft cotton-blend with high-quality metallic spider print.",
    
    img: "/img/y2k/y2k/Casual Animal Spider Pattern Round Neck Short Sleeve Slim Fit Crop Top T-Shirt Suitable For Summer.jpg"
  },
   {
    ...sharedDetails,
    name: "Cropped T-Shirt Y2K",
    title: "Cropped T-Shirt Y2K Spring And Summer - Black & Silver",
 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "Premium soft cotton-blend with high-quality metallic spider print.",
    
    img: "/img/y2k/y2k/Cropped T-Shirt, Y2K Spring And Summer Short-Sleeved Crop Top, Women's.jpg"
  },
  {
    ...sharedDetails,
    name: "Maybe I Can Fix Him – Black Crop Top",
    title: "Maybe I Can Fix Him – Black Crop Top  crop top is made for girls who love a little humor with their style. Featuring a sleek black base with soft pink typography and star details, this piece blends",
 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "High-quality durable pink print",
    
    img: "/img/y2k/y2k/Camiseta Slim Fit Cropped Com Estampa Star & Slogan Para O VerãoDescobri produtos incríveis no SHEIN_com, venha conferir!.jpg"
  },
   {
    ...sharedDetails,
    name: "Fortune – Oversized Cropped Top",
    title: "Fortune – Oversized Cropped Top Bold, relaxed, and effortlessly cool — the “Fortune” oversized cropped top brings sporty street aesthetics to your wardrobe.",
 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "Crafted from soft high-quality cotton fabric",
    
    img: "/img/Crops tops/download (3).jpg"
  },
   {
    ...sharedDetails,
    name: "I Don’t Care – Women’s Statement Top ",
    title: "I Don’t Care – Women’s Statement Top Turn heads and own your confidence with the bold “I Don’t Care” women’s top in vibrant red. Designed for strong, unapologetic personalities, this piece blends comfort with powerful street-style energy.",
 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: " The high-quality printed statement is sharp, durable",
    
    img: "/img/Crops tops/Slogan Graphic Crop Tee.jpg"
  },
  {
    ...sharedDetails,
    name: "Thinking Alone – Red Drawstring Crop Top",
    title: "Thinking Alone – Red Drawstring Crop Top Make a bold yet thoughtful statement with the “Thinking Alone” red crop top. Designed for girls who blend confidence with mystery, this piece features a striking white vintage-style print that reads “Thinking Alone – What is your greatest wish?” creating a soft emotional contrast against the vibrant red base",
 
    prize:  'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "High-quality durable front printFlattering feminine fit",
    
    img: "/img/Crops tops/Slogan Graphic Drawstring Side Crop Top Thinking Alone What Is Your Greatest Wish_.jpg"
  },
  
  ],
  OversizedTops:[
  {

  }
],
PrintedTops:[
  {

  }
],
tees:[
  {

  }
],
mtee:[
  {

  }
],
y2k:[
  {
     ...sharedDetails,
    name: "Pin de Mona Nasser",
    title: "Mona Nasser Custom Graphic Tee",
    
    Material: "High-quality cotton blend",
    
    quality: "Premium breathable fabric with durable",
    img: "/img/limted collction/Pin de Mona.jpg"
  },
  {
    ...sharedDetails,
    name: "new design",
    title: "Exclusive New Design Graphic Tee",
   
    Material: "High-quality cotton blend",
   quality: "Premium breathable fabric with durable",
    
    img: "/img/limted collction/new design.jpg"
  },
  {
    ...sharedDetails,
    name: "Camiseta Efecto Lavado",
    title: "Teen Graphic Design Trends Tee",
    
  Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable",
  
    img: "/img/limted collction/Camiseta Efecto Lavado Grafitti _ Teen Graphic Design Trends.jpg"
  },
  {
    ...sharedDetails,
    name: "BSR",
    title: "BSR Exclusive Streetwear Tee",
   
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable",
    
    img: "/img/limted collction/BSR.jpg"
  },
   {
    ...sharedDetails,
    name: "Y2K Vintage Tees",
    title: "Y2K Vintage Tees for Men & Women - Grunge Aesthetic",
   
    Material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/Y2K Vintage Tees.jpg"
  },
   {
    ...sharedDetails,
    name: "Plus Size Graphic",
    title: "Slogan Print Round Neck Summer Tee",
    
    Material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/1.jpg"
  },
   {
    ...sharedDetails,
   name: "DAST",
    title: "DAST Cyber-inspired Graphic Tee",
   
    Material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/DAST.jpg"
  },
   {
    ...sharedDetails,
   
    name: "LR",
    title: "LR Pink Butterfly Streetwear Tee",
    
    Material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/LR.jpg"
  
  },
  {
    ...sharedDetails,
    name: "REF",
    title: "REF Aesthetic Portrait T-shirt",
    
    Material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/REF.jpg"
  },
   {
    ...sharedDetails,
    name: "Spider Print Crew Neck",
    title: "Spider Print Crew Neck T-shirt - Black & Red",
   
    prize:   'EGY: 150, AED: 3.20',
    Material: "Soft Cotton-blend fabric",
    quality: "Premium soft cotton-blend with high-quality metallic spider print.",
    
    img: "/img/y2k/y2k/｜Spider Print Crew Neck T-shirt, Y2k Short Sleeve Crop T-shirt For Spring &Women's Clothing.jpg"
  },
],
retro:[
  {

  }
],
overhoodie:[
  {

  }
],
zhoodie:[
  {

  }
],
winter:[
  {

  }
],
GraphicTees:[
  {

  }
],
RetroCollection:[
  {

  }
],
Y2KCollection:[
 {
...y2kProduct,
    name: "Berserk T-shirt",
    title: "Berserk Graphic T-shirt - Y2K Style",
    desc: "Bold Berserk anime inspired graphic tee from our limited Y2K collection.",
    material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/Berserk T-shirt.jpg"
  },
  {
...y2kProduct,
    name: "BREATHE",
    title: "BREATHE Minimalist Streetwear Tee",
    desc: "Clean and expressive BREATHE graphic design for a modern Y2K look.",
    material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/BREATHE.jpg"
  },
  
  {
    ...y2kProduct,
    name: "GEN Z 2",
    title: "GEN Z 2 Retro Tech Aesthetic Tee",
    desc: "Distinctive retro tech inspired visuals from the GEN Z series.",
    material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/GEN Z 2.jpg"
  },
  {
    ...y2kProduct,
    name: "GEN Z 3",
    title: "GEN Z 3 Cyberpunk Graphic T-shirt",
    desc: "Cyber-inspired visuals with bold typography for a standout look.",
    material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    img: "/img/y2k/y2k/GEN Z 3.jpg"
  },
  {
    ...y2kProduct,
    name: "GEN Z",
    title: "GEN Z Original Streetwear Tee",
    desc: "The original GEN Z graphic design, a staple piece for any Y2K wardrobe.",
    material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/GEN Z.jpg"
  },
  {
    ...y2kProduct,
    name: "GUTS",
    title: "GUTS Dark Aesthetic Graphic Tee",
    desc: "Intense GUTS graphic print inspired by retro anime aesthetics.",
    material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    img: "/img/y2k/y2k/GUTS.jpg"
  },
  
  {
    ...y2kProduct,
    name: "REF",
    title: "REF Aesthetic Portrait T-shirt",
    desc: "Nostalgic portrait graphic with a cyber-inspired Y2K finish.",
    material: "Premium Breathable Cotton Blend",
    quality: "Premium breathable cotton blend with durable",
    
    img: "/img/y2k/y2k/REF.jpg"
  }
],
MinimalCollection:[
  {

  }
],
Limitedcollection:[
  {
     
    ...sharedDetails,
    name: "BAK WEAR FASHION",
    title: "BAK WEAR FASHION - Red Graphic Tee",
    desc: "Upgrade your everyday style with this BAK WEAR FASHION statement piece from our limited collection.",
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/BAK WEAR FASHION.jpg"
  },
  {
    ...sharedDetails,
    name: "BAK-WEAR FASHION",
    title: "BAK-WEAR FASHION - White Edition",
    desc: "A perfect balance between fashion and functionality with a clean white aesthetic.",
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/BAK-WEAR FASHION.jpg"
  },
  {
    ...sharedDetails,
    name: "BCC",
    title: "BCC Modern Street Culture Tee",
    desc: "Distinctive graphic design inspired by contemporary fashion trends.",
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/BCC.jpg"
  },
  {
    ...sharedDetails,
    name: "BSR",
    title: "BSR Exclusive Streetwear Tee",
    desc: "Soft touch against the skin with a bold BSR graphic print.",
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/BSR.jpg"
  },
  {
    ...sharedDetails,
    name: "Camiseta Efecto Lavado",
    title: "Teen Graphic Design Trends Tee",
    desc: "Inspired by modern street culture, this washed effect tee is a versatile addition to any wardrobe.",
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/Camiseta Efecto Lavado Grafitti _ Teen Graphic Design Trends.jpg"
  },
  {
    ...sharedDetails,
    name: "drop shoulder tshirt (1)",
    title: "White Drop Shoulder Graphic Tee",
    desc: "Relaxed yet structured fit suitable for various body types.",
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/drop shoulder tshirt (1).jpg"
  },
  {
    ...sharedDetails,
    name: "drop shoulder tshirt",
    title: "Cream Drop Shoulder Streetwear",
    desc: "Designed to provide comfort and confidence wherever you go.",
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/drop shoulder tshirt.jpg"
  },
  {
    ...sharedDetails,
    name: "get ready",
    title: "Get Ready Modern Aesthetic Tee",
    
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/get ready.jpg"
  },
  {
    ...sharedDetails,
    name: "new design",
    title: "Exclusive New Design Graphic Tee",
    
    Material: "High-quality cotton blend",
    
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    img: "/img/limted collction/new design.jpg"
  },
  {
    ...sharedDetails,
    name: "New York Bagel T-Shirt",
    title: "New York Bagel Urban Streetwear",
    
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/New York Bagel T-Shirt.jpg"
  },
  {
    ...sharedDetails,
    name: "Raised Print Mockup",
    title: "Raised Print Showcase Tee",
    
    Material: "High-quality cotton blend",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
    
    img: "/img/limted collction/Raised Print.jpg"
  },
  {
    ...sharedDetails,
    name: "T-Shirts",
    title: "Classic Graphic Strawberry Tee",
    Material: "High-quality cotton blend",
    img: "/img/limted collction/T-Shirts.jpg",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
  },
  {
    ...sharedDetails,
    name: "URB",
    title: "URB Minimalist Modern Tee",
    Material: "High-quality cotton blend",
    img: "/img/limted collction/URB.jpg",
    quality: "Premium breathable fabric with durable, high-quality graphic prints.",
  }
],
}
