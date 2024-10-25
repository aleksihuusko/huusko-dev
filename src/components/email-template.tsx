import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => {
  const formatMessage = (text: string) => {
    return text.replace(/\n/g, "<br>");
  };

  return (
    <div>
      <h1>Form submission</h1>
      <h2>Name</h2>
      <p>{name}</p>
      <h2>Email</h2>
      <p>{email}</p>
      <h2>Message</h2>
      <p dangerouslySetInnerHTML={{ __html: formatMessage(message) }} />
    </div>
  );
};
