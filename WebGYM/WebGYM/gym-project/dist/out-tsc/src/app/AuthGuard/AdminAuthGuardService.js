var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var AdminAuthGuardService = /** @class */ (function () {
    function AdminAuthGuardService(router) {
        this.router = router;
    }
    AdminAuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('AdminUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/Login']);
        return false;
    };
    var _a;
    AdminAuthGuardService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());
export { AdminAuthGuardService };
//# sourceMappingURL=AdminAuthGuardService.js.map