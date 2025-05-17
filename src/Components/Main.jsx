import Button from "./Button";
import InputField from "./Input";
import Card from "./Card";
import img from "./../assets/react.svg";
import Modal from "./Modal";
import { useState } from "react";
        import Alert  from './Alert';

export default function Main() {

      const [modalOpen, setModalOpen] = useState(false);
      
  return (
    <>
      <section className="main d-flex flex-column gap-3 p-5">
        <div className="part ">
          <Button
            label="Submit"
            onClick={() => alert("Button clicked!")}
            variant="danger"
            size="sm"
            CLick
            ME
            icon="🚀"
          >
            Click ME
          </Button>
        </div>
        <div className="part">
          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            error="Email is invalid"
          />
        </div>
        <div className="part">
          <Card title="John Doe" description="Frontend Developer" image={img}>
            <Button label="View Profile" type="primary" onClick={()=>{setModalOpen(true)}}>
              Click To open Modal & Alert
            </Button>
          </Card>
        </div>
        <div className="part">
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Confirm Deletion"
          >
            <p>Are you sure you want to delete this item?</p>
            <Button label="Yes, Delete" type="danger" />
          </Modal>
        </div>
{modalOpen?<Alert 
  type="success" 
  message="Profile updated successfully!" 
/>:""}


      </section>
    </>
  );
}
