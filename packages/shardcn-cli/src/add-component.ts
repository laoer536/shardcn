import fs from "fs-extra";
import path from "path";
import { fetchRegistry, fetchFile } from "./fetch-registry.js";
import { detectShadcnDir } from "./detect-shadcn.js";
import { replaceImportPaths } from "./replace-imports.js";

export async function addComponent(name: string) {
    const cwd = process.cwd();

    const registry = await fetchRegistry();
    const comp = registry[name];
    if (!comp) throw new Error(`Component "${name}" not found.`);

    const uiDir = detectShadcnDir(cwd);
    const baseDir = path.dirname(uiDir);
    const targetDir = path.join(baseDir, "shardcn", name);

    await fs.ensureDir(targetDir);

    const baseUrl =
        "https://raw.githubusercontent.com/YOUR_GITHUB/shardcn-registry/main/registry";

    for (const file of comp.files) {
        const url = `${baseUrl}/${comp.path}/${file}`;
        let content = await fetchFile(url);
        content = replaceImportPaths(content);
        await fs.writeFile(path.join(targetDir, file), content);
    }

    console.log(`✔ Component "${name}" added to ${targetDir}`);
}
