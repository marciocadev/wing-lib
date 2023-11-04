import { Project, TextFile } from 'projen';

export function mainTargetFile(project: Project, fileName: string, target: string) {
  const className = `${fileName.charAt(0).toUpperCase() + fileName.slice(1)}`;
  new TextFile(project, fileName, {
    lines: [
      'bring util;',
      `bring ${target};`,
      'bring "./api.w" as api;',
      '',
      `pub class ${className}_${target} impl api.I${className} {`,
      `  props: api.${className}Props;`,
      '',
      `  init(props: api.${className}Props) {`,
      '    this.props = props;',
      '  }',
      '}',
    ],
  });
}