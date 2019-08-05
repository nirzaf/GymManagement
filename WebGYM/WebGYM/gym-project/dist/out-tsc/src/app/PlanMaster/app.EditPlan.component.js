var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PeriodService } from '../PeriodMaster/Services/app.Period.Service';
import { SchemeService } from '../SchemeMasters/Services/app.Scheme.Service';
import { PlanService } from '../PlanMaster/Services/app.planmaster.service';
import { PlanMasterModel } from './Models/app.PlanMasterModel';
import { Router, ActivatedRoute } from '@angular/router';
var EditPlanComponent = /** @class */ (function () {
    function EditPlanComponent(_Route, _routeParams, periodService, schemeService, planService) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.periodService = periodService;
        this.schemeService = schemeService;
        this.planService = planService;
        this.planModel = new PlanMasterModel();
        this._periodService = periodService;
        this._schemeService = schemeService;
        this._planService = planService;
    }
    EditPlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PlanID = this._routeParams.snapshot.params['PlanID'];
        // GetAllPeriod
        this._periodService.GetAllPeriod().subscribe(function (allPeriod) {
            _this.PeriodList = allPeriod;
        }, function (error) { return _this.errorMessage = error; });
        // GetAllScheme
        this._schemeService.GetAllActiveSchemeList().subscribe(function (allActiveScheme) {
            _this.AllActiveSchemeList = allActiveScheme;
        }, function (error) { return _this.errorMessage = error; });
        // GetPlanByPlanID
        this._planService.GetPlanByPlanID(this.PlanID).subscribe(function (plan) {
            _this.planModel = plan;
        }, function (error) { return _this.errorMessage = error; });
    };
    EditPlanComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EditPlanComponent.prototype.onSubmit = function () {
        var _this = this;
        this._planService.UpdatePlan(this.planModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Plan Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Plan Saved Successfully');
                _this._Route.navigate(['/Plan/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    var _a, _b;
    EditPlanComponent = __decorate([
        Component({
            templateUrl: './app.EditPlan.component.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, typeof (_b = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _b : Object, PeriodService, SchemeService, PlanService])
    ], EditPlanComponent);
    return EditPlanComponent;
}());
export { EditPlanComponent };
//# sourceMappingURL=app.EditPlan.component.js.map