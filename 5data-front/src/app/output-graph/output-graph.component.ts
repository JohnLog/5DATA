import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { HttpClient } from "@angular/common/http";
import { interval, Subscription } from "rxjs";

declare var require: any;
let Boost = require("highcharts/modules/boost");
let noData = require("Highcharts/modules/no-data-to-display");
let More = require("Highcharts/highcharts-more");

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: "app-output-graph",
  templateUrl: "./output-graph.component.html",
  styleUrls: ["./output-graph.component.scss"]
})
export class OutputGraphComponent implements OnInit {
  public option: any = {
    chart: {
      type: "scatter",
      height: 700
    },

    title: {
      text: "Studends of Supinfo"
    },

    credits: {
      enabled: false
    },

    tooltip: {
      formatter: function() {
        return (
          "x: " +
          Highcharts.dateFormat("%e %b %y %H:%M:%S", this.x) +
          "  y: " +
          this.y.toFixed(2)
        );
      }
    },

    xAxis: {
      type: "datetime",
      labels: {
        formatter: function() {
          return Highcharts.dateFormat("%e %b %y", this.value);
        }
      }
    }
  };

  subscription: Subscription;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    //interval to update data
    const source = interval(10000);

    //API
    const apiLink = "http://localhost:3000/";

    this.subscription = source.subscribe(val =>
      this.getApiResponse(apiLink).then(
        data => {
          const updated_normal_data = [];
          const updatedabnormal_data = [];
          (data as any).forEach(row => {
            const temp_row = [new Date(row.timestamp).getTime(), row.value];
            row.Normal === 1
              ? updated_normal_data.push(temp_row)
              : updatedabnormal_data.push(temp_row);
          });
          this.option.series[0]["data"] = updated_normal_data;
          this.option.series[1]["data"] = updatedabnormal_data;
          Highcharts.chart("container", this.option);
        },
        error => {
          console.log("Something wen wrong.");
        }
      )
    );
  }

  getApiResponse(url) {
    return this.http
      .get(url, {})
      .toPromise()
      .then(res => {
        return res;
      });
  }
}
