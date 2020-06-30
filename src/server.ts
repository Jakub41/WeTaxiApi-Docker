import app from './app';
import { PORT } from './constants/WeTaxiApi.constants';

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
