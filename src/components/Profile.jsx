

const Profile = ({ userprofile, setuserprofile, setpage,getuserprofile }) => {
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        setuserprofile(null);
        setpage('products'); // أنت مسميها products في الـ App مش home
        toast.success('Logged out successfully');
    };

    if (!userprofile) {
        return <div className="text-center mt-5">جاري التحميل أو سجل دخول أولاً...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4 rounded-5 border-0 bg-light">
                <h2 className="text-center mb-4"><span className="badge bg-dark">My Profile</span></h2>
                <div className="row g-3 text-start">
                    <div className="col-12"><p className="fs-5"><strong>User Name:</strong> {userprofile.Username}</p></div>
                    <div className="col-12"><p className="fs-5"><strong>Email:</strong> {userprofile.Email}</p></div>
                    <div className="col-12"><p className="fs-5"><strong>Phone:</strong> {userprofile.Phone}</p></div>
                </div>
                <hr />
                <button className="btn btn-danger rounded-pill w-100" onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default Profile;