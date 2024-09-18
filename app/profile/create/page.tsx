import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { actionFunction } from "@/utils/types";

const createProfileAction: actionFunction = async (prevState, formData) => {
  "use server";

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const userName = formData.get("userName") as string;

  if (userName !== "shakeAndBake") {
    return { message: "Username must be shakeAndBake" };
  }

  return { message: "Profile created" };
};

function CreateProfilePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>

      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput name="firstName" type="text" label="First name" />
            <FormInput name="lastName" type="text" label="Last name" />
            <FormInput name="userName" type="text" label="Username" />
          </div>

          <SubmitButton className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProfilePage;
