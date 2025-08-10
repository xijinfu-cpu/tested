import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import PinoHttp from 'pino-http';
import 'dotenv/config';
// API untuk wish tidak diperlukan lagi; backend cukup index
// env
const { APP_PORT, APP_NAME } = process.env;

const app = express();
app.use(PinoHttp());
app.use(cors());
app.use(helmet());

app.use(express.json());
// tidak ada store yang diperlukan

app.listen(APP_PORT || 5172, '0.0.0.0', () => {
  console.log(`${APP_NAME} REST API RUN at PORT ${APP_PORT}`);
});

// routing
app.get('/', (req, res) => {
  try {
    return res.status(200).send({
      message: `${APP_NAME || 'backend'} run normally OK`,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message || `error when get index`,
    });
  }
});
// hapus endpoint /wish karena tidak dipakai
