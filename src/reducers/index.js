import { headerReducer } from '../components/header/header.reducer';
import { govReducer } from '../containers/gov/gov.reducer';
import { certReducer } from '../containers/cert/cert.reducer';

export default {
    header: headerReducer,
    gov: govReducer,
    cert: certReducer
};
