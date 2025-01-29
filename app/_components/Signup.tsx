import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";
import ListItem from "@/app/_components/ListItem";

function Signup() {
  return (
    <div className="absolute grid place-items-center  bg-main-color-dark bg-opacity-80 top-0 left-0 bottom-0 right-0 h-[100%]">
      <div className=" bg-white p-2 shadow-md w-[80%] grid gap-4 rounded-md">
        <h2 className="text-lunar-green-600">Create account</h2>
        <div className="grid grid-cols-[1fr_2fr]  m-auto">
          <div className="my-auto">
            <ul className="grid gap-4">
              <ListItem icon={"✔"}>bookmark</ListItem>
              <ListItem icon={"✔"}>get updates</ListItem>
              <ListItem icon={"✔"}>do reviews</ListItem>
              <ListItem icon={"✔"}>create event</ListItem>
            </ul>
          </div>
          <div>
            <form action="" className="grid gap-4">
              <Button type="transparent" link="#">
                <span></span>Sign up with Google
              </Button>
              <div className="flex gap-2">
                <Input placeholder={"irst name*"}>First name*</Input>
                <Input>Last name*</Input>
              </div>
              <Input>Email*</Input>
              <Input>Password*</Input>

              <Button classes={"w-[50%]"}>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
