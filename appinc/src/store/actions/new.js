export const Creators = {
  getNewRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getNewSucsses: data => ({
    type: Types.GET_SUCSSES,
    payload: { data },
  }),

  getNewFailure: erro => ({
    type: Types.GET_FAILURE,
    payload: { erro },
  }),
};
