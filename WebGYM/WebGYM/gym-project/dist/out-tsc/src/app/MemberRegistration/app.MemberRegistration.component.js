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
import { MemberRegistrationModel } from './Models/app.memberRegistrationModel';
import { MemberRegistrationService } from './Services/app.MemberRegistration.service';
import { DatePipe } from '@angular/common';
var MemberRegistrationComponent = /** @class */ (function () {
    function MemberRegistrationComponent(datePipe, _Route, memberregistration) {
        this.datePipe = datePipe;
        this._Route = _Route;
        this.memberregistration = memberregistration;
        this.MemberModel = new MemberRegistrationModel();
        this.bsValue = new Date();
        this._memberregistration = memberregistration;
    }
    MemberRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.joinminDate = new Date();
        this.joinmaxDate = new Date();
        this.joinminDate.setDate(this.joinminDate.getDate() - 5);
        this.joinmaxDate.setDate(this.joinmaxDate.getDate() + 10);
        this.dobminDate = new Date();
        this.dobminDate.setDate(this.dobminDate.getDate() - 6570);
        this._memberregistration.GetAllActiveSchemeList().subscribe(function (allActiveScheme) {
            _this.AllActiveSchemeList = allActiveScheme;
        }, function (error) { return _this.errorMessage = error; });
        this.genderList = [
            { "id": 1, "name": "Male" },
            { "id": 2, "name": "Female" }
        ];
    };
    MemberRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.MemberModel);
        var demo = this.bsValue;
        this._memberregistration.SaveMember(this.MemberModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Member Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Member Added Successfully');
                _this._Route.navigate(['/Member/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    MemberRegistrationComponent.prototype.OnChange = function (schemeId) {
        var _this = this;
        if (schemeId != null) {
            this._memberregistration.GetAllActivePlans(schemeId).subscribe(function (allactivePlans) {
                _this.AllActivePlanModel = allactivePlans;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    MemberRegistrationComponent.prototype.CalcuateAge = function (birthdate) {
        if (birthdate) {
            var timeDiff = Math.abs(Date.now() - birthdate);
            this.MemberModel.Age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        }
    };
    MemberRegistrationComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    MemberRegistrationComponent.prototype.GetAmount = function (PlanID, SchemeID) {
        var _this = this;
        if (PlanID != null && SchemeID != null) {
            this._memberregistration.GetAmount(PlanID, SchemeID).subscribe(function (amount) {
                _this.MemberModel.Amount = amount;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    var _a, _b;
    MemberRegistrationComponent = __decorate([
        Component({
            templateUrl: './app.MemberRegistration.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof DatePipe !== "undefined" && DatePipe) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, MemberRegistrationService])
    ], MemberRegistrationComponent);
    return MemberRegistrationComponent;
}());
export { MemberRegistrationComponent };
//# sourceMappingURL=app.MemberRegistration.component.js.map