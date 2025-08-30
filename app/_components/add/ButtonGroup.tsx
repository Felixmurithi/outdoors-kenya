import React from "react";
import Button from "../generic/Button";

interface ButtonGroupProps {
  onSave: () => void;
  onEdit: () => void;
  onRemove: () => void;
  isEditing: boolean;
  hasMultipleFields: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onSave,
  onEdit,
  onRemove,
  isEditing,
  hasMultipleFields,
}) => {
  return (
    <div className="flex gap-4">
      {isEditing ? (
        <>
          {hasMultipleFields && (
            <Button style="transparent" onClick={onRemove}>
              Remove
            </Button>
          )}
          <Button style="secondary" onClick={onSave}>
            Save
          </Button>
        </>
      ) : (
        <>
          <Button style="text" className="text-red-700" onClick={onEdit}>
            Edit
          </Button>
          <Button style="text" onClick={onRemove}>
            Remove
          </Button>
        </>
      )}
    </div>
  );
};

export default ButtonGroup;
