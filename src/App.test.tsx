import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders check page is render', async () => {
  render(<App />);

  await new Promise((r) => setTimeout(r, 2000));

  const linkElement1 = screen.getByText('FAKELANDA', {exact: false});
  expect(linkElement1).toBeInTheDocument();

  const linkElement2 = screen.getByText('Home');
  expect(linkElement2).toBeInTheDocument(); 

  const linkElement3 = screen.getByText('Misdemeanours');
  expect(linkElement3).toBeInTheDocument();   

  const linkElement4 = screen.getByText('Confess To Us', {exact: false});
  expect(linkElement4).toBeInTheDocument(); 
});

test('renders check home page is loaded', async () => {
  render(<App />);
  
  const linkElement1 = screen.getByText('Welcome to the home of the Justice Department of Fakelandia');
  expect(linkElement1).toBeInTheDocument();  
});

test('renders check Confess form after click Confess hyperlink', async () => {
  render(<App />);  

  await new Promise((r) => setTimeout(r, 2000));

  const linkElement = screen.getByLabelText('Confess');
  expect(linkElement).toBeInTheDocument(); 

  await fireEvent.click(linkElement);

  const DocText = screen.getByText("it's very difficult to catch people", {exact: false});
  expect(DocText).toBeInTheDocument();

  const InputText1 = screen.getByLabelText('subject');
  expect(InputText1).toBeInTheDocument(); 

  const InputText2 = screen.getByLabelText('reasontype');
  expect(InputText2).toBeInTheDocument();     

  const InputText3 = screen.getByLabelText('reason');
  expect(InputText3).toBeInTheDocument();   
});

test('renders check form missing error form after click Confess hyperlink', async () => {
  render(<App />);  

  await new Promise((r) => setTimeout(r, 2000));

  const linkElement = screen.getByLabelText('Confess');
  expect(linkElement).toBeInTheDocument(); 

  await fireEvent.click(linkElement);

  const SubmitButton = screen.getByLabelText('submitButton', {exact: false});
  expect(SubmitButton).toBeInTheDocument();
  await fireEvent.click(SubmitButton);

  await new Promise((r) => setTimeout(r, 2000));

  const ErrorLabel1 = screen.getByText('subject is required', {exact: false});
  expect(ErrorLabel1).toBeInTheDocument();   

  const ErrorLabel2 = screen.getByText('reasontype must be selected.', {exact: false});
  expect(ErrorLabel2).toBeInTheDocument();   

  const ErrorLabel3 = screen.getByText('Reason is required', {exact: false});
  expect(ErrorLabel3).toBeInTheDocument();     
});

describe ('renders check form submit success form after click Confess hyperlink', () => {
  it.each([
    ["subject1","Mild Public Rudeness","reason1"],
    ["subject2","Speaking in a Lift","reason2"],
    ["subject3","Not Eating Your Vegetables","reason3"],
    ["subject4","Supporting Manchester United","reason4"],
    ["subject5","I just want to talk","reason5"],
  ])(
    "Renders correctly in DOM",
    async (subject, reasonType, reasonText) => {
      render(<App />); 

      new Promise((r) => setTimeout(r, 2000));

      const linkElement = screen.getByLabelText('Confess');
      expect(linkElement).toBeInTheDocument(); 
    
      await fireEvent.click(linkElement);


      const inputsubject = screen.getByLabelText('subject');
      userEvent.type(inputsubject, subject)
      expect(inputsubject).toHaveValue(subject);
      
      const inputReasonType = screen.getByLabelText('reasontype');
      userEvent.selectOptions(inputReasonType, reasonType)
      expect((screen.getByRole('option', {name: reasonType}) as HTMLOptionElement).selected).toBe(true); 
    
      const inputReason = screen.getByLabelText('reason');
      userEvent.type(inputReason, reasonText)
      expect(inputReason).toHaveValue(reasonText);     

      const SubmitButton = screen.getByLabelText('submitButton', {exact: false});
      expect(SubmitButton).toBeInTheDocument();
      await fireEvent.click(SubmitButton);
      
      await new Promise((r) => setTimeout(r, 3000)); 
      
      const SystemResponse = screen.getByText('Your confess is submitted. Thanks for your responses.', {exact: false} ); 
      expect(SystemResponse).toBeInTheDocument();     
    })
  });

test('renders check Misdemeanours page after click Misdemeanours hyperlink', async () => {
  render(<App />);  

  await new Promise((r) => setTimeout(r, 2000));

  //const linkElement = document.querySelector("a")?.getAttribute("href"))
  const linkElement = screen.getByLabelText('Misdemeanours');
  expect(linkElement).toBeInTheDocument(); 
    
  await fireEvent.click(linkElement);

  await new Promise((r) => setTimeout(r, 2000));

  const SelectFilter = screen.getByLabelText('MDFilter');
  expect(SelectFilter).toBeInTheDocument(); 

})
