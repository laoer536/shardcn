export function replaceImportPaths(content: string) {
    return content.replace(/@\/components\/ui/g, "@/components/ui");
}
