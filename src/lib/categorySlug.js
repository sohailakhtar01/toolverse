export const categoryToSlug = (category) => {
    if (!category) return "";

    return category
        .toLowerCase()
        .trim()
        .replace(/&/g, "-and-")   // Handle Ampersand
        .replace(/\//g, "-")      // <--- NEW: Explicitly turn Slash into Hyphen
        .replace(/\s*\(\s*/g, "-(")
        .replace(/\s*\)\s*/g, ")-")
        .replace(/[^a-z0-9()]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
};