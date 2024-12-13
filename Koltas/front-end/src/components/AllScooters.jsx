import './styles.css';
import { useEffect, useState } from 'react';

export default function GetAllScooters() {
  const [scooters, setScooters] = useState([]);
  const [x, setX] = useState('');

  useEffect(() => {
    async function fetchAllScooters() {
      const promise = await fetch('http://localhost/server/api/scooters');
      const response = await promise.json();
      setScooters(response);
    }
    fetchAllScooters();
  }, [x]);

  async function deleteScouter(id) {
    await fetch(`http://localhost/server/api/scooters/${id}`, {
      method: 'DELETE',
    });
    function updateMessage() {
      setX('Deleted');
      setTimeout(() => {
        setX('');
      }, 2000);
    }
    updateMessage();
  }

  async function updateScooter(id) {
    const updatedScooter = scooters.find((scooter) => scooter.id === id);
    await fetch(`http://localhost/server/api/scooters/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedScooter),
    });
    function updateMessage() {
      setX('Updated');
      setTimeout(() => {
        setX('');
      }, 2000);
    }
    updateMessage();
  }

  function handleChange(e, id, field) {
    const value = e.target.value;
    setScooters((prev) =>
      prev.map((scooter) =>
        scooter.id === id ? { ...scooter, [field]: value } : scooter
      )
    );
    console.log(value);
  }

  console.log(scooters);

  function formatDate(lastTimeUse) {
    const date = new Date(lastTimeUse);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    if (year === 1970) return 'Never used';

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  return (
    <>
      <h1>{x}</h1>

      <table>
        <thead>
          <tr>
            <th>Registration Code</th>
            <th>Last Use Time</th>
            <th>Total KM</th>
            <th>Ride tariff per km</th>
            <th>Ride tariff per min</th>
            <th>Is busy</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {scooters.length > 0 ? (
            scooters.map((scooter) => (
              <tr key={scooter.id}>
                <td>
                  <input
                    type="text"
                    value={scooter.registrationCode}
                    onChange={(e) =>
                      handleChange(e, scooter.id, 'registrationCode')
                    }
                  />
                </td>
                <td>{formatDate(scooter.lastUseTime)}</td>
                <td>{scooter.totalRide}</td>
                <td>
                  <input
                    type="text"
                    value={scooter.rideTariffPerKm}
                    onChange={(e) =>
                      handleChange(e, scooter.id, 'rideTariffPerKm')
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={scooter.leaseTariffPerMin}
                    onChange={(e) =>
                      handleChange(e, scooter.id, 'leaseTariffPerMin')
                    }
                  />
                </td>
                <td>{scooter.isBusy ? 'Yes' : 'No'}</td>
                <td>
                  {
                    <button
                      onClick={() => {
                        deleteScouter(scooter.id);
                      }}
                    >
                      DELETE
                    </button>
                  }
                </td>
                <td>
                  {
                    <button
                      onClick={() => {
                        updateScooter(scooter.id);
                      }}
                    >
                      UPDATE
                    </button>
                  }
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No Scooters available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
