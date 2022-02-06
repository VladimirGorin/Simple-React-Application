import React, { useCallback, useState } from "react";

function App() {
    const [likes, setlikes] = useState(0)

    const [value, setvalue] = useState('ТЕКСТ В INPUT')

    function Disable(){
      setlikes (likes + 1)
    }
    function Anneble(){
      setlikes (likes - 1)
    }

  return (
    <div className="App">
        <h1>{likes}</h1>
        <h1>{value}</h1>
        <input type='text' value={value} onChange={event => setvalue(event.target.value)}/>
        <button onClick={Disable} >Disable</button>
        <button onClick={Anneble} >Anneble</button>
    </div>
  );
}

export default App;
