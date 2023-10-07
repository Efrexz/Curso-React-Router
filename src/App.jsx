import { HashRouter, Route, Routes } from 'react-router-dom'
import { BlogPage } from './BlogPage.jsx';
import { BlogPost } from './BlogPost.jsx';
import { HomePage } from './HomePage.jsx';
import { LoginPage } from './LoginPage.jsx';
import { LogoutPage } from './LogoutPage.jsx';
import { Menu } from './Menu.jsx';
import { ProfilePage } from './ProfilePage.jsx';
import { AuthProvider } from './auth.jsx';


function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/blog' element={<BlogPage/>}>
              <Route path=':slug' element={<BlogPost/>}/>
            </Route>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/logout' element={<LogoutPage/>}/>
            <Route path='/*' element={<p>Not found</p>}/>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;