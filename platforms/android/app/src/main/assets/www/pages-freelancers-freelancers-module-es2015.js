(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-freelancers-freelancers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/freelancers/freelancers.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/freelancers/freelancers.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n        <ion-text color=\"light\" class=\"fw700\">Freelancers</ion-text>\n      </ion-text>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n        <ion-icon name=\"home\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-toolbar color=\"dark\">\n    <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n \n    <ion-row class=\"outerRow\">\n      <ion-col size=\"12\" class=\"searchText\">\n        <div>\n            <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"setFilteredItems()\"></ion-searchbar>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\"  class=\"searchDrop\">\n        <div>\n            <ion-select class=\"selectBox\" [(ngModel)]=\"searchType\">\n                <ion-select-option value=\"name\">Name</ion-select-option>\n                <ion-select-option value=\"skill\">Skill</ion-select-option>\n              </ion-select>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  \n  <ion-list>\n    <ion-item *ngFor=\"let freelancer of freelancers\" (click)=\"goto(freelancer.id)\">\n      <ion-label class=\"callAction\">\n        <h2>{{freelancer.name}}</h2>\n        <h3>{{freelancer.designation}}</h3>\n        <p>{{freelancer.experience}}</p>\n        <app-star name=\"{{freelancer.rating}}\"></app-star>\n        <div style=\"overflow: scroll\">\n          <span *ngIf=\"skill\">\n            <ion-badge color=\"primary\">html</ion-badge>\n          </span>\n          <ion-badge *ngIf=\"!skill\" color=\"primary\">Not listed</ion-badge>\n        </div>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/freelancers/freelancers.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/freelancers/freelancers.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  margin: 0 3px 0 0;\n}\n\nh2 {\n  font-weight: bold;\n}\n\napp-star {\n  color: #d4692a;\n}\n\n.callAction {\n  position: relative;\n}\n\n.callAction .iconStar {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 18px;\n}\n\n.callAction .iconStar span {\n  font-size: 10px;\n  line-height: 10px;\n}\n\n.callAction .iconStar ion-icon {\n  padding-top: 10px;\n}\n\n.outerRow {\n  position: relative;\n}\n\n.outerRow .searchDrop {\n  position: absolute;\n  top: 13px;\n  right: 5px;\n}\n\n.outerRow .searchDrop .selectBox {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.outerRow .searchText {\n  position: relative;\n  top: 5px;\n  padding-top: 0px !important;\n  left: 2px;\n  width: 100%;\n}\n\n.outerRow .searchText ion-searchbar {\n  padding: 2px !important;\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9wYWdlcy9mcmVlbGFuY2Vycy9mcmVlbGFuY2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZnJlZWxhbmNlcnMvZnJlZWxhbmNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FESEk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0tSOztBREpRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDTVo7O0FESlE7RUFDSSxpQkFBQTtBQ01aOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURISTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNLUjs7QURKUTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUNNWjs7QURISTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNLUjs7QURKUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7QUNNWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZyZWVsYW5jZXJzL2ZyZWVsYW5jZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdle1xuICAgIG1hcmdpbjogMCAzcHggMCAwO1xufVxuaDJ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5hcHAtc3RhcntcbiAgICBjb2xvcjogI2Q0NjkyYTtcbn1cbi5jYWxsQWN0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuaWNvblN0YXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm91dGVyUm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnNlYXJjaERyb3B7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAgMTNweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgLnNlbGVjdEJveHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2VhcmNoVGV4dHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW9uLXNlYXJjaGJhcntcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpb24tYmFkZ2Uge1xuICBtYXJnaW46IDAgM3B4IDAgMDtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYXBwLXN0YXIge1xuICBjb2xvcjogI2Q0NjkyYTtcbn1cblxuLmNhbGxBY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FsbEFjdGlvbiAuaWNvblN0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jYWxsQWN0aW9uIC5pY29uU3RhciBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cbi5jYWxsQWN0aW9uIC5pY29uU3RhciBpb24taWNvbiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ub3V0ZXJSb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3V0ZXJSb3cgLnNlYXJjaERyb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTNweDtcbiAgcmlnaHQ6IDVweDtcbn1cbi5vdXRlclJvdyAuc2VhcmNoRHJvcCAuc2VsZWN0Qm94IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4ub3V0ZXJSb3cgLnNlYXJjaFRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ub3V0ZXJSb3cgLnNlYXJjaFRleHQgaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/freelancers/freelancers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/freelancers/freelancers.component.ts ***!
  \************************************************************/
/*! exports provided: FreelancersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelancersComponent", function() { return FreelancersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");


// import { IonInfiniteScroll } from '@ionic/angular';

// Modals




let FreelancersComponent = class FreelancersComponent {
    constructor(navCtrl, menuCtrl, popoverCtrl, modalCtrl, api, route, router, storage) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.route = route;
        this.router = router;
        this.storage = storage;
        // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
        this.searchTerm = "";
        this.searchKey = '';
        this.searchType = 'name';
        this.yourLocation = '123 Test Street';
        this.themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
        this.freelancers = [];
        this.freelancersData = [];
        this.skills = [];
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.fetchFreelancers();
    }
    ngOnInit() {
        this.storage.get('skills').then(data => {
            this.skills = data;
        });
        this.setFilteredItems();
    }
    fetchFreelancers() {
        console.log('test');
        const self = this;
        this.api.getFreelancers().subscribe(data => {
            this.api.hideLoader();
            self.api.saveStoreData('freelancers', data['result'].length);
            self.storage.set('freelancers', data['result']);
            data['result'].forEach(element => {
                element.skill = self.sendSkills(element.skill);
            });
            self.freelancersData = data['result'];
            this.freelancers = data['result'];
        });
    }
    sendSkills(data) {
        let skill = JSON.parse(data);
        let found = '';
        this.skills.forEach(element => {
            for (var i = 0; i <= skill.length; i++) {
                if (element.id == skill[i]) {
                    found += element.name + ', ';
                }
            }
        });
        return found;
    }
    setFilteredItems() {
        const self = this;
        if (this.searchType == 'name') {
            self.freelancers = this.freelancersData.filter(item => {
                return item.name.toLowerCase().indexOf(self.searchTerm.toLowerCase()) > -1;
            });
        }
        else {
            console.log();
            self.freelancers = this.freelancersData.filter(item => {
                return item.skill.toLowerCase().indexOf(self.searchTerm.toLowerCase()) > -1;
            });
        }
    }
    goto(value) {
        let navigationExtras = {
            state: {
                projectType: value
            }
        };
        this.router.navigate(['freelancer'], navigationExtras);
    }
    settings() {
        this.navCtrl.navigateForward('settings');
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
                component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_3__["SearchFilterPage"]
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
FreelancersComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
FreelancersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-freelancers',
        template: __webpack_require__(/*! raw-loader!./freelancers.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/freelancers/freelancers.component.html"),
        styles: [__webpack_require__(/*! ./freelancers.component.scss */ "./src/app/pages/freelancers/freelancers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], FreelancersComponent);



/***/ }),

/***/ "./src/app/pages/freelancers/freelancers.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/freelancers/freelancers.module.ts ***!
  \*********************************************************/
/*! exports provided: FreelancersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelancersModule", function() { return FreelancersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _freelancers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./freelancers.component */ "./src/app/pages/freelancers/freelancers.component.ts");
/* harmony import */ var _components_star_star_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/star/star.module */ "./src/app/components/star/star.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





// import { PopmenuComponent } from './../../components/popmenu/popmenu.component';



const routes = [
    {
        path: '',
        component: _freelancers_component__WEBPACK_IMPORTED_MODULE_5__["FreelancersComponent"]
    }
];
let FreelancersModule = class FreelancersModule {
};
FreelancersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_star_star_module__WEBPACK_IMPORTED_MODULE_6__["StarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_freelancers_component__WEBPACK_IMPORTED_MODULE_5__["FreelancersComponent"]]
    })
], FreelancersModule);



/***/ })

}]);
//# sourceMappingURL=pages-freelancers-freelancers-module-es2015.js.map