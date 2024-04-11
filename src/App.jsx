import './App.css'
import GameAbout from './components/GameAbout';
import GameHeader from './components/GameHeader';
import GameNavbar from './components/GameNavbar';
import MainNavbar from './components/MainNavbar'

function App() {
  return (
    <>
      <MainNavbar />
      <GameHeader />
      <GameNavbar />
      <GameAbout />
    </>
  );
}

export default App
