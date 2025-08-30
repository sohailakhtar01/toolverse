// src/app/browse-tools/layout.jsx
// This is a Server Component by default, so it can export metadata.

export const metadata = {
  title: "Browse AI Tools – ToolVault",
  description: "Explore AI tools by category, price, and features.",
};

export default function BrowseToolsLayout({ children }) {
  return (
    <>
      {/* Any common UI elements for this route segment can go here */}
      {children} {/* This is where the content from page.jsx will be rendered */}
    </>
  );
}                  