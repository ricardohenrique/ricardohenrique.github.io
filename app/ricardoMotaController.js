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
    // $scope.apresentation = 'Acredito que o bom profissional é aquele que sempre está atualizado com as novas tecnologias, além de procurar pela aprendizagem constante.<br>Posso destacar algumas habilidades para a área como: experiência de 2 anos na área atuando com desenvolvimento server-side e client-side, vivência internacional, além de ter conhecimentos em tecnologias atuais como AngularJS, Pré-processadores(SASS e LESS), Restful, metodologias ágeis(Scrum, Kanban) entre outros.<br>Posso destacar de minhas características pessoais: assertividade, proatividade, objetividade e transparência.<br>';
    $scope.apresentation = '<p>Tenho trabalhado com desenvolvimento desde 2010.<br>Minhas principais habilidades são:<br>Back-end: PHP, Laravel, Codeigniter, Desenvolvimento e Arquitetura de API, TDD, phpunit;<br>Front-end: HTML, CSS, JavaScript, Jquery, TypeScript, Angular, Bootstrap;<br>Database, infra e outros: MySQL, SQL Server, MongoDB, GIT, NgInx, Vagrant.</p>'

    // Links redes sociais
    $scope.links = [    { id : 'github', link : 'https://github.com/ricardohenrique'},
                        { id : 'facebook', link : 'https://www.facebook.com/ricardo.henrique.10420' },
                        { id : 'linkedin', link : 'https://br.linkedin.com/in/ricardo-henrique-mota-9a1033104' } 
                    ];

    // habilidades
    $scope.skills = [ 
                        { name : 'HTML5', know : 'avançado'},
                        { name : 'CSS3', know : 'avançado'},
                        { name : 'PHP', know : 'avançado'},
                        { name : 'Java Script', know : 'avançado'},
                        { name : 'Java EE', know : 'básico'}
                    ];
});