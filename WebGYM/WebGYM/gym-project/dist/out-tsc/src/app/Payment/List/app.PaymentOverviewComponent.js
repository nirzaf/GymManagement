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
import { PaymentService } from '../Services/app.PaymentDetails.Service';
var PaymentOverviewComponent = /** @class */ (function () {
    function PaymentOverviewComponent(paymentservice, paginationService) {
        this.paymentservice = paymentservice;
        this.paginationService = paginationService;
    }
    PaymentOverviewComponent.prototype.ngOnInit = function () {
        this.getAllPayment();
    };
    PaymentOverviewComponent.prototype.payonPageSwitch = function (event) {
        this.paginationService.change(event);
        this.getAllPayment();
    };
    PaymentOverviewComponent.prototype.getAllPayment = function () {
        var _this = this;
        this.paymentservice.getAll()
            .subscribe(function (result) {
            console.log(result.headers);
            _this.paytotalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
            _this.paymentdataSource = result.body.value;
        });
    };
    PaymentOverviewComponent.prototype.applyFilter = function (filterValue) {
        console.log(filterValue);
        console.log("###");
        filterValue = filterValue.toLowerCase();
        this.paymentdataSource.filter(function (it) {
            var d = it.toLowerCase().includes(filterValue);
            console.log(d);
        });
    };
    PaymentOverviewComponent = __decorate([
        Component({
            templateUrl: 'app.PaymentViewComponent.html'
        }),
        __metadata("design:paramtypes", [PaymentService,
            PaginationService])
    ], PaymentOverviewComponent);
    return PaymentOverviewComponent;
}());
export { PaymentOverviewComponent };
//# sourceMappingURL=app.PaymentOverviewComponent.js.map