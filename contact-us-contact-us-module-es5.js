(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- wrapper -->\r\n<div class=\"wrapper\" id=\"contact-us\">\r\n    <!-- about-me-intro -->\r\n    <section class=\"section bg-parallax page-intro text-center\" data-background=\"assets/images/contact-locations.jpg\">\r\n        <div class=\"bg-overlay\" style=\"opacity: 0.3\"></div>\r\n        <div class=\"container\">\r\n            <h1>CONTACT US</h1>\r\n            <h3>RELY ON US FOR YOUR FUTURE</h3>\r\n        </div>\r\n    </section>\r\n    <!-- icon-box -->\r\n    <section class=\"section section-form section-form-reserve section-contact-form-2\">\r\n        <div class=\"container\">\r\n            <div class=\"section-form-header text-center\">\r\n                <div class=\"section-form-header-icon\">\r\n                    <i class=\"dslc-icon dslc-icon-as-globe\"></i>\r\n                </div>\r\n                <h3>\r\n                    Nexgile is a Great Support\r\n                </h3>\r\n                <p>\r\n                    \"We're here to help you with a great team\"\r\n                </p>\r\n                <div class=\"divider divider-line-heading divider-fullwidth\">\r\n                    <div class=\"line-middle\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"section-form-content\">\r\n                <div class=\"col-md-12 icon-box-area\" style=\"float: none !important;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div id=\"card-india\" class=\"icon-box-type-7 clearfix address-card-outer\">\r\n                                <div class=\"icon-box-header address-card-icon\">\r\n                                    <div class=\"icon-box-icon address-card-icon-box\">\r\n                                        <i class=\"dslc-icon dslc-icon-as-location\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"icon-box-content address-card-content\">\r\n                                    <h3>\r\n                                        INDIA\r\n                                    </h3>\r\n                                    <p>4th Floor, Tower B, Win Win Towers, <br>JNTU-Hi-Tech City Main Road, Hi-Tech City, <br>Madhapur, Hyderabad, Telangana - 500081, INDIA</p>\r\n                                    <p>Phone: +91 40 2970 2266</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div id=\"card-usa\" class=\"icon-box-type-7 clearfix address-card-outer\">\r\n                                <div class=\"icon-box-header address-card-icon\">\r\n                                    <div class=\"icon-box-icon address-card-icon-box\">\r\n                                        <i class=\"dslc-icon dslc-icon-as-paperplane\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"icon-box-content address-card-content\">\r\n                                    <h3>\r\n                                        USA\r\n                                    </h3>\r\n                                    <p>215 Fourier Ave # 140, Fremont, <br>CA 94587, USA</p>\r\n                                    <p>Phone: +1 218 499 9906 <br> Phone: +1 415 992 7668</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div id=\"card-aus\" class=\"icon-box-type-7 clearfix address-card-outer\">\r\n                                <div class=\"icon-box-header address-card-icon\">\r\n                                    <div class=\"icon-box-icon address-card-icon-box\">\r\n                                        <i class=\"glyphicon glyphicon-pushpin\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"icon-box-content address-card-content\">\r\n                                    <h3>\r\n                                        Australia\r\n                                    </h3>\r\n                                    <p>2/13-17, Llewellyn Street, <br>Rhodes NSW-2138, Australia</p>\r\n                                    <p>Phone: +61 406953563 </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"form-messages\"></div>\r\n                <form id=\"contact-us-form\" (submit)=\"sendClientContactInfo($event)\" class=\"monalisa-form monalisa\">\r\n                    <div class=\"row\">\r\n                        <div class=\"card aling-padding card-getintouch-style mt-4 col-xs-12 col-sm-6 col-md-6\">\r\n                            <div style=\"width: 75%\">\r\n                                <p class=\"head text-left\">Get In Touch</p>\r\n                            </div>\r\n\r\n                            <div class=\"input-group\" style=\"width: 75%;\">\r\n                                <input (change)=\"onInputValueChange('inputName')\" type=\"text\" class=\"form-control added-Style radious_zero\" required id=\"inputName\">\r\n                                <label style=\"left: 7px;z-index:9;\" class=\"input-pop-label\" id=\"labelinputName\" for=\"exampleInputName\">Name</label>\r\n                            </div>\r\n\r\n                            <div class=\"input-group\" style=\"width: 75%;\">\r\n                                <input (change)=\"onInputValueChange('inputReachEmail')\" type=\"text\" class=\"form-control added-Style radious_zero\" required id=\"inputReachEmail\">\r\n                                <label style=\"left: 7px;z-index:9;\" class=\"input-pop-label\" id=\"labelinputReachEmail\" for=\"exampleInputEmail\">Email</label>\r\n                            </div>\r\n\r\n                            <div class=\"input-group\" style=\"width: 75%;\">\r\n                                <input (change)=\"onInputValueChange('inputSubject')\" type=\"text\" class=\"form-control added-Style radious_zero\" required id=\"inputSubject\">\r\n                                <label style=\"left: 7px;z-index:9;\" class=\"input-pop-label\" id=\"labelinputSubject\" for=\"exampleInputSubject\">Subject</label>\r\n                            </div>\r\n\r\n                            <div style=\"width: 75% !important;\">\r\n                                <fieldset class=\"form-group \">\r\n                                    <textarea style=\"padding-top: 10px;padding-left: 30px;width: 100% !important;height: auto;\" (change)=\"onInputValueChange('inputDescription')\" rows=\"3\" type=\"text\" class=\"form-control added-Style radious_zero\" required id=\"inputDescription\"></textarea>\r\n                                    <label style=\"left: 7px;\" class=\"input-pop-label\" id=\"labelinputDescription\" for=\"exampleInputDescription\">Description</label>\r\n                                </fieldset>\r\n                            </div>\r\n                            <div class=\"submit-button-container text-left\">\r\n                                <button class=\"submit-button btn btn-warning btn-lg btn-black\">\r\n                                    Submit\r\n                                </button>\r\n                            </div>\r\n                            <div *ngIf=\"showContactProgressBar\" class=\"row pl-0 ml-0 progress-bar-contaier\">\r\n                                <div class=\"progress-div container align-self-center\">\r\n                                    <div class=\"progress mx-5\" style=\"height: 3rem;\">\r\n                                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-xs-12 col-sm-6 col-md-6 pt-4\">\r\n\r\n                            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.021347918228!2d78.38364401527112!3d17.458692305339003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917d15a9816d%3A0xe9880ad379f4749c!2sNexgile+Technologies+(Nexgile)!5e0!3m2!1sen!2sin!4v1523874917045\"\r\n                                width=\"45\" height=\"465\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n<!-- /wrapper -->"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-style {\r\n    margin-top: 0px !important;\r\n    font-family: \"Roboto\", \"Arial\", sans-serif;\r\n    font-size: 22px;\r\n    line-height: 44px;\r\n    /* font-weight: 600 !important; */\r\n    letter-spacing: -1px;\r\n    /* padding: 0px 0px !important; */\r\n    padding-top: 20px;\r\n    letter-spacing: normal;\r\n    padding-left: 0px !important;\r\n    text-transform: uppercase;\r\n    margin-right: 10px;\r\n    width: auto;\r\n    margin-bottom: 0px !important;\r\n}\r\n\r\n.input-group {\r\n    padding-bottom: 20px;\r\n}\r\n\r\nfieldset.form-group {\r\n    position: relative;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.radious_zero {\r\n    border-radius: 0px !important;\r\n}\r\n\r\n.added-Style {\r\n    height: 35px;\r\n    font-size: 15px;\r\n    border: 1px solid #d1d2d3;\r\n    padding-left: 7px !important;\r\n}\r\n\r\n.contact-us-input {\r\n    border: none;\r\n    color: #f15a29 !important;\r\n    height: 35px;\r\n    width: 75%;\r\n    /* border-radius: 10px; */\r\n    background-color: #fff;\r\n    font-size: 16px;\r\n    padding-left: 5px;\r\n    border: 1px solid #d3d3d3;\r\n}\r\n\r\n.contact-us-textarea {\r\n    border: none;\r\n    color: #f15a29;\r\n    height: auto;\r\n    width: 75%;\r\n    border-radius: 10px;\r\n    background-color: #fff;\r\n    font-size: 16px;\r\n    padding-left: 5px;\r\n    border: 1px solid #d3d3d3;\r\n}\r\n\r\ntextarea {\r\n    border-color: #f15a29;\r\n    color: #f15a29;\r\n    border: 1px solid #f15a29;\r\n    padding-left: 5px;\r\n    width: 60%;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    color: silver;\r\n}\r\n\r\n::-moz-placeholder {\r\n    color: silver;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    color: silver;\r\n}\r\n\r\n::placeholder {\r\n    color: silver;\r\n}\r\n\r\n.reach-us-contact-info {\r\n    margin-top: 15px;\r\n    border: 2px solid silver;\r\n    border-radius: 2px;\r\n}\r\n\r\n.head {\r\n    font-size: 25px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-weight: 600;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.info-label {\r\n    font-weight: 500 !important;\r\n    margin-right: 5px;\r\n    /* padding: 8px; */\r\n}\r\n\r\n.desc-label {\r\n    font-weight: 500 !important;\r\n    margin-top: 1px !important;\r\n    vertical-align: 35px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.submit-button {\r\n    font-weight: 600;\r\n    padding: 7px;\r\n    height: 42px;\r\n    width: 109px;\r\n    color: white;\r\n    background: linear-gradient(60deg, #f15a29, #fb8c00);\r\n    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\r\n}\r\n\r\n.card-getintouch-style {\r\n    /* #eff0f1; */\r\n    background: #f5f6f7;\r\n    align-items: center;\r\n    text-align: center;\r\n    /* border: none; */\r\n    border-radius: none;\r\n}\r\n\r\n.submit-button-container {\r\n    padding-bottom: 15px;\r\n    padding-top: 20px;\r\n    width: 75%;\r\n}\r\n\r\n.progress-bar-contaier {\r\n    height: 100%;                         \r\n    position: absolute;\r\n    width: 100%;\r\n    background-color: #f5f6f7;\r\n    z-index: 9\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .aling-padding {\r\n        margin: 15px;\r\n    }\r\n}\r\n\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ntextarea:-webkit-autofill,\r\ntextarea:-webkit-autofill:hover,\r\ntextarea:-webkit-autofill:focus,\r\nselect:-webkit-autofill,\r\nselect:-webkit-autofill:hover,\r\nselect:-webkit-autofill:focus {\r\n    box-shadow: 0 0 0px 1000px white inset;\r\n    transition: background-color 5000s ease-in-out 0s;\r\n}\r\n\r\n.address-card-outer {\r\n    padding: 18px;\r\n    border-radius: 2px;\r\n    box-shadow: 0.5px 0.5px 5px #4c4c4c;\r\n    height: auto;\r\n    min-height: 325px !important;\r\n    margin-top: 20px;\r\n}\r\n\r\n.address-card-icon {\r\n    margin-top: -70px;\r\n}\r\n\r\n.address-card-content {\r\n    margin-top: 50px !important;\r\n    left: 0px !important;\r\n    float: none !important;\r\n    padding-left: 25px;\r\n}\r\n\r\n.address-card-icon-box {\r\n    background: linear-gradient(60deg, #f15a29, #fb8c00);\r\n}\r\n\r\n/* form lable styles */\r\n\r\n.lable-top-aling {\r\n    color: #F15A29;\r\n    top: -.9rem !important;\r\n    font-weight: 600 !important;\r\n    opacity: 1 !important;\r\n}\r\n\r\n.input-pop-label {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 1rem;\r\n    transition: all .3s ease-in-out;\r\n    cursor: text;\r\n    font-size: 14px;\r\n    font-family: \"Roboto\", sans-serif !important;\r\n    font-weight: 400;\r\n    opacity: 0.6;\r\n    margin-left: 0px;\r\n}\r\n\r\ninput:focus {\r\n    outline: none !important;\r\n    box-shadow: 0 0 4px #c1c1c1;\r\n}\r\n\r\n:focus+.input-pop-label {\r\n    color: #F15A29;\r\n    top: -.9rem;\r\n    background: inherit;\r\n    font-weight: 600;\r\n    opacity: 1;\r\n}\r\n\r\n.input-group .form-control:first-child,\r\n.input-group-addon:first-child,\r\n.input-group-btn:first-child>.btn,\r\n.input-group-btn:first-child>.btn-group>.btn,\r\n.input-group-btn:first-child>.dropdown-toggle,\r\n.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,\r\n.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {\r\n    border-top-right-radius: none !important;\r\n    border-bottom-right-radius: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFGQTtJQUNJLGFBQWE7QUFDakI7O0FBRkE7SUFDSSxhQUFhO0FBQ2pCOztBQUZBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG9EQUFvRDtJQUNwRCxvRkFBb0Y7QUFDeEY7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTs7Ozs7Ozs7O0lBVUksc0NBQXNDO0lBQ3RDLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUdBLHNCQUFzQjs7QUFFdEI7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGVBQWU7SUFDZiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0FBQy9COztBQUVDO0lBQ0csY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTs7Ozs7OztJQU9JLHdDQUF3QztJQUN4QywyQ0FBMkM7QUFDL0MiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1zdHlsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDsgKi9cclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgLyogcGFkZGluZzogMHB4IDBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0LmZvcm0tZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yYWRpb3VzX3plcm8ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGRlZC1TdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMmQzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhY3QtdXMtaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmMTVhMjkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcclxufVxyXG5cclxuLmNvbnRhY3QtdXMtdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmMTVhMjk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2YxNWEyOTtcclxuICAgIGNvbG9yOiAjZjE1YTI5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxNWEyOTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogc2lsdmVyO1xyXG59XHJcblxyXG4ucmVhY2gtdXMtY29udGFjdC1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgLyogcGFkZGluZzogOHB4OyAqL1xyXG59XHJcblxyXG4uZGVzYy1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHggIWltcG9ydGFudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICB3aWR0aDogMTA5cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNmMTVhMjksICNmYjhjMDApO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uY2FyZC1nZXRpbnRvdWNoLXN0eWxlIHtcclxuICAgIC8qICNlZmYwZjE7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNmY3O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhci1jb250YWllciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xyXG4gICAgei1pbmRleDogOVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5hbGluZy1wYWRkaW5nIHtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXHJcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsLFxyXG5zZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbDpob3Zlcixcclxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCB3aGl0ZSBpbnNldDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4IHdoaXRlIGluc2V0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLmFkZHJlc3MtY2FyZC1vdXRlciB7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggNXB4ICM0YzRjNGM7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAzMjVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmFkZHJlc3MtY2FyZC1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC03MHB4O1xyXG59XHJcblxyXG4uYWRkcmVzcy1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uYWRkcmVzcy1jYXJkLWljb24tYm94IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2YxNWEyOSwgI2ZiOGMwMCk7XHJcbn1cclxuXHJcblxyXG4vKiBmb3JtIGxhYmxlIHN0eWxlcyAqL1xyXG5cclxuLmxhYmxlLXRvcC1hbGluZyB7XHJcbiAgICBjb2xvcjogI0YxNUEyOTtcclxuICAgIHRvcDogLS45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1wb3AtbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAjYzFjMWMxO1xyXG59XHJcblxyXG4gOmZvY3VzKy5pbnB1dC1wb3AtbGFiZWwge1xyXG4gICAgY29sb3I6ICNGMTVBMjk7XHJcbiAgICB0b3A6IC0uOXJlbTtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zmlyc3QtY2hpbGQsXHJcbi5pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCxcclxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuLFxyXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG4tZ3JvdXA+LmJ0bixcclxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uZHJvcGRvd24tdG9nZ2xlLFxyXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQ+LmJ0bi1ncm91cDpub3QoOmxhc3QtY2hpbGQpPi5idG4sXHJcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(appService, cookieService) {
        this.appService = appService;
        this.cookieService = cookieService;
        this.showContactProgressBar = false;
        _utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].loadAllScripts();
    }
    ContactUsComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            var height = jquery__WEBPACK_IMPORTED_MODULE_5__('#card-india').height();
            jquery__WEBPACK_IMPORTED_MODULE_5__('#card-usa').css('height', height);
            jquery__WEBPACK_IMPORTED_MODULE_5__('#card-aus').css('height', height);
        }, 200);
    };
    ContactUsComponent.prototype.ngOnInit = function () {
        var browserName = this.getBrowserName();
        var elements = document.getElementsByClassName('contact-us-input');
        if (browserName === 'safari') {
            document.getElementById('name').style.height = '36px';
            document.getElementById('email').style.height = '36px';
            document.getElementById('subject').style.height = '36px';
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('#contact-us-form div.input-group label, #contact-us-form fieldset label').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).prev().focus();
        });
    };
    ContactUsComponent.prototype.getBrowserName = function () {
        var agent = window.navigator.userAgent.toLowerCase();
        switch (true) {
            case agent.indexOf('edge') > -1:
                return 'edge';
            case agent.indexOf('opr') > -1 && !!window.opr:
                return 'opera';
            case agent.indexOf('chrome') > -1 && !!window.chrome:
                return 'chrome';
            case agent.indexOf('trident') > -1:
                return 'ie';
            case agent.indexOf('firefox') > -1:
                return 'firefox';
            case agent.indexOf('safari') > -1:
                return 'safari';
            default:
                return 'other';
        }
    };
    ContactUsComponent.prototype.sendClientContactInfo = function (event) {
        var _this = this;
        this.showContactProgressBar = true;
        event.preventDefault();
        var guid = this.cookieService.get('uuid');
        if (!guid) {
            guid = '';
        }
        var params = "guid=" + guid + "&contactName=" + event.target[0].value + "&contactEmail=" + event.target[1].value + "\n                    &subject=" + event.target[2].value + "&message=" + event.target[4].value;
        this.appService.postContactInfo(params).subscribe(function (res) {
            setTimeout(function () {
                _this.showContactProgressBar = false;
            }, 2000);
            jquery__WEBPACK_IMPORTED_MODULE_5__('#contact-us-form').find('.lable-top-aling').removeClass('lable-top-aling');
            event.target.reset();
        }, function (err) {
            setTimeout(function () {
                _this.showContactProgressBar = false;
            }, 2000);
            jquery__WEBPACK_IMPORTED_MODULE_5__('#contact-us-form').find('.lable-top-aling').removeClass('lable-top-aling');
            event.target.reset();
        });
    };
    ContactUsComponent.prototype.onInputValueChange = function (inputId) {
        if (jquery__WEBPACK_IMPORTED_MODULE_5__("#" + inputId).val()) {
            document.getElementById("label" + inputId).classList.add('lable-top-aling');
        }
        else {
            document.getElementById("label" + inputId).classList.remove('lable-top-aling');
        }
    };
    ContactUsComponent.ctorParameters = function () { return [
        { type: _app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    { path: 'Reach-us', component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] }
];
var ContactUsModule = /** @class */ (function () {
    function ContactUsModule() {
    }
    ContactUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], ContactUsModule);
    return ContactUsModule;
}());



/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module-es5.js.map