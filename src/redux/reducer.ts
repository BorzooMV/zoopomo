interface IUser {
  name: string;
  tasks: {
    remaining: { title: string }[];
    complated: { title: string }[];
  };
}

interface IAction {
  type: string;
  payload?: any;
}

interface IState {
  user: IUser | null;
}

const initialState = {
  user: null,
};

export const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case "USER/LOGIN":
      return { ...state, user: action.payload };

    case "USER/LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
};
