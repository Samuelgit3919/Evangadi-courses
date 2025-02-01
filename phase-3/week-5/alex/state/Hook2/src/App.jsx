import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    console.log('Component mounted or updated');
  });

  useEffect(() => {
    console.log('This runs only once after the initial render');
  }, []);


  useEffect(() => {
    console.log('This runs when `someState` or `anotherState` changes');
  }, ['State1', 'State2']);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This runs every 1 second');
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return <div>Check your console</div>;
};
export default App
