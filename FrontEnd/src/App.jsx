 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Pages/Navbar'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'
import Authentication from './Components/Authentication'
import React, { Suspense } from 'react'
import Projects from './Components/Projects.jsx'
import ProjectsTranscript from './Components/Projects/ProjectsTranscript.jsx'
import WidgetConfiguration from './Components/Wedget/WidgetConfiguration.jsx'
import WidgetGeneral from './Components/Wedget/WidgetGeneral.jsx'
import WidgetDisplay from './Components/Wedget/WidgetDisplay.jsx'
import WidgetAdvance from './Components/Wedget/WidgetAdvance.jsx'
import Settings from './Components/Pages/Settings.jsx'

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
              <Route path="widgetconfigurations" element={<Authentication><WidgetConfiguration /></Authentication>}>
                    <Route index element={<WidgetGeneral />} />
                    <Route path="general" element={<WidgetGeneral />} />
                    <Route path="display" element={<WidgetDisplay />} />
                    <Route path="advanced" element={<WidgetAdvance/>} />
                     <Route path="*" element={<h1 style={{color:"red"}}> Page not found....</h1>} />
              </Route>
              <Route path="settings" element={<Settings />} />
              <Route path="transcript/:projectfilename/:index" element={<ProjectsTranscript />} />
              <Route path="development" element={<h1 style={{color:"red"}}> Page not found....</h1>} />
              <Route path="pricing" element={<h1 style={{color:"red"}}> Page not found....</h1>} />

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
