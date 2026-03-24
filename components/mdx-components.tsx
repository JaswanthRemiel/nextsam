import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-sf-bold text-white mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-sf-medium text-white mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-sf-medium text-gray-100 mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-300 leading-relaxed mb-4 font-sf-regular">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="text-orange-500 hover:text-orange-400 underline underline-offset-4 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-gray-300">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500 pl-4 my-4 italic text-gray-400">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-zinc-800 text-orange-400 px-1.5 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        );
      }
      return (
        <code className={`${className} font-mono`}>{children}</code>
      );
    },
    pre: ({ children }) => (
      <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      <Image
        src={src || ""}
        alt={alt || ""}
        width={800}
        height={400}
        className="rounded-lg my-6 w-full"
        suppressHydrationWarning
      />
    ),
    hr: () => <hr className="border-zinc-700 my-8" />,
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-zinc-700 rounded-lg">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-zinc-700 px-4 py-2 bg-zinc-800 text-left text-white font-sf-medium">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-zinc-700 px-4 py-2 text-gray-300">
        {children}
      </td>
    ),
    ...components,
  };
}

// Custom components for MDX
export const Callout = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "error";
}) => {
  const colors = {
    info: "bg-blue-500/10 border-blue-500 text-blue-400",
    warning: "bg-yellow-500/10 border-yellow-500 text-yellow-400",
    error: "bg-red-500/10 border-red-500 text-red-400",
  };

  return (
    <div className={`border-l-4 p-4 my-4 rounded-r-lg ${colors[type]}`}>
      {children}
    </div>
  );
};
