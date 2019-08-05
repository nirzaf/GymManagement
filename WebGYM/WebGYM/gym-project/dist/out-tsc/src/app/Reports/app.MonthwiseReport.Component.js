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
import { MonthWiseRequestModel } from './Models/app.MonthWiseRequestModel';
var MonthwiseReportComponent = /** @class */ (function () {
    function MonthwiseReportComponent(reportService) {
        this.MonthWiseRequestModel = new MonthWiseRequestModel();
        this.displayedColumns = ['MemberFName', 'MemberNo', 'MemberLName', 'MemberMName', 'CreateDate', 'Total', 'Paymentmonth', 'PaymentAmount', 'Username'];
        this._reportService = reportService;
    }
    MonthwiseReportComponent.prototype.ngOnInit = function () {
        this.exportbutton = true;
        this.MonthList = [
            {
                MonthID: "1",
                MonthName: "January"
            }, {
                MonthID: "2",
                MonthName: "February"
            },
            {
                MonthID: "3",
                MonthName: "March"
            },
            {
                MonthID: "4",
                MonthName: "April"
            },
            {
                MonthID: "5",
                MonthName: "May"
            },
            {
                MonthID: "6",
                MonthName: "June"
            },
            {
                MonthID: "7",
                MonthName: "July"
            },
            {
                MonthID: "8",
                MonthName: "August"
            },
            {
                MonthID: "9",
                MonthName: "September"
            },
            {
                MonthID: "10",
                MonthName: "October"
            },
            {
                MonthID: "11",
                MonthName: "November"
            },
            {
                MonthID: "12",
                MonthName: "December"
            }
        ];
    };
    MonthwiseReportComponent.prototype.ExportTOExcel = function () {
        var ws = XLSX.utils.table_to_sheet(this.table.nativeElement);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, 'MonthWiseReport.xlsx');
    };
    MonthwiseReportComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.MonthWiseRequestModel.MonthId == null) {
        }
        else {
            this._reportService.GetMonthWiseReport(this.MonthWiseRequestModel).subscribe(function (allrecords) {
                _this.dataSource = new MatTableDataSource(allrecords);
                _this.exportbutton = false;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    __decorate([
        ViewChild('TABLE'),
        __metadata("design:type", ElementRef)
    ], MonthwiseReportComponent.prototype, "table", void 0);
    MonthwiseReportComponent = __decorate([
        Component({
            templateUrl: './app.MonthwiseReport.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [ReportService])
    ], MonthwiseReportComponent);
    return MonthwiseReportComponent;
}());
export { MonthwiseReportComponent };
//# sourceMappingURL=app.MonthwiseReport.Component.js.map