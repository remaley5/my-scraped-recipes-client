import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
   // // console.log('renavigating', isLoggedIn);
  //  // console.log('!isLoggedIn || isLoggedIn === "false"', !isLoggedIn || isLoggedIn === "false");
    if (!!isLoggedIn || isLoggedIn === 'true') {
//        // console.log('returning children');
        return children;
    }
    return <Navigate to="/" replace />;
};
export default Protected;