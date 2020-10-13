const { Command } = require("commander");
const program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --foo', 'enable some foo');

program.parse(process.argv);