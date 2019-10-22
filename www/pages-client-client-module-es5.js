(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-client-client-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/client/client.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/client/client.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n        <ion-text color=\"light\" class=\"fw700\">View Client</ion-text>\n      </ion-text>\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n  <!-- <ion-toolbar color=\"dark\">\n    <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <div class=\"content-page\">\n    <h2>Name</h2>\n    <h3>{{clientData.name}}</h3>\n    <h2>Location</h2>\n    <h3>{{clientData.location}}</h3>\n    <h2>Projects</h2>\n    <div class=\"pro hasSubbox\">\n      <!-- <ion-icon (click)=\"changeValue()\" class=\"change\" name=\"create\"></ion-icon> -->\n      <div class=\"change\">\n        <ion-select placeholder=\"Country\" multiple aria-multiline=\"\" (ionChange)='setCountry()' value=\"2\">\n          <ion-select-option value=\"1\">Egypt</ion-select-option>\n          <ion-select-option value=\"2\">Kuwait</ion-select-option>\n          <ion-select-option value=\"3\">UAE</ion-select-option>\n          <ion-select-option value=\"4\">Qatar</ion-select-option>\n          <ion-select-option value=\"5\">Bahrain</ion-select-option>\n          <ion-select-option value=\"6\">Saudi Arabia</ion-select-option>\n        </ion-select>\n      </div>\n      <span (click)=\"goto(project.id, 'project')\" *ngFor=\"let project of clientData.projects\">\"{{project.name}}\"</span>\n    </div>\n    <h2>Contact</h2>\n    <div class=\"contact\">\n      <span><a href=\"mailto:{{clientData.contact_email}}\">{{clientData.contact_email}}</a></span>\n      <span>{{clientData.contact_phone}}</span>\n      <p class=\"phone\">\n        <a class=\"makeacall\" href=\"tel:{{clientData.contact_phone}}\">Call</a>\n        <a class=\"whatsapp\" href=\"https://api.whatsapp.com/send?phone={{clientData.contact_phone}}\">Open in Whatsapp</a>\n      </p>\n      <ion-button size=\"large\" expand=\"full\" color=\"dark\" (click)=\"delete(clientData.id)\" no-margin>DELETE CLIENT</ion-button>\n      <p></p>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/client/client.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/client/client.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  margin: 0 3px 0 0;\n}\n\n.content-page {\n  margin: 5px 10px 0 10px;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 14px;\n  margin: 0px;\n  color: #bb7307;\n}\n\nh3, p {\n  font-size: 16px;\n  margin-top: 0px;\n}\n\napp-star {\n  color: #d4692a;\n}\n\n.callAction {\n  position: relative;\n}\n\n.callAction .iconStar {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 18px;\n}\n\n.callAction .iconStar span {\n  font-size: 10px;\n  line-height: 10px;\n}\n\n.callAction .iconStar ion-icon {\n  padding-top: 10px;\n}\n\n.contact span {\n  display: block;\n  padding: 5px 0;\n}\n\n.pro span {\n  display: block;\n  padding: 10px 0 0;\n}\n\n.phone {\n  font-size: 12px;\n  display: inline-block;\n  color: antiquewhite;\n}\n\n.phone .makeacall {\n  float: left;\n  padding: 10px;\n  color: antiquewhite;\n  text-decoration: none;\n  border-radius: 5px;\n  background: #bb7307;\n}\n\n.phone .whatsapp {\n  float: left;\n  margin-left: 10px;\n  color: antiquewhite;\n  text-decoration: none;\n  border-radius: 5px;\n  padding: 10px;\n  background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9wYWdlcy9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jbGllbnQvY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNJSjs7QUREQTtFQUNJLGNBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ01SOztBRExRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDT1o7O0FETFE7RUFDSSxpQkFBQTtBQ09aOztBREhBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNRSjs7QURQSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNTUjs7QURQSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZXtcbiAgICBtYXJnaW46IDAgM3B4IDAgMDtcbn1cbi5jb250ZW50LXBhZ2V7XG4gICAgbWFyZ2luOiA1cHggMTBweCAwIDEwcHg7XG59XG5oMntcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2JiNzMwN1xufVxuaDMscHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDowcHg7IFxuICAgXG59XG5hcHAtc3RhcntcbiAgICBjb2xvcjogI2Q0NjkyYTtcbn1cbi5jYWxsQWN0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuaWNvblN0YXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5jb250YWN0IHNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogNXB4IDA7XG59XG4ucHJvIHNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAwIDA7XG59XG4ucGhvbmV7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIC5tYWtlYWNhbGx7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2JiNzMwNztcbiAgICB9XG4gICAgLndoYXRzYXBwe1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIH1cbn0iLCJpb24tYmFkZ2Uge1xuICBtYXJnaW46IDAgM3B4IDAgMDtcbn1cblxuLmNvbnRlbnQtcGFnZSB7XG4gIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjYmI3MzA3O1xufVxuXG5oMywgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5hcHAtc3RhciB7XG4gIGNvbG9yOiAjZDQ2OTJhO1xufVxuXG4uY2FsbEFjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYWxsQWN0aW9uIC5pY29uU3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNhbGxBY3Rpb24gLmljb25TdGFyIHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuLmNhbGxBY3Rpb24gLmljb25TdGFyIGlvbi1pY29uIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jb250YWN0IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5wcm8gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDAgMDtcbn1cblxuLnBob25lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG4ucGhvbmUgLm1ha2VhY2FsbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2JiNzMwNztcbn1cbi5waG9uZSAud2hhdHNhcHAge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/client/client.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/client/client.component.ts ***!
  \**************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ClientComponent = /** @class */ (function () {
    function ClientComponent(route, navCtrl, router, api, storage, DomSanitizer) {
        var _this = this;
        this.route = route;
        this.navCtrl = navCtrl;
        this.router = router;
        this.api = api;
        this.storage = storage;
        this.DomSanitizer = DomSanitizer;
        this.clientData = {
            name: "",
            location: "",
            projects: [{
                    name: "",
                    id: ""
                }],
            contact_email: "",
            contact_phone: ""
        };
        this.countries = [];
        this.skills = [];
        this.projects = [];
        var self = this;
        self.route.queryParams.subscribe(function (params) {
            if (self.router.getCurrentNavigation().extras.state) {
                self.api.getClient(self.router.getCurrentNavigation().extras.state.projectType).subscribe(function (data) {
                    _this.api.hideLoader();
                    var val = JSON.parse(data[0].location)[0];
                    if (val != null) {
                        data[0].location = val + ', ' + self.sendCountry(JSON.parse(data[0].location)[1]);
                    }
                    else {
                        data[0].location = "not given";
                    }
                    if (data[0].projects != null)
                        data[0].projects = self.sendProjects(data[0].projects);
                    else
                        data[0].projects = [{ name: "Null" }];
                    self.clientData = data[0];
                });
            }
            ;
        });
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('countries').then(function (data) {
            _this.countries = data;
        });
        this.storage.get('skills').then(function (data) {
            _this.skills = data;
        });
        this.storage.get('projects').then(function (data) {
            _this.projects = data;
        });
    };
    ClientComponent.prototype.changeValue = function () {
        console.log("ready");
    };
    ClientComponent.prototype.sendCountry = function (data) {
        var i = 0;
        while (data != this.countries[i].country_code) {
            i++;
        }
        return this.countries[i].country_name;
    };
    ClientComponent.prototype.goto = function (val, page) {
        this.api.goto(val, page);
    };
    ClientComponent.prototype.sendSkills = function (data) {
        var skill = JSON.parse(data);
        var found = '';
        this.skills.forEach(function (element) {
            for (var i = 0; i <= skill.length; i++) {
                if (element.id == skill[i]) {
                    found += element.name + ', ';
                }
            }
        });
        return found;
    };
    ClientComponent.prototype.sendProjects = function (data) {
        var project = JSON.parse(data);
        var found = [];
        this.projects.forEach(function (element) {
            for (var i = 0; i <= project.length; i++) {
                if (element.id == project[i]) {
                    found.push(element);
                }
            }
        });
        return found;
    };
    ClientComponent.prototype.delete = function (id) {
        var _this = this;
        this.api.deleteClient(id).subscribe(function (data) {
            console.log(data);
            _this.navCtrl.navigateRoot('/clients');
        });
    };
    ClientComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/pages/client/client.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/pages/client/client.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/client/client.module.ts ***!
  \***********************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client.component */ "./src/app/pages/client/client.component.ts");






var routes = [
    {
        path: '',
        component: _client_component__WEBPACK_IMPORTED_MODULE_5__["ClientComponent"],
    }
];
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_client_component__WEBPACK_IMPORTED_MODULE_5__["ClientComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-client-client-module-es5.js.map