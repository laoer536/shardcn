import fs from "fs-extra";
import path from "path";

export function detectShadcnDir(cwd: string) {
    const candidates = [
        "src/components/ui",
        "components/ui",
        "app/components/ui"
    ];

    for (const p of candidates) {
        const full = path.join(cwd, p);
        if (fs.existsSync(full)) return full;
    }

    throw new Error("shadcn/ui directory not found");
}
