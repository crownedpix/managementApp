(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edit-profile/edit-profile.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n  <ion-card no-margin>\n    <ion-card-content class=\"bg-profile\">\n      <h1 class=\"fw500\">{{userdata.first_name}} {{userdata.last_name}}</h1>\n      <h2 color=\"light\" margin-bottom>{{userdata.roles}}</h2>\n      <ion-button icon-left color=\"secondary\">\n        <ion-icon name=\"code-working\"></ion-icon> \n        Change Password\n      </ion-button>\n    </ion-card-content>\n\n    <ion-grid fixed no-padding>\n      <ion-row>\n        <ion-col size=\"12\" padding>\n            <form [formGroup]=\"userForm\" (ngSubmit)=\"editUser()\">\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">First Name:</ion-label>\n                <ion-input inputmode=\"text\" formControlName=\"first_name\" placeholder=\"Ex..: Joe\">\n                </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Last Name:</ion-label>\n                <ion-input inputmode=\"text\" formControlName=\"last_name\" placeholder=\"Ex..: Doe\">\n                </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Email:</ion-label>\n                <ion-input inputmode=\"text\" formControlName=\"email\" disabled=true placeholder=\"Ex..: some@some.com\">\n                </ion-input>\n              </ion-item>\n              <hr>\n              <ion-button type=\"submit\" size=\"large\" [disabled]=\"!userForm.valid\" expand=\"full\" color=\"dark\" no-margin>Edit</ion-button>\n            </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-card>\n  {{userdata | json}}\n  {{userForm.value | json}}\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");







var routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }
];
var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\n.profile ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.profile ion-card ion-card-content {\n  padding: 32px;\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n}\n\n.profile ion-card ion-card-content img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #fff;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\n.profile ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n\n.profile ion-item ion-input {\n  border-bottom: 1px solid var(--ion-color-tertiary);\n}\n\n.profile ion-buttom button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9wYWdlcy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3RkFBQTtBQ0FKOztBREtFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURHSTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ROOztBREdNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDhDQUFBO0FDRFI7O0FESU07RUFDRSxrQkFBQTtBQ0ZSOztBRFFJO0VBQ0Usa0RBQUE7QUNOTjs7QURXSTtFQUNFLFNBQUE7QUNUTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gIH1cbn1cblxuLnByb2ZpbGUge1xuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMzJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEyOHB4O1xuICAgICAgICB3aWR0aDogMTI4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCA0cHggI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjhweCByZ2JhKDI1NSwyNTUsMjU1LCAuNjUpO1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICBpb24taW5wdXQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLWJ1dHRvbSB7XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpIDtcbn1cblxuLnByb2ZpbGUgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5wcm9maWxlIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGltZyB7XG4gIGhlaWdodDogMTI4cHg7XG4gIHdpZHRoOiAxMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDRweCAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XG59XG4ucHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGgxIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLnByb2ZpbGUgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG4ucHJvZmlsZSBpb24tYnV0dG9tIGJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, loadingCtrl, toastCtrl, api, storage, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.userdata = {};
        this.storage.get('c_user').then(function (data) {
            _this.userdata = JSON.parse(data);
            _this.userForm.controls['first_name'].setValue(_this.userdata["first_name"]);
            _this.userForm.controls['last_name'].setValue(_this.userdata["last_name"]);
            _this.userForm.controls['email'].setValue(_this.userdata["email"]);
        });
    }
    EditProfilePage.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            'first_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ])],
            'last_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ])]
        });
    };
    EditProfilePage.prototype.editUser = function () {
        var _this = this;
        var value = {
            first_name: this.userForm.value.first_name,
            last_name: this.userForm.value.last_name,
        };
        this.api.updateuser(value, this.userdata['id']).subscribe(function (data) {
            _this.api.saveKeyData('first_name', _this.userForm.value.first_name, 'c_user');
            _this.api.saveKeyData('last_name', _this.userForm.value.last_name, 'c_user');
            console.log("success");
            _this.toast = _this.toastCtrl.create({
                message: 'Updated User Successfully',
                duration: 2000
            }).then(function (toastData) {
                console.log(toastData);
                toastData.present();
            });
            _this.api.hideLoader();
            _this.navCtrl.navigateForward('/home-results');
        });
    };
    EditProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edit-profile/edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es5.js.map