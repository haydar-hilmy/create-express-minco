#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = process.argv[2] || 'my-express-backend';
const templateDir = path.join(__dirname, 'express-minco');

if (fs.existsSync(targetDir)) {
  console.error(`❌ Folder "${targetDir}" already exists. Choose a different name.`);
  process.exit(1);
}

console.log(`📁 Creating project in: ${targetDir}...`);

fs.cpSync(templateDir, targetDir, {
  recursive: true,
});

console.log('📦 Installing dependencies...');
execSync('npm install', { cwd: targetDir, stdio: 'inherit' });

console.log(`\n✅ Project successfully created in: ${targetDir}\n`);
console.log(`👉 Next steps:\n`);
console.log(`   1. Move into your project folder:`);
console.log(`      cd ${targetDir}\n`);
console.log(`   2. Start the development server:`);
console.log(`      npm start\n`);
console.log(`🚀 Happy coding!`);