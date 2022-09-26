import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY = [
  {
    id: "p1",
    title: "Gone Girl",
    price: 50,
    description: "Crime Novel from Gyllian Flynn",
  },
  {
    id: "p2",
    title: "Dark Places",
    price: 70,
    description: " Another Crime Novel from Gyllian Flynn",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
