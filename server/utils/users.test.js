const expect = require('expect');
const {Users} = require('./users');

describe('Users',  () => {
    var users;
    beforeEach(() => {
        users= new Users();
        users.users = [{
            id:'1',
            name:'ret1',
            room: 'node'
        },
        {
            id:'2',
            name:'ret12',
            room: 'javascript'
        },
        {
            id:'3',
            name:'ret123',
            room: 'node'
        }];
    });
    it('should be new user', () => {
        var users = new Users();
        var user = {
            id:'123',
            name:'ret',
            room: 'nodejs'
        };
        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
    });
    it('should return names for node', () => {
        var userList = users.getUserList('node');
        expect(userList).toEqual(['ret1','ret123']);
    });
    it('should return names for javascript', () => {
        var userList = users.getUserList('javascript');
        expect(userList).toEqual(['ret12']);
    });
    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });
    it('should not find a user', () => {
       var userId = '5';
       var user = users.getUser(userId);
       expect(user).toNotExist();

    });
    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });
    it('should not remove a user', () => {
        var userId = '6';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });
});