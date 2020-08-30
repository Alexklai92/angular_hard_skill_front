"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SkillService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var environment_1 = require("../environments/environment");
var SkillService = /** @class */ (function () {
    function SkillService(http) {
        this.http = http;
    }
    SkillService.prototype.getAll = function () {
        return this.http.get(environment_1.environment.apiUrl + "/get")
            .pipe(operators_1.map(function (res) {
            console.log(res);
            return Object.keys(res)
                .map(function (key) { return (__assign({}, res[key])); });
        }));
    };
    SkillService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SkillService);
    return SkillService;
}());
exports.SkillService = SkillService;
