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
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router, ActivatedRoute } from '@angular/router';
import { GenerateRecepit } from './Services/app.GenerateRecepit.Service';
import { GenerateRecepitRequestModel } from './Models/app.GenerateRecepitRequestModel';
import { GenerateRecepitViewModel } from './Models/app.GenerateRecepitViewModel';
var GenerateRecepitComponent = /** @class */ (function () {
    function GenerateRecepitComponent(_Route, _routeParams, generateRecepit) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.generateRecepit = generateRecepit;
        this.GenerateRecepitRequestModel = new GenerateRecepitRequestModel();
        this.GenerateRecepitViewModel = new GenerateRecepitViewModel();
        this._generateRecepit = generateRecepit;
    }
    GenerateRecepitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PaymentID = this._routeParams.snapshot.params['PaymentID'];
        this.today = new Date();
        this.GenerateRecepitRequestModel.PaymentID = this.PaymentID;
        this._generateRecepit.GetRecepitDetails(this.GenerateRecepitRequestModel).subscribe(function (recepitdetails) {
            _this.GenerateRecepitViewModel = recepitdetails;
        }, function (error) { return _this.errorMessage = error; });
    };
    GenerateRecepitComponent.prototype.captureScreen = function () {
        var data = document.getElementById('print');
        html2canvas(data).then(function (canvas) {
            // Few necessary setting options
            var imgWidth = 210;
            var pageHeight = 297;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 20, 20, imgWidth, imgHeight);
            pdf.save('PaymentRecepit.pdf'); // Generated PDF 
        });
    };
    var _a, _b;
    GenerateRecepitComponent = __decorate([
        Component({
            templateUrl: './Recepit.html',
            styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css',
                '../Content/vendor/metisMenu/metisMenu.min.css',
                '../Content/dist/css/sb-admin-2.css',
                '../Content/vendor/font-awesome/css/font-awesome.min.css'
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, typeof (_b = typeof ActivatedRoute !== "undefined" && ActivatedRoute) === "function" ? _b : Object, GenerateRecepit])
    ], GenerateRecepitComponent);
    return GenerateRecepitComponent;
}());
export { GenerateRecepitComponent };
//# sourceMappingURL=app.generateRecepit.Component.js.map