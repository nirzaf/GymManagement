var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MemberRegistrationService } from './Services/app.MemberRegistration.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { PaginationService } from '../Shared/PaginationService';
var AllMemberRegistration = /** @class */ (function () {
    function AllMemberRegistration(_Route, memberregistration, paginationService) {
        this._Route = _Route;
        this.memberregistration = memberregistration;
        this.paginationService = paginationService;
        this.displayedColumns = ['MemberId', 'MemberNo', 'MemberName', 'Contactno', 'PlanName', 'SchemeName', 'JoiningDate', 'EditAction', 'DeleteAction'];
        this.dataSource = new MatTableDataSource();
        this.onPageSwitch = new EventEmitter();
        this._memberregistration = memberregistration;
    }
    ;
    AllMemberRegistration.prototype.ngOnInit = function () {
        var _this = this;
        this._memberregistration.GetAllMember().subscribe(function (allMember) {
            _this.data = allMember;
            _this.dataSource = new MatTableDataSource(_this.data);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllMemberRegistration.prototype.Delete = function (MemberId) {
        var _this = this;
        console.log(MemberId);
        if (confirm("Are you sure to delete Member ?")) {
            this._memberregistration.DeleteMember(MemberId).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted Member Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/Member/All']);
                }
            });
        }
    };
    AllMemberRegistration.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    var _a, _b, _c;
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", typeof (_a = typeof MatSort !== "undefined" && MatSort) === "function" ? _a : Object)
    ], AllMemberRegistration.prototype, "sort", void 0);
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", typeof (_b = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _b : Object)
    ], AllMemberRegistration.prototype, "paginator", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AllMemberRegistration.prototype, "totalCount", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AllMemberRegistration.prototype, "onPageSwitch", void 0);
    AllMemberRegistration = __decorate([
        Component({
            templateUrl: './app.AllMemberRegistration.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css',
                './app.memberComponent.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof Router !== "undefined" && Router) === "function" ? _c : Object, MemberRegistrationService, PaginationService])
    ], AllMemberRegistration);
    return AllMemberRegistration;
}());
export { AllMemberRegistration };
//# sourceMappingURL=app.AllMemberRegistration.component.js.map