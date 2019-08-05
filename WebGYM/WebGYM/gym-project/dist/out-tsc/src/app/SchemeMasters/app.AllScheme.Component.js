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
import { SchemeService } from './Services/app.Scheme.Service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
var AllSchemeComponent = /** @class */ (function () {
    function AllSchemeComponent(location, _Route, schemeService) {
        this.location = location;
        this._Route = _Route;
        this.schemeService = schemeService;
        this.displayedColumns = ['SchemeID', 'SchemeName', 'Status', 'Createddate', 'EditAction', 'DeleteAction'];
        this._SchemeService = schemeService;
    }
    AllSchemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SchemeService.GetAllScheme().subscribe(function (AllScheme) {
            _this.AllSchemeList = AllScheme;
            _this.dataSource = new MatTableDataSource(_this.AllSchemeList);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllSchemeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AllSchemeComponent.prototype.Delete = function (schemeId) {
        var _this = this;
        if (confirm("Are you sure to delete Scheme ?")) {
            this._SchemeService.DeleteScheme(schemeId).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted Scheme Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/Scheme/All']);
                }
            });
        }
    };
    var _a, _b, _c, _d;
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", typeof (_a = typeof MatSort !== "undefined" && MatSort) === "function" ? _a : Object)
    ], AllSchemeComponent.prototype, "sort", void 0);
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", typeof (_b = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _b : Object)
    ], AllSchemeComponent.prototype, "paginator", void 0);
    AllSchemeComponent = __decorate([
        Component({
            templateUrl: './app.AllSchemeComponent.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css', '../Content/vendor/font-awesome/css/font-awesome.min.css']
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof Location !== "undefined" && Location) === "function" ? _c : Object, typeof (_d = typeof Router !== "undefined" && Router) === "function" ? _d : Object, SchemeService])
    ], AllSchemeComponent);
    return AllSchemeComponent;
}());
export { AllSchemeComponent };
//# sourceMappingURL=app.AllScheme.Component.js.map