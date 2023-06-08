import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from "react-router-dom"

import Library from './Library';
import NewBlogForm from './NewBlogForm';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Library  />}/>
        <Route path='/NewBlog' element={<NewBlogForm />}/>
      </Routes>
    </BrowserRouter>
 
  </React.StrictMode>
);

reportWebVitals();
