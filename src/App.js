import React from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import ebconfig from './ebconfig';
import { Line } from 'react-chartjs-2';

class AppDB extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accessToken: null,
      results: [],
    };
  }

// Email and password as payload & token saved
  componentDidMount() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ5b3VyLmVtYWlsQGFkZHJlc3MiLCJpYXQiOjE2Mjk5NzkwMjR9.uzS7XcottgqwdlxK7BUu3QhBv0M37mZVMUK2XIyRIxY';
    const payload = { 
      "email": "your.email@address", 
      "password": "yourselectedpassword" 
  };

// JSON POST request for Authorisation
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };

// JSON POST request for Array data
  const requestData = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token },
  };

// // Signup for accessToken
  fetch('https://opendata.hopefully.works/api/signup', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ accessToken: data.accessToken }));

// // Login with credentials and retreive accessToken
  fetch('https://opendata.hopefully.works/api/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({ accessToken: data.accessToken })});


// // Fetch data if authorised
  fetch('https://opendata.hopefully.works/api/events', requestData)
  .then(response => response.json())
  .then(data => this.setState({ results: data }))}

  render()
  {
    const { accessToken } = this.state;
    const { results } = this.state;
    // Graph data and styling
    const data = {
      labels: ['Sensor 1', 'Sensor 2', 'Sensor 3', 'Sensor 4'],
      datasets: [
        {
          label: results.date,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [results.sensor1, results.sensor2, results.sensor3, results.sensor4]
        }
      ]
    };
    return(
      <div>
        {/* Current API information */}
        <h1 style={{ textAlign: 'center' }}>Sensor Data</h1>
        {/* <p>The request returned -  {accessToken} </p> */}
        <h3 style={{ fontWeight: 'normal' }}>Date - <b>{results.date}</b></h3>
        <h5 style={{ fontWeight: 'normal' }}>Sensor 1 - <b>{results.sensor1}</b></h5>
        <h5 style={{ fontWeight: 'normal' }}>Sensor 2 - <b>{results.sensor2}</b></h5>
        <h5 style={{ fontWeight: 'normal' }}>Sensor 3 - <b>{results.sensor3}</b></h5>
        <h5 style={{ fontWeight: 'normal' }}>Sensor 4 - <b>{results.sensor4}</b></h5>
          {/* Graph for current sensor data */}
        <Line data={data} />
      </div>
    )
  }
}

// Database compiling
function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <DbResults />
    </EasybaseProvider>
  );
}

// Historical data on cards
function Card({ date, sensor1, sensor2, sensor3, sensor4 }) {
  const cardStyle = {
    labels: ['Sensor 1', 'Sensor 2', 'Sensor 3', 'Sensor 4'],
    datasets: [
      {
        label: date,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgb(63, 127, 191)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [sensor1, sensor2, sensor3, sensor4]
      }
    ]
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ fontWeight: 'normal' }}><b>{date}</b></h3>
      <h5 style={{ fontWeight: 'normal' }}>Sensor 1: <b>{sensor1}</b></h5>
      <h5 style={{ fontWeight: 'normal' }}>Sensor 2: <b>{sensor2}</b></h5>
      <h5 style={{ fontWeight: 'normal' }}>Sensor 3: <b>{sensor3}</b></h5>
      <h5 style={{ fontWeight: 'normal' }}>Sensor 4: <b>{sensor4}</b></h5>
        <Line data={cardStyle} />
    </div>
  )
}

// Fetching and sending data to and from database
function DbResults() {

  const { db, useReturn, e } = useEasybase();

  const { frame } = useReturn(() => {
      return db('SENSOR-DATA').return()
  })

  const insertRecord = async () => {
    try {
      const inDate = prompt("Please enter the Date", "2021-08-27T10:00:00.000Z");
      const inSensor1 = prompt("Please enter the data for Sensor 1", "59");
      const inSensor2 = prompt("Please enter the data for Sensor 2", "12");
      const inSensor3 = prompt("Please enter the data for Sensor 3", "95");
      const inSensor4 = prompt("Please enter the data for Sensor 4", "590");
      
      if (!inDate || !inSensor1 || !inSensor2 || !inSensor3 || !inSensor4) return;

      await db('SENSOR-DATA').insert({
        date: inDate,
        sensor1: inSensor1,
        sensor2: inSensor2,
        sensor3: inSensor3,
        sensor4: inSensor4,

      }).one();
    } catch (_) {
      alert("Error on input format")
    }
  }
  
  return (
    <div>
      <button style={{  position: 'fixed',
                right: 5,
                top: 5, 
                width: "80px",
                margin: 20,
                padding: 10,
                borderRadius: 100,
                backgroundColor: 'rgba(110, 236, 236, 0.5)' }} 
                onClick={insertRecord}>
                + Add Record
        </button>

      <div style={{ marginLeft: 130, marginRight: 130, marginTop: 30 }}>
      <AppDB/>         
      </div>

      <h1 style={{ textAlign: 'center', margin: 30 }}>Historical Data:</h1>
        <div style={{ marginLeft: 130, 
                      marginRight: 130, 
                      marginBottom: 30 }}>
        <div style={{ display: "grid", 
                      gridTemplateColumns: "repeat(3, 1fr)", 
                      gridGap: 20 }}>
          {frame.map(ele => <Card {...ele} />)}
        </div>
        </div>
    </div>
  )
}

export default App;
