import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-pie-chart',
	templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnChanges{
	@Input() dataPoints!: { y: number, name: string }[];
	@Input() chartName!: string;

	ngOnChanges(changes: SimpleChanges): void {
		this.chartOptions = {
			animationEnabled: true,
			title: {
				text: this.chartName
			},
			data: [{
				type: "pie",
				startAngle: -90,
				indexLabel: "{name}: {y}",
				dataPoints: this.dataPoints
			}]
		}
	}

	chartOptions = {
		animationEnabled: true,
		title: {
			text: this.chartName
		},
		data: [{
			type: "pie",
			startAngle: -90,
			indexLabel: "{name}: {y}",
			dataPoints: this.dataPoints
		}]
	}

}
