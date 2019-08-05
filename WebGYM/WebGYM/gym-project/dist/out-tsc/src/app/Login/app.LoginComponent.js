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
import { LoginModel } from './Models/app.LoginModel';
import { LoginService } from './Services/app.LoginService';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Route, snackBar, loginservice) {
        this._Route = _Route;
        this.snackBar = snackBar;
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.verticalPosition = 'top';
        this.horizontalPosition = 'center';
        this.LoginModel = new LoginModel();
        this._loginservice = loginservice;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._loginservice.validateLoginUser(this.LoginModel).subscribe(function (response) {
            if (response.Token == null && response.Usertype == "0") {
                var config = new MatSnackBarConfig();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Invalid Username and Password", _this.action ? _this.actionButtonLabel : undefined, config);
                _this._Route.navigate(['Login']);
            }
            if (response.Usertype == "1") {
                var config = new MatSnackBarConfig();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Logged in Successfully", _this.action ? _this.actionButtonLabel : undefined, config);
                _this._Route.navigate(['/Admin/Dashboard']);
            }
            if (response.Usertype == "2") {
                var config = new MatSnackBarConfig();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Logged in Successfully", _this.action ? _this.actionButtonLabel : undefined, config);
                _this._Route.navigate(['/User/Dashboard']);
            }
        });
    };
    var _a, _b;
    LoginComponent = __decorate([
        Component({
            templateUrl: './app.login.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, typeof (_b = typeof MatSnackBar !== "undefined" && MatSnackBar) === "function" ? _b : Object, LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=app.LoginComponent.js.map