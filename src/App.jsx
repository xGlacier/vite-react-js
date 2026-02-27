import { useState, useEffect } from 'react';

function App() {
  // 1. Memory: Create a state variable to hold the time
  const [time, setTime] = useState(new Date());

  // 2. Background Task: Start the clock ticking
  useEffect(() => {
    // This interval runs every second to update the 'time' state
    const timerId = setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    // 3. Cleanup: Stop the interval if the component is ever removed
    return () => clearInterval(timerId);
  }, []); // The empty array tells React to only start this interval once

  return (
    <div>
      <h1>My first React app</h1>
      <h2>The time now is {time.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;