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
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
var LoginService = /** @class */ (function () {
    function LoginService(_http, _Route) {
        this._http = _http;
        this._Route = _Route;
        this.apiUrl = environment.apiEndpoint + "/api/Authenticate/";
    }
    LoginService.prototype.validateLoginUser = function (loginmodel) {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(this.apiUrl, loginmodel, { headers: headers })
            .pipe(tap(function (data) {
            console.log(data);
            if (data.Token != null) {
                if (data.Usertype == "2") {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: loginmodel.Username, token: data.Token }));
                }
                else if (data.Usertype == "1") {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('AdminUser', JSON.stringify({ username: loginmodel.Username, token: data.Token }));
                }
                // return true to indicate successful login
                return data;
            }
            else {
                // return false to indicate failed login
                return null;
            }
        }), catchError(this.handleError));
    };
    LoginService.prototype.LogoutUser = function () {
        localStorage.removeItem('currentUser');
    };
    LoginService.prototype.handleError = function (error) {
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
    var _a;
    LoginService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=app.LoginService.js.map