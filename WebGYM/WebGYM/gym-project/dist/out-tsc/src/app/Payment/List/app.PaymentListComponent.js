var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationService } from '../../Shared/PaginationService';
var PaymentListComponent = /** @class */ (function () {
    function PaymentListComponent(paginationService) {
        this.paginationService = paginationService;
        this.paydataSource = new MatTableDataSource();
        this.displayedColumns = ['PaymentID', 'MemberNo', 'MemberName', 'PlanName', 'SchemeName', 'PaymentAmount', 'NextRenwalDate', 'PaymentFromdt', 'PaymentTodt', 'PrintAction'];
        this.applyFilterEvent = new EventEmitter();
        this.payonPageSwitch = new EventEmitter();
    }
    Object.defineProperty(PaymentListComponent.prototype, "dataSourceForTable", {
        set: function (value) {
            this.paydataSource = new MatTableDataSource(value);
        },
        enumerable: true,
        configurable: true
    });
    PaymentListComponent.prototype.applyFilter = function (filterValue) {
        this.paydataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Input('paydataSource'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PaymentListComponent.prototype, "dataSourceForTable", null);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PaymentListComponent.prototype, "paytotalCount", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PaymentListComponent.prototype, "applyFilterEvent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PaymentListComponent.prototype, "payonPageSwitch", void 0);
    PaymentListComponent = __decorate([
        Component({
            selector: 'paymentlist',
            templateUrl: './app.Paymentlist.component.html',
            styleUrls: ['../../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../../Content/vendor/metisMenu/metisMenu.min.css',
                '../../Content/dist/css/sb-admin-2.css',
                '../../Content/vendor/font-awesome/css/font-awesome.min.css']
        }),
        __metadata("design:paramtypes", [PaginationService])
    ], PaymentListComponent);
    return PaymentListComponent;
}());
export { PaymentListComponent };
//# sourceMappingURL=app.PaymentListComponent.js.map