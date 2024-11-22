import { AfterViewInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent{
  public data = {
    labels: [
      "January", "February", "March", "April", "May", 
      "June", "July", "August", "September", "October", 
      "November", "December"
    ],
    datasets: [
      {
        label: "Sessions Created",
        data: [5, 8, 10, 12, 15, 9, 11, 14, 7, 10, 13, 16],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      },
      {
        label: "Sessions Attended",
        data: [4, 7, 9, 10, 14, 8, 10, 12, 6, 9, 11, 15],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1
      }
    ]
  };

 
}


