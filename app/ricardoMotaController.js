app.controller("ricardoMotaController", function($scope) {
    // Perfil
    $scope.test = 8;
    $scope.firstName = "Ricardo";
    $scope.secondName = "Henrique";
    $scope.thirdName = "Benevides";
    $scope.lastName = "Mota";

    $scope.fullName = function() {
        return  $scope.firstName + " " + 
                $scope.secondName + " " + 
                $scope.thirdName + " " + 
                $scope.lastName;
    };
    $scope.position = "Full Stack Developer";
    $scope.apresentation = 'Acredito que o bom profissional é aquele que sempre está atualizado com as novas tecnologias, além de procurar pela aprendizagem constante.<br>Posso destacar algumas habilidades para a área como: experiência de 2 anos na área atuando com desenvolvimento server-side e client-side, vivência internacional, além de ter conhecimentos em tecnologias atuais como AngularJS, Pré-processadores(SASS e LESS), Restful, metodologias ágeis(Scrum, Kanban) entre outros.<br>Posso destacar de minhas características pessoais: assertividade, proatividade, objetividade e transparência.<br>';

    // Links redes sociais
    $scope.links = [    { id : 'github', link : 'https://github.com/ricardohenrique'},
                        { id : 'facebook', link : 'https://www.facebook.com/ricardo.henrique.10420' },
                        { id : 'linkedin', link : 'https://br.linkedin.com/in/ricardo-henrique-mota-9a1033104' } 
                    ];

    // habilidades
    $scope.range = function(min, max, step){
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) input.push(i);
        return input;
    };
    // $scope.skills = [ 
    //                     { name : 'HTML5', know : 5},
    //                     { name : 'CSS3', know : 5 },
    //                     { name : 'PHP', know : 4 },
    //                     { name : 'Java Script', know : 3 },
    //                     { name : 'Java EE', know : 2 }
    //                 ];
    $scope.skills = { 
        "1": {
            'name': "HTML5",  
            'know': [   
                {id: 1},  
                {id: 2},
                {id: 3},  
                {id: 4},  
                {id: 5}  
            ]  
        },  
        "2": {
            'name': "CSS3",  
            'know': [   
                {id: 1},  
                {id: 2},  
                {id: 3}  
            ]  
        }
    };
});