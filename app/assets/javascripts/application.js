//= require jquery
//= require angular
//= require ui-bootstrap-tpls-0.2.0 
//= require angular-resource
//= require services/moviesService
//= require controllers/movies
//= require services/projectsService
//= require controllers/projects
//= require services/tasksService
//= require controllers/tasks
//= require services/organizersService
//= require controllers/organizers
//= require services/eventsService
//= require controllers/events
//= require angular-will-paginate

angular.module('AngularRails', ['moviesService', 'projectsService','tasksService','organizersService','eventsService','ui.bootstrap','willPaginate'])
  .config(['$httpProvider', function(provider){
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }])
  .config(['$routeProvider', function(router){
    router
      .when('/movies', {templateUrl:'/movies/index.html', controller:MoviesCtrl})
      .when('/movies/add', {templateUrl:'/movies/add.html', controller: MovieAddCtrl})
      .when('/movies/:movie_id', {templateUrl:'/movies/show.html', controller:MovieShowCtrl})
      .when('/movies/:movie_id/edit', {templateUrl:'/movies/edit.html', controller: MovieEditCtrl})
      .when('/projects', {templateUrl:'/projects/index.html', controller:ProjectsCtrl})
      .when('/projects/add', {templateUrl:'/projects/add.html', controller: ProjectAddCtrl})
      .when('/projects/:project_id', {templateUrl:'/projects/show.html', controller:ProjectShowCtrl})
      .when('/projects/:project_id/edit', {templateUrl:'/projects/edit.html', controller: ProjectEditCtrl})
      .when('/tasks', {templateUrl:'/tasks/index.html', controller:TasksCtrl})
      .when('/tasks/add', {templateUrl:'/tasks/add.html', controller: TaskAddCtrl})
      .when('/tasks/:task_id', {templateUrl:'/tasks/show.html', controller:TaskShowCtrl})
      .when('/tasks/:task_id/edit', {templateUrl:'/tasks/edit.html', controller: TaskEditCtrl})
      .when('/organizers', {templateUrl:'/organizers/index.html', controller:OrganizersCtrl})
      .when('/organizers/add', {templateUrl:'/organizers/add.html', controller: OrganizerAddCtrl})
      .when('/organizers/:organizer_id', {templateUrl:'/organizers/show.html', controller:OrganizerShowCtrl})
      .when('/organizers/:organizer_id/edit', {templateUrl:'/organizers/edit.html', controller: OrganizerEditCtrl})
      .when('/events', {templateUrl:'/events/index.html', controller:EventsCtrl})
      .when('/events/add', {templateUrl:'/events/add.html', controller: EventAddCtrl})
      .when('/events/:event_id', {templateUrl:'/events/show.html', controller:EventShowCtrl})
      .when('/events/:event_id/edit', {templateUrl:'/events/edit.html', controller: EventEditCtrl})
      .otherwise({redirectTo: '/projects'});
  }]);