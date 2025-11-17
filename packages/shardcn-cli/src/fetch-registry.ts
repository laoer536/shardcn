export async function fetchRegistry() {
    const url =
        "https://raw.githubusercontent.com/laoer536/shardcn/refs/heads/main/registry/components.json";
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch registry");
    return res.json() as Record<string, any>;
}

export async function fetchFile(url: string) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch: ${url}`);
    return res.text();
}
