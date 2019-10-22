(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>App Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item class=\"bg-profile\">\n    <!-- <ion-avatar slot=\"start\">\n      <img src=\"assets/img/avatar.jpeg\" class=\"user-avatar\">\n    </ion-avatar> -->\n    <ion-label>\n      <ion-text color=\"light\">\n        <h2>\n          <strong>João Firmino</strong>\n        </h2>\n      </ion-text>\n      <ion-text color=\"tertiary\">\n        <h3>\n          firminoata@gmail.com\n        </h3>\n      </ion-text>\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"dark\" (click)=\"editProfile()\">\n        <ion-icon name=\"contact\"></ion-icon>\n        Edit profile\n      </ion-button>\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"secondary\" (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n        logout\n      </ion-button>\n    </ion-label>\n  </ion-item>\n\n  <ion-list no-border>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>General</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"settings\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">App Language</ion-label>\n      <ion-select [(ngModel)]=\"lang\">\n        <ion-select-option *ngFor=\"let language of languages\" [value]=\"language\">{{language}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"notifications\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label class=\"label\" color=\"primary\"> Enable notifications </ion-label>\n      <ion-toggle [(ngModel)]=\"enableNotifications\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>Currency</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"card\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">Payment Method</ion-label>\n      <ion-select [(ngModel)]=\"paymentMethod\">\n        <ion-select-option *ngFor=\"let method of paymentMethods\" [value]=\"method\">{{method}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"logo-usd\" slot=\"start\" color=\"dark\"></ion-icon>\n      <ion-label color=\"primary\">Currency</ion-label>\n      <ion-select [(ngModel)]=\"currency\">\n        <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency\">{{currency}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>Other</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"mail\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label class=\"label\" color=\"primary\">Enable Promotions</ion-label>\n      <ion-toggle [(ngModel)]=\"enablePromo\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"mail\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label class=\"label\" color=\"primary\">Enable History</ion-label>\n      <ion-toggle [(ngModel)]=\"enableHistory\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");







const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light)) ;\n}\n\nion-avatar {\n  width: 68px;\n  height: 68px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdGQUFBO0FDQUo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDY4cHg7XG4gICAgaGVpZ2h0OiA2OHB4O1xufVxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSkgO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDY4cHg7XG4gIGhlaWdodDogNjhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let SettingsPage = class SettingsPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.languages = ['English', 'Portuguese', 'French'];
        this.paymentMethods = ['Paypal', 'Credit Card'];
        this.currencies = ['USD', 'BRL', 'EUR'];
    }
    ngOnInit() {
    }
    editProfile() {
        this.navCtrl.navigateForward('edit-profile');
    }
    logout() {
        this.navCtrl.navigateRoot('/');
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.page.html"),
        styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map