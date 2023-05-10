# Pricing Table
This project showcases a responsive pricing table built using React, Vite, TypeScript, and Sass. The table includes three pricing cards (Basic, Standard, and Enterprise) with different features and prices, as well as Get Started buttons.


## Versions
There are two versions of the app, each with a different implementation of the `PricingCard` component.

### Master Branch - Regular React App
In the `master` branch, the `PricingCard` component is a regular React component that includes the `Title`, `Price`, a list of `Feature` components and a `Button` components directly inside it. The parent `App` component imports the `PricingCard` component and uses it without passing any children to it.

### compound-components Branch - Compound Components
In the `compound-components` branch, the `PricingCard` component adheres to the compound components design pattern. By accepting child components, it offers increased flexibility in terms of composition. In this version, the `App` component imports the `PricingTable` component, which contains the `PricingCard`, `Title`, `Price`, `FeaturesList`, `Feature`, and `Button` components. These components are then utilized as children of the `PricingCard` component.

To switch between the two versions, you can check out the corresponding branch in your Git repository.


## Features
* Responsive design
* Clean, modern look
* Utilizes variables, mixins, and nesting in Sass


## Screenshots

### Desktop View
![Pricing Table](./src/assets/desktop.png)

### Mobile View

![Pricing Table](./src/assets/mobile.png)

## Live Demo
Experience the Pricing Table in action by visiting the live demo:

[Pricing Table Live Demo](https://obrm-pricing-table.netlify.app)

## Usage
To run the app locally, follow these steps:

1. Clone the repository and navigate to the project folder.
2. Run `npm install` to install the required dependencies.
3. Run `npm run dev` to start the development server.
4. Open your browser and visit http://localhost:5173 to view the app.

#### Technologies Used

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [SCSS](https://sass-lang.com/)
* [Vite](https://vitejs.dev/)

#### License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact Information
For any questions, concerns, or support, feel free to reach me out via email: [obrm770@gmail.com](mailto:obrm770@gmail.com).