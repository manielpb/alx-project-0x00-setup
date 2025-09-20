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
    <Button title="small" styles="rounded-sm"/>;
    <Button title="medium" styles="rounded-md" />;
    <Button title="large" styles= "rounded-lg"/>;
    <Button title="full" styles="rounded-full"/>;
  );
}













export default Landing