import './App.css'
import Profile from './pages/Profile/Profile'
import Work from './pages/Work/Work'
import Projects from './pages/Projects/Projects'
import AboutMe from './pages/AboutMe/AboutMe'

function App() {

  return (
    <>
      <Profile/>
      <div className='content'>
        <AboutMe/>
        <Work/>
        <Projects/>
      </div>
    </>
  )
}

export default App
