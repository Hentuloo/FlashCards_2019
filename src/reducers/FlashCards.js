import { ADD_WORD } from 'actions';

const exampleState = [
  {
    id: 'asdf123123afdssdafa',
    title: 'człowiek i chodzenie',
    cards: [
      { first: 'siema1', secondd: 'siema2' },
      { first: 'nie simea', secondd: 'nie siema' },
      { first: 'no hejo', secondd: 'no hejo' },
    ],
  },
  {
    id: 'asdf12312123afdsa',
    title: 'jakiś dział',
    cards: [
      { first: 'siema1', secondd: 'siema2' },
      { first: 'nie simea', secondd: 'nie siema' },
      { first: 'no hejo', secondd: 'no hejo' },
    ],
  },
  {
    id: 'asdfafsd123123afdsa',
    title: 'następny dział',
    cards: [
      { first: 'siema1', secondd: 'siema2' },
      { first: 'nie simea', secondd: 'nie siema' },
      { first: 'no hejo', secondd: 'no hejo' },
    ],
  },
  {
    id: 'asdf1231asdf2323afdsa',
    title: 'następny dział',
    cards: [
      { first: 'siema1', secondd: 'siema2' },
      { first: 'nie simea', secondd: 'nie siema' },
      { first: 'no hejo', secondd: 'no hejo' },
    ],
  },
];

export default (state = exampleState, action) => {
  switch (action.type) {
    case ADD_WORD:
      return state;
    default:
      return state;
  }
};
