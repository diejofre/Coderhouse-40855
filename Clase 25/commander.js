import { Command } from "commander";

const program = new Command();

program
  .option("-d", "Variable para debug", false)
  .option("-p <port>", "puerto donde levanta el servidor", 8080)
  .option("--mode <mode>", "modo de trabajo", "production")
  .requiredOption(
    "-u <user>",
    "usuario que llamó al script",
    "no se especifico un usuario"
  )
  .option("-l, --letters [letters...]", "letters");

program.parse();

console.log("Options: ", program.opts());
console.log("Remaining args: ", program.args);
