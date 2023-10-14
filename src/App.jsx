import { HashRouter, Route, Routes } from 'react-router-dom'
import { BlogPage } from './BlogPage.jsx';
import { BlogPost } from './BlogPost.jsx';
import { HomePage } from './HomePage.jsx';
import { LoginPage } from './LoginPage.jsx';
import { LogoutPage } from './LogoutPage.jsx';
import { Menu } from './Menu.jsx';
import { ProfilePage } from './ProfilePage.jsx';
import { AuthProvider } from './auth.jsx';
import { ModalProvider } from './ModalProvider.jsx';


function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu/>
          {/*El modalProvider es para que lo que este dentro de nuestr etiqueta tenga acceso a nuestro contexto de los modales */}
          <ModalProvider>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/blog' element={<BlogPage/>}>
                <Route path=':slug' element={<BlogPost/>}/>
              </Route>
              <Route path='/profile' element={<ProfilePage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/logout' element={<LogoutPage/>}/>
              <Route path='/*' element={<h1>Not found</h1>}/>
            </Routes>
          </ModalProvider>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;