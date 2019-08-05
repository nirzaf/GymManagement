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
import { SchemeMasterModel } from './app.SchemeModel';
import { SchemeService } from './Services/app.Scheme.Service';
import { Router } from '@angular/router';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
var SchemeComponent = /** @class */ (function () {
    function SchemeComponent(_Route, snackBar, schemeService) {
        this._Route = _Route;
        this.snackBar = snackBar;
        this.schemeService = schemeService;
        this.title = "Scheme Master";
        this.SchemeForms = new SchemeMasterModel();
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.verticalPosition = 'top';
        this.horizontalPosition = 'center';
        this._SchemeService = schemeService;
    }
    SchemeComponent.prototype.onSubmit = function () {
        var _this = this;
        this._SchemeService.SaveScheme(this.SchemeForms).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                var config = new MatSnackBarConfig();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Scheme Name Already Exists", _this.action ? _this.actionButtonLabel : undefined, config);
            }
            else if (_this.output.StatusCode == "200") {
                var config = new MatSnackBarConfig();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Saved Scheme Successfully", _this.action ? _this.actionButtonLabel : undefined, config);
                _this._Route.navigate(['/Scheme/All']);
            }
            else {
                var config = new MatSnackBarConfig();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Something Went Wrong", _this.action ? _this.actionButtonLabel : undefined, config);
            }
        });
    };
    var _a, _b;
    SchemeComponent = __decorate([
        Component({
            templateUrl: './app.SchemeMaster.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, typeof (_b = typeof MatSnackBar !== "undefined" && MatSnackBar) === "function" ? _b : Object, SchemeService])
    ], SchemeComponent);
    return SchemeComponent;
}());
export { SchemeComponent };
//# sourceMappingURL=app.Scheme.Component.js.map