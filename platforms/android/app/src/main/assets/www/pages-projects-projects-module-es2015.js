(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-projects-projects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/projects/projects.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/projects/projects.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"secondary\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        <ion-text color=\"light\">\n          <ion-text color=\"light\" class=\"fw700\">Projects</ion-text>\n        </ion-text>\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n          <ion-icon name=\"home\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <!-- <ion-toolbar color=\"dark\">\n      <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n      <ion-buttons slot=\"end\">\n        <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n          <ion-icon name=\"options\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar> -->\n  </ion-header>\n  \n  <ion-content  class=\"card-background-page\">\n    <ion-list>\n      <ion-item *ngFor=\"let project of projects\" (click) = \"goto(project.id)\">\n        <ion-label class=\"callAction\">\n          <h2>{{project.name}}</h2>\n          <h3>Start date</h3>\n          <p>Client Name and link</p>\n          <app-star name=\"3.5\"></app-star>\n          <div style=\"overflow: scroll\">\n            <span *ngIf=\"skills\">\n              <ion-badge color=\"primary\">html</ion-badge>\n            </span>\n            <ion-badge *ngIf=\"!skill\" color=\"primary\">Not listed</ion-badge>\n          </div>\n        </ion-label>\n      </ion-item>\n      <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll> -->\n  \n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  margin: 0 3px 0 0;\n}\n\nh2 {\n  font-weight: bold;\n}\n\napp-star {\n  color: #d4692a;\n}\n\n.callAction {\n  position: relative;\n}\n\n.callAction .iconStar {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 18px;\n}\n\n.callAction .iconStar span {\n  font-size: 10px;\n  line-height: 10px;\n}\n\n.callAction .iconStar ion-icon {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FESEk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0tSOztBREpRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDTVo7O0FESlE7RUFDSSxpQkFBQTtBQ01aIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2V7XG4gICAgbWFyZ2luOiAwIDNweCAwIDA7XG59XG5oMntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmFwcC1zdGFye1xuICAgIGNvbG9yOiAjZDQ2OTJhO1xufVxuLmNhbGxBY3Rpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5pY29uU3RhcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1iYWRnZSB7XG4gIG1hcmdpbjogMCAzcHggMCAwO1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5hcHAtc3RhciB7XG4gIGNvbG9yOiAjZDQ2OTJhO1xufVxuXG4uY2FsbEFjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYWxsQWN0aW9uIC5pY29uU3RhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNhbGxBY3Rpb24gLmljb25TdGFyIHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuLmNhbGxBY3Rpb24gLmljb25TdGFyIGlvbi1pY29uIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");


// import { IonInfiniteScroll } from '@ionic/angular';


// Modals


let ProjectsComponent = class ProjectsComponent {
    constructor(navCtrl, menuCtrl, popoverCtrl, modalCtrl, api, route, router) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.route = route;
        this.router = router;
        // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
        this.searchKey = '';
        this.yourLocation = '123 Test Street';
        this.themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
        this.projects = [];
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.fetchProjects();
    }
    fetchProjects() {
        console.log('test');
        const self = this;
        this.api.getProjects().subscribe(data => {
            this.api.hideLoader();
            self.api.saveStoreData('projects', data['result'].length);
            self.projects = data['result'];
        });
    }
    settings() {
        this.navCtrl.navigateForward('settings');
    }
    goto(value) {
        let navigationExtras = {
            state: {
                projectType: value
            }
        };
        this.router.navigate(['project'], navigationExtras);
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            // if (data.length == 1000) {
            //   event.target.disabled = true;
            // }
        }, 500);
    }
    // toggleInfiniteScroll() {
    //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    // }
    searchFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_4__["SearchFilterPage"]
            });
            return yield modal.present();
        });
    }
    notifications(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('home-results');
        });
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/pages/projects/projects.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProjectsComponent);



/***/ }),

/***/ "./src/app/pages/projects/projects.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects.component */ "./src/app/pages/projects/projects.component.ts");
/* harmony import */ var _components_star_star_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/star/star.module */ "./src/app/components/star/star.module.ts");





// import { PopmenuComponent } from './../../components/popmenu/popmenu.component';


const routes = [
    {
        path: '',
        component: _projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
    }
];
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_star_star_module__WEBPACK_IMPORTED_MODULE_6__["StarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], ProjectsModule);



/***/ })

}]);
//# sourceMappingURL=pages-projects-projects-module-es2015.js.map