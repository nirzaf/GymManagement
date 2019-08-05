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
import { PaginationService } from '../../Shared/PaginationService';
import { MemberRegistrationService } from '../Services/app.MemberRegistration.service';
import { Router } from '@angular/router';
var MemberViewComponent = /** @class */ (function () {
    function MemberViewComponent(_Route, memberregistration, paginationService) {
        this._Route = _Route;
        this.memberregistration = memberregistration;
        this.paginationService = paginationService;
    }
    MemberViewComponent.prototype.ngOnInit = function () {
        this.getAllMembers();
    };
    MemberViewComponent.prototype.switchPage = function (event) {
        this.paginationService.change(event);
        this.getAllMembers();
    };
    MemberViewComponent.prototype.getAllMembers = function () {
        var _this = this;
        this.memberregistration.getAll()
            .subscribe(function (result) {
            console.log(result.headers);
            _this.totalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
            // this.totalCount = 4;
            _this.dataSource = result.body.value;
        });
    };
    var _a;
    MemberViewComponent = __decorate([
        Component({
            selector: 'app-overview',
            templateUrl: 'app.MemberViewComponent.html'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, MemberRegistrationService,
            PaginationService])
    ], MemberViewComponent);
    return MemberViewComponent;
}());
export { MemberViewComponent };
//# sourceMappingURL=app.MemberViewComponent.js.map