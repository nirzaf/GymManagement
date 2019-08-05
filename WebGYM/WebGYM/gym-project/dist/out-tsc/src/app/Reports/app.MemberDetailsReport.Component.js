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
var MemberDetailsReportComponent = /** @class */ (function () {
    function MemberDetailsReportComponent(reportService) {
        this.displayedColumns = ['MemberNo', 'Name', 'Contactno', 'EmailID', 'PlanName', 'SchemeName', 'JoiningDate', 'RenwalDate', 'PaymentAmount'];
        this._reportService = reportService;
    }
    MemberDetailsReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._reportService.GetAllMemberDetailsReport().subscribe(function (allrecords) {
            _this.allMemberDetailsReport = allrecords;
            _this.dataSource = new MatTableDataSource(_this.allMemberDetailsReport);
        }, function (error) { return _this.errorMessage = error; });
    };
    MemberDetailsReportComponent.prototype.ExportTOExcel = function () {
        var ws = XLSX.utils.table_to_sheet(this.table.nativeElement);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, 'MemberRenewalReport.xlsx');
    };
    __decorate([
        ViewChild('TABLE'),
        __metadata("design:type", ElementRef)
    ], MemberDetailsReportComponent.prototype, "table", void 0);
    MemberDetailsReportComponent = __decorate([
        Component({
            templateUrl: './app.MemberDetailsReport.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css',
                './app.MemberDetailsReport.css'
            ]
        }),
        __metadata("design:paramtypes", [ReportService])
    ], MemberDetailsReportComponent);
    return MemberDetailsReportComponent;
}());
export { MemberDetailsReportComponent };
//# sourceMappingURL=app.MemberDetailsReport.Component.js.map