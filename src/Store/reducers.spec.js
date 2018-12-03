import {
  users,
  messages,
  author,
} from './reducers';
import {
  ADD_USER,
  REMOVE_USER,
  ADD_MESSAGE,
  SET_AUTHOR,
} from './actionTypes';

const initialAuthorState = { id: 0, name: `anonymous tester`}
const initialUserState = [[ 0, initialAuthorState]]
const initialMessageState = [
  { id: 0, message: 'this is a test message', authorName: 'Rachel', authorId: '234' },
  { id: 1, message: 'this is a mock message', authorName: 'Pine nut', authorId: '254' },
]

describe('#users - reducer', () =>{
  it('should return the users state', () => {
    const userState = users(new Map(initialUserState), { type: '' })
    const expectedState = new Map(initialUserState);
    expect(userState).toEqual(expectedState);
  })
  it('should add a user when type = ADD_USER', () => {
    const newUser = { id: 4, name: 'macadamia'}
    const userState = users(new Map(initialUserState), { type: ADD_USER, payload: newUser })
    const expectedState = new Map(initialUserState).set(4, newUser);
    expect(userState).toEqual(expectedState);
  })
  it('should remove a user when type = REMOVE_USER', () => {
    const staleUser = { id: 0 }
    const userState = users(new Map(initialUserState), { type: REMOVE_USER, payload: staleUser })
    const expectedState = new Map();
    expect(userState).toEqual(expectedState);
  })
});

describe('#messages - reducer', () =>{
  it('should return the messages state', () => {
    const messageState = messages(initialMessageState, { type: '' })
    const expectedState = initialMessageState;
    expect(messageState).toEqual(expectedState);
  })
  it('should add a message when type = ADD_MESSAGE', () => {
    const newMessage = { id: 3, message: 'this is another test message', authorId: 8, authorName: 'walnut'}
    const messageState = messages(initialMessageState, { type: ADD_MESSAGE, payload: newMessage })
    const expectedState = [...initialMessageState, newMessage];
    expect(messageState).toEqual(expectedState);
  })
});

describe('#author - reducer', () =>{
  it('should return the authors state', () => {
    const authorState = author(initialAuthorState, { type: '' })
    const expectedState = initialAuthorState;
    console.log(authorState);
    expect(authorState).toEqual(expectedState);
  })
  it('should set the author when type = SET_AUTHOR', () => {
    const newAuthor = { id: 0, name: 'Rachel'}
    const authorState = author(initialAuthorState, { type: SET_AUTHOR, payload: newAuthor })
    const expectedState = newAuthor;
    expect(authorState).toEqual(expectedState);
  })
});
