import { Navigate, Route } from 'react-router-dom';

// check if the user is authenticated and render the appropriate component
const PrivateRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = localStorage.getItem('token');
    console.log("the authentication is ", isAuthenticated);
  if (isAuthenticated) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
