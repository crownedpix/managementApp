(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-freelancer-add-freelancer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-freelancer/add-freelancer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-freelancer/add-freelancer.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n        <ion-text color=\"light\" class=\"fw700\">Add Freelancer</ion-text>\n      </ion-text>\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n  <!-- <ion-toolbar color=\"dark\">\n    <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <ion-card no-margin>\n    <ion-grid fixed no-padding>\n      <ion-row>\n        <ion-col size=\"12\">\n\n          <ion-list margin-bottom>\n            <form [formGroup]=\"addfreelancerForm\" (ngSubmit)=\"createFreelancer()\">\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Full Name:</ion-label>\n                <ion-input inputmode=\"text\" placeholder=\"Ex: Joe Doe\" value=\"\" formControlName=\"name\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Designation:</ion-label>\n                <ion-input inputmode=\"text\" placeholder=\"Ex: Developer\" value=\"\" formControlName=\"designation\">\n                </ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Experience:</ion-label>\n                <ion-input inputmode=\"text\" placeholder=\"Ex:8+ years\" value=\"\" formControlName=\"experience\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Email:</ion-label>\n                <ion-input inputmode=\"email\" formControlName=\"contact_email\" placeholder=\"Ex.: joe@doe.com\" value=\"\">\n                </ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Phone (With County code):</ion-label>\n                <ion-input inputmode=\"tel\" formControlName=\"contact_phone\" placeholder=\"999 999 9999\" value=\"\">\n                </ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color=\"dark\">State</ion-label>\n                <ion-input inputmode=\"text\" formControlName=\"state\" placeholder=\"Ex. Ohio\" value=\"\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Country</ion-label>\n                <ion-select formControlName=\"country\">\n                  <ion-select-option value={{c.country_code}} *ngFor=\"let c of countries\">{{c.country_name}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item>\n                <ion-label color=\"dark\">Skill</ion-label>\n                <ion-select multiple=\"true\" formControlName=\"skill\">\n                  <ion-select-option value={{skill.id}} *ngFor=\"let skill of skills\">{{skill.name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Referred By</ion-label>\n                <ion-select formControlName=\"refrenced_by\">\n                  <ion-select-option value=\"{{user.id}}\" *ngFor=\"let user of users\">{{user.first_name}}\n                    {{user.last_name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Current Status</ion-label>\n                <ion-select formControlName=\"status\">\n                  <ion-select-option value=\"{{sta.value}}\" *ngFor=\"let sta of statuses\">{{sta.name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Bank Name</ion-label>\n                <ion-input inputmode=\"text\" formControlName=\"bank_name\" placeholder=\"Ex. Ohio\" value=\"\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Bank Account Number</ion-label>\n                <ion-input inputmode=\"text\" formControlName=\"bank_account_no\" placeholder=\"Ex. Ohio\" value=\"\">\n                </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Ifsc Number</ion-label>\n                <ion-input inputmode=\"test\" formControlName=\"bank_ifsc\" placeholder=\"Ex. Ohio\" value=\"\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Account Phone Number</ion-label>\n                <ion-input inputmode=\"tel\" formControlName=\"bank_linked_phone\" placeholder=\"Ex. Ohio\" value=\"\">\n                </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">BHIM Number</ion-label>\n                <ion-input inputmode=\"number\" formControlName=\"BHIM_number\" placeholder=\"Ex. Ohio\" value=\"\">\n                </ion-input>\n              </ion-item>\n              <ion-button size=\"large\" expand=\"full\" color=\"dark\" type=\"submit\" [disabled]=\"!addfreelancerForm.valid\"\n                no-margin>Create Freelancer\n              </ion-button>\n            </form>\n\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-card>\n</ion-content>\n\n<!-- <div>\n  <img class=\"img-logo\" src=\"../vnd/leaflet/images/Mel_V2.png\" alt=\"logo\" />\n  <div class=\"MarkerPopUp\">\n    <span class=\"nameDiv\"> ' + name + '</span>\n    <span class=\"totDiv\"> ' + total + '</span>\n    <div class=\"storeNameDiv\">' + storeName + '</div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/pages/add-freelancer/add-freelancer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/add-freelancer/add-freelancer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1mcmVlbGFuY2VyL2FkZC1mcmVlbGFuY2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/add-freelancer/add-freelancer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/add-freelancer/add-freelancer.component.ts ***!
  \******************************************************************/
/*! exports provided: AddFreelancerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFreelancerComponent", function() { return AddFreelancerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var AddFreelancerComponent = /** @class */ (function () {
    function AddFreelancerComponent(formBuilder, apiService, navCtrl, toastCtrl, storage) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.users = [];
        this.skills = [];
        this.countries = [];
        this.statuses = [];
        // this.addfreelancerForm.controls["status"].setValue("active");
        this.statuses = this.apiService.statuses;
    }
    AddFreelancerComponent.prototype.ngOnInit = function () {
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
        this.addfreelancerForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'contact_email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'contact_phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'designation': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'experience': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'state': [null],
            'country': [null],
            'status': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'skill': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'bank_name': [null],
            'bank_account_no': [null],
            'bank_ifsc': [null],
            'bank_linked_phone': [null],
            'BHIM_number': [null],
            'refrenced_by': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    };
    AddFreelancerComponent.prototype.createFreelancer = function () {
        var _this = this;
        var value = {
            name: this.addfreelancerForm.value.name,
            contact_email: this.addfreelancerForm.value.contact_email,
            contact_phone: this.addfreelancerForm.value.contact_phone,
            designation: this.addfreelancerForm.value.designation,
            experience: this.addfreelancerForm.value.experience,
            status: this.addfreelancerForm.value.status,
            skill: JSON.stringify(this.addfreelancerForm.value.skill),
            location: JSON.stringify([this.addfreelancerForm.value.state, this.addfreelancerForm.value.country]),
            bank_name: (this.addfreelancerForm.value.bank_name),
            bank_account_no: (this.addfreelancerForm.value.bank_account_no),
            bank_ifsc: (this.addfreelancerForm.value.bank_ifsc),
            bank_linked_phone: (this.addfreelancerForm.value.bank_linked_phone),
            BHIM_number: (this.addfreelancerForm.value.BHIM_number),
            refrenced_by: Number(this.addfreelancerForm.value.refrenced_by),
            rating: 0
        };
        console.log(value);
        this.apiService.setFreelancer(value).subscribe(function (data) {
            console.log("success");
            _this.toast = _this.toastCtrl.create({
                message: 'Added Freelancer Successfully',
                duration: 2000
            }).then(function (toastData) {
                console.log(toastData);
                toastData.present();
            });
            _this.apiService.hideLoader();
            _this.navCtrl.navigateRoot('/freelancers');
        });
    };
    AddFreelancerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    AddFreelancerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-freelancer',
            template: __webpack_require__(/*! raw-loader!./add-freelancer.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-freelancer/add-freelancer.component.html"),
            styles: [__webpack_require__(/*! ./add-freelancer.component.scss */ "./src/app/pages/add-freelancer/add-freelancer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], AddFreelancerComponent);
    return AddFreelancerComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-freelancer/add-freelancer.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/add-freelancer/add-freelancer.module.ts ***!
  \***************************************************************/
/*! exports provided: AddFreelancerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFreelancerModule", function() { return AddFreelancerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_freelancer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-freelancer.component */ "./src/app/pages/add-freelancer/add-freelancer.component.ts");







var routes = [
    {
        path: '',
        component: _add_freelancer_component__WEBPACK_IMPORTED_MODULE_6__["AddFreelancerComponent"]
    }
];
var AddFreelancerModule = /** @class */ (function () {
    function AddFreelancerModule() {
    }
    AddFreelancerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_freelancer_component__WEBPACK_IMPORTED_MODULE_6__["AddFreelancerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], AddFreelancerModule);
    return AddFreelancerModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-freelancer-add-freelancer-module-es5.js.map