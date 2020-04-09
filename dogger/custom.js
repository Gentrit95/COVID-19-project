var chart1 = new CanvasJS.Chart("chartContainer1",
	{
        
      data: [
      {
        type: "column",
        dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55},
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 95 },
        { x: 60, y: 68 },
        { x: 70, y: 28 },
        { x: 80, y: 34 },
        { x: 90, y: 14}
        ]
      }
      ]
    });

var chart2 = new CanvasJS.Chart("chartContainer2",
	{
        
      data: [
      {
        type: "column",
        dataPoints: [
        { x: 10, y: 21 },
        { x: 20, y: 45},
        { x: 30, y: 30 },
        { x: 40, y: 65 },
        { x: 50, y: 55 },
        { x: 60, y: 88 },
        { x: 70, y: 38 },
        { x: 80, y: 54 },
        { x: 90, y: 13}
        ]
      }
      ]
    });

chart1.render();
chart2.render();