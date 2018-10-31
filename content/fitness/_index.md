---
title: "Fitness"
---

# Weight Lifting


<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.js"></script>
<canvas id="liftingChart" width="400" height="200"></canvas>
<script>

fetch('data.json').then(function(response) {
    return response.json();
}).then (data => {
    console.log(data);
    // var dates = ['10/20', '10/22', "10/24", "10/26", "10/30"];
    var dates = [...Array(data.ohp.length).keys()];

    var liftingCtx = document.getElementById("liftingChart").getContext('2d');
    var myChart = new Chart(liftingCtx, {
        type: 'line',
        data: {
            cubicInterpolationMode: 'default',
            labels: dates,
            datasets: [{
                label: 'Overhead Press 3x5',
                fill: false,
                data: data.ohp,
                backgroundColor: 'red',
                borderColor: 'red'
            },
            {
                label: 'Bench Press 3x5',
                fill: false,
                data: data.bench,
                backgroundColor: 'blue',
                borderColor: 'blue'
            },
            {
                label: 'Bent Over Barbell Row 3x5',
                fill: false,
                data: data.row,
                backgroundColor: 'green',
                borderColor: 'green'
            },
            {
                label: 'Deadlift 1x5',
                fill: false,
                data: data.deadlift,
                backgroundColor: 'brown',
                borderColor: 'brown'
            },
            {
                label: 'Body Weight',
                fill: true,
                data: data.bodyWeight,
                backgroundColor: 'rgb(219, 114, 249)',
                borderColor: 'purple'
            }]
        },
        options: {
            spanGaps: true
        }
    });
});


    
</script>

# Running

<script></script>
<canvas id="runningChart" width="400" height="200"></canvas>
<script>

var weeklyData = [0, 1.5, 1.8];

var runningCtx = document.getElementById("runningChart").getContext('2d');
var myChart = new Chart(runningCtx, {
    type: 'bar',
    data: {
        labels: ['Week 42', 'Week 43', 'Week 44'],
        datasets: [{
            label:"Weekly Milage",
            data: weeklyData,
            backgroundColor: 'red',
            borderColor: 'red'
        },
        {
            label: 'Cumulative Milage',
            fill: true,
            data: accumulateData(weeklyData),
            backgroundColor: 'rgb(117, 164, 239)',
            borderColor: 'blue',
            type: 'line'
        }]
    },
    options: {
        spanGaps: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});

function accumulateData(weeklyData) {
    var cumulativeData = [];
    for (i =0; i<weeklyData.length; i++) {
        if (i==0) {
            cumulativeData[i] = weeklyData[i];
        } else {
            cumulativeData[i] = cumulativeData[i-1] + weeklyData[i];
        }
    }
    return cumulativeData;
}
</script>
