angular
        .module('contactManagerApp')
        .controller('MainController', MainController);

MainController.$inject = ['$scope', '$timeout', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia', '$log', 'UserService'];

function MainController($scope, $timeout, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $log, UserService) {
    var vm = this;
    vm.message = "Hello ";
    vm.toggleSideNav = toggleSideNav;
    vm.users = [];
    vm.selected = null;
    vm.searchText = '';
    vm.selectUser = selectUser;
    vm.removeNote = removeNote;
    vm.tabIndex = 0;
    vm.clearNotes = clearNotes;
    vm.addUser = addUser;

    loadAllUsers();

    function loadAllUsers() {
        var users =UserService.loadAllUsers();
        vm.users = users;
        vm.selected = users[0];
    }

    function toggleSideNav() {
        $mdSidenav('left').toggle();
    }

    function selectUser(user) {
        vm.selected = user;
        var sidenav = $mdSidenav('left');
        if(sidenav.isOpen()) {
            sidenav.close();
        }
        vm.tabIndex = 0;
    }

    function addUser($event) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

        $mdDialog.show({
            templateUrl: './dist/view/newUserDialog.html',
            parent: angular.element(document.body),
            targetEvent: $event,
            controller: AddUserDialogController,
            controllerAs: ctrl,
            clickOutsideToClose: true,
            fullScreen: useFullScreen
        }).then((user) => {
            openToast("User added.");
        },  () => {
            console.log('You cancelled the dialog.')
        });

    }

    function clearNotes($event) {
        var confirm = $mdDialog.confirm()
            .title('Are you sure you want to delete all notes ?')
            .textContent('All notes will be deleted, you can\'t undo this action')
            .targetEvent($event)
            .ok('Yes')
            .cancel('No');

            var self = this;
            $mdDialog.show(confirm).then(() => {
                self.selected.notes = [];
                openToast('Cleared All Notes.');
            })
            ;
    }

    function removeNote(note) {
        var foundIndex = vm.selected.notes.indexOf(note);
        vm.selected.notes.splice(foundIndex, 1);
        openToast("Note was removed");
    }


    function openToast(message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(3000)
        );
    }
}
