import Card from "@/components/Card";
import Button from "@/components/Button";
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


function ButtonInstance() {
  return (
    <div className="flex flex-col gap-4 p-6">
      {/* Sizes */}
      <Button title="Small Button" styles="px-2 py-1 text-sm bg-blue-500 text-white" />
      <Button title="Medium Button" styles="px-4 py-2 text-base bg-blue-500 text-white" />
      <Button title="Large Button" styles="px-6 py-3 text-lg bg-blue-500 text-white" />

      {/* Shapes */}
      <Button title="Rounded Small" styles="px-4 py-2 bg-green-500 text-white rounded-sm" />
      <Button title="Rounded Medium" styles="px-4 py-2 bg-green-500 text-white rounded-md" />
      <Button title="Rounded Full" styles="px-4 py-2 bg-green-500 text-white rounded-full" />
    </div>
  );
}













export default Landing