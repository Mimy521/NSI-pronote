
function ajouter_cellule_texte(ligne, texte) {
    nouvelleCellule = ligne.insertCell()
    nouvelleCellule.innerHTML = texte
}

function ajouter_cellule_supprimer(ligne) {
    celluleSuppr = ligne.insertCell()
    celluleSuppr.innerHTML = "<input type='button' value='X' />"
}

function ajouter_cellule_saisie(ligne) {
    inserer_cellule_saisie(ligne, -1)
}

function inserer_cellule_saisie(ligne, indice) {
    celluleSaisie = ligne.insertCell(indice)
    celluleSaisie.innerHTML = "<input type='text' value='' />"
}

function ajouter_eleve() {
    try {
        var nomEleve = document.getElementById("nom_eleve").value
        var prenomEleve = document.getElementById("prenom_eleve").value

        // on insère la nouvelle ligne dans le tableau
        var tableauEleve = document.getElementById("tb_eleves")
        nouvelleLigne = tableauEleve.insertRow()

        // On ajoute le nom et le prénom de l'élève
        ajouter_cellule_texte(nouvelleLigne, nomEleve)
        ajouter_cellule_texte(nouvelleLigne, prenomEleve)

        // Ajout de la case vide pour la moyenne
        ajouter_cellule_texte(nouvelleLigne, "&nbsp;")

        // Pour chaque évaluation, on ajoute un champ de saisie
        var ligneEntete = document.getElementById("thead").rows[0]
        for (iColonne = 3; iColonne < ligneEntete.cells.length; iColonne++) {
            ajouter_cellule_saisie(nouvelleLigne)
        }

        // On insère le bouton de suppression
        ajouter_cellule_supprimer(nouvelleLigne)
    }
    catch (erreur) {
        alert(erreur)
    }
}

function ajouter_evaluation() {
    try {
        var matiere = document.getElementById("matiere").value
        var coefficient = document.getElementById("coefficient").value

        // On ajoute un nouvelle ligne dans l'entête
        var ligneEntete = document.getElementById("thead").rows[0]
        celluleEntete = ligneEntete.insertCell()
        celluleEntete.innerHTML = matiere + ' (' + coefficient + ')'
        indiceNouvelleCellule = celluleEntete.cellIndex

        // Pour chaque élève, on ajouter une cellule
        var tableauEleve = document.getElementById("tb_eleves")
        for (iEleve = 0; iEleve < tableauEleve.rows.length; iEleve++) {
            inserer_cellule_saisie(tableauEleve.rows[iEleve], indiceNouvelleCellule)
        }

        // On ajoute le bouton de suppression
        var ligneSuppr = document.getElementById("tb_suppression").rows[0]
        ajouter_cellule_supprimer(ligneSuppr)
    }
    catch (erreur) {
        alert(erreur)
    }

}

