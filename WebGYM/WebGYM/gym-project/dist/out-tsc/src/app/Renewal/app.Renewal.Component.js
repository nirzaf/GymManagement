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
import { Router } from '@angular/router';
import { RenewalService } from './Services/app.renewal.Service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { RequestMemberModel } from './Models/app.RequestMemberModel';
import { RenewalModel } from './Models/app.RenewalModel';
import { RequestMemberNoModel } from './Models/app.RequestMemberNoModel';
var RenewalComponent = /** @class */ (function () {
    function RenewalComponent(_Route, snackBar, renewalService) {
        this._Route = _Route;
        this.snackBar = snackBar;
        this.renewalService = renewalService;
        this.RequestMemberModel = new RequestMemberModel();
        this.RequestMemberNoModel = new RequestMemberNoModel();
        this.RenewalModel = new RenewalModel();
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.verticalPosition = 'top';
        this.horizontalPosition = 'center';
        this._renewalService = renewalService;
    }
    RenewalComponent.prototype.ngOnInit = function () {
        this.displayflag = false;
    };
    RenewalComponent.prototype.onInputChanged = function (searchStr) {
        var _this = this;
        this.RequestMemberModel.MemberName = searchStr;
        this.ResponseMemberModel = [];
        this._renewalService.GetMemberNo(this.RequestMemberModel).subscribe(function (result) {
            _this.ResponseMemberModel = result;
            console.log(result);
        });
    };
    RenewalComponent.prototype.onSubmit = function (buttonType) {
        var _this = this;
        if (buttonType === "onsearch") {
            if (this.RenewalModel.SearchMemberNo == undefined) {
                var config = new MatSnackBarConfig();
                config.duration = this.setAutoHide ? this.autoHide : 0;
                config.verticalPosition = this.verticalPosition;
                this.snackBar.open("Enter MemberName", this.action ? this.actionButtonLabel : undefined, config);
            }
            else {
                this.displayflag = true;
                console.log(this.RenewalModel);
                this._renewalService.GetAllActiveSchemeList().subscribe(function (allActiveScheme) {
                    _this.AllActiveSchemeList = allActiveScheme;
                }, function (error) { return _this.errorMessage = error; });
                this.RequestMemberNoModel.MemberNo = this.RenewalModel.SearchMemberNo;
                this._renewalService.GetRenewalDetailsbyMemberNo(this.RequestMemberNoModel).subscribe(function (response) {
                    _this._renewalService.GetAllActivePlans(response.SchemeID).subscribe(function (allplanModel) {
                        console.log(allplanModel);
                        _this.AllActivePlanModel = allplanModel;
                    }, function (error) { return _this.errorMessage = error; });
                    _this.RenewalModel = response;
                    _this.RenewalModel.NewDate = null;
                });
            }
        }
        if (buttonType === "onrenew") {
            if (this.RenewalModel.NewDate == null) {
                var config = new MatSnackBarConfig();
                config.duration = this.setAutoHide ? this.autoHide : 0;
                this.snackBar.open("Choose NewDate", this.action ? this.actionButtonLabel : undefined, config);
            }
            else {
                this._renewalService.SaveRenew(this.RenewalModel).subscribe(function (response) {
                    if (response.body.StatusCode == "400") {
                        var config = new MatSnackBarConfig();
                        config.duration = _this.setAutoHide ? _this.autoHide : 0;
                        _this.snackBar.open(response.body.ReasonPhrase, _this.action ? _this.actionButtonLabel : undefined, config);
                    }
                    else if (response.body.StatusCode == "200") {
                        var config = new MatSnackBarConfig();
                        config.duration = _this.setAutoHide ? _this.autoHide : 0;
                        _this.snackBar.open(response.body.ReasonPhrase, _this.action ? _this.actionButtonLabel : undefined, config);
                    }
                    else {
                        var config = new MatSnackBarConfig();
                        config.duration = _this.setAutoHide ? _this.autoHide : 0;
                        _this.snackBar.open(response.body.ReasonPhrase, _this.action ? _this.actionButtonLabel : undefined, config);
                    }
                });
            }
        }
    };
    RenewalComponent.prototype.OnChange = function (schemeId) {
        var _this = this;
        if (schemeId != null) {
            this._renewalService.GetAllActivePlans(schemeId).subscribe(function (allactivePlans) {
                _this.AllActivePlanModel = allactivePlans;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    RenewalComponent.prototype.GetAmount = function (PlanID, SchemeID) {
        var _this = this;
        if (PlanID != null && SchemeID != null) {
            this._planService.GetAmount(PlanID, SchemeID).subscribe(function (amount) {
                _this.RenewalModel.Amount = amount;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    var _a, _b;
    RenewalComponent = __decorate([
        Component({
            templateUrl: './app.renewalcomponent.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, typeof (_b = typeof MatSnackBar !== "undefined" && MatSnackBar) === "function" ? _b : Object, RenewalService])
    ], RenewalComponent);
    return RenewalComponent;
}());
export { RenewalComponent };
//# sourceMappingURL=app.Renewal.Component.js.map