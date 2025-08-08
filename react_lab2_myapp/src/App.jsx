import sayac from './sayac.jsx';
function App() {
  const currentDate = new Date();
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ];

  return (
    <div>
      <h1>Muhammed</h1>
      <h2>Bugün günlerden: {days[currentDate.getDay()]}</h2>
      <h2>Tarih: {currentDate.toLocaleDateString()}</h2>
      <h2>Saat: {currentDate.toLocaleTimeString()}</h2>
    </div>
  );
}

function App() {
  return <sayac />;
  
}

export default App;
