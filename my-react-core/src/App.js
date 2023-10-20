import { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("b");

<<<<<<< HEAD
  const [a, setA] = useState('b');

  return (
    <div className="App">
      谢谢
    </div>
  );
=======
  return <div className="App">谢谢</div>;
>>>>>>> 8ce8061dae5bea06e6d9a75c10329def28771f25
}

export default App;
