import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

let cachedVersion: string | null = null;

export function getVersion(): string {
  if (cachedVersion !== null) {
    return cachedVersion;
  }

  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const packageJsonPath = join(__dirname, '../../package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8')) as { version: string };

    cachedVersion = packageJson.version;
    return cachedVersion;

  } catch (error) {
    console.error('Failed to read version from package.json:', error);
    return '1.0.0';
  }
} 