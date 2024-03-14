"use strict";
import Generator from "yeoman-generator";
import dashify from "dashify";

export default class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("componentname", { type: String, required: true });
  }

  prompting() {}

  writing() {
    this.fs.copy(
      this.templatePath("component.html"),
      this.destinationPath(
        `src/components/${this.options.componentname}/${this.options.componentname}.html`
      )
    );
    this.fs.copy(
      this.templatePath("component.scss"),
      this.destinationPath(
        `src/components/${this.options.componentname}/${this.options.componentname}.scss`
      )
    );
    this.fs.copyTpl(
      this.templatePath("component.ts"),
      this.destinationPath(
        `src/components/${this.options.componentname}/${this.options.componentname}.ts`
      ),
      {
        componentname: this.options.componentname,
        tagname: dashify(this.options.componentname)
      }
    );
  }
};
