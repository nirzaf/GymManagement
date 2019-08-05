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
var PlanService = /** @class */ (function () {
    function PlanService(http) {
        this.http = http;
        this.apiUrl = environment.apiEndpoint + "/api/PlanMaster/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }
    // Save Plan
    PlanService.prototype.SavePlan = function (planMasterModel) {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(this.apiUrl, planMasterModel, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    PlanService.prototype.GetAmount = function (planID, schemeId) {
        var apiUrl = environment.apiEndpoint + "/api/GetTotalAmount/";
        var AmountRequest = { "PlanId": planID, "SchemeId": schemeId };
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, AmountRequest, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    // Get All Plans
    PlanService.prototype.GetAllPlans = function () {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Get All Plans
    PlanService.prototype.GetAllActivePlans = function (schemeId) {
        var apiUrl = environment.apiEndpoint + "/api/AllActivePlanMaster" + '/' + schemeId;
        ;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Get All Plans by PlanId
    PlanService.prototype.GetPlanByPlanID = function (planId) {
        var editurl = this.apiUrl + planId;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editurl, { headers: headers }).pipe(tap(function (data) { return data; }), catchError(this.handleError));
    };
    // Update Plan
    PlanService.prototype.UpdatePlan = function (planMasterModel) {
        var updateurl = this.apiUrl + planMasterModel.PlanID;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(updateurl, planMasterModel, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    PlanService.prototype.DeletePlan = function (planId) {
        var deleteUrl = this.apiUrl + '/' + planId;
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(catchError(this.handleError));
    };
    PlanService.prototype.handleError = function (error) {
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
    PlanService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], PlanService);
    return PlanService;
}());
export { PlanService };
//# sourceMappingURL=app.planmaster.service.js.map