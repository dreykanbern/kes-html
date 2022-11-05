Chart.plugins.register({
    afterDatasetsDraw: function (chart) {
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = '#141A26';

                    var fontSize = 14;
                    var fontStyle = 'normal';
                    //var fontFamily = 'ProximaNova';
                    //ctx.font = Chart.helpers.fontString(fontSize, fontStyle);

                    // Just naively convert to string for now
                    var dataString = dataset.data[index].toString();

                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                });
            }
        });
    }
});

window.onload = function () {
    var ctx = document.querySelector('.history-graph__canvas').getContext('2d');
    window.myLine = new Chart(ctx, chartConfig);
};