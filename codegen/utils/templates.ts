import path from 'path';
import { Project } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths(path.join(__dirname, 'templates', '*.ts'));

export const contractClassStructure = project.getSourceFileOrThrow('contract.ts').getStructure();
