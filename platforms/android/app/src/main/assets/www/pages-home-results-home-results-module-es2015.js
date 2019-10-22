(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-results-home-results-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/popmenu/popmenu.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/popmenu/popmenu.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInDown\">\n  <ion-fab-button (click)=\"togglePopupMenu()\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"apps\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<div class=\"popup-menu\">\n  <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\"></div>\n  <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"cog\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Config</span>\n    </div>\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"beer\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Activities</span>\n    </div>\n    <div class=\"popup-menu-item\" (click)=\"logout()\">\n      <ion-icon name=\"person\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Logout</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home-results/home-results.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home-results/home-results.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-text color=\"light\">\n        <ion-text color=\"light\" class=\"fw700\">Dashboard</ion-text>\n      </ion-text>\n    </ion-title>\n\n  </ion-toolbar>\n  <!-- <ion-toolbar color=\"dark\">\n    <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n\n  <ion-card text-center (click)=\"gotoFrees()\">\n    <div class=\"card-title\">Freelancers</div>\n    <div class=\"card-subtitle\">{{getValue('freelancers')}}</div>\n  </ion-card>\n\n  <!-- <ion-card text-center (click)=\"gotoProjects('active')\">\n    <div class=\"card-title\">Active Projects</div>\n    <div class=\"card-subtitle\">{{getValue('activeprojects')}}</div>\n  </ion-card> -->\n\n  <ion-card text-center (click)=\"gotoProjects('')\">\n    <div class=\"card-title\">Total Projects</div>\n    <div class=\"card-subtitle\">{{getValue('projects')}}</div>\n  </ion-card>\n\n  <ion-card text-center (click)=\"gotoClients()\">\n    <div class=\"card-title\">Clients</div>\n    <div class=\"card-subtitle\">{{getValue('clients')}}</div>\n  </ion-card>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(79, 36, 172, 0.85)), to(rgba(79, 36, 172, 0.65)));\n  background-image: linear-gradient(rgba(79, 36, 172, 0.85) 0%, rgba(79, 36, 172, 0.65) 100%);\n}\n.popup-menu-overlay.in {\n  opacity: 1;\n  visibility: visible;\n}\n.popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  z-index: 101;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.popup-menu-toggle.out {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n}\n.popup-menu-toggle.out:before {\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  border-radius: 5%;\n  bottom: 80px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 20px;\n  background-color: var(--ion-color-primary);\n  z-index: 102;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  -webkit-transition-delay: 0.15s;\n  transition-delay: 0.15s;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  display: -webkit-box;\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n.popup-menu-panel .popup-menu-item {\n  margin: auto;\n  -webkit-box-flex: 1 0 30%;\n  -moz-flex: 1 0 30%;\n  flex: 1 0 30%;\n  display: -webkit-box;\n  display: -moz-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  opacity: 0;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.popup-menu-panel .popup-menu-item ion-icon {\n  margin: 0 auto;\n  text-align: center;\n  color: #fff;\n}\n.popup-menu-panel .popup-menu-item span {\n  padding: 0;\n  margin: 0 0 auto 0;\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 500;\n  line-height: 18px;\n}\n.popup-menu-panel .popup-menu-item:active i {\n  color: #dd4135;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n}\n.popup-menu-panel .popup-menu-item:active span {\n  color: #dd4135;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n}\n.popup-menu-panel.in {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition-delay: 0s;\n  transition-delay: 0s;\n}\n.popup-menu-panel.in .popup-menu-item {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n  -webkit-transition-delay: 0.15s;\n  transition-delay: 0.15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9jb21wb25lbnRzL3BvcG1lbnUvcG9wbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L3BvcG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBRUEsNkhBQUE7RUFBQSwyRkFBQTtBQ0FKO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtBQ0FKO0FEQ0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtBQ0NSO0FEQVE7RUFDSSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0VaO0FER0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFHQSxrQkFBQTtFQUVBLGFBQUE7RUFJQSxlQUFBO0FDREo7QURFSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUdBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG9CQUFBO0VBR0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUVBLDJCQUFBO0VBRUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0VBQ0EsaUNBQUE7QUNBUjtBRENRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NaO0FEQ1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ1o7QURFWTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDQWhCO0FERVk7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ0FoQjtBRElJO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNGUjtBREdRO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcG1lbnUvcG9wbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBvcHVwIE1lbnUgLy9cbi5wb3B1cC1tZW51LW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDc5LDM2LDE3MiwgLjg1KSAwJSwgcmdiYSg3OSwzNiwxNzIsIC42NSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNzksMzYsMTcyLCAuODUpIDAlLCByZ2JhKDc5LDM2LDE3MiwgLjY1KSAxMDAlKTtcbiAgICAmLmluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICYub3V0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucG9wdXAtbWVudS1wYW5lbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAzMDBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJvdHRvbTogODBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB6LWluZGV4OiAxMDI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjE1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAucG9wdXAtbWVudS1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxIDAgMzAlO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIC1tb3otYm94LWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIC1tb3otZmxleDogMSAwIDMwJTtcbiAgICAgICAgLW1zLWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIGZsZXg6IDEgMCAzMCU7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIGF1dG8gMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIyMSw2NSw1Myk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIyMSw2NSw1Myk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmluIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgLnBvcHVwLW1lbnUtaXRlbSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogLjE1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucG9wdXAtbWVudS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDc5LCAzNiwgMTcyLCAwLjg1KSAwJSwgcmdiYSg3OSwgMzYsIDE3MiwgMC42NSkgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDc5LCAzNiwgMTcyLCAwLjg1KSAwJSwgcmdiYSg3OSwgMzYsIDE3MiwgMC42NSkgMTAwJSk7XG59XG4ucG9wdXAtbWVudS1vdmVybGF5LmluIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvcHVwLW1lbnUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLnBvcHVwLW1lbnUtdG9nZ2xlLm91dDpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5wb3B1cC1tZW51LXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBib3R0b206IDgwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB6LWluZGV4OiAxMDI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIHtcbiAgbWFyZ2luOiBhdXRvO1xuICAtd2Via2l0LWJveC1mbGV4OiAxIDAgMzAlO1xuICAtd2Via2l0LWZsZXg6IDEgMCAzMCU7XG4gIC1tb3otYm94LWZsZXg6IDEgMCAzMCU7XG4gIC1tb3otZmxleDogMSAwIDMwJTtcbiAgLW1zLWZsZXg6IDEgMCAzMCU7XG4gIGZsZXg6IDEgMCAzMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtIHNwYW4ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCBhdXRvIDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBpIHtcbiAgY29sb3I6ICNkZDQxMzU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG4ucG9wdXAtbWVudS1wYW5lbCAucG9wdXAtbWVudS1pdGVtOmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6ICNkZDQxMzU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG4ucG9wdXAtbWVudS1wYW5lbC5pbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG4ucG9wdXAtbWVudS1wYW5lbC5pbiAucG9wdXAtbWVudS1pdGVtIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: PopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmenuComponent", function() { return PopmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");




let PopmenuComponent = class PopmenuComponent {
    constructor(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.openMenu = false;
    }
    ngOnInit() {
    }
    togglePopupMenu() {
        return this.openMenu = !this.openMenu;
    }
    logout() {
        this.auth.logout();
    }
};
PopmenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
PopmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'popmenu',
        template: __webpack_require__(/*! raw-loader!./popmenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/popmenu/popmenu.component.html"),
        styles: [__webpack_require__(/*! ./popmenu.component.scss */ "./src/app/components/popmenu/popmenu.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], PopmenuComponent);



/***/ }),

/***/ "./src/app/pages/home-results/home-results.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPageModule", function() { return HomeResultsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/popmenu/popmenu.component */ "./src/app/components/popmenu/popmenu.component.ts");
/* harmony import */ var _home_results_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-results.page */ "./src/app/pages/home-results/home-results.page.ts");








const routes = [
    {
        path: '',
        component: _home_results_page__WEBPACK_IMPORTED_MODULE_7__["HomeResultsPage"]
    }
];
let HomeResultsPageModule = class HomeResultsPageModule {
};
HomeResultsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_results_page__WEBPACK_IMPORTED_MODULE_7__["HomeResultsPage"], _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_6__["PopmenuComponent"]]
    })
], HomeResultsPageModule);



/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card {\n  padding: 20px 0;\n  line-height: 20px;\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n:host ion-card .card-title {\n  font-size: 22px;\n  color: #04599e;\n  font-weight: bold;\n}\n:host ion-card .card-subtitle {\n  color: #052641;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmlkL2FiaWRQcm9qZWN0cy9WaXN3YS9pb25pY01hbmFnZW1lbnRBcHAvdGVzdC9tYW5hZ2Uvc3JjL2FwcC9wYWdlcy9ob21lLXJlc3VsdHMvaG9tZS1yZXN1bHRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL2hvbWUtcmVzdWx0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQ0FBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtFQUNBLGlEQUFBO0FDRFI7QURJSTtFQUlJLGVBQUE7RUFDQSxpQkFBQTtBQ0xSO0FEQ1E7RUFDSSxnQkFBQTtBQ0NaO0FER1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRFo7QURHUTtFQUNJLGNBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcmVzdWx0cy9ob21lLXJlc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB9XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgICYubm8tcmFkaXVzIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgLmNhcmQtdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBjb2xvcjogIzA0NTk5ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLXN1YnRpdGxle1xuICAgICAgICAgICAgY29sb3I6ICMwNTI2NDE7XG4gICAgICAgIH1cbiAgICB9XG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuOmhvc3QgaW9uLWNhcmQgLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMDQ1OTllO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjpob3N0IGlvbi1jYXJkIC5jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICMwNTI2NDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPage", function() { return HomeResultsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");



// Modals




// Call notifications test by Popover and Custom Component.


let HomeResultsPage = class HomeResultsPage {
    constructor(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, storage, router, apiService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.router = router;
        this.apiService = apiService;
        this.searchKey = '';
        this.yourLocation = '123 Test Street';
        this.themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
        this.value = {
            freelancers: 0,
            clients: 0,
            activeprojects: 0,
            projects: 0
        };
    }
    setCountry() {
        console.log('New country');
    }
    getValue(val) {
        const total = this.value[val];
        if (total > 0) {
            return total + " listing";
        }
        else {
            return '';
        }
    }
    ionViewWillEnter() {
        const ionSelects = document.querySelectorAll('ion-select');
        ionSelects.forEach((sel) => {
            sel.shadowRoot.querySelectorAll('.select-icon-inner')
                .forEach((elem) => {
                elem.setAttribute('style', 'display: none;');
            });
        });
        this.menuCtrl.enable(true);
        const self = this;
        this.storage.get('totalRecords').then(val => {
            if (val) {
                self.value = val;
            }
            else {
                self.storage.set('totalRecords', {
                    freelancers: 0,
                    projects: 0,
                    activeprojects: 0,
                    clients: 0
                });
            }
        });
    }
    settings() {
        this.navCtrl.navigateForward('settings');
    }
    alertLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const changeLocation = yield this.alertCtrl.create({
                header: 'Change Location',
                message: 'Type your Address.',
                inputs: [
                    {
                        name: 'location',
                        placeholder: 'Enter your new Location',
                        type: 'text'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Change',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            console.log('Change clicked', data);
                            this.yourLocation = data.location;
                            const toast = yield this.toastCtrl.create({
                                message: 'Location was change successfully',
                                duration: 3000,
                                position: 'top',
                                closeButtonText: 'OK',
                                showCloseButton: true
                            });
                            toast.present();
                        })
                    }
                ]
            });
            changeLocation.present();
        });
    }
    searchFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_3__["SearchFilterPage"]
            });
            return yield modal.present();
        });
    }
    presentImage(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_4__["ImagePage"],
                componentProps: { value: image }
            });
            return yield modal.present();
        });
    }
    notifications(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"],
                event: ev,
                animated: true,
                showBackdrop: true
            });
            return yield popover.present();
        });
    }
    gotoFrees() {
        this.navCtrl.navigateRoot('/freelancers');
    }
    gotoClients() {
        this.navCtrl.navigateRoot('/clients');
    }
    gotoProjects(project) {
        // this.navCtrl.navigateRoot('/projects');
        let navigationExtras = {
            state: {
                projectType: project
            }
        };
        this.router.navigate(['projects'], navigationExtras);
    }
};
HomeResultsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
];
HomeResultsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-results',
        template: __webpack_require__(/*! raw-loader!./home-results.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home-results/home-results.page.html"),
        styles: [__webpack_require__(/*! ./home-results.page.scss */ "./src/app/pages/home-results/home-results.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]])
], HomeResultsPage);



/***/ })

}]);
//# sourceMappingURL=pages-home-results-home-results-module-es2015.js.map