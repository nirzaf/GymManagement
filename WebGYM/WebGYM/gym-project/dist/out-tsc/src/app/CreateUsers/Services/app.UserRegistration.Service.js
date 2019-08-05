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
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = environment.apiEndpoint + "/api/User/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }
    // Save User
    UserService.prototype.SaveUser = function (usermodel) {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(this.apiUrl, usermodel, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    // Update User
    UserService.prototype.UpdateUser = function (usermodel) {
        var putUrl = this.apiUrl + usermodel.UserId;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(putUrl, usermodel, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    // Get MemberBy Id
    UserService.prototype.GetUserId = function (Id) {
        var editUrl = this.apiUrl + Id;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Get All Users
    UserService.prototype.GetAllUsers = function () {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Get All Users
    UserService.prototype.GetAllUsersDropdown = function () {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // DeleteUser
    UserService.prototype.DeleteUser = function (Id) {
        var deleteUrl = this.apiUrl + Id;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    UserService.prototype.handleError = function (error) {
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
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=app.UserRegistration.Service.js.map