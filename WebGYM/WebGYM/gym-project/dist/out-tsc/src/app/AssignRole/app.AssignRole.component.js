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
import { AssignRemoveModel } from './Models/AssignRemoveModel';
import { UserService } from '../CreateUsers/Services/app.UserRegistration.Service';
import { RoleService } from '../RoleMaster/Services/app.role.Service';
import { AssignandRemoveRoleService } from './Services/app.AssignandRemoveRole.Service';
import { Router } from '@angular/router';
var AssignRoleComponent = /** @class */ (function () {
    function AssignRoleComponent(userservice, roleservice, assignandremoverolerervice, _Route) {
        this.userservice = userservice;
        this.roleservice = roleservice;
        this.assignandremoverolerervice = assignandremoverolerervice;
        this._Route = _Route;
        this.AssignRemoveModel = new AssignRemoveModel();
        this._userservice = userservice;
        this._roleservice = roleservice;
        this._assignandremoveservice = assignandremoverolerervice;
    }
    AssignRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userservice.GetAllUsersDropdown().subscribe(function (allUsers) {
            _this.UserList = allUsers;
        }, function (error) { return _this.errorMessage = error; });
        this._roleservice.GetAllRole().subscribe(function (allroles) {
            _this.RoleList = allroles;
        }, function (error) { return _this.errorMessage = error; });
    };
    AssignRoleComponent.prototype.onSubmit = function (buttonType) {
        var _this = this;
        if (buttonType === "onAssign") {
            console.log(this.AssignRemoveModel);
            this._assignandremoveservice.AssignRole(this.AssignRemoveModel).subscribe(function (response) {
                _this.output = response;
                if (_this.output.StatusCode == "409") {
                    alert('Role Already Exists');
                }
                else if (_this.output.StatusCode == "200") {
                    alert('Role Assigned Successfully');
                    _this._Route.navigate(['/Assign/AllRole']);
                }
                else {
                    alert('Something Went Wrong');
                }
            });
        }
        if (buttonType === "onRemove") {
            this._assignandremoveservice.RemoveRole(this.AssignRemoveModel).subscribe(function (response) {
                _this.output = response;
                if (_this.output.StatusCode == "409") {
                    alert('Role does not Exists');
                }
                else if (_this.output.StatusCode == "200") {
                    alert('Role Removed Successfully');
                    _this._Route.navigate(['/Assign/AllRole']);
                }
                else {
                    alert('Something Went Wrong');
                }
            });
        }
    };
    var _a;
    AssignRoleComponent = __decorate([
        Component({
            templateUrl: './app.AssignandRemoveRole.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [UserService,
            RoleService,
            AssignandRemoveRoleService, typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
    ], AssignRoleComponent);
    return AssignRoleComponent;
}());
export { AssignRoleComponent };
//# sourceMappingURL=app.AssignRole.component.js.map