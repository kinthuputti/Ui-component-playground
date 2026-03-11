import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Alert from "./components/Alert";
import Accordion from "./components/Accordion";
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";
import Checkbox from "./components/Checkbox";
import Dropdown from "./components/Dropdown";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import ProgressBar from "./components/ProgressBar";
import RadioButton from "./components/RadioButton";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import Toast from "./components/Toast";
import Tooltip from "./components/Tooltip";
import Toggle from "./components/Toggle";
import ComponentPreview from "./components/ComponentPreview";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="app">
      <h1 className="nav-header">UI Component Playground</h1>
      <div className="component-grid">

        <ComponentPreview title="Button" code='<Button label="Click Me" onClick={() => alert("Clicked")} />'>
          <Button label="Click Me" onClick={() => alert("Clicked")} />
        </ComponentPreview>

        <ComponentPreview title="Card" code='<Card title="React Card" description="Reusable card component" />'>
          <Card title="React Card" description="Reusable card component" />
        </ComponentPreview>

        <ComponentPreview title="Placeholder" code='<Input placeholder="Enter your name" />'>
          <Input placeholder="Enter your name" />
        </ComponentPreview>

        <ComponentPreview title="Badge" code='<Badge text="New" />'>
          <Badge text="New" />
        </ComponentPreview>

        <ComponentPreview title="Avatar" code='<Avatar image="https://i.pravatar.cc/50" />'>
          <Avatar image="https://i.pravatar.cc/50" />
        </ComponentPreview>

        <ComponentPreview title="ProgressBar" code='<ProgressBar progress={60} />'>
          <ProgressBar progress={60} />
        </ComponentPreview>

        <ComponentPreview title="RadioButton" code='<RadioButton name="gender" label="Male" />'>
          <div className="radio-container"><RadioButton name="gender" label="Male" /><RadioButton name="gender" label="Female" /></div>
        </ComponentPreview>

        <ComponentPreview title="Loader" code='<Loader />'>
          <Loader />
        </ComponentPreview>

        <ComponentPreview title="Tooltip" code='<Tooltip text="Hover me" />'>
          <Tooltip text="Hover me" />
        </ComponentPreview>

        <ComponentPreview title="Accordion" code='<Accordion title="What is React?" content="..." />'>
          <Accordion title="What is React?" content="React is a JavaScript library for building UI." />
        </ComponentPreview>

        <ComponentPreview title="Dropdown" code='<Dropdown options={["React", "Java", "Python"]} />'>
          <Dropdown options={["React", "Java", "Python"]} />
        </ComponentPreview>

        <ComponentPreview title="Pagination" code='<Pagination totalPages={5} />'>
          <Pagination totalPages={5} />
        </ComponentPreview>

        <ComponentPreview title="Tabs" code='<Tabs />'>
          <Tabs />
        </ComponentPreview>

        <ComponentPreview title="Toast" code='<Toast message="Saved Successfully!" />'>
          <Toast message="Saved Successfully!" />
        </ComponentPreview>

        <ComponentPreview title="Alert" code='<Alert message="This is an alert" />'>
          <Alert message="This is an alert" />
        </ComponentPreview>

        <ComponentPreview title="Checkbox" code='<Checkbox label="Accept Terms" />'>
          <Checkbox label="Accept Terms" />
        </ComponentPreview>

        <ComponentPreview title="Modal" code='<Modal title="Example" />'>
          <Button label="Open Modal" onClick={() => setShowModal(true)} />
          {showModal && <Modal title="Example Modal" onClose={() => setShowModal(false)} />}
        </ComponentPreview>

        <ComponentPreview title="Navbar" code='<Navbar />'>
          <Navbar />
        </ComponentPreview>

        <ComponentPreview title="Sidebar" code='<Sidebar />'>
          <div className="sidebar"><Sidebar /></div>
        </ComponentPreview>

        <ComponentPreview title="Toggle" code='<Toggle />'>
          <Toggle />
        </ComponentPreview>

      </div>
    </div>
  );
}

export default App;