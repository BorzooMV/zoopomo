interface state {
  user: {};
}

interface action {
  type: string;
  payload?: {};
}

const initialState = {
  user: {},
};

export const reducer = (state: state = initialState, action: action) => {
  switch (action.type) {
    default:
      return state;
  }
};
