$(document).ready(function () {

    $("#send-btn").click(function (event) {
        event.preventDefault();
        console.log("entro");
        var pokemon = $("#search-keyword").val();
        ajaxPokemon(pokemon);
    });


    function ajaxPokemon(pokemonData) {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonData,
            type: 'GET',
            datatype: 'json',
        })
            .done(function (response) {
                var data = (response);
                console.log(data);
                showPokemon(data);
            })
            .fail(function () {
                console.log("error");
            })
    }

    function showPokemon(data) {
        var pokemonImg = data.sprites.front_default;
        console.log(pokemonImg);
        var pokemonName = data.name;
        console.log(pokemonName);
        var pokemonAbilities = data.abilities;
        console.log(pokemonAbilities);
        var pokemonTypes = data.types[0].type.name;
        console.log(pokemonTypes);
        var pokemonWeight = data.weight;
        console.log(pokemonWeight);
        var AbilitiesTemplate = pokemonAbilitiesTemplate(pokemonAbilities);
        $("#container").empty();
        $("#container").append(buildingTemplate(pokemonImg, pokemonName, AbilitiesTemplate, pokemonTypes, pokemonWeight));

    }

    function pokemonAbilitiesTemplate(pokemonAbilities) {
        var template = '';
        for (var i = 0; i < pokemonAbilities.length; i++) {
            var currentAbility = pokemonAbilities[i];
            var abilityName = currentAbility.ability.name;
            template = template + ' ' + abilityName;
            console.log(template);

        }
        return template;

    }

    function buildingTemplate(pokemonImg, pokemonName, pokemonAbilities, pokemonTypes, pokemonWeight) {
        var template = '<ul id="back-info-container">' +
            '<li><img src="' + pokemonImg + '"></li>' +
            '<li>Name:' + pokemonName + '</li>' +
            '<li>Abilities:' + pokemonAbilities + '</li>' +
            '<li>Type:' + pokemonTypes + '</li>' +
            '<li>Weight:' + pokemonWeight + '</li>' +
            '</ul >';
        return template;

    }

});


