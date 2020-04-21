import path from 'path';
import { Project } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths(path.join(__dirname, 'templates', '*.ts'));

export const contractClassStructure = project.getSourceFileOrThrow('MyContract.ts').getStructure();
export const contractBinStructure = project.getSourceFileOrThrow('MyContract.bin.ts').getStructure();
