import Card from "./Card";
import { catList } from "./cat-list";

export default function CardList() {
  return (
    <div className="space-y-4">
      {catList.map((cat) => (
        <Card key={cat.title} title={cat.title} desc={cat.desc} img={cat.img} order={cat.order}/>
      ))}
    </div>
  );
}
