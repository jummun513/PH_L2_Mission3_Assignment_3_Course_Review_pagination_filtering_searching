/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose
      .connect(config.database_uri as string)
      .then(() => console.log('Successfully, connected with database.'));

    app.listen(config.port, () => {
      console.log(`App is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
