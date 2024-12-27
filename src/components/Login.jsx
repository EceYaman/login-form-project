
import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Card, CardBody, FormFeedback } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  email: '',
  password: '',
  terms: false,
};


const errorMessages = {
    email: 'Please enter a valid email address',
    password: 'Password must be at least 8 characters long',
  };
export default function Login() {
    const [form, setForm] = useState(initialForm);
    const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    terms: false,
  });
  const navigate = useNavigate();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  useEffect(() => {
    if (
      validateEmail(form.email) &&
      form.password.trim().length >= 8 &&
      form.terms
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

const handleSubmit = (event) => {
  event.preventDefault();
  navigate('/success');
}


  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === 'checkbox' ? event.target.checked : value;
    setForm({ ...form, [name]: value });

    if (name === 'email') {
      if (validateEmail(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
    if (name === 'password') {
      if (value.trim().length >= 4) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
    if (name === 'terms') {
      if (value.trim().length >= 4) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };
    
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
                invalid={errors.email}
                data-cy="email-input"
                />
                {errors.email && <FormFeedback data-cy="error-message">{errorMessages.email}</FormFeedback>}
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
                invalid={errors.password}
                data-cy="password-input"
                />
                {errors.password && (
          <FormFeedback data-cy="error-message">{errorMessages.password}</FormFeedback>
        )}
            </FormGroup>
            <FormGroup check>
                <Input
                id="terms"
                name="terms"
                checked={form.terms}
                type="checkbox"
                onChange={handleChange}
                invalid={errors.terms}
                />
                <Label htmlFor="terms" check>
                I agree to terms of service and privacy policy
                </Label>
            </FormGroup>
            <FormGroup className="text-center p-4">
                <Button color="primary" disabled={!isValid} data-cy="submit-button">Kayıt ol</Button>
            </FormGroup>
            </Form>
        </CardBody>
    </Card>
  );
}