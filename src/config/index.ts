import path from 'path';
import { config as configDotenv } from 'dotenv';
import { fileURLToPath } from 'url';

configDotenv({
	path: path.join(path.dirname(fileURLToPath(import.meta.url)), '../../.env'),
});

if (!process.env.WIKIJS_URL || !process.env.WIKIJS_API_KEY) {
	throw new Error('WIKIJS_URL and WIKIJS_API_KEY must be set in .env file');
}

export const CONFIG = {
	WIKIJS_URL: process.env.WIKIJS_URL,
	WIKIJS_API_KEY: process.env.WIKIJS_API_KEY,
	ENABLE_EDIT: process.env.WIKIJS_ENABLE_EDIT === 'true' || false
};
