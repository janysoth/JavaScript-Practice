import { Outlet, Navigate } from 'react-router-dom';

const AutthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AutthLayout