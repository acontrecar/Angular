export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};

const tablet: Product = {
  description: "iPad Air",
  price: 350,
};

interface TaxCalculation {
  tax: number;
  product: Product[];
}

// function taxtCalculation(options: TaxCalculation): number[] {
//   let total = 0;
//   options.product.forEach((product) => {
//     total += product.price;
//   });

//   return [total, total * options.tax];
// }

// function taxtCalculation({ tax, product }: TaxCalculation): [number, number] {
export function taxtCalculation(options: TaxCalculation): [number, number] {
  let total = 0;

  const { tax, product } = options;

  product.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

// const shoppingCart: Product[] = [phone, tablet];
// const tax = 0.15;

// const result = taxtCalculation({ product: shoppingCart, tax });

// console.log("Total: ", result[0]);
// console.log("Tax: ", result[1]);

// const shoppingCart: Product[] = [phone, tablet];
// const tax = 0.15;

// const [total, taxTotal] = taxtCalculation({ product: shoppingCart, tax });

// console.log("Total: ", total);
// console.log("Tax: ", taxTotal);
