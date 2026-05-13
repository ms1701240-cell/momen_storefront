

import axios from "axios";
import { useEffect, useState } from "react";

const ShowFeeds = () => {
  const [allcomments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFeeds = async () => {
    try {
      // بنادي على المسار اللي أنت عامله في الباك إند بالظبط
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
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        <span className="badge bg-dark">What Our Clients Say</span>
      </h2>
      
      <div className="row justify-content-center">
        {allcomments.length > 0 ? (
          allcomments.map((item, index) => (
            <div className="col-md-8 mb-3" key={index}>
              <div className="card shadow-sm border-0 bg-light">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="card-subtitle text-muted">{item.Email}</h6>
                    <span className="text-warning">
                      {"⭐".repeat(item.rate)}
                    </span>
                  </div>
                  <p className="card-text fs-5 italic">"{item.Comments}"</p>
                  <small className="text-muted float-end">
                    {new Date(item.createdAt).toLocaleDateString("ar-EG")}
                  </small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>No feedbacks yet. Be the first to leave one! 😊</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowFeeds;