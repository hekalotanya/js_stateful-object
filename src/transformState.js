'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const keyRemove of action.keysToRemove) {
          delete state[keyRemove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
  // write code here
}

module.exports = transformState;
