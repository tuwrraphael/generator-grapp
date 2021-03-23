"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "appname",
        message: "Application name"
      },
      {
        type: "appdescription",
        name: "app",
        message: "Application description"
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(this.templatePath("**/*"), this.destinationRoot(), {
      appname: this.answers.appname,
      appdescription: this.answers.appdescription
    });
  }
};
