import axios from "axios";
import { useEffect, useState } from "react";

const ShowFeeds = () => {
  const [allcomments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFeeds = async () => {
    try {
      const res = await axios.get('https://momen-store.vercel.app/showpost');
      setAllComments(res.data);
      setLoading(false);
    } catch (err) {
      console.log('Error fetching feeds:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeeds();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-5">Loading Feedbacks... 🔄</h2>;
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-5">
        <span className="badge bg-dark px-4 py-2">What Our Clients Say</span>
      </h2>
      
      <div className="row g-4 justify-content-between"> {/* g-4 بتعمل مسافات بين الكروت */}
        {allcomments.length > 0 ? (
          allcomments.map((item, index) => (
            <div className="col-11 col-md-6 col-lg-4" key={index}> {/* col-11 عشان الكارت ميبقاش لازق في حواف الموبايل */}
              <div className="card shadow-sm border-0 h-100 bg-white" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <h6 className="text-primary mb-1" style={{ fontSize: "0.9rem", wordBreak: "break-all" }}>
                  {item.Email}
                  </h6>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div style={{maxWidth: "70%"}}>
                     
                      <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                        {new Date(item.createdAt).toLocaleDateString("ar-EG")}
                      </small>
                    </div>
                    <span className="text-warning" style={{ whiteSpace: "nowrap" }}>
                      {"⭐".repeat(item.rate)}
                    </span>
                  </div>
                  
                  <p className="card-text fs-6 fw-normal text-dark mb-0" style={{ fontStyle: "italic", lineHeight: "1.6" }}>
                    "{item.Comments}"
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <h3 className="text-muted">No feedbacks yet. Be the first to leave one! 😊</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowFeeds;