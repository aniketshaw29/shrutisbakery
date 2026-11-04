/**
 * Resolve a file from `public/` against the deployment base. On GitHub Pages a
 * project site lives at `/repo-name/`, so assets cannot use root-absolute paths.
 */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
