import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormComp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending the data to a server.
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name" className='mt-3'>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className='rounded-0'
        />
      </Form.Group>

      <Form.Group controlId="email" className='mt-3'>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className='rounded-0'
        />
      </Form.Group>

      <Form.Group controlId="message" className='mt-4'>
        <Form.Control
          as="textarea"
          name="message"
          rows={4}
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
          className='rounded-0'
        />
      </Form.Group>

      <Button variant="primary" type="submit" className='donate-btn my-3 w-100 bg-warning fw-bold'>
        SEND REQUEST
      </Button>
    </Form>
  );
}

export default FormComp;
