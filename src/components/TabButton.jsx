import "./TabButton.css";

function TabButton({ children, onSelect }) {
  console.log("tran thi kim anh")

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
export default TabButton;
