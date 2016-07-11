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
                        { id : 1, name : 'i10as', image: 'ricardo-henrique-mota-i10as.jpg'},
                        { id : 2, name : 'le chef', image: 'ricardo-henrique-mota-le-chef.jpg'},
                        { id : 3, name : 'organif food fest', image: 'ricardo-henrique-mota-organic-food-fest.jpg'},
                        { id : 4, name : 'PRG Brasil', image: 'ricardo-henrique-mota-prg-brasil.jpg'},
                        { id : 5, name : 'Ocean2Share', image: 'ricardo-henrique-mota-ocean-2-share.jpg'},
                        { id : 6, name : 'LPG Brasil', image: 'ricardo-henrique-mota-lpg-mais.jpg'},
                        { id : 7, name : 'CTM Advogados', image: 'ricardo-henrique-mota-ctm-advogados.jpg'}
                    ];
});