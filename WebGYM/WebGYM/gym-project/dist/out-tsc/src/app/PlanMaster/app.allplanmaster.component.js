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
import { PlanService } from './Services/app.planmaster.service';
import { PlanMasterViewModel } from './Models/app.PlanMasterViewModel';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
var AllPlanMasterComponent = /** @class */ (function () {
    function AllPlanMasterComponent(_Route, planService) {
        this._Route = _Route;
        this.planService = planService;
        this.PlanList = new PlanMasterViewModel();
        this.displayedColumns = ['PlanID', 'PlanName', 'SchemeName', 'Text', 'TotalAmount', 'RecStatus', 'EditAction', 'DeleteAction'];
        this._planService = planService;
    }
    AllPlanMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._planService.GetAllPlans().subscribe(function (allplan) {
            _this.PlanList = allplan;
            _this.dataSource = new MatTableDataSource(allplan);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllPlanMasterComponent.prototype.Delete = function (PlanID) {
        var _this = this;
        if (confirm("Are you sure to delete Plan ?")) {
            this._planService.DeletePlan(PlanID).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted Plan Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/Plan/All']);
                }
            });
        }
    };
    AllPlanMasterComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    var _a, _b, _c;
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", typeof (_a = typeof MatSort !== "undefined" && MatSort) === "function" ? _a : Object)
    ], AllPlanMasterComponent.prototype, "sort", void 0);
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", typeof (_b = typeof MatPaginator !== "undefined" && MatPaginator) === "function" ? _b : Object)
    ], AllPlanMasterComponent.prototype, "paginator", void 0);
    AllPlanMasterComponent = __decorate([
        Component({
            templateUrl: './app.allplanmaster.component.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof Router !== "undefined" && Router) === "function" ? _c : Object, PlanService])
    ], AllPlanMasterComponent);
    return AllPlanMasterComponent;
}());
export { AllPlanMasterComponent };
//# sourceMappingURL=app.allplanmaster.component.js.map