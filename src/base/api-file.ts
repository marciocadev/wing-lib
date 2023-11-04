import { Project, TextFile } from 'projen';

export function apiFile(project: Project, name: string) {
  const interfaceName = `I${name.charAt(0).toUpperCase() + name.slice(1)}`;
  const propsName = `${name.charAt(0).toUpperCase() + name.slice(1)}Props`;

  new TextFile(project, 'api.w', {
    readonly: false,
    lines: [
      'bring util;',
      '',
      `pub interface ${interfaceName} extends std.IResource {`,
      '}',
      '',
      `pub struct ${propsName} {`,
      '}',
    ],
  });
}