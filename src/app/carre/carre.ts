import './carre.scss';

export class Carre {
    private static _id: number = 0;
    private carreId: number;
    constructor(
        private _size: number,
        private _color: string = 'grey',
    ) {
        this.carreId = ++Carre._id;
    }
    public render() {
        const div = document.createElement('div');
        div.id = `square-${this.carreId}`;
        div.setAttribute('style', `
            width: ${this._size}px;
            height: ${this._size}px;
            background: ${this._color};
    `);
        document
            .querySelector('.squares')
            .appendChild(div);
    }
}