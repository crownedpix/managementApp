(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-skill-skill-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/skill/skill.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/skill/skill.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        <ion-text color=\"light\">\n          <ion-text color=\"light\" class=\"fw700\">Add Client</ion-text>\n        </ion-text>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"card-background-page\">\n    <ion-card no-margin>\n      <ion-grid fixed no-padding>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-list margin-bottom>\n              <form [formGroup]=\"skillForm\" (ngSubmit)=\"createSkill()\">\n                <ion-item>\n                  <ion-label color=\"dark\" position=\"stacked\">Skill Name:</ion-label>\n                  <ion-input inputmode=\"text\" formControlName=\"name\" placeholder=\"Ex..: Javascript\" value=\"\"></ion-input>\n                </ion-item>\n               \n                <ion-button size=\"large\" expand=\"full\" color=\"dark\" type=\"submit\" [disabled]=\"!skillForm.valid\" no-margin>Create Skill</ion-button>\n              </form>\n            </ion-list>\n  \n  \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n  \n    </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/skill/skill.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/skill/skill.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NraWxsL3NraWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/skill/skill.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/skill/skill.component.ts ***!
  \************************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let SkillComponent = class SkillComponent {
    constructor(formBuilder, apiService, navCtrl, toastCtrl, storage) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.users = [];
        this.skills = [];
        this.countries = [];
    }
    ngOnInit() {
        this.storage.get('users').then(data => {
            this.users = data;
        });
        this.storage.get('skills').then(data => {
            this.skills = data;
        });
        this.storage.get('countries').then(data => {
            this.countries = data;
        });
        this.skillForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    }
    createSkill() {
        const value = {
            name: this.skillForm.value.name
        };
        this.apiService.setSkills(value).subscribe(data => {
            this.apiService.hideLoader();
            console.log("success");
            this.toast = this.toastCtrl.create({
                message: 'Added Skill Successfully',
                duration: 2000
            }).then((toastData) => {
                console.log(toastData);
                toastData.present();
            });
            this.apiService.getSkills().subscribe(data => {
                this.storage.set('skills', data['result']);
            });
            this.navCtrl.navigateRoot('/home-results');
        });
    }
};
SkillComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skill',
        template: __webpack_require__(/*! raw-loader!./skill.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/skill/skill.component.html"),
        styles: [__webpack_require__(/*! ./skill.component.scss */ "./src/app/pages/skill/skill.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], SkillComponent);



/***/ }),

/***/ "./src/app/pages/skill/skill.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/skill/skill.module.ts ***!
  \*********************************************/
/*! exports provided: SkillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillModule", function() { return SkillModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _skill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill.component */ "./src/app/pages/skill/skill.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







const routes = [
    {
        path: '',
        component: _skill_component__WEBPACK_IMPORTED_MODULE_3__["SkillComponent"]
    }
];
let SkillModule = class SkillModule {
};
SkillModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_skill_component__WEBPACK_IMPORTED_MODULE_3__["SkillComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]
    })
], SkillModule);



/***/ })

}]);
//# sourceMappingURL=pages-skill-skill-module-es2015.js.map