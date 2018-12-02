import {
  addUser,
  removeUser,
  addMessage,
  setAuthor,
} from './actionCreators';
import {
  ADD_USER,
  REMOVE_USER,
  ADD_MESSAGE,
  SET_AUTHOR,
} from './actionTypes';

describe('#addUser', () => {
  it('should return a user action of type ADD_USER', () => {
    const mockUser = { id: 0, name: 'test user' };
    const expectedAction = {
      type: ADD_USER,
      payload: {
        id: mockUser.id,
        name: mockUser.name,
      }
    };
    expect(addUser(mockUser)).toEqual(expectedAction);
  });
});

describe('#removeUser', () => {
  it('should return a user action of type REMOVE_USER)', () => {
    const mockUser = { id: 0, name: 'test user' };
    const expectedAction = {
      type: REMOVE_USER,
      payload: {
        id: mockUser.id,
      }
    };
    expect(removeUser(mockUser)).toEqual(expectedAction);
  });
});

describe('#addMessage', () => {
  it('should return a user action of type ADD_MESSAGE', () => {
    const mockMessage = { authorId: 1, authorName: 'test user', text: 'this is a test message'};
    const expectedAction = {
      type: ADD_MESSAGE,
      payload: {
        id: 0,
        message: mockMessage.text,
        authorId: mockMessage.authorId,
        authorName: mockMessage.authorName,
      }
    };
    expect(addMessage(mockMessage)).toEqual(expectedAction);
  });
});

describe('#setAuthor', () => {
  it('should return a user action of type SET_AUTHOR', () => {
    const mockUser = { id: 1, name: 'Rachel'};
    const expectedAction = {
      type: SET_AUTHOR,
      payload: {
        id: mockUser.id,
        name: mockUser.name,
      }
    };
    expect(setAuthor(mockUser)).toEqual(expectedAction);
  });
});
