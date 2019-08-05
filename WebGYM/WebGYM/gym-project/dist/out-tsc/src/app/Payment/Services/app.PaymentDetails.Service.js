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
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaginationService } from '../../Shared/PaginationService';
// import { constantUrl } from '../../Shared/constantUrl';
import { environment } from '../../../environments/environment';
var PaymentService = /** @class */ (function () {
    function PaymentService(http, paginationService) {
        this.http = http;
        this.paginationService = paginationService;
        this.apiUrl = environment.apiEndpoint + "/api/Payment/";
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    PaymentService.prototype.getAll = function () {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        var Url = environment.apiEndpoint + "/api/Payment";
        var mergedUrl = "" + Url +
            ("?page=" + this.paginationService.page + "&pageCount=" + this.paginationService.pageCount);
        return this.http.get(mergedUrl, { headers: headers, observe: 'response' }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    PaymentService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    };
    ;
    PaymentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, PaginationService])
    ], PaymentService);
    return PaymentService;
}());
export { PaymentService };
//# sourceMappingURL=app.PaymentDetails.Service.js.map