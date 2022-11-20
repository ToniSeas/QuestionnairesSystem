import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-pie-chart',
	templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnChanges {
	@Input() dataPoints!: { y: number, name: string }[];
	@Input() chartName!: string;
	@Input() showGraphic!: boolean;
	public chartOptions: {
		animationEnabled: boolean;
		willReadFrequently: boolean;
		title: { text: string; };
		data: {
			type: string;
			startAngle: number;
			indexLabel: string;
			dataPoints: any;
		}[];
	} | undefined;

	ngOnChanges(changes: SimpleChanges): void {
		this.chartOptions = {
			animationEnabled: true,
			willReadFrequently: true,
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
}
