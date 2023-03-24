import './app.scss';
import { Carre } from './carre/carre';

export class App {
    static run() {
        // console.log("App is running ...")

        const inputColor = document.querySelector('[type=color]') as HTMLInputElement;
        const inputSize = document.querySelector('[type=taille]') as HTMLInputElement;
        const btSubmit = document.querySelector('button');
        
        btSubmit.addEventListener('click', () => {
            new Carre(+inputSize.value, inputColor.value).render();
        });
    }
}