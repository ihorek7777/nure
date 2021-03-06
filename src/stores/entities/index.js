import { ACTIONS } from '../../common'
import { initApi } from '../../api'

import announcements from './announcements'
import faculties from './faculties'
import news from './news'
import specialities from './specialities'
import specializations from './specializations'

const entities = {
  modules: {
    announcements,
    faculties,
    news,
    specialities,
    specializations,
  },
  actions: {
    [ACTIONS.UPLOAD_ALL_ENTITIES]: async state => {
      initApi();
      await state.dispatch(ACTIONS.UPLOAD_ANNOUNCEMENTS);
      await state.dispatch(ACTIONS.UPLOAD_FACULTIES);
      await state.dispatch(ACTIONS.UPLOAD_NEWS);
      await state.dispatch(ACTIONS.UPLOAD_SPECIALITIES);
      await state.dispatch(ACTIONS.UPLOAD_SPECIALIZATIONS);
    },
  },
};

export default entities
