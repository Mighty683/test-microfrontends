# POD of microfrontend technology

## Used:

- SystemJS to load external micro frontend
  - Important places:
    - `test-parcel/src/root.component.tsx` - definition of micro frontend
    - `test-spa/src/main.tsx` - definition of shared dependencies
    - `test-spa/src/App.tsx` - utilization of micro frontend

### How to run

- Run `npm run dev` from test-spa
- Run `npm run start` from test-parcel

Visit test-spa location
