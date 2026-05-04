"use client";

import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { CgProfile } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";

export function EditProfile() {

    const onSubmit = async(e)=>{
        e.preventDefault()

        const name = e.target.name.value
        const image = e.target.image.value

        await authClient.updateUser({
    name,
    image
})
    }

  return (
    <Modal>
      <Button variant="secondary"> <FaUserEdit/> Update Information</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CgProfile className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text">
                    <Label>Photo Url</Label>
                    <Input placeholder="Photo Url" />
                  </TextField>
               <Modal.Footer>
              <Button type="submit" slot="close" variant="secondary">
                Submit
              </Button>
              <Button slot="close">Cancel</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}