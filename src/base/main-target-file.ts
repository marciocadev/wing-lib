import { Project, TextFile } from 'projen';

export function mainTargetFile(project: Project, name: string, target: string) {
  const className = `${name.charAt(0).toUpperCase() + name.slice(1)}`;
  new TextFile(project, `${name}.${target}.w`, {
    readonly: false,
    lines: [
      'bring util;',
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