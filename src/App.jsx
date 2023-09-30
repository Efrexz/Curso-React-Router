import { HashRouter, Route, Routes } from 'react-router-dom'
import { BlogPage } from './BlogPage.jsx';
import { BlogPost } from './BlogPost.jsx';
import { HomePage } from './HomePage.jsx';
import { Menu } from './Menu.jsx';
import { ProfilePage } from './ProfilePage.jsx';


function App() {
  return (
    <>
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/blog/:slug' element={<BlogPost/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/*' element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;