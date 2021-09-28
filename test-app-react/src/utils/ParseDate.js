class ParseDate {

    constructor() {
        this.fechaDeHoy = new Date();
        this.fechaLegible = this.fechaLegible.bind(this);
    }

    fechaLegible() {
        return `${this.fechaDeHoy.getDate()}/${this.fechaDeHoy.getMonth()+1}/${this.fechaDeHoy.getFullYear()}`;
    }

}

export default ParseDate;