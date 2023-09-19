# Create Data JSON

**Scripts:**
- Start: yarn dev / npm run dev
- Build: yarn build / npm run build
- Test: yarn test / npm run test

****
**Style**
- styled-components

****
**Test**
- Jest
- Testing-library

****
**Development**
- To develop the app I have used an object to render all the inputs and selects needed.
- I follow the approach of headless components, where I decouple the logic in a custom hook and inject in the component.
- To render the inputs I develope its component, and for the select I used the lib react-select.

****
**Improvements**
- For the address the user should add only add the postal-code, and on submit it fetches the geocode API from Google. It will create a easy way to fill that input.
- It should have a endpoint to fetch the networks availables based on the adresses.
- Add mask on the inputs


