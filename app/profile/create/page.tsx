import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { actionFunction } from "@/utils/types";

const createProfileAction: actionFunction = async (prevState, formData) => {
  "use server";

  const firstName = formData.get("firstName") as string;
  return { message: `User ${firstName} created successfully!` };
};

function CreateProfilePage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>

      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProfileAction}>
          <FormInput
            name="firstName"
            type="text"
            label="First name"
            placeholder="Insert first name here..."
          />
          <SubmitButton />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProfilePage;
