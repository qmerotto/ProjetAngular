var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';
var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
        this.filterAll = function () { return true; };
        this.filterDone = function (item) { return item.isDone; };
        this.filterUnDone = function (item) { return !item.isDone; };
        this.currentFilter = this.filterAll;
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.getLabel = function () {
        return this.data ? this.data.label : '';
    };
    TodoListComponent.prototype.getItems = function () {
        return this.data ? this.data.items : [];
    };
    TodoListComponent.prototype.appendItem = function (itemLabel) {
        this.todoService.appendItems({
            label: itemLabel,
            isDone: false
        });
    };
    TodoListComponent.prototype.removeItem = function (item, isDone) {
        this.todoService.removeItems(item);
    };
    TodoListComponent.prototype.setItemDone = function (item, isDone) {
        this.todoService.setItemsDone(isDone, item);
    };
    TodoListComponent.prototype.NbitemsUnchecked = function () {
        return this.data.items.reduce(function (acc, item) { return acc + (item.isDone ? 0 : 1); }, 0);
    };
    TodoListComponent.prototype.getFiltereditems = function () {
        return this.getItems().filter(this.currentFilter);
    };
    TodoListComponent.prototype.isAllDone = function () {
        return this.getItems().reduce(function (acc, item) { return acc && item.isDone; }, true);
    };
    TodoListComponent.prototype.toggleAllDone = function () {
        var done = !this.isAllDone();
        (_a = this.todoService).setItemsDone.apply(_a, [done].concat(this.getItems()));
        var _a;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "data", void 0);
    TodoListComponent = __decorate([
        Component({
            selector: 'app-todo-list',
            templateUrl: './todo-list.component.html',
            styleUrls: ['./todo-list.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [TodoService])
    ], TodoListComponent);
    return TodoListComponent;
}());
export { TodoListComponent };
//# sourceMappingURL=todo-list.component.js.map