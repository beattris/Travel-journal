import './App.css';
import Header from './components/Header';
import {Travels} from './components/Travels';
import data from './data';

function App() {
  const travelsLog = data.map(travel => {
    return(
      <Travels 
        title={travel.title}
        location={travel.location}
        map={travel.googleMapsUrl}
        startDate={travel.startDate}
        endDate={travel.endDate}
        description={travel.description}
        image={travel.imageUrl}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {travelsLog}
    </div>
  );
}

export default App;
