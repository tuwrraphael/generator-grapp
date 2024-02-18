"use strict";
import Generator from "yeoman-generator";
import dashify from "dashify";

export default class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "appname",
        message: "Application name"
      },
      {
        type: "input",
        name: "appdescription",
        message: "Application description"
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(this.templatePath("**/*"), this.destinationRoot(), {
      appname: this.answers.appname,
      appdescription: this.answers.appdescription,
      packagename: dashify(this.answers.appname)
    });
    this.fs.copy(this.templatePath(".*"), this.destinationRoot());
    this.fs.copy(
      this.templatePath(".github/**/*"),
      this.destinationRoot() + "/.github"
    );
    this.fs.copy(
      this.templatePath(".vscode/**/*"),
      this.destinationRoot() + "/.vscode"
    );
  }
};
