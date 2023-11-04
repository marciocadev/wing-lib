# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WingLib <a name="WingLib" id="@marciocadev/wing-lib-template.WingLib"></a>

#### Initializers <a name="Initializers" id="@marciocadev/wing-lib-template.WingLib.Initializer"></a>

```typescript
import { WingLib } from '@marciocadev/wing-lib-template'

new WingLib(options: NodeProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.Initializer.parameter.options">options</a></code> | <code>projen.javascript.NodeProjectOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@marciocadev/wing-lib-template.WingLib.Initializer.parameter.options"></a>

- *Type:* projen.javascript.NodeProjectOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@marciocadev/wing-lib-template.WingLib.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@marciocadev/wing-lib-template.WingLib.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@marciocadev/wing-lib-template.WingLib.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@marciocadev/wing-lib-template.WingLib.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@marciocadev/wing-lib-template.WingLib.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@marciocadev/wing-lib-template.WingLib.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@marciocadev/wing-lib-template.WingLib.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="@marciocadev/wing-lib-template.WingLib.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@marciocadev/wing-lib-template.WingLib.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@marciocadev/wing-lib-template.WingLib.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@marciocadev/wing-lib-template.WingLib.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@marciocadev/wing-lib-template.WingLib.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@marciocadev/wing-lib-template.WingLib.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@marciocadev/wing-lib-template.WingLib.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@marciocadev/wing-lib-template.WingLib.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@marciocadev/wing-lib-template.WingLib.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@marciocadev/wing-lib-template.WingLib.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@marciocadev/wing-lib-template.WingLib.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@marciocadev/wing-lib-template.WingLib.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@marciocadev/wing-lib-template.WingLib.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@marciocadev/wing-lib-template.WingLib.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@marciocadev/wing-lib-template.WingLib.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@marciocadev/wing-lib-template.WingLib.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@marciocadev/wing-lib-template.WingLib.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@marciocadev/wing-lib-template.WingLib.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@marciocadev/wing-lib-template.WingLib.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@marciocadev/wing-lib-template.WingLib.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@marciocadev/wing-lib-template.WingLib.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@marciocadev/wing-lib-template.WingLib.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@marciocadev/wing-lib-template.WingLib.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@marciocadev/wing-lib-template.WingLib.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@marciocadev/wing-lib-template.WingLib.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@marciocadev/wing-lib-template.WingLib.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@marciocadev/wing-lib-template.WingLib.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@marciocadev/wing-lib-template.WingLib.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@marciocadev/wing-lib-template.WingLib.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@marciocadev/wing-lib-template.WingLib.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@marciocadev/wing-lib-template.WingLib.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@marciocadev/wing-lib-template.WingLib.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@marciocadev/wing-lib-template.WingLib.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@marciocadev/wing-lib-template.WingLib.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@marciocadev/wing-lib-template.WingLib.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@marciocadev/wing-lib-template.WingLib.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@marciocadev/wing-lib-template.WingLib.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@marciocadev/wing-lib-template.WingLib.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@marciocadev/wing-lib-template.WingLib.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@marciocadev/wing-lib-template.WingLib.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@marciocadev/wing-lib-template.WingLib.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@marciocadev/wing-lib-template.WingLib.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@marciocadev/wing-lib-template.WingLib.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@marciocadev/wing-lib-template.WingLib.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@marciocadev/wing-lib-template.WingLib.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@marciocadev/wing-lib-template.WingLib.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@marciocadev/wing-lib-template.WingLib.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@marciocadev/wing-lib-template.WingLib.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@marciocadev/wing-lib-template.WingLib.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@marciocadev/wing-lib-template.WingLib.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@marciocadev/wing-lib-template.WingLib.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@marciocadev/wing-lib-template.WingLib.isConstruct"></a>

```typescript
import { WingLib } from '@marciocadev/wing-lib-template'

WingLib.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@marciocadev/wing-lib-template.WingLib.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@marciocadev/wing-lib-template.WingLib.isProject"></a>

```typescript
import { WingLib } from '@marciocadev/wing-lib-template'

WingLib.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@marciocadev/wing-lib-template.WingLib.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@marciocadev/wing-lib-template.WingLib.of"></a>

```typescript
import { WingLib } from '@marciocadev/wing-lib-template'

WingLib.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@marciocadev/wing-lib-template.WingLib.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |

---

##### `node`<sup>Required</sup> <a name="node" id="@marciocadev/wing-lib-template.WingLib.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@marciocadev/wing-lib-template.WingLib.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@marciocadev/wing-lib-template.WingLib.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@marciocadev/wing-lib-template.WingLib.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@marciocadev/wing-lib-template.WingLib.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@marciocadev/wing-lib-template.WingLib.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@marciocadev/wing-lib-template.WingLib.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@marciocadev/wing-lib-template.WingLib.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@marciocadev/wing-lib-template.WingLib.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@marciocadev/wing-lib-template.WingLib.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@marciocadev/wing-lib-template.WingLib.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@marciocadev/wing-lib-template.WingLib.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@marciocadev/wing-lib-template.WingLib.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@marciocadev/wing-lib-template.WingLib.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@marciocadev/wing-lib-template.WingLib.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@marciocadev/wing-lib-template.WingLib.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@marciocadev/wing-lib-template.WingLib.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@marciocadev/wing-lib-template.WingLib.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@marciocadev/wing-lib-template.WingLib.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@marciocadev/wing-lib-template.WingLib.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@marciocadev/wing-lib-template.WingLib.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@marciocadev/wing-lib-template.WingLib.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@marciocadev/wing-lib-template.WingLib.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@marciocadev/wing-lib-template.WingLib.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@marciocadev/wing-lib-template.WingLib.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@marciocadev/wing-lib-template.WingLib.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@marciocadev/wing-lib-template.WingLib.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@marciocadev/wing-lib-template.WingLib.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@marciocadev/wing-lib-template.WingLib.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@marciocadev/wing-lib-template.WingLib.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@marciocadev/wing-lib-template.WingLib.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@marciocadev/wing-lib-template.WingLib.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@marciocadev/wing-lib-template.WingLib.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@marciocadev/wing-lib-template.WingLib.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@marciocadev/wing-lib-template.WingLib.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@marciocadev/wing-lib-template.WingLib.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@marciocadev/wing-lib-template.WingLib.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@marciocadev/wing-lib-template.WingLib.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@marciocadev/wing-lib-template.WingLib.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@marciocadev/wing-lib-template.WingLib.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@marciocadev/wing-lib-template.WingLib.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@marciocadev/wing-lib-template.WingLib.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@marciocadev/wing-lib-template.WingLib.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@marciocadev/wing-lib-template.WingLib.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@marciocadev/wing-lib-template.WingLib.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@marciocadev/wing-lib-template.WingLib.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@marciocadev/wing-lib-template.WingLib.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@marciocadev/wing-lib-template.WingLib.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@marciocadev/wing-lib-template.WingLib.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@marciocadev/wing-lib-template.WingLib.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@marciocadev/wing-lib-template.WingLib.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@marciocadev/wing-lib-template.WingLib.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@marciocadev/wing-lib-template.WingLib.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@marciocadev/wing-lib-template.WingLib.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---




