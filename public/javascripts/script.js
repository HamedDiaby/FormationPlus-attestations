$(()=> {

    $('select').change(()=> {
        $("select option:selected").each(function() {
            var el = JSON.parse($(this).val())
            if(el != 'null'){
                $('#convention').val(el.convention.nom);
                $('#message').val(`
Bonjour ${el.prenom} ${el.nom},

Vous avez suivi ${el.convention.nbHeur} heure(s) de formation chez FormationPlus.
Pouvez-vous nous retourner ce mail avec la pièce jointe signée.

Cordialement,
FormationPlus
                `)
            }
        });
    })

    $('#submit').click(()=> {
        var etudiant = $('select').val() == 'null' ? $('select').val() : JSON.parse($('select').val());
        var message = $('textarea').val();

        if(etudiant != 'null'){
            if(message != ''){
                
                $('#myform').submit();
                
            } else {
                $('#errorMessage').text('Ce champs ne dois pas etre vide!')
            }
        } else {
            $('#errorStudent').text('Veuillez selectionnez un étudiant!')
        }
    })

});