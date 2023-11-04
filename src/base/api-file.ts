import { Project, TextFile } from 'projen';

export function apiFile(project: Project, fileName: string) {
  const interfaceName = `I${fileName.charAt(0).toUpperCase() + fileName.slice(1)}`;
  const propsName = `${fileName.charAt(0).toUpperCase() + fileName.slice(1)}Props`;

  new TextFile(project, 'api.w', {
    lines: [
      'bring util;',
      '',
      `pub class ${interfaceName} extends str.IResource {`,
      '}',
      '',
      `pub struct ${propsName} {`,
      '}',
    ],
  });
}