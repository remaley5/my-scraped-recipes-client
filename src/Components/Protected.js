import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    
    if (isLoggedIn === 'true') {
        return children;
    } else {
        return <Navigate to="/" replace />;
    }
};
export default Protected;