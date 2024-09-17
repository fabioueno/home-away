import {Button} from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";

const createProfileAction = async (formData: FormData) => {
  "use server";

  const firstName = formData.get("firstName") as string;
  console.log(firstName);
}

function CreateProfilePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>

      <div className="border p-8 rounded-md max-w-lg">
        <form action={createProfileAction}>
          <FormInput name="firstName" type="text" label="First name" placeholder="Insert first name here..." />
          <Button type="submit" size="lg">Create profile</Button>
        </form>
      </div>
    </section>
  );
}

export default CreateProfilePage;