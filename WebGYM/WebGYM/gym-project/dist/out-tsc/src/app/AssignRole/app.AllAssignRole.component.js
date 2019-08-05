var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AssignandRemoveRoleService } from './Services/app.AssignandRemoveRole.Service';
var AllAssignRoleComponent = /** @class */ (function () {
    function AllAssignRoleComponent(_Route, assignservice) {
        this._Route = _Route;
        this.displayedColumns = ['RoleName', 'UserName'];
        this._assignservice = assignservice;
    }
    AllAssignRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._assignservice.GetAllAssignedRoles().subscribe(function (assignModel) {
            _this.dataSource = new MatTableDataSource(assignModel);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllAssignRoleComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AllAssignRoleComponent.prototype.getNext = function (event) {
        this.offset = event.pageSize * event.pageIndex;
        // call your api function here with the offset
        console.log(event.pageSize);
        console.log(event.pageIndex);
    };
    var _a, _b, _c;
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", typeof (_a = typeof MatSort !== "undefined" && MatSort) === "function" ? _a : Object)
    ], AllAssignRoleComponent.prototype, "sort", void 0);
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", typeof (_b = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _b : Object)
    ], AllAssignRoleComponent.prototype, "paginator", void 0);
    AllAssignRoleComponent = __decorate([
        Component({
            templateUrl: './app.AllAssignedRoles.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof Router !== "undefined" && Router) === "function" ? _c : Object, AssignandRemoveRoleService])
    ], AllAssignRoleComponent);
    return AllAssignRoleComponent;
}());
export { AllAssignRoleComponent };
//# sourceMappingURL=app.AllAssignRole.component.js.map