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
                        { 
                            id : 1, 
                            name : 'i10as', 
                            image: 'ricardo-henrique-mota-i10as.jpg', 
                            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, mi eget lacinia porttitor, felis tellus iaculis est, at eleifend neque lorem sit amet orci.', 
                            responsibility: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, mi eget lacinia porttitor, felis tellus iaculis est, at eleifend neque lorem sit amet orci.', 
                            technology: [
                                'PHP',
                                'Laravel',
                                'HTML5',
                                'CSS3 ',
                                'Bootstrap',
                                'MySQL',
                                'SEO',
                            ], 
                            order: 100
                        },
                        { 
                            id : 2, 
                            name : 'le chef', 
                            image: 'ricardo-henrique-mota-le-chef.jpg', 
                            order: 99
                        },
                        { 
                            id : 3, 
                            name : 'organif food fest', 
                            image: 'ricardo-henrique-mota-organic-food-fest.jpg', 
                            order: 99
                        },
                        { 
                            id : 4, 
                            name : 'PRG Brasil', 
                            image: 'ricardo-henrique-mota-prg-brasil.jpg', 
                            order: 98
                        },
                        { 
                            id : 5, 
                            name : 'Ocean2Share', 
                            image: 'ricardo-henrique-mota-ocean-2-share.jpg', 
                            order: 98
                        },
                        { 
                            id : 6, 
                            name : 'LPG Brasil', 
                            image: 'ricardo-henrique-mota-lpg-mais.jpg', 
                            order: 97
                        },
                        { 
                            id : 7, 
                            name : 'CTM Advogados', 
                            image: 'ricardo-henrique-mota-ctm-advogados.jpg', 
                            order: 1
                        },
                        { 
                            id : 8, 
                            name : 'Alphamesh', 
                            image: 'ricardo-henrique-mota-alphamesh.jpg', 
                            order: 1
                        },
                        { 
                            id : 9, 
                            name : 'Pratsy', 
                            image: 'ricardo-henrique-mota-pratsy.jpg', 
                            order: 1
                        },
                        { 
                            id : 10, 
                            name : 'Bar2Go', 
                            image: 'ricardo-henrique-mota-bar2go.jpg', 
                            order: 1
                        },
                        { 
                            id : 11, 
                            name : 'Balsalobre', 
                            image: 'ricardo-henrique-mota-balsalobre.jpg', 
                            order: 1
                        },
                        { 
                            id : 12, 
                            name : 'GIZE', 
                            image: 'ricardo-henrique-mota-gize.jpg', 
                            order: 1
                        },
                        { 
                            id : 13, 
                            name : 'Maadri', 
                            image: 'ricardo-henrique-mota-maadri.jpg', 
                            order: 96
                        },
                        { 
                            id : 15, 
                            name : 'PDVnet', 
                            image: 'ricardo-henrique-mota-pdv-net.jpg', 
                            order: 1
                        },
                        { 
                            id : 16, 
                            name : 'Regis Folco', 
                            image: 'ricardo-henrique-mota-regis-folco.jpg', 
                            order: 1
                        },
                        { 
                            id : 17, 
                            name : 'Cia de Comédia', 
                            image: 'ricardo-henrique-mota-cia-de-comedia.jpg', 
                            order: 1
                        },
                        { 
                            id : 18, 
                            name : 'SER GLASS', 
                            image: 'ricardo-henrique-mota-ser-glass.jpg', 
                            order: 1
                        },
                        { 
                            id : 19, 
                            name : 'Totality', 
                            image: 'ricardo-henrique-mota-totality.jpg', 
                            order: 97
                        },
                        { 
                            id : 20, 
                            name : 'SINPAPEL', 
                            image: 'ricardo-henrique-mota-sinpapel.jpg', 
                            order: 97
                        },
                        { 
                            id : 21, 
                            name : 'Uchinanchu', 
                            image: 'ricardo-henrique-mota-uchinanchu.jpg', 
                            order: 1
                        },
                        { 
                            id : 22, 
                            name : 'Você Brasil', 
                            image: 'ricardo-henrique-mota-voce-brasil.jpg', 
                            order: 96
                        }
                    ];
});