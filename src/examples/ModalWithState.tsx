import { Button, Modal, Stack, Text } from "@/components";
import { useState } from "react";

export const ModalWithState = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const handleClose = () => SetIsOpen(false);

  return (
    <Stack className="h-screen w-screen pt-40 bg-gray-200 flex items-center">
      <Text as="h1" className="mb-4 font-bold">
        Title
      </Text>
      <Button className="p-2" onClick={() => SetIsOpen(true)}>
        Open modal
      </Button>
      <Modal
        title="Modal example"
        contentClassName="text-center text-bold"
        isOpen={isOpen}
        onClose={handleClose}
      >
        <Stack className="flex items-center gap-2">
          <Text as="h2" className="font-bold">
            Modal example
          </Text>
          <Text>This is an example</Text>
          <Button onClick={handleClose}>Go back</Button>
        </Stack>
      </Modal>
    </Stack>
  );
};
