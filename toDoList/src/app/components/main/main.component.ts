import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {
    title = "On code notre 1re ToDoList Angular";

    items = [1, 2];
    isActive = false;

    myStyle = {
        background: 'red',
        color: 'white'
    }

    valide() {
        this.isActive = true;
        console.log(this.isActive);
        console.log("YEAH");
    }

    if(isActive = true) {
        this.myStyle = {
            background: 'green',
            color: 'black'
        }
    }

    // correction avec Mickael

    todos = [
        { text: 'Faire à manger', done: false },
        { text: 'Arroser le citronnier', done: true },
        { text: 'Faire les courses', done: false },
    ];

    changeDone(index: number) {
        this.todos[index].done = !this.todos[index].done;
    }
    // mise en place du focus
    onMouseEnter(hoverName: HTMLElement){
        hoverName.style.color = "blue";
    }
    onMouseOut(hoverName: HTMLElement){
        hoverName.style.color = "red";
    }
}
