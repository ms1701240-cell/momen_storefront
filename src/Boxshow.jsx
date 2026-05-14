import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// حل مشكلة أيقونة الدبوس
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Boxshow = ({ cartprod, setcart}) => {
  const navigate = useNavigate();
  const [location, setlocation] = useState([30.0444, 31.2357]);
  const [showmap, setmapshow] = useState(false);

  const num = cartprod.reduce((acc, sum) => acc + sum.prize * sum.qty, 0);

  const sendmessage = () => {
    const phonenumber = '201203579604';
    const prodlists = cartprod.map((items) => {
      return `${items.name} (الكميه:${items.qty})-السعر:${items.prize * items.qty}`;
    }).join('%0A');

    // تصليح رابط جوجل ماب
    const googlemaps = `https://www.google.com/maps?q=${location[0]},${location[1]}`;
    const message = `طلب جديد من الموقع:%0A%0A` +
      `${prodlists}%0A%0A` +
      `*الإجمالي: ${num}$*%0A%0A` +
      `رابط موقع التوصيل:%0A${googlemaps}`;
    const whatsappurl = `https://wa.me/${phonenumber}?text=${message}`;
    window.open(whatsappurl, '_blank');
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setlocation([latitude, longitude]);
        },
        (error) => console.error("Location access denied")
      );
    }
  }, []);

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setlocation([e.latlng.lat, e.latlng.lng]);
      },
    });
    useEffect(() => {
      map.flyTo(location, map.getZoom());
    }, [location, map]);
    return <Marker position={location}></Marker>;
  }

  const incqty = (index) => {
    const newprod = [...cartprod];
    newprod[index].qty += 1;
    setcart(newprod);
  };

  const decqty = (index) => {
    const newprod = [...cartprod];
    if (newprod[index].qty > 1) {
      newprod[index].qty -= 1;
      setcart(newprod);
    }
  };

  const remove = (index) => {
    const newprod = [...cartprod];
    newprod.splice(index, 1);
    setcart(newprod);
  };

  return (
    <div className="container py-4">
      {/* سطر الإجمالي - بشكل أنيق */}
      <div className="p-3 mb-4 bg-primary text-white text-center fs-3 shadow rounded-pill border border-4 border-light">
        TOTAL: {num} 
      </div>

      {/* منطقة الأزرار والخريطة - متجاوبة تماماً */}
      <div className="row justify-content-center g-3 mb-5">
        
        {/* زرار إضافة الموقع */}
        <div className="col-12 col-md-4">
          <button className="btn btn-warning w-100 fw-bold py-2 shadow-sm" onClick={() => setmapshow(!showmap)}>
            {showmap ? "📍 Confirm Location" : "🚚 Add Delivery Location"}
          </button>
        </div>

        {/* زرار الرجوع */}
        <div className="col-12 col-md-4">
          <button className="btn btn-outline-secondary w-100 fw-bold py-2 shadow-sm" onClick={() => navigate('/products')}>
            ⬅ GO BACK
          </button>
        </div>

        {/* عرض الخريطة إذا تم تفعيلها */}
        {showmap && (
          <div className="col-12 animate__animated animate__fadeIn">
            <div className="card shadow-sm border-0 mt-2">
              <div className="card-body p-2">
                <h6 className="card-title px-2 py-1">Select Delivery Point:</h6>
                <div style={{ borderRadius: '15px', overflow: 'hidden', border: '2px solid #eee' }}>
                  <MapContainer center={location} zoom={13} style={{ height: '350px', width: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <LocationMarker />
                  </MapContainer>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3 px-2">
                  <small className="text-muted">Coords: {location[0].toFixed(4)}, {location[1].toFixed(4)}</small>
                  <button className="btn btn-success fw-bold px-5 py-2 shadow" onClick={sendmessage}>
                    CONFIRM ORDER ✅
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* منطقة المنتجات - سيبتها زي ما هي زي ما طلبت */}
      <div className="row g-4">
        {cartprod.map((cart, index) => (
          <div className="col-xl-4 col-md-6" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={cart.img} className="card-img-top" alt="..." style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{cart.title}</h5>
                <p className="card-text text-muted">{cart.name}</p>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="btn-group">
                    <button className="btn btn-outline-primary" onClick={() => decqty(index)}>-</button>
                    <span className="btn border-top border-bottom fw-bold px-3">{cart.qty}</span>
                    <button className="btn btn-outline-primary" onClick={() => incqty(index)}>+</button>
                  </div>
                  <button className="btn btn-danger btn-sm" onClick={() => remove(index)}>Delete</button>
                </div>
                <div className="row g-1">
            
                   <div className="col-6"><small className="badge bg-success text-white w-100">Price: {cart.prize}</small></div>
                   <div className="col-6"><small className="badge bg-secondary text-white w-100">Size: {cart.size}</small></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxshow;