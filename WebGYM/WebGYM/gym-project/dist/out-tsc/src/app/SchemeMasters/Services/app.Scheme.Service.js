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
var SchemeService = /** @class */ (function () {
    function SchemeService(http) {
        this.http = http;
        this.apiUrl = environment.apiEndpoint + "/api/Scheme/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    // Save Scheme
    SchemeService.prototype.SaveScheme = function (schemeMasterModel) {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(this.apiUrl, schemeMasterModel, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    // Get All Scheme
    SchemeService.prototype.GetAllScheme = function () {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Get All Scheme List
    SchemeService.prototype.GetAllActiveSchemeList = function () {
        var apiUrl = environment.apiEndpoint + "/api/SchemeDropdown/";
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Get All Scheme By ID
    SchemeService.prototype.GetSchemeById = function (schemeId) {
        var editUrl = this.apiUrl + '/' + schemeId;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Update Scheme
    SchemeService.prototype.UpdateScheme = function (schemeMasterModel) {
        var putUrl = this.apiUrl + '/' + schemeMasterModel.SchemeID;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(putUrl, schemeMasterModel, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    SchemeService.prototype.DeleteScheme = function (schemeId) {
        var deleteUrl = this.apiUrl + '/' + schemeId;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    SchemeService.prototype.handleError = function (error) {
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
    SchemeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], SchemeService);
    return SchemeService;
}());
export { SchemeService };
//# sourceMappingURL=app.Scheme.Service.js.map