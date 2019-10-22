(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-project-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/project/project.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/project/project.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n        <ion-text color=\"light\" class=\"fw700\">View Project</ion-text>\n      </ion-text>\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n          <ion-icon name=\"notifications\"></ion-icon>\n          <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\n        </ion-button>\n      </ion-buttons> -->\n  </ion-toolbar>\n  <!-- <ion-toolbar color=\"dark\">\n      <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n      <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n          <ion-icon name=\"options\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n  <div class=\"content-page\">\n    <h2>Name</h2>\n    <h3>{{projectData.name}}</h3>\n    <h2>Description</h2>\n    <h3>{{projectData.description}}</h3>\n    <h2>Client</h2>\n    <h3 (click)=\"goto(extradata.client_id,'client')\">{{projectData.client_id}}</h3>\n    <h2>Refrenced by</h2>\n    <p>{{projectData.refrenced_by}}</p>\n    <!-- <app-star name=\"3.5\"></app-star> -->\n    <h2>Skills</h2>\n    <p>\n      <span color=\"primary\">{{projectData.skills}}</span>\n    </p>\n    <h2>Freelancers</h2>\n    <p class=\"free\">\n      <span color=\"primary\" (click)=\"goto(freelancer.id,'freelancer')\" *ngFor=\"let freelancer of projectData.total_freelancer\">{{freelancer.name}} </span>\n    </p>\n    <ion-button size=\"large\" expand=\"full\" color=\"dark\" (click)=\"delete(projectData.id)\"  no-margin>DELETE PROJECT</ion-button>\n    <p></p>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/project/project.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/project/project.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  margin: 0 3px 0 0;\n}\n\n.content-page {\n  margin: 5px 10px 0 10px;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 14px;\n  margin: 0px;\n  color: #999999;\n}\n\nh3, p {\n  font-size: 16px;\n  margin-top: 0px;\n}\n\napp-star {\n  color: #d4692a;\n}\n\n.callAction {\n  position: relative;\n}\n\n.callAction .iconStar {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 18px;\n}\n\n.callAction .iconStar span {\n  font-size: 10px;\n  line-height: 10px;\n}\n\n.callAction .iconStar ion-icon {\n  padding-top: 10px;\n}\n\n.free span {\n  display: block;\n  padding: 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9wYWdlcy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDSUo7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREpJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNNUjs7QURMUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ09aOztBRExRO0VBQ0ksaUJBQUE7QUNPWjs7QURGQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdle1xuICAgIG1hcmdpbjogMCAzcHggMCAwO1xufVxuLmNvbnRlbnQtcGFnZXtcbiAgICBtYXJnaW46IDVweCAxMHB4IDAgMTBweDtcbn1cbmgye1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjOTk5OTk5XG59XG5oMyxwe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOjBweDsgXG4gICBcbn1cbmFwcC1zdGFye1xuICAgIGNvbG9yOiAjZDQ2OTJhO1xufVxuLmNhbGxBY3Rpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5pY29uU3RhcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZnJlZSBzcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMCAwO1xufSIsImlvbi1iYWRnZSB7XG4gIG1hcmdpbjogMCAzcHggMCAwO1xufVxuXG4uY29udGVudC1wYWdlIHtcbiAgbWFyZ2luOiA1cHggMTBweCAwIDEwcHg7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbmgzLCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbmFwcC1zdGFyIHtcbiAgY29sb3I6ICNkNDY5MmE7XG59XG5cbi5jYWxsQWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhbGxBY3Rpb24gLmljb25TdGFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY2FsbEFjdGlvbiAuaWNvblN0YXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG4uY2FsbEFjdGlvbiAuaWNvblN0YXIgaW9uLWljb24ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmZyZWUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDAgMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/project/project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route, navCtrl, router, api, storage) {
        var _this = this;
        this.route = route;
        this.navCtrl = navCtrl;
        this.router = router;
        this.api = api;
        this.storage = storage;
        this.projectData = {
            name: "",
            description: "",
            client_id: "",
            refrenced_by: "",
            skills: "",
            total_freelancer: [{
                    name: "",
                    id: ""
                }]
        };
        this.users = [];
        this.clients = [];
        this.skills = [];
        this.freelancers = [];
        var self = this;
        self.route.queryParams.subscribe(function (params) {
            if (self.router.getCurrentNavigation().extras.state) {
                self.api.getProject(self.router.getCurrentNavigation().extras.state.projectType).subscribe(function (data) {
                    _this.api.hideLoader();
                    _this.extradata = JSON.stringify(data[0]);
                    _this.extradata = JSON.parse(_this.extradata);
                    if (data[0].refrenced_by)
                        data[0].refrenced_by = self.sendUser(data[0].refrenced_by);
                    if (data[0].client_id)
                        data[0].client_id = self.sendClient(data[0].client_id);
                    if (data[0].skills)
                        data[0].skills = self.sendSkills(data[0].skills);
                    if (data[0].total_freelancer)
                        data[0].total_freelancer = self.sendFreelancers(data[0].total_freelancer);
                    self.projectData = data[0];
                });
            }
            ;
        });
    }
    ProjectComponent.prototype.goto = function (val, page) {
        // console.log(val, page)
        this.api.goto(val, page);
    };
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('users').then(function (data) {
            _this.users = data;
        });
        this.storage.get('clients').then(function (data) {
            _this.clients = data;
        });
        this.storage.get('skills').then(function (data) {
            _this.skills = data;
        });
        this.storage.get('freelancers').then(function (data) {
            _this.freelancers = data;
        });
    };
    ProjectComponent.prototype.sendUser = function (data) {
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
    ProjectComponent.prototype.sendClient = function (data) {
        var found = '';
        if (this.clients !== undefined && this.clients.length > 0) {
            this.clients.forEach(function (item) {
                if (item.id == data) {
                    found = item.name;
                }
            });
        }
        return found;
    };
    ProjectComponent.prototype.sendSkills = function (data) {
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
    ProjectComponent.prototype.sendFreelancers = function (data) {
        var freelancer = JSON.parse(data);
        var found = [];
        this.freelancers.forEach(function (element) {
            for (var i = 0; i <= freelancer.length; i++) {
                if (element.id == freelancer[i]) {
                    found.push(element);
                }
            }
        });
        return found;
    };
    ProjectComponent.prototype.delete = function (id) {
        var _this = this;
        this.api.deleteProject(id).subscribe(function (data) {
            console.log(data);
            _this.navCtrl.navigateRoot('/projects');
        });
    };
    ProjectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/pages/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/project/project.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/project/project.module.ts ***!
  \*************************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var routes = [
    {
        path: '',
        component: _project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"],
    }
];
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-project-project-module-es5.js.map