import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoutes = (props) => {
  const { authedUser } = props;
  const location = useLocation();
  console.log('protected', location);
  console.log('protected', authedUser);
  return authedUser !== '' ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(ProtectedRoutes);
