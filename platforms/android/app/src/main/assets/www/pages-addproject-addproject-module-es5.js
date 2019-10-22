(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addproject-addproject-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addproject/addproject.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addproject/addproject.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n        <ion-text color=\"light\" class=\"fw700\">Add Project</ion-text>\n      </ion-text>\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n  <!-- <ion-toolbar color=\"dark\">\n    <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <ion-card no-margin>\n    <ion-grid fixed no-padding>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-list margin-bottom>\n            <form [formGroup]=\"addprojectForm\" (ngSubmit)=\"addProject()\">\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Name:</ion-label>\n                <ion-input inputmode=\"text\" placeholder=\"Project name\" formControlName=\"name\" value=\"\"></ion-input>\n              </ion-item>\n              <p ion-text class=\"text08\"\n                *ngIf=\"addprojectForm.get('name').touched && addprojectForm.get('name').hasError('required')\">\n                <ion-text color=\"warning\">\n                  Required Field\n                </ion-text>\n              </p>\n              <ion-item>\n                <ion-label color=\"dark\" position=\"stacked\">Description</ion-label>\n                <ion-textarea inputmode=\"text\" placeholder=\"Project Description\" formControlName=\"description\" value=\"\">\n                </ion-textarea>\n              </ion-item>\n              <!-- <p ion-text class=\"text08\"\n                *ngIf=\"addprojectForm.get('description').touched && addprojectForm.get('description').hasError('required')\">\n                <ion-text color=\"warning\">\n                  Required Field\n                </ion-text>\n              </p> -->\n              <ion-item>\n                <ion-label color=\"dark\">Skills Required</ion-label>\n                <ion-select multiple=\"true\" formControlName=\"skills\">\n                  <ion-select-option value={{skill.id}} *ngFor=\"let skill of skills\">{{skill.name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Referred By</ion-label>\n                <ion-select formControlName=\"refrenced_by\">\n                  <ion-select-option value=\"{{user.id}}\" *ngFor=\"let user of users\">{{user.first_name}}\n                    {{user.last_name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label color=\"dark\">Client</ion-label>\n                <ion-select formControlName=\"client_id\">\n                  <ion-select-option value=\"{{client.id}}\" *ngFor=\"let client of clients\">{{client.name}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                  <ion-label color=\"dark\">Assign Freelancers</ion-label>\n                  <ion-select multiple=\"true\" formControlName=\"total_freelancer\">\n                    <ion-select-option value=\"{{freelancer.id}}\" *ngFor=\"let freelancer of freelancers\">{{freelancer.name}}\n                    </ion-select-option>\n                  </ion-select>\n                </ion-item>\n              <ion-button size=\"large\" expand=\"full\" color=\"dark\" type=\"submit\" [disabled]=\"!addprojectForm.valid\" no-margin>Add Project</ion-button>\n            </form>\n          \n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/addproject/addproject.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/addproject/addproject.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHByb2plY3QvYWRkcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/addproject/addproject.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/addproject/addproject.component.ts ***!
  \**********************************************************/
/*! exports provided: AddprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddprojectComponent", function() { return AddprojectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var AddprojectComponent = /** @class */ (function () {
    function AddprojectComponent(formBuilder, apiService, navCtrl, toastCtrl, storage) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.users = [];
        this.skills = [];
        this.clients = [];
        this.freelancers = [];
    }
    AddprojectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('users').then(function (data) {
            _this.users = data;
        });
        this.storage.get('skills').then(function (data) {
            _this.skills = data;
        });
        this.storage.get('clients').then(function (data) {
            _this.clients = data;
        });
        this.storage.get('freelancers').then(function (data) {
            _this.freelancers = data;
        });
        this.addprojectForm = this.formBuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'description': [null],
            'skills': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'refrenced_by': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'client_id': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            'total_freelancer': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    };
    AddprojectComponent.prototype.addProject = function () {
        var _this = this;
        var value = {
            name: this.addprojectForm.value.name,
            description: this.addprojectForm.value.description,
            skills: JSON.stringify(this.addprojectForm.value.skills),
            refrenced_by: Number(this.addprojectForm.value.refrenced_by),
            client_id: Number(this.addprojectForm.value.client_id),
            total_freelancer: JSON.stringify(this.addprojectForm.value.total_freelancer)
        };
        console.log(value);
        this.apiService.setProject(value).subscribe(function (data) {
            console.log("success");
            _this.toast = _this.toastCtrl.create({
                message: 'Added Project Successfully',
                duration: 2000
            }).then(function (toastData) {
                console.log(toastData);
                toastData.present();
            });
            _this.apiService.hideLoader();
            _this.navCtrl.navigateRoot('/projects');
        });
    };
    AddprojectComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    AddprojectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addproject',
            template: __webpack_require__(/*! raw-loader!./addproject.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addproject/addproject.component.html"),
            styles: [__webpack_require__(/*! ./addproject.component.scss */ "./src/app/pages/addproject/addproject.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], AddprojectComponent);
    return AddprojectComponent;
}());



/***/ }),

/***/ "./src/app/pages/addproject/addproject.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/addproject/addproject.module.ts ***!
  \*******************************************************/
/*! exports provided: AddprojectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddprojectModule", function() { return AddprojectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addproject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addproject.component */ "./src/app/pages/addproject/addproject.component.ts");







var routes = [
    {
        path: '',
        component: _addproject_component__WEBPACK_IMPORTED_MODULE_6__["AddprojectComponent"]
    }
];
var AddprojectModule = /** @class */ (function () {
    function AddprojectModule() {
    }
    AddprojectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_addproject_component__WEBPACK_IMPORTED_MODULE_6__["AddprojectComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], AddprojectModule);
    return AddprojectModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-addproject-addproject-module-es5.js.map