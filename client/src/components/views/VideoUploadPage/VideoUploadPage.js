// making video upload page
// functional component
// download ES7 extension and type in rfce to shorten the process
import React from "react";

// import ant design for styling
import { Typography, Button, Form, message, Input, Icon } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

// making video uploading form page template
function VideoUploadPage() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload Video</Title>
      </div>
      <Form onSubmit>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* drop zone */}

          {/* thumbnail  */}
          <div>
            <img src alt />
          </div>
        </div>
        <br />
        <br />
        <label>Title</label>
        <Input onChange value />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange value />
        <br />
        <br />
        <select onChange>
          <option key value></option>
        </select>
        <br />
        <br />
        <select onChange>
          <option key value></option>
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
