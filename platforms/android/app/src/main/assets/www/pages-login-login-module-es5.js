(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\">\n  <div class=\"theme-bg\"></div>\n  <div class=\"auth-content\">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class=\"animated fadeInDown\">\n      <div class=\"logo\"></div>\n      <h4 no-margin>\n        <ion-text color=\"light\" class=\"fw700\">\n          Management App\n        </ion-text>\n      </h4>\n    </div>\n\n    <!-- Login form -->\n    <form [formGroup]=\"onLoginForm\" class=\"list-form\">\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" item-start></ion-icon>\n          Email\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onLoginForm.get('email').touched && onLoginForm.get('email').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock\" item-start></ion-icon>\n          Password\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <p ion-text color=\"warning\" class=\"text08\" *ngIf=\"onLoginForm.get('password').touched && onLoginForm.get('password').hasError('required')\">\n        <ion-text color=\"warning\">\n          Required Field\n        </ion-text>\n        </p>\n    </form>\n\n    <p text-right tappable (click)=\"forgotPass()\" class=\"paz\">\n      <ion-text color=\"light\">\n        <strong>Forgot Pass?</strong>\n      </ion-text>\n    </p>\n\n    <div>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"goToHome()\" [disabled]=\"!onLoginForm.valid\" tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        Signin\n      </ion-button>\n\n      <!-- <p text-center>\n        <ion-text color=\"light\">\n          Or Signin with:\n        </ion-text>\n      </p> -->\n\n      <!-- <ion-grid class=\"btn-group\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\n              <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\n              <ion-icon slot=\"icon-only\" name=\"logo-twitter\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button shape=\"round\" expand=\"full\" color=\"secondary\">\n              <ion-icon slot=\"icon-only\" name=\"logo-googleplus\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n\n    </div>\n\n    <!-- Other links -->\n    <!-- <div text-center margin-top>\n      <span (click)=\"goToRegister()\" class=\"paz\" tappable>\n        <ion-text color=\"light\">\n          New here? <strong>Sign Up</strong>\n        </ion-text>\n      </span>\n    </div> -->\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary));\n}\n\n.paz {\n  position: relative;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNGQUFBO0FDQVI7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLWRhcmspLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkpO1xuICAgIH1cbn1cblxuLnBheiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xufSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSk7XG59XG5cbi5wYXoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menuCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, api, authservice) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.authservice = authservice;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ngOnInit = function () {
        this.onLoginForm = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    };
    LoginPage.prototype.forgotPass = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Forgot Password?',
                            message: 'Enter you email address to send a reset link password.',
                            inputs: [
                                {
                                    name: 'email',
                                    type: 'email',
                                    placeholder: 'Email'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var loader;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.loadingCtrl.create({
                                                        duration: 2000
                                                    })];
                                                case 1:
                                                    loader = _a.sent();
                                                    loader.present();
                                                    loader.onWillDismiss().then(function (l) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                        var toast;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                                                        showCloseButton: true,
                                                                        message: 'Email was sended successfully.',
                                                                        duration: 3000,
                                                                        position: 'bottom'
                                                                    })];
                                                                case 1:
                                                                    toast = _a.sent();
                                                                    toast.present();
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // // //
    LoginPage.prototype.goToFreelancer = function () {
        this.navCtrl.navigateRoot('/freelancer');
    };
    LoginPage.prototype.goToHome = function () {
        var value = {
            email: this.onLoginForm.value.email,
            password: this.onLoginForm.value.password
        };
        this.authservice.login(value);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map