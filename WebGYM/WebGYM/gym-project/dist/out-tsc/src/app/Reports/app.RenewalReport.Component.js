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
import { RenewalRequestModel } from './Models/app.RenewalRequestModel';
var RenewalReportComponent = /** @class */ (function () {
    function RenewalReportComponent(reportService) {
        this.RenewalRequestModel = new RenewalRequestModel();
        this.displayedColumns = ['Name', 'Contactno', 'EmailID', 'MemberNo', 'PlanName', 'SchemeName', 'JoiningDate', 'RenwalDate', 'PaymentAmount'];
        this._reportService = reportService;
    }
    RenewalReportComponent.prototype.ngOnInit = function () {
        this.fromminDate = new Date();
        this.frommaxDate = new Date();
        this.fromminDate.setDate(this.fromminDate.getDate() - 60);
        this.frommaxDate.setDate(this.frommaxDate.getDate() + 30);
        this.tominDate = new Date();
        this.tomaxDate = new Date();
        this.showDatepicker = true;
        this.exportbutton = true;
    };
    RenewalReportComponent.prototype.ExportTOExcel = function () {
        var ws = XLSX.utils.table_to_sheet(this.table.nativeElement);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, 'RenewalReport.xlsx');
    };
    RenewalReportComponent.prototype.onChangeFromDate = function (todate) {
        console.log(this.showDatepicker);
        this.showDatepicker = !this.showDatepicker;
        console.log(this.showDatepicker);
        this.tominDate = todate;
        this.tomaxDate.setDate(this.tominDate.getDate() + 60);
    };
    RenewalReportComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.RenewalRequestModel.Paymentfromdate == null && this.RenewalRequestModel.Paymentfromto == null) {
        }
        else {
            this._reportService.GetRenewalReport(this.RenewalRequestModel).subscribe(function (allrecords) {
                _this.dataSource = new MatTableDataSource(allrecords);
                _this.exportbutton = false;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    __decorate([
        ViewChild('TABLE'),
        __metadata("design:type", ElementRef)
    ], RenewalReportComponent.prototype, "table", void 0);
    RenewalReportComponent = __decorate([
        Component({
            templateUrl: './app.RenewalReport.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [ReportService])
    ], RenewalReportComponent);
    return RenewalReportComponent;
}());
export { RenewalReportComponent };
//# sourceMappingURL=app.RenewalReport.Component.js.map