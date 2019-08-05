var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from "src/app/Shared/environment";
import { environment } from '../../../environments/environment';
var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        this.apiUrl = environment.apiEndpoint + "/api/User/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }
    // Get All Member DetailsReport
    ReportService.prototype.GetAllMemberDetailsReport = function () {
        var apiUrl = environment.apiEndpoint + "/api/MemberDetailsReport/";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    ReportService.prototype.GetYearWiseReport = function (year) {
        var apiUrl = environment.apiEndpoint + "/api/YearwiseReport/";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, year, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    ReportService.prototype.GetMonthWiseReport = function (year) {
        var apiUrl = environment.apiEndpoint + "/api/MonthwiseReport/";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, year, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    ReportService.prototype.GetRenewalReport = function (year) {
        var apiUrl = environment.apiEndpoint + "/api/RenewalReport/";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, year, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    ReportService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    };
    ReportService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ReportService);
    return ReportService;
}());
export { ReportService };
//# sourceMappingURL=app.ReportServices.js.map