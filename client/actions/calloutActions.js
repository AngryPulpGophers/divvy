export const CREATE_CALLOUT = 'CREATE_CALLOUT';

export function createCallout(type) {
  const types = ['primary', 'secondary', 'success', 'warning', 'alert'];
  if (type == null) {
    type = types[parseInt(Math.random() * types.length)];
  }
  const id = Math.random().toString().substr(2);
  return {
    type: CREATE_CALLOUT,
    payload: {
      message: 'Lorem ipsum ' + id,
      type: type,
      id: id
    }
  };
}

export const REMOVE_CALLOUT = 'REMOVE_CALLOUT';
export function removeCallout(id) {
  return {
    type: REMOVE_CALLOUT,
    payload: {
      id: id
    }
  };
}
export const START_DISPLAY = 'START_DISPLAY';
export function startDisplay(amount) {
  console.log('pjdisplay',amount)
  return {
    type: START_DISPLAY,
    payload: {
      amount: amount
    }
  };
}
export const TOGGLE_DISPLAY = 'TOGGLE_DISPLAY';
export function toggleDisplay(id) {
  console.log('pjtoggle',id)
  return {
    type: TOGGLE_DISPLAY,
    payload: {
      id: id
    }
  };
}  