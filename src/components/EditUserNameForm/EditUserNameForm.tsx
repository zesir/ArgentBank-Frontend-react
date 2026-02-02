import { useState } from "react";
import Button from "../Button";
import InputField from "../LogCard/components/InputField";

type Props = {
  userName: string;
  firstName: string;
  lastName: string;
  onCancel: () => void;
  onSave: (updatedUser: {
    userName: string;
    firstName: string;
    lastName: string;
  }) => void;
};

const EditUserNameForm = ({
  userName,
  firstName,
  lastName,
  onCancel,
  onSave,
}: Props) => {
  const [localUserName, setLocalUserName] = useState(userName);
  const [localFirstName, setLocalFirstName] = useState(firstName);
  const [localLastName, setLocalLastName] = useState(lastName);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave({
          userName: localUserName,
          firstName: localFirstName,
          lastName: localLastName,
        });
      }}
    >
      <InputField
        className="header-input"
        id="userName"
        label="User Name"
        value={localUserName}
        onChange={setLocalUserName}
      />
      <InputField
        className="header-input"
        id="firstName"
        label="First Name"
        value={localFirstName}
        onChange={setLocalFirstName}
        disabled={true}
      />
      <InputField
        className="header-input"
        id="lastName"
        label="Last Name"
        value={localLastName}
        onChange={setLocalLastName}
        disabled={true}
      />

      <Button type="submit" label="Save" className="edit-button-action" />
      <Button
        label="Cancel"
        className="edit-button-action"
        onClick={onCancel}
      />
    </form>
  );
};

export default EditUserNameForm;
