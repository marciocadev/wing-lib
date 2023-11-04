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

    const mainFilename = `${options.name}.w`;
    if (!existsSync(mainFilename)) {
      mainFile(this, mainFilename);
    }

    if (!existsSync('api.w')) {
      apiFile(this, mainFilename);
    }

    if (!existsSync(`${mainFilename}.sim.w`)) {
      mainTargetFile(this, `${mainFilename}.sim.w`, 'sim');
    }

    if (!existsSync(`${mainFilename}.tfaws.w`)) {
      mainTargetFile(this, `${mainFilename}.tfaws.w`, 'tfaws');
    }
  }
}