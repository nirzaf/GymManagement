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
import { DatePipe } from '@angular/common';
import { UserModel } from './Models/app.UserModel';
import { UserService } from './Services/app.UserRegistration.Service';
var EditUserRegistrationComponent = /** @class */ (function () {
    function EditUserRegistrationComponent(datePipe, _Route, _routeParams, userService) {
        this.datePipe = datePipe;
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.userService = userService;
        this.UserModel = new UserModel();
        this._userService = userService;
    }
    EditUserRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Id = this._routeParams.snapshot.params['UserId'];
        // GetRoleById
        this._userService.GetUserId(this.Id).subscribe(function (userModel) {
            _this.UserModel = userModel;
        }, function (error) { return _this.errorMessage = error; });
    };
    EditUserRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.UpdateUser(this.UserModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('User Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('User Details Updated Successfully');
                _this._Route.navigate(['/User/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    var _a, _b, _c;
    EditUserRegistrationComponent = __decorate([
        Component({
            templateUrl: './app.EditUserRegistration.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof DatePipe !== "undefined" && DatePipe) === "function" ? _a : Object, typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, typeof (_c = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _c : Object, UserService])
    ], EditUserRegistrationComponent);
    return EditUserRegistrationComponent;
}());
export { EditUserRegistrationComponent };
//# sourceMappingURL=app.EditUserRegistration.component.js.map