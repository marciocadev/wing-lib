import { Project, TextFile } from 'projen';

export function mainFile(project: Project, fileName: string) {
  const className = `${fileName.charAt(0).toUpperCase() + fileName.slice(1)}`;
  new TextFile(project, fileName, {
    lines: [
      'bring util;',
      `bring "./${className}.sim.w" as sim;`,
      `bring "./${className}.tfaws.w" as tfaws;`,
      'bring "./api.w" as api;',
      '',
      `pub class ${className} impl api.I${className} {`,
      `  inner: api.I${className};`,
      '',
      `  init(props: api.${className}Props) {`,
      '    let target = util.env("WING_TARGET");',
      '',
      '    if target == "sim" {',
      `      this.inner = new sim.${className}_sim(props) as "sim";`,
      '    }',
      '    elif target == "tf-aws" {',
      `      this.inner = new tfaws.${className}_tfaws(props) as "tf-aws";`,
      '    } else {',
      '      throw "unsupported target ${target}";',
      '    }',
      '  }',
      '}',
    ],
  });
}