
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';



const MainRoutes = () => {
    // const { loading, isAuthenticated } = useAuth();


    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                {/* Public Route */}
                {/* <Route path="/" element={!isAuthenticated ? <LoginPage /> : <Landing />} />


                <Route
                    path="home"
                    element={<ProtectedRoute>
                        <Landing />
                    </ProtectedRoute>}
                />

                <Route
                    path="/settings"
                    element={<ProtectedRoute>
                        <Settings />
                    </ProtectedRoute>}
                >
                    <Route path='profile' element={<ProfileForm />} />
                    <Route path='team' element={<ProfileForm />} />
                    <Route path='change-password' element={<PasswordForm />} />
                </Route>

                <Route path={'/accept-invite'} element={<AcceptInvite />} /> */}




            </Routes>
        </Router>
    );
};

export default MainRoutes;
