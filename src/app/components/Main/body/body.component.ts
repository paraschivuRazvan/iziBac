import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';

import Chart from 'chart.js';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  testVar: boolean = true;

  test(): void {
    this.testVar = !this.testVar;
  }

  currentUser = {};

  serverResp =
  {
    personalGLobalScore: { name: "GlobalAvg", score: 2.25, base: 1.25, goal: 3.2 },
    weeklyScore: [
      { w: 1, personalScore: 0, averageScore: 0 },
      { w: 2, personalScore: 1, averageScore: 1 },
      { w: 3, personalScore: 1.5, averageScore: 2.5 },
      { w: 4, personalScore: 1.5, averageScore: 2.5 },
      { w: 5, personalScore: 1.5, averageScore: 2.5 },
      { w: 6, personalScore: 2, averageScore: 3 },
      { w: 7, personalScore: 2.5, averageScore: 3.5 },
      { w: 8, personalScore: 2.5, averageScore: 3.5 }
    ],
    competencyScores: [
      { name: "Planning", score: 2.25, base: 1.0, goal: 3.2 },
      { name: "Active sales management", score: 2.5, base: 1.5, goal: 3.2 },
      { name: "Performance management", score: 1.5, base: 0.0, goal: 3.2 },
      { name: "Stakeholder management", score: 2.00, base: 0.5, goal: 3.2 },
      { name: "Motivational leadership", score: 2.75, base: 1.5, goal: 3.2 },
      { name: "Commercial acumen", score: 2.35, base: 1.5, goal: 3.2 },
      { name: "Communication", score: 3.2, base: 2.5, goal: 3.2 }
    ]
  };

  compElem = {
    weeklyScore: [
      { w: 1, personalScore: 0, averageScore: 0 },
      { w: 2, personalScore: 1, averageScore: 1 },
      { w: 3, personalScore: 1.5, averageScore: 2.5 },
      { w: 4, personalScore: 1.5, averageScore: 2.5 },
      { w: 5, personalScore: 1.5, averageScore: 2.5 },
      { w: 6, personalScore: 2, averageScore: 3 },
      { w: 7, personalScore: 2.5, averageScore: 3.5 },
      { w: 8, personalScore: 2.5, averageScore: 3.5 }
    ],
    behaviors: [
      {
        id: 1, name: "Properly maintains effective management routines ensuring Active Management is practised",
        scores: [
          { w: 1, score: 0 },
          { w: 2, score: 1 },
          { w: 3, score: 1.5 },
          { w: 4, score: 1.5 }]
      },
      {
        id: 2, name: "Sets and agrees sensible deadlines, actions, tasks and standards for their team",
        scores: [
          { w: 1, score: 0 },
          { w: 2, score: 1 },
          { w: 3, score: 1.5 },
          { w: 4, score: 1.5 }]
      },
      {
        id: 3, name: "Analyses and assesses in detail the performance reports to make timely and reliable decisions and coach team members",
        scores: [
          { w: 1, score: 0 },
          { w: 2, score: 1 },
          { w: 3, score: 1.5 },
          { w: 4, score: 1.5 }]
      },
      {
        id: 4, name: "Shows flexibility in ensuring plans are fulfilled and business targets are met",
        scores: [
          { w: 1, score: 0 },
          { w: 2, score: 1 },
          { w: 3, score: 1.5 },
          { w: 4, score: 1.5 }]
      },
      {
        id: 5, name: "Frequently observes and coaches team members to improve performance. Demonstrates relationship building, questioning and listening skills",
        scores: [
          { w: 1, score: 0 },
          { w: 2, score: 1 },
          { w: 3, score: 1.5 },
          { w: 4, score: 1.5 }]
      },
      {
        id: 6, name: "Holds regular and effective performance review meetings and runs them with accuracy and control",
        scores: [
          { w: 1, score: 0 },
          { w: 2, score: 1 },
          { w: 3, score: 1.5 },
          { w: 4, score: 1.5 }]
      }
    ]
  };

  personalScoreArr = [];
  averageScoreArr = [];

  firstWeek = "Week 0";
  secondWeek = "Week 0";

  selectFirstWeek(week) {
    if (week == 0) {
      this.firstWeek = "Week 0";
    }
    if (week == 1) {
      this.firstWeek = "Week 1";
    }
    if (week == 2) {
      this.firstWeek = "Week 2";
    }
    if (week == 3) {
      this.firstWeek = "Week 3";
    }
  }

  selectSecondWeek(week) {
    if (week == 0) {
      this.secondWeek = "Week 0";
    }
    if (week == 1) {
      this.secondWeek = "Week 1";
    }
    if (week == 2) {
      this.secondWeek = "Week 2";
    }
    if (week == 3) {
      this.secondWeek = "Week 3";
    }
  }

  setUpDatasets() {
    (function (weeklyScore, personalScoreArr, averageScoreArr) {

      weeklyScore.forEach(function (item, index) {
        personalScoreArr.push(item.personalScore);
        averageScoreArr.push(item.averageScore);
      });

    })(this.serverResp.weeklyScore, this.personalScoreArr, this.averageScoreArr);
  }

  ngOnInit() {
    (function (competencyScores) {
      setTimeout(function () {
        Array.from(document.getElementsByClassName("doughnutChartContainer")).forEach(function (item, index) {
          var doughnutChart = new Chart(item.getElementsByTagName('canvas'), {
            type: 'doughnut',
            data: {
              datasets: [{
                //((score-base)*100)/goal-base = chart fill
                data: [((competencyScores[index].score - competencyScores[index].base) * 100) / (competencyScores[index].goal - competencyScores[index].base), 100 - ((competencyScores[index].score - competencyScores[index].base) * 100) / (competencyScores[index].goal - competencyScores[index].base)],
                backgroundColor: [
                  "#90df40",
                  "#f0f1f6"
                ],
                borderWidth: 0
              }]
            },
            options: {
              tooltips: { enabled: false },
              hover: { mode: null },
              cutoutPercentage: 80,
              responsive: true,
              legend: false,
              title: {
                display: true,
                text: competencyScores[index].name,
                fontStyle: 'normal',
                fontColor: '#404562'
              },
            }
          });

        });
      }, 100);
    })(this.serverResp.competencyScores);

    var doughnutChart = new Chart(document.getElementById("doughnut"), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [((this.serverResp.personalGLobalScore.score - this.serverResp.personalGLobalScore.base) * 100) / (this.serverResp.personalGLobalScore.goal - this.serverResp.personalGLobalScore.base), 100 - ((this.serverResp.personalGLobalScore.score - this.serverResp.personalGLobalScore.base) * 100) / (this.serverResp.personalGLobalScore.goal - this.serverResp.personalGLobalScore.base)],
          backgroundColor: [
            "#90df40",
            "#f0f1f6"
          ],
          borderWidth: 0
        }]
      },
      options: {
        tooltips: { enabled: false },
        hover: { mode: null },
        cutoutPercentage: 80,
        responsive: true,
        legend: false,
        title: {
          display: true,
          text: 'Average Score',
          fontStyle: 'normal',
          fontColor: '#404562'
        },
      }
    });

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    //((score-base)*100)/goal-base = chart fill

    this.setUpDatasets();

    (function (personalScoreArr, averageScoreArr) {

      var myChart = new Chart(document.getElementById("myChart"), {
        type: 'line',
        data: {
          labels: ["W0", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11"],
          datasets: [
            {
              label: 'Me',
              data: personalScoreArr,
              borderColor: '#90df40',
              borderWidth: 2,
              pointBackgroundColor: '#90df40',
              fill: false
            },
            {
              label: 'Average',
              data: averageScoreArr,
              borderColor: '#d8dae0',
              borderWidth: 2,
              fill: false,
              pointBackgroundColor: '#d8dae0'
            },
            {
              label: 'Target',
              data: [3.9, 3.9, 3.9, 3.9, 3.9, 3.9, 3.9, 3.9, 3.9, 3.9, 3.9, 3.9],
              borderColor: '#737c9d',
              borderWidth: 2,
              fill: false,
              radius: 0,
              borderDash: [10, 5],
              pointBorderWidth: 0,
              pointBackgroundColor: 'transparent',
              pointBorderColor: "rgba(255, 255, 255, 0)",
            }
          ]
        },
        options: {
          layout: {
            padding: {
              // Any unspecified dimensions are assumed to be 0
              left: 10
            }
          },
          maintainAspectRatio: false,
          legend: {

            display: true,
            position: "bottom",
            labels: {
              useLineStyle: true
            }
          },
          elements: {
            line: {
              tension: 0, // disables bezier curves
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

    })(this.personalScoreArr, this.averageScoreArr);
  }

}
