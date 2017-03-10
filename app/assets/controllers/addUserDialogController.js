angular
        .module('contactManagerApp')
        .controller('AddUserDialogController', AddUserDialogController);

AddUserDialogController.$inject = ['$scope', '$timeout', '$mdDialog'];

function AddUserDialogController($scope, $timeout, $mdDialog) {
    var vm = this;
    vm.cancel = cancel;
    vm.save  = save;

    function cancel() {
        $mdDialog.cancel();
    }

    function save() {
        $mdDialog.hide(new User("Placeholder", "", "", []));
    }
}
