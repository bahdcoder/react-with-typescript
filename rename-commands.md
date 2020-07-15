## How to rename files easily.

- First install the renamer package globally `npm i -g renamer`
- Next, run the following commands:
    - `renamer --path-element ext --find js --replace tsx ./src/components/*`
    - `renamer --path-element ext --find js --replace tsx ./src/index.js`
    - `renamer --path-element ext --find js --replace ts ./src/**/*`
