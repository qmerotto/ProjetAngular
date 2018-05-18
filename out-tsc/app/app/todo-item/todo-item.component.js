var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, Input } from '@angular/core';
import { TodoService } from '../todo.service';
var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(todoService) {
        this.todoService = todoService;
        this._isEditing = false;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    TodoItemComponent.prototype.getLabel = function () {
        return this.data.label;
    };
    TodoItemComponent.prototype.setLabel = function (label) {
        this.todoService.setItemsLabel(label, this.data);
    };
    TodoItemComponent.prototype.getIsDone = function () {
        return this.data.isDone;
    };
    TodoItemComponent.prototype.setDone = function (isDone) {
        this.todoService.setItemsDone(isDone, this.data);
    };
    TodoItemComponent.prototype.remove = function () {
        this.todoService.removeItems(this.data);
    };
    Object.defineProperty(TodoItemComponent.prototype, "isEditing", {
        get: function () {
            return this._isEditing;
        },
        set: function (value) {
            var _this = this;
            this._isEditing = value;
            if (value) {
                requestAnimationFrame(function () { return _this.newTextInput.nativeElement.focus(); });
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "data", void 0);
    __decorate([
        ViewChild('newTextInput'),
        __metadata("design:type", ElementRef)
    ], TodoItemComponent.prototype, "newTextInput", void 0);
    TodoItemComponent = __decorate([
        Component({
            selector: 'app-todo-item',
            templateUrl: './todo-item.component.html',
            styleUrls: ['./todo-item.component.css'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [TodoService])
    ], TodoItemComponent);
    return TodoItemComponent;
}());
export { TodoItemComponent };
//# sourceMappingURL=todo-item.component.js.map