(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* Classes Naming convention is followed by BEM */\n/* Classes Naming convention is followed by BEM */\n.header__wrapper {\n  background: #6400f2;\n  height: 50px;\n}\n.header__logo.mat-grid-tile .mat-figure {\n  justify-content: flex-start;\n  height: 100%;\n}\n.header__logo.mat-grid-tile .mat-figure h1 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 20px;\n  color: #fff;\n  font-weight: 400;\n  padding-left: 20px;\n}\n.header__nav.mat-grid-tile .mat-figure {\n  justify-content: flex-end;\n  height: 100%;\n}\n.header__nav nav {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.header__nav nav a {\n  color: #fff;\n  padding: 5px;\n  text-decoration: none;\n  min-width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header__nav nav a:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n/* Classes Naming convention is followed by BEM */\n.rate-card__container {\n  width: 60%;\n  margin: 0 auto;\n}\n@media (max-width: 1024px) {\n  .rate-card__container {\n    width: 90%;\n  }\n}\n.rate-card__container .rate-card__items {\n  background: #cccccc;\n  max-width: 400px;\n  margin-top: 100px;\n  margin-bottom: 10px;\n  margin-top: 100px;\n  opacity: 1;\n  pointer-events: auto;\n}\n.rate-card__container .rate-card__items.type1 {\n  background: #979797;\n}\n.rate-card__container .rate-card__items.type2 {\n  background: #3B86FF;\n}\n.rate-card__container .rate-card__items.type3 {\n  background: #8B68EE;\n}\n.rate-card__container .rate-card__items.type4 {\n  background: #EE3541;\n}\n@media (max-width: 1024px) {\n  .rate-card__container .rate-card__items {\n    max-width: 100%;\n    position: relative !important;\n    width: 100% !important;\n    left: auto !important;\n    margin-top: 20px;\n    height: 320px !important;\n  }\n}\n@media (max-width: 800px) {\n  .rate-card__container .rate-card__items {\n    height: 250px !important;\n  }\n}\n.rate-card__container .rate-card__items figure {\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  justify-content: flex-start;\n}\n.rate-card__container .rate-card__items h1 {\n  font-size: 1.6em;\n  color: #fff;\n  font-weight: normal;\n  text-align: left;\n  width: 96%;\n  padding: 2%;\n  margin: 0;\n}\n.rate-card__container .rate-card__items .rate-card__price {\n  font-weight: normal;\n  text-align: center;\n  font-size: 50px;\n}\n.rate-card__container .rate-card__items .rate-card__details {\n  font-size: 18px;\n  text-align: left;\n  width: 95%;\n  padding: 5%;\n  text-align: center;\n}\n.rate-card__container .rate-card__items button {\n  width: 120px;\n  height: 35px;\n  border-radius: 4px;\n  font-size: 15px;\n  color: #3B86FF;\n  font-weight: 300;\n  text-transform: uppercase;\n}\n.rate-card__container .rate-card__items.disable {\n  opacity: 0.5;\n  pointer-events: none;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaWRodS9Eb2N1bWVudHMvQmlkaHUvd2F0ZXJzX2FuZ3VsYXJfaW50ZXJ2aWV3X3Byb2dyYW0vbXktYXBwL3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9iaWRodS9Eb2N1bWVudHMvQmlkaHUvd2F0ZXJzX2FuZ3VsYXJfaW50ZXJ2aWV3X3Byb2dyYW0vbXktYXBwL3NyYy9hc3NldHMvc2Nzcy9oZWFkZXIuc2NzcyIsIi9Vc2Vycy9iaWRodS9Eb2N1bWVudHMvQmlkaHUvd2F0ZXJzX2FuZ3VsYXJfaW50ZXJ2aWV3X3Byb2dyYW0vbXktYXBwL3NyYy9hc3NldHMvc2Nzcy9tYWlubmF2aWdhdGlvbnMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9iaWRodS9Eb2N1bWVudHMvQmlkaHUvd2F0ZXJzX2FuZ3VsYXJfaW50ZXJ2aWV3X3Byb2dyYW0vbXktYXBwL3NyYy9hc3NldHMvc2Nzcy9yYXRlY2FyZC5zY3NzIiwiL1VzZXJzL2JpZGh1L0RvY3VtZW50cy9CaWRodS93YXRlcnNfYW5ndWxhcl9pbnRlcnZpZXdfcHJvZ3JhbS9teS1hcHAvc3JjL2Fzc2V0cy9zY3NzL21peGlucy5zY3NzIiwiL1VzZXJzL2JpZGh1L0RvY3VtZW50cy9CaWRodS93YXRlcnNfYW5ndWxhcl9pbnRlcnZpZXdfcHJvZ3JhbS9teS1hcHAvc3JjL2Fzc2V0cy9zY3NzL2NvbW1vbnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUEsaURBQUE7QUNBQSxpREFBQTtBREVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FFRUo7QUZHUTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBRUFaO0FGQ1k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUVDaEI7QUZNUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBRUhaO0FGTUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FFSlI7QUZLUTtFQ2hDSixXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDOEJKO0FEN0JJO0VBQ0ksb0NBQUE7QUMrQlI7QUN6Q0EsaURBQUE7QUFDQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FENENKO0FDM0NJO0VBSEo7SUFJUSxVQUFBO0VEOENOO0FBQ0Y7QUM3Q0k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBYUEsVUFBQTtFQUNJLG9CQUFBO0FEbUNaO0FFM0RRO0VBQ0ksbUJBQUE7QUY2RFo7QUU5RFE7RUFDSSxtQkFBQTtBRmdFWjtBRWpFUTtFQUNJLG1CQUFBO0FGbUVaO0FFcEVRO0VBQ0ksbUJBQUE7QUZzRVo7QUMzRFE7RUFQSjtJQVFRLGVBQUE7SUFDQSw2QkFBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUNBLHdCQUFBO0VEOERWO0FBQ0Y7QUM3RFE7RUFmSjtJQWdCUSx3QkFBQTtFRGdFVjtBQUNGO0FDN0RRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FEK0RaO0FDN0RRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRCtEWjtBQzdEUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEK0RaO0FDN0RRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRCtEWjtBQzdEUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUQrRFo7QUM3RFE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUQrRFo7QUgxSEE7RUFDSSxTTVBTO0VOUVQsVU1QVTtFTlFWLHFCTVBnQjtBSG9JcEIiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCBcImFzc2V0cy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcImFzc2V0cy9zY3NzL2NvbW1vbnN0eWxlc1wiO1xuQGltcG9ydCBcImFzc2V0cy9zY3NzL2hlYWRlclwiO1xuQGltcG9ydCBcImFzc2V0cy9zY3NzL3JhdGVjYXJkXCI7XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAkYm9keW1hcmdpbjtcbiAgICBwYWRkaW5nOiAkYm9keXBhZGRpbmc7XG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udGZhbWlseTtcbn0iLCIvKiBDbGFzc2VzIE5hbWluZyBjb252ZW50aW9uIGlzIGZvbGxvd2VkIGJ5IEJFTSAqL1xuQGltcG9ydCBcIm1haW5uYXZpZ2F0aW9uc1wiO1xuLmhlYWRlcl9fd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kOiAjNjQwMGYyO1xuICAgIGhlaWdodDogNTBweDtcblxufVxuLmhlYWRlcl9fbG9nb3tcbiAgICAmLm1hdC1ncmlkLXRpbGUge1xuICAgICAgICAubWF0LWZpZ3VyZXtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uaGVhZGVyX19uYXYge1xuICAgICYubWF0LWdyaWQtdGlsZSB7XG4gICAgICAgIC5tYXQtZmlndXJle1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuYXZ7IFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGF7XG4gICAgICAgICAgICBAaW5jbHVkZSBoZWFkZXItbWVudVN0eWxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLyogQ2xhc3NlcyBOYW1pbmcgY29udmVudGlvbiBpcyBmb2xsb3dlZCBieSBCRU0gKi9cbkBtaXhpbiBoZWFkZXItbWVudVN0eWxle1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgfVxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qIENsYXNzZXMgTmFtaW5nIGNvbnZlbnRpb24gaXMgZm9sbG93ZWQgYnkgQkVNICovXG4vKiBDbGFzc2VzIE5hbWluZyBjb252ZW50aW9uIGlzIGZvbGxvd2VkIGJ5IEJFTSAqL1xuLmhlYWRlcl9fd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICM2NDAwZjI7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmhlYWRlcl9fbG9nby5tYXQtZ3JpZC10aWxlIC5tYXQtZmlndXJlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaGVhZGVyX19sb2dvLm1hdC1ncmlkLXRpbGUgLm1hdC1maWd1cmUgaDEge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5oZWFkZXJfX25hdi5tYXQtZ3JpZC10aWxlIC5tYXQtZmlndXJlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhlYWRlcl9fbmF2IG5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5oZWFkZXJfX25hdiBuYXYgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX25hdiBuYXYgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLyogQ2xhc3NlcyBOYW1pbmcgY29udmVudGlvbiBpcyBmb2xsb3dlZCBieSBCRU0gKi9cbi5yYXRlLWNhcmRfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAucmF0ZS1jYXJkX19jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbi5yYXRlLWNhcmRfX2NvbnRhaW5lciAucmF0ZS1jYXJkX19pdGVtcyB7XG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4ucmF0ZS1jYXJkX19jb250YWluZXIgLnJhdGUtY2FyZF9faXRlbXMudHlwZTEge1xuICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xufVxuLnJhdGUtY2FyZF9fY29udGFpbmVyIC5yYXRlLWNhcmRfX2l0ZW1zLnR5cGUyIHtcbiAgYmFja2dyb3VuZDogIzNCODZGRjtcbn1cbi5yYXRlLWNhcmRfX2NvbnRhaW5lciAucmF0ZS1jYXJkX19pdGVtcy50eXBlMyB7XG4gIGJhY2tncm91bmQ6ICM4QjY4RUU7XG59XG4ucmF0ZS1jYXJkX19jb250YWluZXIgLnJhdGUtY2FyZF9faXRlbXMudHlwZTQge1xuICBiYWNrZ3JvdW5kOiAjRUUzNTQxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAucmF0ZS1jYXJkX19jb250YWluZXIgLnJhdGUtY2FyZF9faXRlbXMge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDogMzIwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5yYXRlLWNhcmRfX2NvbnRhaW5lciAucmF0ZS1jYXJkX19pdGVtcyB7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICB9XG59XG4ucmF0ZS1jYXJkX19jb250YWluZXIgLnJhdGUtY2FyZF9faXRlbXMgZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmZmY7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5yYXRlLWNhcmRfX2NvbnRhaW5lciAucmF0ZS1jYXJkX19pdGVtcyBoMSB7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogOTYlO1xuICBwYWRkaW5nOiAyJTtcbiAgbWFyZ2luOiAwO1xufVxuLnJhdGUtY2FyZF9fY29udGFpbmVyIC5yYXRlLWNhcmRfX2l0ZW1zIC5yYXRlLWNhcmRfX3ByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG59XG4ucmF0ZS1jYXJkX19jb250YWluZXIgLnJhdGUtY2FyZF9faXRlbXMgLnJhdGUtY2FyZF9fZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yYXRlLWNhcmRfX2NvbnRhaW5lciAucmF0ZS1jYXJkX19pdGVtcyBidXR0b24ge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjM0I4NkZGO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnJhdGUtY2FyZF9fY29udGFpbmVyIC5yYXRlLWNhcmRfX2l0ZW1zLmRpc2FibGUge1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn0iLCIvKiBDbGFzc2VzIE5hbWluZyBjb252ZW50aW9uIGlzIGZvbGxvd2VkIGJ5IEJFTSAqL1xuLnJhdGUtY2FyZF9fY29udGFpbmVye1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRsYXlvdXQtYnJlYWtwb2ludC1zbWFsbCkge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICAucmF0ZS1jYXJkX19pdGVtc3tcbiAgICAgICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBAaW5jbHVkZSByZXNldC1saXN0KCk7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbGF5b3V0LWJyZWFrcG9pbnQtc21hbGwpIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRsYXlvdXQtYnJlYWtwb2ludHMtZXh0cmEtc21hbGwpIHtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIGZpZ3VyZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgaDF7XG4gICAgICAgICAgICBmb250LXNpemU6ICAxLjZlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnJhdGUtY2FyZF9fcHJpY2V7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yYXRlLWNhcmRfX2RldGFpbHN7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjM0I4NkZGO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgICAgJi5kaXNhYmxle1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1peGluIHJlc2V0LWxpc3Qge1xuICAgIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkYmdjb2xvcnMge1xuICAgICAgICAmLiN7JGtleX17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjeyR2YWx1ZX1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIkYm9keW1hcmdpbjogMDtcbiRib2R5cGFkZGluZzogMDtcbiRkZWZhdWx0Rm9udGZhbWlseTogJ1JvYm90byc7XG4kbGF5b3V0LWJyZWFrcG9pbnQtc21hbGw6ICcxMDI0cHgnO1xuJGxheW91dC1icmVha3BvaW50cy1leHRyYS1zbWFsbDogJzgwMHB4JztcbiRiZ2NvbG9yczogKFwidHlwZTFcIjogXCIjOTc5Nzk3XCIsIFwidHlwZTJcIjogXCIjM0I4NkZGXCIsIFwidHlwZTNcIjogXCIjOEI2OEVFXCIsIFwidHlwZTRcIjogXCIjRUUzNTQxXCIpO1xuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bidhu/Documents/Bidhu/waters_angular_interview_program/my-app/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map