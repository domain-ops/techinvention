# TechInvention Project Rules

## Image and Static Asset Path Resolution

The TechInvention project is configured to run under a custom Next.js `basePath` (`/techinvention`). To prevent broken images and file links on both localhost and production environments, always follow these rules:

1. **Always Expose and Use `basePath`**:
   Any component rendering a static asset from the `public/` directory must retrieve the exposed environment variable at the top of the file:
   ```typescript
   const basePath = process.env.BASE_PATH || '';
   ```

2. **Standard HTML Elements (`<img>`, `<a>`, `<video>`)**:
   Always prepend the `basePath` to the `src` or `href` attributes:
   ```tsx
   // Correct:
   <img src={`${basePath}/team-techinvention.jpg`} alt="Team" />
   <a href={`${basePath}/articles/form.pdf`}>Read PDF</a>

   // Incorrect:
   <img src="/team-techinvention.jpg" alt="Team" />
   <a href="/articles/form.pdf">Read PDF</a>
   ```

3. **Resolving Mixed or Array Paths**:
   When rendering arrays or config objects containing static asset path strings, use a resolver function to conditionally prepend `basePath`:
   ```typescript
   const resolveImage = (img: any) => {
       if (typeof img === 'string') {
           if (img.startsWith('/') && !img.startsWith(basePath)) {
               return `${basePath}${img}`;
           }
           return img;
       }
       return img?.src || '';
   };
   ```

4. **Next.js `<Image>` Component**:
   The project has `unoptimized: true` configured in `next.config.mjs` to bypass optimization server issues on localhost. Standard string paths passed to `<Image>` (e.g., `src="/image.png"`) will have `basePath` prepended automatically by Next.js, but any dynamically-rendered asset must be checked for correct prefixing.

## Content and Localization Rules

1. **Preserve Master Content and Target Only Requested Languages**:
   - The content in `src/translations/languages/english.ts` is client-approved master copy.
   - **NEVER** modify, alter, rewrite, or replace existing English content unless the user explicitly provides or requests the exact changes.
   - **Target-Specific Updates Only**: When the user requests a change to a specific language, modify **ONLY** that specified language. Do **NOT** modify, auto-translate, or touch headings or content in other language files unless the user explicitly instructs to do so.

