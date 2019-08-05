var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationService } from '../../Shared/PaginationService';
import { MemberRegistrationService } from '../Services/app.MemberRegistration.service';
var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(paginationService, memberregistration) {
        this.paginationService = paginationService;
        this.memberregistration = memberregistration;
        this.dataSource = new MatTableDataSource();
        this.displayedColumns = ['MemberId', 'MemberNo', 'MemberName', 'Contactno', 'PlanName', 'SchemeName', 'JoiningDate', 'EditAction', 'DeleteAction'];
        this.onPageSwitch = new EventEmitter();
    }
    Object.defineProperty(MemberListComponent.prototype, "dataSourceForTable", {
        set: function (value) {
            this.dataSource = new MatTableDataSource(value);
        },
        enumerable: true,
        configurable: true
    });
    MemberListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    MemberListComponent.prototype.Delete = function (MemberId) {
        var _this = this;
        console.log(MemberId);
        if (confirm("Are you sure to delete Member ?")) {
            this.memberregistration.DeleteMember(MemberId).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted Member Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/Member/AllMember']);
                }
            });
        }
    };
    __decorate([
        Input('dataSource'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MemberListComponent.prototype, "dataSourceForTable", null);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MemberListComponent.prototype, "totalCount", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MemberListComponent.prototype, "onPageSwitch", void 0);
    MemberListComponent = __decorate([
        Component({
            selector: 'app-list',
            templateUrl: 'Memberlist.component.html',
            styleUrls: ['../../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../../Content/vendor/metisMenu/metisMenu.min.css',
                '../../Content/dist/css/sb-admin-2.css',
                '../../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [PaginationService, MemberRegistrationService])
    ], MemberListComponent);
    return MemberListComponent;
}());
export { MemberListComponent };
//# sourceMappingURL=app.MemberListComponent .js.map