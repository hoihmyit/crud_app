"use client";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (v: boolean) => void;
}

function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate } = props;
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {
    if (!title) {
      toast.error("Not empty title !");
      return;
    }
    if (!author) {
      toast.error("Not empty author !");
      return;
    }

    if (!content && !content && !author) {
      toast.error("Not empty data !");
      return;
    }

    if (!content) {
      toast.error("Not empty content !");
      return;
    }

    fetch("https://652c0736d0d1df5273ef0e4e.mockapi.io/api/v1/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("Create new blogs succeed");
          handleCloseModal();
          mutate("https://652c0736d0d1df5273ef0e4e.mockapi.io/api/v1/blogs"); // gọi lại data để show ra mà không cân reload
        }
      });
  };

  const handleCloseModal = () => {
    setAuthor("");
    setContent("");
    setTitle("");
    setShowModalCreate(false);
  };

  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size="lg" // modal dài ra
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter the title</Form.Label>
              <Form.Control
                type="text"
                placeholder="....."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                placeholder="Enter the content"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
