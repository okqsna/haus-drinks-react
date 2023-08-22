import './App.css';
import {useState, useEffect} from "react";
import MainPage from './Components/MainPage/MainPage';
function App() {
  const [daysRemaining, setDaysRemaining] = useState(null);
      useEffect(() => {
         const calculateDays = () => {
                    const currentDate = new Date();
                    const birthDate = new Date('2023-08-26'); // Replace with your desired exam date
                    const timeDifference = Math.abs(birthDate - currentDate);
                    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
                    setDaysRemaining(daysRemaining);
        };
        calculateDays();
   }, []);
  return (
    <div className="App">
      <MainPage daysRemaining={daysRemaining}/>
    </div>
  );
}

export default App;
