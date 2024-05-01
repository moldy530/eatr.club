import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { getAuth, signInAnonymously, updateEmail } from "firebase/auth";
import { useMemo } from "react";
import z from "zod";
import { Button } from "./button";

interface Props {
  onSubmit: () => void;
  direction?: "row" | "col";
}

const baseText = "Join the waitlist";

export const EmailInput = ({ onSubmit, direction }: Props) => {
  const auth = useMemo(() => getAuth(), []);
  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value: { email } }) => {
      const user = await signInAnonymously(auth);
      await updateEmail(user.user, email);

      onSubmit();
    },
    validatorAdapter: zodValidator,
  });

  return (
    <form
      className={`flex w-full flex-${direction ?? "col"} gap-2 md:flex-${direction ?? "row"}`}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();

        void form.handleSubmit();
      }}
    >
      <form.Field
        name="email"
        validators={{
          onChange: z.string().email("Email must be valid."),
          onChangeAsyncDebounceMs: 500,
        }}
      >
        {(field) => (
          <label
            className={`input flex grow items-center gap-2 bg-[#E6E6E6]`}
            htmlFor={field.name}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
            >
              <path
                d="M21.7489 19.9995H2.24988C1.00495 19.9995 0 18.9945 0 17.7496V4.25031C0 3.00538 1.00495 2.00043 2.24988 2.00043H21.7489C22.9938 2.00043 23.9988 3.00538 23.9988 4.25031V17.7496C23.9988 18.9945 22.9938 19.9995 21.7489 19.9995ZM2.24988 3.50035C1.82991 3.50035 1.49992 3.83033 1.49992 4.25031V17.7496C1.49992 18.1696 1.82991 18.4996 2.24988 18.4996H21.7489C22.1689 18.4996 22.4988 18.1696 22.4988 17.7496V4.25031C22.4988 3.83033 22.1689 3.50035 21.7489 3.50035H2.24988Z"
                fill="#7E7E7E"
              />
              <path
                d="M12.0005 13.9398C10.9506 13.9398 9.99065 13.5198 9.27068 12.7549L1.3961 4.38529C1.11111 4.08531 1.12611 3.60534 1.42609 3.32035C1.72608 3.03537 2.20605 3.05036 2.49104 3.35035L10.3656 11.7199C11.2206 12.6349 12.7805 12.6349 13.6355 11.7199L21.51 3.36535C21.795 3.06536 22.275 3.05036 22.575 3.33535C22.875 3.62033 22.89 4.10031 22.605 4.40029L14.7304 12.7699C14.0104 13.5348 13.0505 13.9548 12.0005 13.9548V13.9398Z"
                fill="#7E7E7E"
              />
            </svg>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type="text"
              className="grow"
              placeholder=" Enter your email to join the waitlist..."
            />
          </label>
        )}
      </form.Field>
      <Button>{baseText}</Button>
    </form>
  );
};
