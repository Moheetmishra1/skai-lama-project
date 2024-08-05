 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Pages/Navbar'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'
import Authentication from './Components/Authentication'
import React, { Suspense } from 'react'
import Projects from './Components/Projects.jsx'

//^ LazyLoad Component
let LazyProjectSection= React.lazy(()=>import("./Components/ProjectSection.jsx"))
let LazyHome= React.lazy(()=> import("./Components/Pages/Home.jsx"))

function App() {
  

  return (
    <>
     <BrowserRouter>
     {/* <Navbar /> */}
     <Routes>
      <Route path="/" element= {<Authentication><Suspense fallback={<h1>Loading.........</h1>}> <LazyHome /></Suspense></Authentication> }/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/projectsection/:projectname" element={<Authentication><Suspense fallback={<h1>Loading.........</h1>} ><LazyProjectSection/></Suspense></Authentication>} >
              <Route index element={<Projects />} />
              <Route path="projects" element={<Projects />} />
              <Route path="widgetconfigurartions" element={<h1>w</h1>} />
      
      
              </Route>
              {/* <Route path="/projectsection/projects" element={<Projects />} /> */}
      <Route path='*' element={<h1 style={{color:"red"}}> Page not found....</h1>}/>
     </Routes>
     </BrowserRouter>
    {/*  */}

    </>
  )
}

export default App
