
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import Authentication from './pages/Authentication'
import Message from './pages/Message'
import Notification from './pages/Notification'
import Profile from './pages/Profile'
import ProjectCode from './pages/ProjectCode'
import ProjectUpload from './pages/ProjectUpload'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/notifications" element={<Notification/>}></Route>
      <Route exact path="/projectcode" element={<ProjectCode/>}></Route>
      <Route exact path="/projectupload" element={<ProjectUpload/>}></Route>
      <Route exact path="/messages" element={<Message/>}></Route>
      <Route exact path="/profile" element={<Profile/>}></Route>
      <Route exact path="/auth" element={<Authentication/>}></Route>
      </Routes>
    </Router>
    {/* <Notification/> */}
    {/* <ProjectUpload/> */}
    {/* <Message/> */}
    {/* <ProjectCode/> */}
    {/* <Profile/> */}
    {/* <Authentication/> */}
    </>
  )
}

export default App
