import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  // click function
  function handleClick() {
    alert('clicked 1');
  }

  const handleClick2 = () => {
    alert('clicked 2');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>react Core Concept 2</h3>
      <Friends />
      <Users />
      <Team />
      <Counter />
      {/* click option start*/}
      <button onClick={handleClick}>Click me1</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={() => { alert('clicked 3') }}>Click me3</button>
      <button onClick={() => addToFive(3)}>Click Me 4</button>
      {/* click option end*/}

    </>
  )
}

export default App
