class Commande {
    constructor(dessin, line) {
        this._dessin = dessin; //on créé un attribut privé "dessin"
        this._line = line; //on créé un attribut privé "line"
    }

    execute() {
//rien
 }

    undo() {
// rien
}
}

export default Commande;