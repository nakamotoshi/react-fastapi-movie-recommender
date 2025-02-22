// src/UserProfile.jsx
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';

const UserProfile = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="auth-form">
            <h2>Welcome {user.username}!</h2>
            <p>{user.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserProfile;