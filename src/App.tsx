import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './Components/PostList';
import AddPostForm from './Components/AddPostForm';
import Navbar from './Components/NavBar'; 
import {store} from './Redux/Store/store';
const App: React.FC = () => {
  return (
    <Provider store={store}> 
      <BrowserRouter>
        <Navbar /> 
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<PostList />} /> 
            <Route path="/add-post" element={<AddPostForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
