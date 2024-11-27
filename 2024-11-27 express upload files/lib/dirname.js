import { fileURLToPath } from 'url';
import path from 'path';

// root is the location of the project
//C:\Users\rembo\OneDrive\Desktop\Programavimas\2024-11-27 express upload files

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
// //
// console.log(root);
export default root;
