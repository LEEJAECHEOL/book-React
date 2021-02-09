export const search = (value) => ({
  type: "KEYWORD",
  value: value,
});

const initstate = {
  keyword: "",
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "KEYWORD":
      return { keyword: action.value };
    default:
      return state;
  }
};

export default reducer;
