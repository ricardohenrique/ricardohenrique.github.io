app.controller("portfolioController", function($scope) {
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
    $scope.portfolio = [ 
                        { id : 1, name : 'le chef'},
                        { id : 2, name : 'organif food fest'},
                        { id : 3, name : 'PRG Brasil'},
                        { id : 4, name : 'Ocean2Share'},
                        { id : 5, name : 'LPG Brasil'},
                        { id : 5, name : 'CTM Advogados'}
                    ];
});