
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';

const initialForm = {
  email: '',
  password: '',
  terms: false,
};
export default function Login() {
    const [form, setForm] = useState(initialForm);
  
    const handleChange = (event) => {
      let { name, value, type } = event.target;
      value = type === 'checkbox' ? event.target.checked : value;
      setForm({ ...form, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    }

  return (
    <Card>
        <CardBody>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                id="email"
                name="email"
                placeholder="Email adresinizi giriniz"
                type="email"
                onChange={handleChange}
                value={form.email}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                id="password"
                name="password"
                placeholder="Şifrenizi giriniz "
                type="password"
                onChange={handleChange}
                value={form.password}
                />
            </FormGroup>
            <FormGroup check>
                <Input
                id="terms"
                name="terms"
                checked={form.terms}
                type="checkbox"
                onChange={handleChange}
                />
                <Label htmlFor="terms" check>
                I agree to terms of service and privacy policy
                </Label>
            </FormGroup>
            <FormGroup className="text-center p-4">
                <Button color="primary">Kayıt ol</Button>
            </FormGroup>
            </Form>
        </CardBody>
    </Card>
  );
}