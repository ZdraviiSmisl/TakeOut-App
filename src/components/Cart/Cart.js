import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItmes = [
    { id: "c1", name: "Sushi", amount: 2, price: "$16.50" },
  ].map((item) => <li>{item.name}</li>);
  return (
    <section>
      <Card>
        <ul>{cartItmes}</ul>
        <span>Total Amount</span>
        <span>$16.50</span>
        <div>
          <Button>Close</Button>
          <Button>Order</Button>
        </div>
      </Card>
    </section>
  );
};

export default Cart;
