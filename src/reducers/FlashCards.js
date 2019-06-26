import { ADD_WORD } from 'actions';

const exampleState = [
  {
    title: 'człowiek i chodzenie',
    cards: [
      { first: 'siema1', secondd: 'siema2' },
      { first: 'nie simea', secondd: 'nie siema' },
      { first: 'no hejo', secondd: 'no hejo' },
    ],
  },
  {
    title: 'jakiś dział',
    cards: [
      { first: 'siema1', secondd: 'siema2' },
      { first: 'nie simea', secondd: 'nie siema' },
      { first: 'no hejo', secondd: 'no hejo' },
    ],
  },
  {
    title: 'następny dział',
    cards: [
      { first: 'siema1', secondd: 'siema2' },
      { first: 'nie simea', secondd: 'nie siema' },
      { first: 'no hejo', secondd: 'no hejo' },
    ],
  },
  {
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
