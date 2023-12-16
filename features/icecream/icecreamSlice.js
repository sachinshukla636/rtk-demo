const createSlice = require("@reduxjs/toolkit").createSlice;

initialState = {
  noOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfIcecreams--;
    },
    restocked: (state, actions) => {
      state.noOfIcecreams += actions.payload;
    },
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
