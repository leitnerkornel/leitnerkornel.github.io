import linkedinLogo from './assets/linkedin.svg'
import githubLogo from './assets/github.svg'

import './App.css'

function App() {
  return (
    <>
      <h1>Kornél Leitner</h1>
      <div>
        <a href="https://www.linkedin.com/in/kornel-leitner/" target="_blank">
          <img src={linkedinLogo} className="logo" alt="Linkedin logo"/>
        </a>
        <a href="https://github.com/leitnerkornel" target="_blank">
          <img src={githubLogo} className="logo react" alt="Github logo"/>
        </a>
      </div>
    </>
  )
}

export default App
