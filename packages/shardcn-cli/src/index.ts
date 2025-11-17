import { Command } from "commander";
import { addComponent } from "./add-component";

const program = new Command();

program
    .command("add <name>")
    .description("Add a shardcn business component")
    .action(async (name) => {
        await addComponent(name);
    });

program.parse();
