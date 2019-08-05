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
import { Router, ActivatedRoute } from '@angular/router';
import { MemberRegistrationModel } from './Models/app.memberRegistrationModel';
import { MemberRegistrationService } from './Services/app.MemberRegistration.service';
var EditMemberRegistrationComponent = /** @class */ (function () {
    function EditMemberRegistrationComponent(_Route, _routeParams, memberregistration) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.memberregistration = memberregistration;
        this.MemberModel = new MemberRegistrationModel();
        this.bsValue = new Date();
        this._memberregistration = memberregistration;
    }
    EditMemberRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MemberID = this._routeParams.snapshot.params['MemberId'];
        this.genderList = [
            { "id": 1, "name": "Male" },
            { "id": 2, "name": "Female" }
        ];
        this._memberregistration.GetAllActiveSchemeList().subscribe(function (allActiveScheme) {
            _this.AllActiveSchemeList = allActiveScheme;
        }, function (error) { return _this.errorMessage = error; });
        if (this.MemberID != null) {
            this._memberregistration.GetMemberById(this.MemberID).subscribe(function (memberModel) {
                _this.MemberModel = memberModel;
                _this._memberregistration.GetAllActivePlans(_this.MemberModel.SchemeID).subscribe(function (allactivePlans) {
                    _this.AllActivePlanModel = allactivePlans;
                }, function (error) { return _this.errorMessage = error; });
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    EditMemberRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var demo = this.bsValue;
        this._memberregistration.UpdateMember(this.MemberModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Member Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Member Details Updated Successfully');
                _this._Route.navigate(['/Member/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    EditMemberRegistrationComponent.prototype.CalcuateAge = function (birthdate) {
        if (birthdate) {
            var timeDiff = Math.abs(Date.now() - birthdate);
            this.MemberModel.Age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        }
    };
    EditMemberRegistrationComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EditMemberRegistrationComponent.prototype.GetAmount = function (PlanID, SchemeID) {
        var _this = this;
        if (PlanID != null && SchemeID != null) {
            this._memberregistration.GetAmount(PlanID, SchemeID).subscribe(function (amount) {
                _this.MemberModel.Amount = amount;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    EditMemberRegistrationComponent.prototype.OnChange = function (schemeId) {
        var _this = this;
        if (schemeId != null) {
            this._memberregistration.GetAllActivePlans(schemeId).subscribe(function (allactivePlans) {
                _this.AllActivePlanModel = allactivePlans;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    var _a, _b;
    EditMemberRegistrationComponent = __decorate([
        Component({
            templateUrl: './app.EditMemberRegistration.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, typeof (_b = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _b : Object, MemberRegistrationService])
    ], EditMemberRegistrationComponent);
    return EditMemberRegistrationComponent;
}());
export { EditMemberRegistrationComponent };
//# sourceMappingURL=app.EditMemberRegistration.component.js.map