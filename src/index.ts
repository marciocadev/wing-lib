import { existsSync } from 'fs';
import { NodeProject, NodeProjectOptions } from 'projen/lib/javascript';
import { apiFile } from './base/api-file';
import { mainFile } from './base/main-file';
import { mainTargetFile } from './base/main-target-file';

export class WingLib extends NodeProject {
  constructor(options: NodeProjectOptions) {
    super({
      github: false,
      codeCov: false,
      clobber: false,
      jest: false,
      readme: {
        contents: `# ${options.name}`,
      },
      ...options,
    });

    if (!existsSync(`${options.name}.w`)) {
      mainFile(this, options.name);
    }

    if (!existsSync('api.w')) {
      apiFile(this, options.name);
    }

    if (!existsSync(`${options.name}.sim.w`)) {
      mainTargetFile(this, `${options.name}`, 'sim');
    }

    if (!existsSync(`${options.name}.tfaws.w`)) {
      mainTargetFile(this, `${options.name}`, 'tfaws');
    }
  }
}