import { counterIncrementType, counterDecrementType } from "../types";

export const counterIncrementAction = () => {
  return {
    type: counterIncrementType,
  };
};

export const counterDecrementAction = () => {
  return {
    type: counterDecrementType,
  };
};
