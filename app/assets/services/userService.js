angular
        .module('contactManagerApp')
        .factory('UserService', UserService);

    UserService.$inject = [];

    function UserService () {
        var service = {
            loadAllUsers : loadAllUsers
        };

        function loadAllUsers() {
            return users;
        }

        var users = [
            {
                name: 'Erik Riley',
                avatar: 'svg-1',
                bio: 'This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio.',
                notes: [
                    {"title": "Title 1", date: "03-10-2017"},
                    {"title": "Title 2", date: "02-10-2017"}
                ]
            },
            {
                name: 'Levi Neal',
                avatar: 'svg-2',
                bio: 'This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio.'
            },
            {
                name: 'Marcia Higgins',
                avatar: 'svg-3',
                bio: 'This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio.',
                notes: [
                    {"title": "Title 1", date: "03-10-2017"},
                    {"title": "Title 2", date: "02-10-2017"}
                ]
            },
            {
                name: 'Sandy Armstrong',
                avatar: 'svg-4',
                bio: 'This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio. This is a bio.',
                notes: [
                    {"title": "Title 1", date: "03-10-2017"},
                    {"title": "Title 2", date: "02-10-2017"}
                ]
            }
        ];

        return service;
    }
