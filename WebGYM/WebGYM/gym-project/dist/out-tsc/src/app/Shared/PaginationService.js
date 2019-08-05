var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PaginationModel } from "./PaginationModel";
import { Injectable } from "@angular/core";
var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.paginationModel = new PaginationModel();
    }
    Object.defineProperty(PaginationService.prototype, "page", {
        get: function () {
            return this.paginationModel.pageIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationService.prototype, "selectItemsPerPage", {
        get: function () {
            return this.paginationModel.selectItemsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationService.prototype, "pageCount", {
        get: function () {
            return this.paginationModel.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    PaginationService.prototype.change = function (pageEvent) {
        this.paginationModel.pageIndex = pageEvent.pageIndex + 1;
        this.paginationModel.pageSize = pageEvent.pageSize;
        this.paginationModel.allItemsLength = pageEvent.length;
    };
    PaginationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());
export { PaginationService };
//# sourceMappingURL=PaginationService.js.map