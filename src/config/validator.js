import validator from 'validator';

export default props => {
  const keys = Object.keys(props);
  const validResponse = keys.map(key => {
    switch (key) {
      case 'id':
      case 'idType':
      case 'idWord': {
        if (validator.isEmpty(props[key])) {
          return {
            errorType: 'idEmpty',
          };
        }
        if (!validator.isAlphanumeric(props[key])) {
          return {
            errorType: 'idAlpaNum',
          };
        }
        return true;
      }

      case 'title': {
        if (validator.isEmpty(props[key])) {
          return {
            errorType: 'titleEmpty',
          };
        }
        if (/[^A-Za-z\d\s]/.test(props[key])) {
          return {
            errorType: 'titleAlpaNum',
          };
        }
        return true;
      }

      case 'icon': {
        if (validator.isEmpty(props[key])) {
          return {
            errorType: 'iconEmpty',
          };
        }
        if (!/^[a-z0-9_-]+$/i.test(props[key])) {
          return {
            errorType: 'iconWrong',
          };
        }
        return true;
      }

      case 'cards': {
        for (let i = 0; i < props[key].length; i += 1) {
          const { word, description } = props[key][i];
          if (validator.isEmpty(word) || validator.isEmpty(description)) {
            return {
              errorType: 'cardEmpty',
            };
          }
          if (/[^A-Za-z\d\s]/.test(word) || /[^A-Za-z\d\s]/.test(description)) {
            return {
              errorType: 'cardAlpaNum',
            };
          }
        }
        break;
      }
      case 'email': {
        if (!validator.isEmail(props[key])) {
          return {
            errorType: 'emailWrong',
          };
        }
        break;
      }
      case 'password': {
        if (validator.isEmpty(props[key])) {
          return {
            errorType: 'passwordEmpty',
          };
        }
        break;
      }
      default:
        return true;
    }
    return true;
  });

  return validResponse.find(e => typeof e === 'object');
};
