"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HardSkillComponent = void 0;
var core_1 = require("@angular/core");
var HardSkillComponent = /** @class */ (function () {
    function HardSkillComponent(skillService) {
        this.skillService = skillService;
    }
    HardSkillComponent.prototype.ngOnInit = function () {
        this.skills$ = this.skillService.getAll();
    };
    HardSkillComponent.prototype.getCreated = function (timestamp) {
        return new Date(timestamp * 1000);
    };
    HardSkillComponent.prototype.getDescription = function (desc, open, id) {
        if (open === void 0) { open = false; }
        if (open) {
            return desc ? desc : 'Not description';
        }
        return desc.slice(0, 20) + '...';
    };
    HardSkillComponent.prototype.isComplete = function (finished) {
        return finished ? "yes" : "no";
    };
    HardSkillComponent = __decorate([
        core_1.Component({
            selector: 'app-hard-skill',
            templateUrl: './hard-skill.component.html',
            styleUrls: ['./hard-skill.component.scss']
        })
    ], HardSkillComponent);
    return HardSkillComponent;
}());
exports.HardSkillComponent = HardSkillComponent;
