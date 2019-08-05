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
import { RoleModel } from './Models/app.RoleModel';
import { RoleService } from './Services/app.role.Service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
var AllRoleComponent = /** @class */ (function () {
    function AllRoleComponent(_Route, roleService) {
        this._Route = _Route;
        this.RoleList = new RoleModel();
        this.displayedColumns = ['RoleId', 'RoleName', 'Status', 'EditAction', 'DeleteAction'];
        this._roleService = roleService;
    }
    AllRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._roleService.GetAllRole().subscribe(function (allrole) {
            _this.RoleList = allrole;
            _this.dataSource = new MatTableDataSource(allrole);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllRoleComponent.prototype.Delete = function (RoleId) {
        var _this = this;
        if (confirm("Are you sure to delete Role ?")) {
            this._roleService.DeleteRole(RoleId).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted Role Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/Role/All']);
                }
            });
        }
    };
    AllRoleComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    var _a, _b, _c;
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", typeof (_a = typeof MatSort !== "undefined" && MatSort) === "function" ? _a : Object)
    ], AllRoleComponent.prototype, "sort", void 0);
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", typeof (_b = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _b : Object)
    ], AllRoleComponent.prototype, "paginator", void 0);
    AllRoleComponent = __decorate([
        Component({
            templateUrl: './app.AllRole.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof Router !== "undefined" && Router) === "function" ? _c : Object, RoleService])
    ], AllRoleComponent);
    return AllRoleComponent;
}());
export { AllRoleComponent };
//# sourceMappingURL=app.AllRole.component.js.map