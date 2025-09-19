import Card from "@/components/Card";
import { Button} from "@/components/Button";
const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">
                Landing Page
            </h1>
            <Card />
        </div>
    )
}
export default function Landing() {
  return (
    <div className="flex flex-col gap-4 items-start p-6">
      {/* Sizes */}
      <Button title="Small Button" size="small" />
      <Button title="Medium Button" size="medium" />
      <Button title="Large Button" size="large" />

      {/* Shapes */}
      <Button title="Rounded Small" shape="rounded-sm" />
      <Button title="Rounded Medium" shape="rounded-md" />
      <Button title="Rounded Full" shape="rounded-full" />
    </div>
  );
}







export default Landing