import { ADD_WORD } from 'actions';

const exampleState = [
  {
    id: 'asdf123123afdssdafa',
    title: 'człowiek i chodzenie',
    cards: [
      { id: 'adsf1', first: '111111s1iema1', second: 'siema2' },
      { id: 'adsf1asf', first: 'nie simea', second: 'nie siema' },
      { id: 'adsfdsf1', first: 'no hejo', second: 'no hejo' },
    ],
  },
  {
    id: 'asdf12312123afdsa',
    title: 'jakiś dział',
    cards: [
      { id: 'adsf1', first: '222222siema1', second: 'siema2' },
      { id: 'adsfsdfa1', first: 'nie ssdsdimea', second: 'nie siema' },
      { id: 'adsdsf1', first: 'no hejo', second: 'no hejo' },
    ],
  },
  {
    id: 'asdfafsd123123afdsa',
    title: 'następny dział',
    cards: [
      { id: 'adsf1', first: '333333siema1', second: 'siema2' },
      { id: 'adasdfsf1', first: 'nie simea', second: 'nie siema' },
      { id: 'adggsf1', first: 'no hejo', second: 'no hejo' },
    ],
  },
  {
    id: 'asdf1231asdf2323afdsa',
    title: 'następny dział',
    cards: [
      { id: 'adsf1', first: '444444', second: 'siema2' },
      { id: 'adssdf1', first: 'nie simea', second: 'nie siema' },
      { id: 'adddsf1', first: 'no hejo', second: 'no hejo' },
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
