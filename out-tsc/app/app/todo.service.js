var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.todoListSubject = new BehaviorSubject({ label: 'TodoList', items: [] });
    }
    TodoService.prototype.getTodoListDataObserver = function () {
        return this.todoListSubject.asObservable();
    };
    TodoService.prototype.setItemsLabel = function (label) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        var tdl = this.todoListSubject.getValue();
        this.todoListSubject.next({
            label: tdl.label,
            items: tdl.items.map(function (I) { return items.indexOf(I) === -1 ? I : ({ label: label, isDone: I.isDone }); })
        });
    };
    TodoService.prototype.setItemsDone = function (isDone) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        var tdl = this.todoListSubject.getValue();
        this.todoListSubject.next({
            label: tdl.label,
            items: tdl.items.map(function (I) { return items.indexOf(I) === -1 ? I : ({ label: I.label, isDone: isDone }); })
        });
    };
    TodoService.prototype.appendItems = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var tdl = this.todoListSubject.getValue();
        this.todoListSubject.next(__assign({}, tdl, { items: tdl.items.concat(items) }));
    };
    TodoService.prototype.removeItems = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var tdl = this.todoListSubject.getValue();
        this.todoListSubject.next(__assign({}, tdl, { items: tdl.items.filter(function (I) { return items.indexOf(I) === -1; }) }));
    };
    TodoService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], TodoService);
    return TodoService;
}());
export { TodoService };
//# sourceMappingURL=todo.service.js.map