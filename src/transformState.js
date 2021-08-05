'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const i in action.extraData) {
        state[i] = action.extraData[i];
      }
    }

    if (action.type === 'removeProperties') {
      for (const j of action.keysToRemove) {
        delete state[j];
      }
    }

    if (action.type === 'clear') {
      for (const k in state) {
        delete state[k];
      }
    }
  }

  return state;
  // write code here
}

module.exports = transformState;
