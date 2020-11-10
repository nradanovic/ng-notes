(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+iVp":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/notes/components/app-note-edit/app-note-edit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AppNoteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNoteEditComponent", function() { return AppNoteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/app-state/app-state.service */ "Tnqf");
/* harmony import */ var src_app_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/notes/notes.service */ "FusV");
/* harmony import */ var _shared_directives_hover_hover_color_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/hover/hover-color.directive */ "H94e");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class AppNoteEditComponent {
    constructor(noteService, appStateService) {
        this.noteService = noteService;
        this.appStateService = appStateService;
        this.hoverColor = '#B90445';
    }
    ngOnInit() {
        this.note = this.noteService.getNote(this.noteId);
    }
    close() {
        this.appStateService.showAllNotes();
    }
    saveNote() {
        if (this.appStateService.state.displayState === src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppDisplayStates"].NOTE_CREATE) {
            const newNoteId = this.noteService.addNote(this.note);
            this.noteId = newNoteId;
        }
        else if (this.appStateService.state.displayState === src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppDisplayStates"].NOTE_EDIT) {
            this.noteService.updateNote(this.noteId, this.note);
        }
        this.appStateService.previewNote(this.noteId);
    }
    deleteNote() {
        this.noteService.deleteNote(this.noteId);
        this.appStateService.showAllNotes();
    }
}
AppNoteEditComponent.ɵfac = function AppNoteEditComponent_Factory(t) { return new (t || AppNoteEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppStateService"])); };
AppNoteEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppNoteEditComponent, selectors: [["app-app-note-edit"]], inputs: { noteId: "noteId" }, decls: 13, vars: 4, consts: [[1, "note"], [1, "actions"], [1, "action", 3, "click"], ["width", "18", "height", "12", "viewBox", "0 0 18 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.5825 4.58248L3.4125 4.58249L6.2925 1.70248C6.6825 1.31248 6.6825 0.682484 6.2925 0.292484C6.10567 0.105232 5.85202 -1.0232e-06 5.5875 -9.7695e-07C5.32298 -9.307e-07 5.06933 0.105232 4.8825 0.292485L0.292501 4.88249C-0.0974991 5.27249 -0.097499 5.90249 0.292501 6.29249L4.8825 10.8825C5.2725 11.2725 5.9025 11.2725 6.2925 10.8825C6.6825 10.4925 6.6825 9.86248 6.2925 9.47248L3.4125 6.58249L16.5825 6.58248C17.1325 6.58248 17.5825 6.13248 17.5825 5.58248C17.5825 5.03248 17.1325 4.58248 16.5825 4.58248Z", "fill", "black", "fill-opacity", "0.57", 3, "hoverColor"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M14.59 0.59C14.21 0.21 13.7 0 13.17 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V4.83C18 4.3 17.79 3.79 17.41 3.42L14.59 0.59ZM9 16C7.34 16 6 14.66 6 13C6 11.34 7.34 10 9 10C10.66 10 12 11.34 12 13C12 14.66 10.66 16 9 16ZM4 6H10C11.1 6 12 5.1 12 4C12 2.9 11.1 2 10 2H4C2.9 2 2 2.9 2 4C2 5.1 2.9 6 4 6Z", "fill", "black", "fill-opacity", "0.54", 3, "hoverColor"], ["width", "14", "height", "18", "viewBox", "0 0 14 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.9844 0.984375V3H0.015625V0.984375H3.48438L4.51562 0H9.48438L10.5156 0.984375H13.9844ZM1 15.9844V3.98438H13V15.9844C13 16.5156 12.7969 16.9844 12.3906 17.3906C11.9844 17.7969 11.5156 18 10.9844 18H3.01562C2.48438 18 2.01562 17.7969 1.60938 17.3906C1.20312 16.9844 1 16.5156 1 15.9844Z", "fill", "#666666", 3, "hoverColor"], [1, "note-content"], ["id", "", "cols", "30", "rows", "10", 3, "ngModel", "ngModelChange"]], template: function AppNoteEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNoteEditComponent_Template_div_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNoteEditComponent_Template_div_click_5_listener() { return ctx.saveNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNoteEditComponent_Template_div_click_8_listener() { return ctx.deleteNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppNoteEditComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverColor", ctx.hoverColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverColor", ctx.hoverColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverColor", ctx.hoverColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note);
    } }, directives: [_shared_directives_hover_hover_color_directive__WEBPACK_IMPORTED_MODULE_3__["HoverColorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.25);\n}\n\n.note[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 320px;\n  right: 320px;\n  top: 60px;\n  bottom: 60px;\n  background: #ffffff;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n\n.note-content[_ngcontent-%COMP%] {\n  padding: 10px 68px 40px 60px;\n  line-height: 100%;\n  text-align: left;\n  vertical-align: Top;\n  word-spacing: 7px;\n  font-size: xx-large;\n}\n\n.actions[_ngcontent-%COMP%] {\n  padding: 50px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n\n.actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:first-of-type {\n  margin-right: auto;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  height: 100%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ub3Rlcy9jb21wb25lbnRzL2FwcC1ub3RlLWVkaXQvYXBwLW5vdGUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtBQUVKOztBQURJO0VBQ0Usa0JBQUE7QUFHTjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ub3Rlcy9jb21wb25lbnRzL2FwcC1ub3RlLWVkaXQvYXBwLW5vdGUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLm5vdGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAzMjBweDtcclxuICByaWdodDogMzIwcHg7XHJcbiAgdG9wOiA2MHB4O1xyXG4gIGJvdHRvbTogNjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxufVxyXG5cclxuLm5vdGUtY29udGVudCB7XHJcbiAgcGFkZGluZzogMTBweCA2OHB4IDQwcHggNjBweDtcclxuICBsaW5lLWhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBUb3A7XHJcbiAgd29yZC1zcGFjaW5nOiA3cHg7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAuYWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNoteEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-note-edit',
                templateUrl: './app-note-edit.component.html',
                styleUrls: ['./app-note-edit.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: src_app_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"] }, { type: src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppStateService"] }]; }, { noteId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\ng-notes\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FusV":
/*!******************************************************!*\
  !*** ./src/app/core/services/notes/notes.service.ts ***!
  \******************************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "Ug4g");




class NotesService {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.localStorageKey = 'Notes';
        this.notes$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.loadNotesFromLocalStorage();
        this.saveNotesToLocalStorageOnNotesChange();
    }
    loadNotesFromLocalStorage() {
        const savedNotes = this.localStorageService.getItem(this.localStorageKey);
        if (savedNotes) {
            this.notes$.next(new Map(savedNotes));
        }
    }
    saveNotesToLocalStorageOnNotesChange() {
        this.notes$.subscribe((notes) => this.localStorageService.setItem(this.localStorageKey, [...notes]));
    }
    addNote(note) {
        const newNoteid = Date.now();
        const newNotesMap = this.notes$.value.set(newNoteid, note);
        this.notes$.next(newNotesMap);
        return newNoteid;
    }
    updateNote(id, updatedNote) {
        const newNotesMap = this.notes$.value.set(id, updatedNote);
        this.notes$.next(newNotesMap);
    }
    deleteNote(id) {
        const newNotesMap = this.notes$.value;
        newNotesMap.delete(id);
        this.notes$.next(newNotesMap);
    }
    getNotes() {
        return this.notes$.asObservable();
    }
    getNote(id) {
        return this.notes$.value.get(id);
    }
}
NotesService.ɵfac = function NotesService_Factory(t) { return new (t || NotesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"])); };
NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesService, factory: NotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "H94e":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/hover/hover-color.directive.ts ***!
  \******************************************************************/
/*! exports provided: HoverColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverColorDirective", function() { return HoverColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HoverColorDirective {
    constructor(el) {
        this.el = el;
    }
    onMouseEnter() {
        this.onHover(this.hoverColor);
    }
    onMouseLeave() {
        this.onHover(null);
    }
    onHover(color) {
        this.el.nativeElement.style.fill = color;
    }
}
HoverColorDirective.ɵfac = function HoverColorDirective_Factory(t) { return new (t || HoverColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HoverColorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoverColorDirective, selectors: [["", "hoverColor", ""]], hostBindings: function HoverColorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HoverColorDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function HoverColorDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverColor: "hoverColor" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoverColorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[hoverColor]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { hoverColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hoverColor']
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "LSyF":
/*!***********************************************!*\
  !*** ./src/app/modules/notes/notes.module.ts ***!
  \***********************************************/
/*! exports provided: AppNotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNotesModule", function() { return AppNotesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_app_notes_grid_app_notes_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app-notes-grid/app-notes-grid.component */ "Punp");
/* harmony import */ var _components_app_note_preview_app_note_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app-note-preview/app-note-preview.component */ "ldXj");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _components_app_note_edit_app_note_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app-note-edit/app-note-edit.component */ "+iVp");
/* harmony import */ var _notes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes.component */ "aopE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");











class AppNotesModule {
}
AppNotesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppNotesModule });
AppNotesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppNotesModule_Factory(t) { return new (t || AppNotesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot(), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppNotesModule, { declarations: [_notes_component__WEBPACK_IMPORTED_MODULE_6__["NotesComponent"], _components_app_notes_grid_app_notes_grid_component__WEBPACK_IMPORTED_MODULE_2__["AppNotesGridComponent"], _components_app_note_preview_app_note_preview_component__WEBPACK_IMPORTED_MODULE_3__["AppNotePreviewComponent"], _components_app_note_edit_app_note_edit_component__WEBPACK_IMPORTED_MODULE_5__["AppNoteEditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]], exports: [_notes_component__WEBPACK_IMPORTED_MODULE_6__["NotesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNotesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_notes_component__WEBPACK_IMPORTED_MODULE_6__["NotesComponent"], _components_app_notes_grid_app_notes_grid_component__WEBPACK_IMPORTED_MODULE_2__["AppNotesGridComponent"], _components_app_note_preview_app_note_preview_component__WEBPACK_IMPORTED_MODULE_3__["AppNotePreviewComponent"], _components_app_note_edit_app_note_edit_component__WEBPACK_IMPORTED_MODULE_5__["AppNoteEditComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot(), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
                exports: [_notes_component__WEBPACK_IMPORTED_MODULE_6__["NotesComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_hover_hover_color_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/hover/hover-color.directive */ "H94e");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_hover_hover_color_directive__WEBPACK_IMPORTED_MODULE_2__["HoverColorDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directives_hover_hover_color_directive__WEBPACK_IMPORTED_MODULE_2__["HoverColorDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_directives_hover_hover_color_directive__WEBPACK_IMPORTED_MODULE_2__["HoverColorDirective"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_directives_hover_hover_color_directive__WEBPACK_IMPORTED_MODULE_2__["HoverColorDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Punp":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/notes/components/app-notes-grid/app-notes-grid.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AppNotesGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNotesGridComponent", function() { return AppNotesGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/app-state/app-state.service */ "Tnqf");
/* harmony import */ var src_app_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/notes/notes.service */ "FusV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");







function AppNotesGridComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotesGridComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.previewNote(note_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "markdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r1.value);
} }
class AppNotesGridComponent {
    constructor(notesService, appStateService) {
        this.notesService = notesService;
        this.appStateService = appStateService;
        this.appStates = src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppDisplayStates"];
    }
    createNewNote() {
        this.appStateService.createNewNote();
    }
    editNote(noteId) {
        this.appStateService.editNote(noteId);
    }
    previewNote(noteId) {
        this.appStateService.previewNote(noteId);
    }
}
AppNotesGridComponent.ɵfac = function AppNotesGridComponent_Factory(t) { return new (t || AppNotesGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppStateService"])); };
AppNotesGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppNotesGridComponent, selectors: [["app-app-notes-grid"]], decls: 5, vars: 5, consts: [[1, "note-card", "new-note", 3, "click"], ["class", "note-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "note-card", 3, "click"]], template: function AppNotesGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotesGridComponent_Template_div_click_0_listener() { return ctx.createNewNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppNotesGridComponent_div_2_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.notesService.getNotes())));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  padding: 89px 100px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.note-card[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 200px;\n  height: 200px;\n  margin: 31px 30px;\n  border-radius: 10px;\n  display: grid;\n  background: #fdfdfd;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);\n  border: 3px solid transparent;\n  padding: 20px 22px 17px 16px;\n  overflow: hidden;\n}\n\n.note-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 3px solid #b90445;\n}\n\n.note-card.new-note[_ngcontent-%COMP%] {\n  background: #b90445;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 64px;\n  line-height: 75px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #ffffff;\n  justify-content: center;\n}\n\n  ul {\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ub3Rlcy9jb21wb25lbnRzL2FwcC1ub3Rlcy1ncmlkL2FwcC1ub3Rlcy1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25vdGVzL2NvbXBvbmVudHMvYXBwLW5vdGVzLWdyaWQvYXBwLW5vdGVzLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcGFkZGluZzogODlweCAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm5vdGUtY2FyZCB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luOiAzMXB4IDMwcHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDIwcHggMjJweCAxN3B4IDE2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNiOTA0NDU7XHJcbiAgfVxyXG4gICYubmV3LW5vdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2I5MDQ0NTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuOjpuZy1kZWVwIHVsIHtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNotesGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-notes-grid',
                templateUrl: './app-notes-grid.component.html',
                styleUrls: ['./app-notes-grid.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: src_app_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"] }, { type: src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppStateService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_notes_notes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/notes/notes.component */ "aopE");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-notes");
    } }, directives: [_modules_notes_notes_component__WEBPACK_IMPORTED_MODULE_1__["NotesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "Tnqf":
/*!**************************************************************!*\
  !*** ./src/app/core/services/app-state/app-state.service.ts ***!
  \**************************************************************/
/*! exports provided: AppDisplayStates, AppStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDisplayStates", function() { return AppDisplayStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStateService", function() { return AppStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var AppDisplayStates;
(function (AppDisplayStates) {
    AppDisplayStates[AppDisplayStates["NOTES_GRID"] = 0] = "NOTES_GRID";
    AppDisplayStates[AppDisplayStates["NOTE_CREATE"] = 1] = "NOTE_CREATE";
    AppDisplayStates[AppDisplayStates["NOTE_PREVIEW"] = 2] = "NOTE_PREVIEW";
    AppDisplayStates[AppDisplayStates["NOTE_EDIT"] = 3] = "NOTE_EDIT";
})(AppDisplayStates || (AppDisplayStates = {}));
class AppStateService {
    constructor() {
        this.appInitialState = {
            displayState: AppDisplayStates.NOTES_GRID,
        };
        this.appState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.appInitialState);
    }
    get state() {
        return this.appState$.value;
    }
    getState() {
        return this.appState$.asObservable();
    }
    updateState(state) {
        this.appState$.next(state);
    }
    showAllNotes() {
        this.appState$.next({
            displayState: AppDisplayStates.NOTES_GRID,
        });
    }
    createNewNote() {
        this.appState$.next({
            displayState: AppDisplayStates.NOTE_CREATE,
            noteId: null,
        });
    }
    previewNote(noteId) {
        this.appState$.next({
            displayState: AppDisplayStates.NOTE_PREVIEW,
            noteId,
        });
    }
    editNote(noteId) {
        this.appState$.next({
            displayState: AppDisplayStates.NOTE_EDIT,
            noteId,
        });
    }
}
AppStateService.ɵfac = function AppStateService_Factory(t) { return new (t || AppStateService)(); };
AppStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppStateService, factory: AppStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ug4g":
/*!**********************************************************************!*\
  !*** ./src/app/core/services/local-storage/local-storage.service.ts ***!
  \**********************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalStorageService {
    setItem(key, content) {
        const stringifyContent = JSON.stringify(content);
        try {
            localStorage.setItem(key, stringifyContent);
        }
        catch (error) {
            return;
        }
    }
    getItem(key) {
        const storageContent = localStorage.getItem(key);
        if (storageContent) {
            try {
                return JSON.parse(storageContent);
            }
            catch (error) {
                return null;
            }
        }
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_notes_notes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/notes/notes.module */ "LSyF");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "pKmL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"].forRoot(), _modules_notes_notes_module__WEBPACK_IMPORTED_MODULE_4__["AppNotesModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"], _modules_notes_notes_module__WEBPACK_IMPORTED_MODULE_4__["AppNotesModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_2__["MarkdownModule"].forRoot(), _modules_notes_notes_module__WEBPACK_IMPORTED_MODULE_4__["AppNotesModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aopE":
/*!**************************************************!*\
  !*** ./src/app/modules/notes/notes.component.ts ***!
  \**************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/app-state/app-state.service */ "Tnqf");
/* harmony import */ var _components_app_notes_grid_app_notes_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app-notes-grid/app-notes-grid.component */ "Punp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_app_note_preview_app_note_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app-note-preview/app-note-preview.component */ "ldXj");
/* harmony import */ var _components_app_note_edit_app_note_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app-note-edit/app-note-edit.component */ "+iVp");








function NotesComponent_ng_container_1_app_app_note_preview_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-app-note-preview", 2);
} if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("noteId", state_r1.noteId);
} }
function NotesComponent_ng_container_1_app_app_note_edit_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-app-note-edit", 2);
} if (rf & 2) {
    const state_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("noteId", state_r1.noteId);
} }
function NotesComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotesComponent_ng_container_1_app_app_note_preview_1_Template, 1, 1, "app-app-note-preview", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotesComponent_ng_container_1_app_app_note_edit_2_Template, 1, 1, "app-app-note-edit", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const state_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", state_r1.displayState === ctx_r0.appStates.NOTE_PREVIEW);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", state_r1.displayState === ctx_r0.appStates.NOTE_EDIT || state_r1.displayState === ctx_r0.appStates.NOTE_CREATE);
} }
class NotesComponent {
    constructor(appStateService) {
        this.appStateService = appStateService;
        this.appStates = _core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppDisplayStates"];
    }
}
NotesComponent.ɵfac = function NotesComponent_Factory(t) { return new (t || NotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppStateService"])); };
NotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesComponent, selectors: [["app-notes"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "noteId", 4, "ngIf"], [3, "noteId"]], template: function NotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-app-notes-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotesComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.appStateService.getState()));
    } }, directives: [_components_app_notes_grid_app_notes_grid_component__WEBPACK_IMPORTED_MODULE_2__["AppNotesGridComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_app_note_preview_app_note_preview_component__WEBPACK_IMPORTED_MODULE_4__["AppNotePreviewComponent"], _components_app_note_edit_app_note_edit_component__WEBPACK_IMPORTED_MODULE_5__["AppNoteEditComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbm90ZXMvbm90ZXMuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notes',
                templateUrl: './notes.component.html',
                styleUrls: ['./notes.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_1__["AppStateService"] }]; }, null); })();


/***/ }),

/***/ "ldXj":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/notes/components/app-note-preview/app-note-preview.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AppNotePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNotePreviewComponent", function() { return AppNotePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/notes/notes.service */ "FusV");
/* harmony import */ var src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/app-state/app-state.service */ "Tnqf");
/* harmony import */ var _shared_directives_hover_hover_color_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/hover/hover-color.directive */ "H94e");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");






class AppNotePreviewComponent {
    constructor(noteService, appStateService) {
        this.noteService = noteService;
        this.appStateService = appStateService;
        this.hoverColor = '#B90445';
    }
    ngOnInit() {
        this.note = this.noteService.getNote(this.noteId);
    }
    close() {
        this.appStateService.showAllNotes();
    }
    openEditMode() {
        this.appStateService.editNote(this.noteId);
    }
    deleteNote() {
        this.noteService.deleteNote(this.noteId);
        this.appStateService.showAllNotes();
    }
}
AppNotePreviewComponent.ɵfac = function AppNotePreviewComponent_Factory(t) { return new (t || AppNotePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_2__["AppStateService"])); };
AppNotePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppNotePreviewComponent, selectors: [["app-app-note-preview"]], inputs: { noteId: "noteId" }, decls: 14, vars: 4, consts: [[1, "note"], [1, "actions"], [1, "action"], ["width", "18", "height", "12", "viewBox", "0 0 18 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 3, "click"], ["d", "M16.5825 4.58248L3.4125 4.58249L6.2925 1.70248C6.6825 1.31248 6.6825 0.682484 6.2925 0.292484C6.10567 0.105232 5.85202 -1.0232e-06 5.5875 -9.7695e-07C5.32298 -9.307e-07 5.06933 0.105232 4.8825 0.292485L0.292501 4.88249C-0.0974991 5.27249 -0.097499 5.90249 0.292501 6.29249L4.8825 10.8825C5.2725 11.2725 5.9025 11.2725 6.2925 10.8825C6.6825 10.4925 6.6825 9.86248 6.2925 9.47248L3.4125 6.58249L16.5825 6.58248C17.1325 6.58248 17.5825 6.13248 17.5825 5.58248C17.5825 5.03248 17.1325 4.58248 16.5825 4.58248Z", "fill", "black", "fill-opacity", "0.57", 3, "hoverColor"], [1, "action", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M18.7088 3.63126C19.0988 4.02127 19.0988 4.65127 18.7088 5.04127L16.8788 6.87126L13.1288 3.12126L14.9588 1.29126C15.1456 1.10401 15.3993 0.998779 15.6638 0.998779C15.9283 0.998779 16.1819 1.10401 16.3688 1.29126L18.7088 3.63126ZM0.998779 18.5013V15.4613C0.998779 15.3213 1.04878 15.2013 1.14878 15.1013L12.0588 4.19126L15.8088 7.94127L4.88878 18.8513C4.79878 18.9513 4.66878 19.0013 4.53878 19.0013H1.49878C1.21878 19.0013 0.998779 18.7813 0.998779 18.5013Z", "fill", "black", "fill-opacity", "0.54", 3, "hoverColor"], ["width", "14", "height", "18", "viewBox", "0 0 14 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.9844 0.984375V3H0.015625V0.984375H3.48438L4.51562 0H9.48438L10.5156 0.984375H13.9844ZM1 15.9844V3.98438H13V15.9844C13 16.5156 12.7969 16.9844 12.3906 17.3906C11.9844 17.7969 11.5156 18 10.9844 18H3.01562C2.48438 18 2.01562 17.7969 1.60938 17.3906C1.20312 16.9844 1 16.5156 1 15.9844Z", "fill", "#666666", 3, "hoverColor"], [1, "note-content"]], template: function AppNotePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotePreviewComponent_Template__svg_svg_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotePreviewComponent_Template_div_click_5_listener() { return ctx.openEditMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppNotePreviewComponent_Template_div_click_8_listener() { return ctx.deleteNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "markdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverColor", ctx.hoverColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverColor", ctx.hoverColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverColor", ctx.hoverColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", ctx.note, "\n    ");
    } }, directives: [_shared_directives_hover_hover_color_directive__WEBPACK_IMPORTED_MODULE_3__["HoverColorDirective"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownComponent"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.25);\n}\n\n.note[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 320px;\n  right: 320px;\n  top: 60px;\n  bottom: 60px;\n  background: #ffffff;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n\n.note-content[_ngcontent-%COMP%] {\n  padding: 10px 68px 40px 60px;\n  line-height: 100%;\n  text-align: left;\n  vertical-align: Top;\n  word-spacing: 7px;\n  font-size: xx-large;\n  overflow: auto;\n}\n\n.actions[_ngcontent-%COMP%] {\n  padding: 50px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n\n.actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:first-of-type {\n  margin-right: auto;\n}\n\n  ul {\n  padding: 0 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ub3Rlcy9jb21wb25lbnRzL2FwcC1ub3RlLXByZXZpZXcvYXBwLW5vdGUtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFBRTtFQUNFLGFBQUE7QUFFSjs7QUFESTtFQUNFLGtCQUFBO0FBR047O0FBQ0E7RUFDRSxlQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25vdGVzL2NvbXBvbmVudHMvYXBwLW5vdGUtcHJldmlldy9hcHAtbm90ZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IDBweDtcclxuICBib3R0b206IDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4ubm90ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMyMHB4O1xyXG4gIHJpZ2h0OiAzMjBweDtcclxuICB0b3A6IDYwcHg7XHJcbiAgYm90dG9tOiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG59XHJcblxyXG4ubm90ZS1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMHB4IDY4cHggNDBweCA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IFRvcDtcclxuICB3b3JkLXNwYWNpbmc6IDdweDtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC5hY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuOjpuZy1kZWVwIHVsIHtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbn1cclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNotePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-note-preview',
                templateUrl: './app-note-preview.component.html',
                styleUrls: ['./app-note-preview.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: src_app_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"] }, { type: src_app_core_services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_2__["AppStateService"] }]; }, { noteId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/notes/notes.service */ "FusV");
/* harmony import */ var _services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/app-state/app-state.service */ "Tnqf");
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/local-storage/local-storage.service */ "Ug4g");






class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"], _services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_3__["AppStateService"], _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"], _services_app_state_app_state_service__WEBPACK_IMPORTED_MODULE_3__["AppStateService"], _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map