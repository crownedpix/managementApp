(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-client-add-client-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-client/add-client.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-client/add-client.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n        <ion-text color=\"light\" class=\"fw700\">Add Client</ion-text>\n      </ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"card-background-page\">\n  <ion-card no-margin>\n    <ion-grid fixed no-padding>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-list margin-bottom>\n            <form [formGroup]=\"addclientForm\" (ngSubmit)=\"createClient()\">\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Full Name:</ion-label>\n                <ion-input inputmode=\"text\" formControlName=\"name\" placeholder=\"Ex..: Joe Doe\" value=\"\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Phone (With County code):</ion-label>\n                <ion-input inputmode=\"tel\" formControlName=\"contact_phone\" placeholder=\"Ex.: 999 999 9999\" value=\"\">\n                </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Email:</ion-label>\n                <ion-input inputmode=\"email\" formControlName=\"contact_email\" placeholder=\"Ex.: joe@doe.com\" value=\"\">\n                </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">State</ion-label>\n                <ion-input inputmode=\"text\" formControlName=\"state\" placeholder=\"Ex. Ohio\" value=\"\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Country</ion-label>\n                <ion-select formControlName=\"country\">\n                  <ion-select-option value={{c.country_code}} *ngFor=\"let c of countries\">{{c.country_name}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Referred By</ion-label>\n                <ion-select formControlName=\"refrenced_by\">\n                  <ion-select-option value=\"{{user.id}}\" *ngFor=\"let user of users\">{{user.first_name}}\n                    {{user.last_name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-button size=\"large\" expand=\"full\" color=\"dark\" type=\"submit\" [disabled]=\"!addclientForm.valid\" no-margin>Create Client</ion-button>\n            </form>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/add-client/add-client.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/add-client/add-client.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jbGllbnQvYWRkLWNsaWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/add-client/add-client.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/add-client/add-client.component.ts ***!
  \**********************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(formBuilder, apiService, navCtrl, toastCtrl, storage) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.users = [];
        this.skills = [];
        this.countries = [];
    }
    AddClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('users').then(function (data) {
            _this.users = data;
        });
        this.storage.get('skills').then(function (data) {
            _this.skills = data;
        });
        this.storage.get('countries').then(function (data) {
            _this.countries = data;
        });
        this.addclientForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'contact_email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'contact_phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'state': [null],
            'country': [null],
            'refrenced_by': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    };
    AddClientComponent.prototype.createClient = function () {
        var _this = this;
        var value = {
            name: this.addclientForm.value.name,
            contact_email: this.addclientForm.value.contact_email,
            contact_phone: this.addclientForm.value.contact_phone,
            location: JSON.stringify([this.addclientForm.value.state, this.addclientForm.value.country]),
            refrenced_by: Number(this.addclientForm.value.refrenced_by),
            rating: 0
        };
        this.apiService.setClient(value).subscribe(function (data) {
            console.log("success");
            _this.toast = _this.toastCtrl.create({
                message: 'Added Client Successfully',
                duration: 2000
            }).then(function (toastData) {
                console.log(toastData);
                toastData.present();
            });
            _this.apiService.hideLoader();
            _this.navCtrl.navigateRoot('/clients');
        });
    };
    AddClientComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    AddClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! raw-loader!./add-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.scss */ "./src/app/pages/add-client/add-client.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-client/add-client.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-client/add-client.module.ts ***!
  \*******************************************************/
/*! exports provided: AddClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientModule", function() { return AddClientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-client.component */ "./src/app/pages/add-client/add-client.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var routes = [
    {
        path: '',
        component: _add_client_component__WEBPACK_IMPORTED_MODULE_3__["AddClientComponent"]
    }
];
var AddClientModule = /** @class */ (function () {
    function AddClientModule() {
    }
    AddClientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_client_component__WEBPACK_IMPORTED_MODULE_3__["AddClientComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ]
        })
    ], AddClientModule);
    return AddClientModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-client-add-client-module-es5.js.map