const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '0',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '1',
      name: 'Sanchez',
      room: 'React Course'
    }, {
      id: '2',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();

    var user = {
      id: '123',
      name: 'Muchacho',
      room: 'Nacho Libre fans'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '2';
    var user = users.removeUser(userId);

    users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toEqual(2);
  });

  it('should not remove a user that does not exist', () => {
    users.removeUser('doesNotExist');
    expect(users.users.length).toEqual(3);
  });

  it('should find user by id', () => {
    expect(users.getUser('0')).toEqual({
      id: '0',
      name: 'Mike',
      room: 'Node Course'
    });
  });

  it('should not find a user with an id that does not exist', () => {
    expect(users.getUser('doesNotExist')).toNotExist();
  });


  it('should find user by name', () => {
    expect(users.getUserByName('Mike')).toEqual({
      id: '0',
      name: 'Mike',
      room: 'Node Course'
    });
  });

  it('should not find a user with a name that does not exist', () => {
    expect(users.getUserByName('doesNotExist')).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike','Julie']);
  });
  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Sanchez']);
  });
});
