(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-freelancer-freelancer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/freelancer/freelancer.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/freelancer/freelancer.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/freelancers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n        <ion-text color=\"light\" class=\"fw700\">View Freelancer</ion-text>\n      </ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <div class=\"content-page\">\n    <h2>Name</h2>\n    <h3>{{freelancerData.name}}</h3>\n    <h2>Designation</h2>\n    <h3>{{freelancerData.designation}}</h3>\n    <h2>Location</h2>\n    <h3>{{freelancerData.location}}</h3>\n    <h2>Refrenced by</h2>\n    <h3>{{freelancerData.refrenced_by}}</h3>\n    <!-- <h2>Projects</h2>\n            <h3>\"Management App\"</h3> -->\n    <h2>Current Project</h2>\n    <h3 (click)=\"goto(freelancerData.project_id.id,'project')\">{{freelancerData.project_id.name}}</h3>\n    <h2>Contact</h2>\n    <div class=\"contact\">\n      <span><a href=\"mailto:{{freelancerData.contact_email}}\">{{freelancerData.contact_email}}</a></span>\n      <span>{{freelancerData.contact_phone}}</span>\n      <p class=\"phone\">\n        <a class=\"makeacall\" href=\"tel:{{freelancerData.contact_phone}}\">Call</a>\n        <a class=\"whatsapp\" href=\"https://api.whatsapp.com/send?phone=+91{{freelancerData.contact_phone}}\">Open in Whatsapp</a>\n      </p>\n    </div>\n\n    <!-- <app-star name=\"3.5\"></app-star> -->\n    <h2>Skills</h2>\n    <p>\n      <span color=\"primary\">{{freelancerData.skill}}</span>\n    </p>\n    <h2>Bank Details</h2>\n    <p>BHIM Number: {{freelancerData.BHIM_number}}</p>\n    <p>Account Number: {{freelancerData.bank_account_no}}</p>\n    <p>IFSC: {{freelancerData.bank_ifsc}}</p>\n    <p>Phone: {{freelancerData.bank_linked_phone}}</p>\n    <p>Bank Name: {{freelancerData.bank_name}}</p>\n\n    <ion-button size=\"large\" expand=\"full\" color=\"dark\" (click)=\"delete(freelancerData.id)\"  no-margin>DELETE</ion-button>\n    <p></p>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/freelancer/freelancer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/freelancer/freelancer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  margin: 0 3px 0 0;\n}\n\n.content-page {\n  margin: 5px 10px 0 10px;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 14px;\n  margin: 0px;\n  color: #999999;\n}\n\nh3, p {\n  font-size: 16px;\n  margin-top: 0px;\n}\n\napp-star {\n  color: #d4692a;\n}\n\n.callAction {\n  position: relative;\n}\n\n.callAction .iconStar {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 18px;\n}\n\n.callAction .iconStar span {\n  font-size: 10px;\n  line-height: 10px;\n}\n\n.callAction .iconStar ion-icon {\n  padding-top: 10px;\n}\n\n.contact span {\n  display: block;\n  padding: 5px 0;\n}\n\n.phone {\n  font-size: 12px;\n  display: inline-block;\n  color: antiquewhite;\n}\n\n.phone .makeacall {\n  float: left;\n  padding: 10px;\n  color: antiquewhite;\n  text-decoration: none;\n  border-radius: 5px;\n  background: #bb7307;\n}\n\n.phone .whatsapp {\n  float: left;\n  margin-left: 10px;\n  color: antiquewhite;\n  text-decoration: none;\n  border-radius: 5px;\n  padding: 10px;\n  background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9wYWdlcy9mcmVlbGFuY2VyL2ZyZWVsYW5jZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZyZWVsYW5jZXIvZnJlZWxhbmNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDSUo7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREpJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNNUjs7QURMUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ09aOztBRExRO0VBQ0ksaUJBQUE7QUNPWjs7QURIQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FDTUo7O0FESEE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ01KOztBRExJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ09SOztBRExJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDT1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mcmVlbGFuY2VyL2ZyZWVsYW5jZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2V7XG4gICAgbWFyZ2luOiAwIDNweCAwIDA7XG59XG4uY29udGVudC1wYWdle1xuICAgIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xufVxuaDJ7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICM5OTk5OTlcbn1cbmgzLHB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6MHB4OyBcbiAgIFxufVxuYXBwLXN0YXJ7XG4gICAgY29sb3I6ICNkNDY5MmE7XG59XG4uY2FsbEFjdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmljb25TdGFye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uY29udGFjdCBzcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuXG4ucGhvbmV7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIC5tYWtlYWNhbGx7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2JiNzMwNztcbiAgICB9XG4gICAgLndoYXRzYXBwe1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIH1cbn0iLCJpb24tYmFkZ2Uge1xuICBtYXJnaW46IDAgM3B4IDAgMDtcbn1cblxuLmNvbnRlbnQtcGFnZSB7XG4gIG1hcmdpbjogNXB4IDEwcHggMCAxMHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG5oMywgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5hcHAtc3RhciB7XG4gIGNvbG9yOiAjZDQ2OTJhO1xufVxuXG4uY2FsbEFjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYWxsQWN0aW9uIC5pY29uU3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNhbGxBY3Rpb24gLmljb25TdGFyIHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuLmNhbGxBY3Rpb24gLmljb25TdGFyIGlvbi1pY29uIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jb250YWN0IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5waG9uZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuLnBob25lIC5tYWtlYWNhbGwge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNiYjczMDc7XG59XG4ucGhvbmUgLndoYXRzYXBwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/freelancer/freelancer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/freelancer/freelancer.component.ts ***!
  \**********************************************************/
/*! exports provided: FreelancerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelancerComponent", function() { return FreelancerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var FreelancerComponent = /** @class */ (function () {
    function FreelancerComponent(modalController, navCtrl, route, router, api, storage) {
        var _this = this;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.api = api;
        this.storage = storage;
        this.freelancerData = {
            name: "",
            designation: "",
            location: "",
            refrenced_by: "",
            project_id: [{
                    id: "",
                    name: ""
                }],
            contact_email: "",
            contact_phone: "",
            skill: "",
            BHIM_number: "",
            bank_account_no: "",
            bank_ifsc: "",
            bank_linked_phone: "",
            bank_name: ""
        };
        this.skills = [];
        this.countries = [];
        this.projects = [];
        this.users = [];
        var self = this;
        self.route.queryParams.subscribe(function (params) {
            if (self.router.getCurrentNavigation().extras.state) {
                self.api.getFreelancer(self.router.getCurrentNavigation().extras.state.projectType).subscribe(function (data) {
                    _this.api.hideLoader();
                    var val = JSON.parse(data[0].location)[0];
                    if (val != null) {
                        data[0].location = val + ', ' + self.sendCountry(JSON.parse(data[0].location)[1]);
                    }
                    else {
                        data[0].location = 'Not Found';
                    }
                    if (data[0].refrenced_by)
                        data[0].refrenced_by = self.sendUser(data[0].refrenced_by);
                    if (data[0].skill)
                        data[0].skill = self.sendSkills(data[0].skill);
                    if (data[0].project_id != null)
                        data[0].project_id = self.sendProject(data[0].project_id);
                    else
                        data[0].project_id = "Not Assigned";
                    self.freelancerData = data[0];
                });
            }
            ;
        });
    }
    // async presentModal() {
    //   const modal = await this.modalController.create({
    //     component: FreelancersListComponent
    //   });
    //   return await modal.present();
    // }
    FreelancerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('countries').then(function (data) {
            _this.countries = data;
        });
        this.storage.get('users').then(function (data) {
            _this.users = data;
        });
        this.storage.get('skills').then(function (data) {
            _this.skills = data;
        });
        this.storage.get('projects').then(function (data) {
            _this.projects = data;
        });
    };
    FreelancerComponent.prototype.sendCountry = function (data) {
        var i = 0;
        while (data != this.countries[i].country_code) {
            i++;
        }
        return this.countries[i].country_name;
    };
    FreelancerComponent.prototype.sendSkills = function (data) {
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
    FreelancerComponent.prototype.sendUser = function (data) {
        var found = '';
        if (this.users !== undefined && this.users.length > 0) {
            this.users.forEach(function (item) {
                if (item.id == data) {
                    found = item.first_name + ' ' + item.last_name;
                }
            });
        }
        return found;
    };
    FreelancerComponent.prototype.goto = function (val, page) {
        this.api.goto(val, page);
    };
    FreelancerComponent.prototype.sendProject = function (data) {
        var found = {};
        this.projects.forEach(function (item) {
            if (item.id == data) {
                found = item;
            }
        });
        return found;
    };
    FreelancerComponent.prototype.delete = function (id) {
        var _this = this;
        this.api.deleteFreelancer(id).subscribe(function (data) {
            console.log(data);
            _this.navCtrl.navigateRoot('/freelancers');
        });
    };
    FreelancerComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    FreelancerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freelancer',
            template: __webpack_require__(/*! raw-loader!./freelancer.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/freelancer/freelancer.component.html"),
            styles: [__webpack_require__(/*! ./freelancer.component.scss */ "./src/app/pages/freelancer/freelancer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], FreelancerComponent);
    return FreelancerComponent;
}());



/***/ }),

/***/ "./src/app/pages/freelancer/freelancer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/freelancer/freelancer.module.ts ***!
  \*******************************************************/
/*! exports provided: FreelancerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelancerModule", function() { return FreelancerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _freelancer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./freelancer.component */ "./src/app/pages/freelancer/freelancer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var routes = [
    {
        path: '',
        component: _freelancer_component__WEBPACK_IMPORTED_MODULE_3__["FreelancerComponent"]
    }
];
var FreelancerModule = /** @class */ (function () {
    function FreelancerModule() {
    }
    FreelancerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_freelancer_component__WEBPACK_IMPORTED_MODULE_3__["FreelancerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], FreelancerModule);
    return FreelancerModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-freelancer-freelancer-module-es5.js.map