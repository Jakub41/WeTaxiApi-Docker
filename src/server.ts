import app from './app';
import listEndpoints from 'express-list-endpoints';
import { PORT } from './constants/WeTaxiApi.constants';

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
console.log('END-POINTS LIST: \n', listEndpoints(app));
