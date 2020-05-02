// making video upload page
// functional component
// download ES7 extension and type in rfce to shorten the process
import React, { useState } from "react";

// import ant design for styling
import { Typography, Button, Form, message, Input, Icon } from "antd";

// import dropzone for upload page template
import Dropzone from "react-dropzone";

// importing ant design
const { Title } = Typography;
const { TextArea } = Input;

// making exposure options for dropdown section: Mapping
const ExposureOptions = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];

// making category options for dropdown section: Mapping
const CategoryOptions = [
  { value: 0, label: "Cats & Dogs" },
  { value: 1, label: "Autos & Vehicles" },
  { value: 2, label: "Music" },
  { value: 3, label: "Games" },
  { value: 4, label: "Family" },
  { value: 5, label: "Development" },
];

// making video uploading form page template
function VideoUploadPage() {
  // assigning state using react hooks: importing "useState"
  // default value is in usestate("stringValue")
  const [VideoTitle, setVideoTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Private, setPrivate] = useState(0);
  const [Category, setCategory] = useState("Cats & Dogs");

  // assigning states
  // e means event
  const onTitleChange = (e) => {
    setVideoTitle(e.currentTarget.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  };
  const onPrivateChange = (e) => {
    setPrivate(e.currentTarget.value);
    // console.log(e);
  };
  const onCategoryChange = (e) => {
    setCategory(e.currentTarget.value);
    // console.log(e.currentTarget.value);
  };

  // returning template for video upload
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload Video</Title>
      </div>
      <Form onSubmit>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* drop zone */}
          <Dropzone onDrop multiple maxSize>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <Icon type="plus" style={{ fontSize: "3rem" }} />
              </div>
            )}
          </Dropzone>

          {/* thumbnail  */}
          <div>
            <img src alt />
          </div>
        </div>
        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={VideoTitle} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={Description} />
        <br />
        <br />
        {/* dropdown option for video private / public */}
        <select onChange={onPrivateChange} value={Private}>
          {ExposureOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        <select onChange={onCategoryChange} value={Category}>
          {CategoryOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button type="primary" size="large" onClick>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default VideoUploadPage;
