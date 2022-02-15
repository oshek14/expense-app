import { IAction, ITransactionsState } from "../models";

const INITIAL_STATE: ITransactionsState = {
  transactions: [],
};

const transactionsReducer = (
  state: ITransactionsState = INITIAL_STATE,
  action: IAction
) => {
  switch (action.type) {
    case "TRANSACTIONS_SUCCESS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "ADD_TRANSACTION_SUCCESS":
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
