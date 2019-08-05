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
// import { environment } from 'src/app/Shared/environment';
import { environment } from '../../../environments/environment';
var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.apiUrl = environment.apiEndpoint + "/api/CreateRole/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }
    RoleService.prototype.AddRole = function (rolemodel) {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(this.apiUrl, rolemodel, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    // Get All Role
    RoleService.prototype.GetAllRole = function () {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Get All Role By ID
    RoleService.prototype.GetRoleById = function (RoleId) {
        var editUrl = this.apiUrl + '/' + RoleId;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Update Role
    RoleService.prototype.UpdateRole = function (rolemodel) {
        var putUrl = this.apiUrl + '/' + rolemodel.RoleId;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(putUrl, rolemodel, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    RoleService.prototype.DeleteRole = function (RoleId) {
        var deleteUrl = this.apiUrl + '/' + RoleId;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    RoleService.prototype.handleError = function (error) {
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
    RoleService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RoleService);
    return RoleService;
}());
export { RoleService };
//# sourceMappingURL=app.role.Service.js.map