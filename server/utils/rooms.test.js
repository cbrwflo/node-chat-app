const expect = require('expect');

const {Rooms} = require('./rooms');

describe('Rooms', () => {
  var rooms;

  beforeEach(() => {
    rooms = new Rooms();
    rooms.rooms = [{
      name: 'Node Course'
    }, {
      name: 'React Course'
    }];
  });

  it('should add new room', () => {
    var rooms = new Rooms();

    var room = {
      name: 'Nacho Libre fans'
    };

    var resRoom = rooms.addRoom(room.name);

    expect(rooms.rooms).toEqual([room]);
  });

  it('should remove a room by name', () => {
    var roomName = 'Node Course'
    var resRoom = rooms.removeRoom(roomName);

    expect(rooms.rooms.length).toEqual(1);
    expect(resRoom.name).toEqual(roomName);
  });

  it('should not remove a room that does not exist', () => {
    var resRoom = rooms.removeRoom('doesNotExist');

    expect(rooms.rooms.length).toEqual(2);
    expect(resRoom).toNotExist();
  });

  it('should get a list of rooms', () => {
    var roomList = rooms.getRooms();
    expect(roomList).toEqual(['Node Course','React Course']);
  });

});
