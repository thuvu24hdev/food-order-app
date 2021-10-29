import classes from "./MealItem.module.css";

interface MealItemProps {
  name: string;
  description: string;
  price: number;
}
const MealItem = (props: MealItemProps) => {
  const price: string = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
