import React, { Component } from 'react';
import './App.css';

import {createDashboard} from "./core/dashboard";
import {dummySensor} from "./core/dummySensor";
import {Dashboard} from "./components/dashboard.component";

const temperatureSensor$ = dummySensor({
    minDelay: 700,
    maxDelay: 1500,
    minValue: 20,
    maxValue: 30
});

const humiditySensor$ = dummySensor({
    minDelay: 50,
    maxDelay: 150,
    minValue: 80,
    maxValue: 90
});

const pressureSensor$ = dummySensor({
    minDelay: 100,
    maxDelay: 200,
    minValue: 80,
    maxValue: 90
});

const dashboardData$ = createDashboard(temperatureSensor$, humiditySensor$, pressureSensor$)
    .map(([temperature, humidity, pressure]) => ({
        temperature,
        humidity,
        pressure
    }));

class App extends Component {
  render() {
    return (
      <div className="App">
          <Dashboard dashboardData$={dashboardData$} />
      </div>
    );
  }
}
export default App;
