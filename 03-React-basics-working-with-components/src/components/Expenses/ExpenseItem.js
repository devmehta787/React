import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";

// function ExpenseItem({ title, amount, date }) { //Object destructuring syntax
//    return (
//     <div className="expense-item">
//       <div>{date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">$ {amount}</div>
//       </div>
//     </div>
//   );
// }
function ExpenseItem(props) {
  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();
  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      {/* <div> 
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
