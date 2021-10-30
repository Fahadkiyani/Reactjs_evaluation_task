import logo from './logo.svg';
import './App.css';

function App() {
  let rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];

  
  return (
    <div className="container">
      <ol>
        {rooms.map((d, i, l) => {
          return (
            <li key={i}>
              <p>{d.room_type}, </p>
              <p>{d.vacant_rooms}, </p>
              <p>${d.price}</p>
            </li>
          )

        })}
      </ol>
    </div>
  );
}

export default App;
