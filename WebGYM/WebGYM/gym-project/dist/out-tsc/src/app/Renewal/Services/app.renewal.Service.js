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
import { environment } from '../../../environments/environment';
var RenewalService = /** @class */ (function () {
    function RenewalService(http) {
        this.http = http;
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    RenewalService.prototype.GetMemberNo = function (requestModel) {
        var apiUrl = environment.apiEndpoint + "/api/GetMemberNo/";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, requestModel, { headers: headers })
            .pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    RenewalService.prototype.GetRenewalDetailsbyMemberNo = function (requestMemberNoModel) {
        var apiUrl = environment.apiEndpoint + "/api/RenewalDetails/";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, requestMemberNoModel, { headers: headers })
            .pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Renew
    RenewalService.prototype.SaveRenew = function (renewalModel) {
        var apiUrl = environment.apiEndpoint + "/api/Renewal/";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, renewalModel, { headers: headers, observe: 'response' })
            .pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Get All Scheme List
    RenewalService.prototype.GetAllActiveSchemeList = function () {
        var apiUrl = environment.apiEndpoint + "/api/SchemeDropdown/";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Get All Plans
    RenewalService.prototype.GetAllActivePlans = function (schemeId) {
        var apiUrl = environment.apiEndpoint + "/api/AllActivePlanMaster" + '/' + schemeId;
        ;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    RenewalService.prototype.handleError = function (error) {
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
    RenewalService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RenewalService);
    return RenewalService;
}());
export { RenewalService };
//# sourceMappingURL=app.renewal.Service.js.map