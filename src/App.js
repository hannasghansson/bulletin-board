import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bulletin Board</h1>
        <p>with React</p>
      </header>
    </div>
  );
}*/

import BulletinBoard from './components/BulletinBoard';

function App() {
  return (
      <div className="App">

        <header className="App-header">
          <h1>Bulletin Board</h1>
          <p>with React</p>
        </header>
      
        <main className='App-main'>
          <BulletinBoard />
        </main>

  
    
      </div>
  )
}


export default App;
