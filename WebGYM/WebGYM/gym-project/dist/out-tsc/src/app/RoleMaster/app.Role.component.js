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
import { RoleModel } from './Models/app.RoleModel';
import { RoleService } from './Services/app.role.Service';
import { Router } from '@angular/router';
var RoleComponent = /** @class */ (function () {
    function RoleComponent(_Route, roleService) {
        this._Route = _Route;
        this.RoleModel = new RoleModel();
        this._roleService = roleService;
    }
    RoleComponent.prototype.onSubmit = function () {
        var _this = this;
        this._roleService.AddRole(this.RoleModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Role Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Role Saved Successfully');
                _this._Route.navigate(['/Role/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    var _a;
    RoleComponent = __decorate([
        Component({
            templateUrl: './app.Role.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, RoleService])
    ], RoleComponent);
    return RoleComponent;
}());
export { RoleComponent };
//# sourceMappingURL=app.Role.component.js.map