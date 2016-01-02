$(document).ready(function() {
  var addProject = function(project) {
    var $projectDiv = $('<div class="project"></div>');
    var $title = $('<h1><a href="' + project.url + '">' + project.title + '</a></h1>');
    var $image = $('<img>');
    $image.attr('src', project.image);
    var $description = $('<p>');
    $description.text(project.description);
    var $techList = $('<ul>');
    project.technologies.forEach(function(tech) {
      var $techLi = $('<li>');
      $techLi.text(tech);
      $techLi.appendTo($techList);
    });

    $projectDiv.append($title);
    $projectDiv.append($image);
    $projectDiv.append($description);
    $projectDiv.append($techList);
    $projectDiv.appendTo($('section#projects div.container'));
  };

  projects.forEach(addProject);
});


var projects = [
  {
    title: "Concentration",
    url: "http://nathanriemer.github.io/concentration/",
    image: "images/concentrate.png",
    description: "The classic memory/concentration game. Choose from multiple image sets and difficulty levels.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Wiki (Sinatra)",
    url: "https://wiki-sw-v1.herokuapp.com/",
    image: "images/wiki_v1.png",
    description: "A Star Wars wiki implemented in Ruby with Sinatra. Sign up/log in, view and edit articles and categories, and view, comment on, and diff past revisions.",
    technologies: ["HTML", "CSS", "JavaScript", "Ruby", "Sinatra"]
  },
  {
    title: "GA Admissions Portal",
    url: "https://persephone-admissions.herokuapp.com/",
    image: "images/admissions.png",
    description: "Developed with a small team. Prospective students, admissions officers, and instructors can log in and submit/review applications, edit interview questionnaires, and conduct interviews. Appropriate actions trigger application status updates and emails to relevant parties.",
    technologies: ["HTML", "CSS", "JavaScript", "Rails", "AJAX"]
  },
  {
    title: "Wiki (Rails)",
    url: "https://wiki-sw-v2.herokuapp.com/",
    image: "images/wiki_v2.png",
    description: "The Star Wars wiki re-implemented in Rails.",
    technologies: ["HTML", "CSS", "Ruby", "Rails"]
  },
  {
    title: "Tic Tac Toe",
    url: "http://nathanriemer.github.io/NRProjectTicTacToe/",
    image: "images/tic_tac_toe.png",
    description: "Player vs Player as well as Player vs very-dumb-computer.",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];