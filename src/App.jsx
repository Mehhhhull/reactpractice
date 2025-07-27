import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Post from './components/Post'
import RightBar from './components/RightBar'

const App = () => {
  return (
   <>
   <Navbar/>
   <div className="container">
   <div className="side_bar">
    <Sidebar/>
   </div>
   <div className="post_section">
    <Post/>
   </div>
   <div className="right_bar">
    <RightBar/>
   </div>
   </div>
   </>
  )
}

export default App
