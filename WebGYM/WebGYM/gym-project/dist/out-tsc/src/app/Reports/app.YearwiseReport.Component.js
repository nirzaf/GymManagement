var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { ReportService } from './Services/app.ReportServices';
import { YearwiseRequestModel } from './Models/app.YearwiseRequestModel';
var YearwiseReportComponent = /** @class */ (function () {
    function YearwiseReportComponent(reportService) {
        this.YearwiseRequestModel = new YearwiseRequestModel();
        this.displayedColumns = ['CurrentYear', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Decm', 'Jan', 'Feb', 'March', 'Total'];
        this._reportService = reportService;
    }
    YearwiseReportComponent.prototype.ngOnInit = function () {
        this.YearList = [
            {
                YearID: "2018",
                YearName: "2018"
            }, {
                YearID: "2019",
                YearName: "2019"
            }
        ];
        this.exportbutton = true;
    };
    YearwiseReportComponent.prototype.ExportTOExcel = function () {
        var ws = XLSX.utils.table_to_sheet(this.table.nativeElement);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, 'YearWiseReport.xlsx');
    };
    YearwiseReportComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.YearwiseRequestModel.YearID == null) {
        }
        else {
            this._reportService.GetYearWiseReport(this.YearwiseRequestModel).subscribe(function (allrecords) {
                _this.dataSource = new MatTableDataSource(allrecords);
                _this.exportbutton = false;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    __decorate([
        ViewChild('TABLE'),
        __metadata("design:type", ElementRef)
    ], YearwiseReportComponent.prototype, "table", void 0);
    YearwiseReportComponent = __decorate([
        Component({
            templateUrl: './app.YearwiseReport.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [ReportService])
    ], YearwiseReportComponent);
    return YearwiseReportComponent;
}());
export { YearwiseReportComponent };
//# sourceMappingURL=app.YearwiseReport.Component.js.map