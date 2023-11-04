import { cdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new cdk.JsiiProject({
  author: 'Marcio Cruz de Almeida',
  authorAddress: 'marciocadev@gmail.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@marciocadev/wing-lib',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/marciocadev/wing-lib.git',

  release: true,
  publishTasks: true,
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,

  // deps: [], /* Runtime dependencies of this module. */
  peerDeps: ['projen', 'constructs'],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['projen', 'constructs'], /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();