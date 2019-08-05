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
import { SchemeService } from './Services/app.Scheme.Service';
import { SchemeMasterModel } from './app.SchemeModel';
import { Router, ActivatedRoute } from '@angular/router';
var EditSchemeComponent = /** @class */ (function () {
    function EditSchemeComponent(_Route, _routeParams, schemeService) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.schemeService = schemeService;
        this.title = "Edit Scheme Master";
        this.SchemeForms = new SchemeMasterModel();
        this._SchemeService = schemeService;
    }
    EditSchemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SchemeID = this._routeParams.snapshot.params['schemeId'];
        if (this.SchemeID != null) {
            var data = this._SchemeService.GetSchemeById(this.SchemeID).subscribe(function (Scheme) {
                _this.SchemeForms.SchemeID = Scheme.SchemeID;
                _this.SchemeForms.SchemeName = Scheme.SchemeName;
                _this.SchemeForms.Status = Scheme.Status;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    EditSchemeComponent.prototype.onSubmit = function () {
        var _this = this;
        this._SchemeService.UpdateScheme(this.SchemeForms)
            .subscribe(function (response) {
            if (response.StatusCode == "200") {
                alert('Updated Scheme Successfully');
                _this._Route.navigate(['/Scheme/All']);
            }
        });
    };
    var _a, _b;
    EditSchemeComponent = __decorate([
        Component({
            templateUrl: './app.EditSchemeComponent.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, typeof (_b = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _b : Object, SchemeService])
    ], EditSchemeComponent);
    return EditSchemeComponent;
}());
export { EditSchemeComponent };
//# sourceMappingURL=app.EditScheme.Component.js.map