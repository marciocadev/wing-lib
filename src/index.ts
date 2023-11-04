import { existsSync } from 'fs';
import { NodeProject, NodeProjectOptions } from 'projen/lib/javascript';
import { mainFile } from './base/main-file';

export class WingLib extends NodeProject {
  constructor(props: NodeProjectOptions) {
    super({
      github: false,
      codeCov: false,
      clobber: false,
      jest: false,
      readme: {
        contents: `# ${props.name}`,
      },
      ...props,
    });

    if (!existsSync(`${props.name}.main.w`)) {
      mainFile(this);
    }
  }
}