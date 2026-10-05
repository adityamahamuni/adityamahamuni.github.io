# Aditya Mahamuni — portfolio

Personal portfolio at https://adityamahamuni.com/, built with React and Tailwind CSS.

## Development

```sh
cd portfolio
npm ci
npm start
```

## Verification

```sh
CI=true npm test -- --watchAll=false --runInBand
GENERATE_SOURCEMAP=false npm run build
```

GitHub Pages serves the root of `main`. After building, copy the contents of `portfolio/build/` into the repository root, replacing the generated `static/` directory. Preserve the `portfolio/` source directory and `CNAME` (adityamahamuni.com). Commit the source and generated output together.

Public experience and skills live in `portfolio/src/data/profile.json`. Update the public resume at `portfolio/public/Resume_Aditya_Mahamuni.pdf` before building.
