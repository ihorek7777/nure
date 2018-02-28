import { GETTERS } from '../../common'

export default {
  [GETTERS.GET_MODALS]: state => {
    return state;
  },
  [GETTERS.GET_OLYMPIAD_MODAL]: state => {
    return state.olympiadModal;
  },
  [GETTERS.GET_IMAGE_MODAL]: state => {
    return state.imageModal;
  },
}
