interface WebinarRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  webinarInterest: string;
  phone?: string;
  notifications: boolean;
}

export async function registerForWebinar(data: WebinarRegistrationData): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_GS_WEBHOOK;
  
  if (!webhookUrl) {
    throw new Error('Google Sheets webhook URL not configured');
  }

  // Use form-encoded data to avoid CORS preflight in all environments
  const formData = new FormData();
  formData.append('firstName', data.firstName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('role', data.role);
  formData.append('webinarInterest', data.webinarInterest);
  formData.append('phone', data.phone || '');
  formData.append('notifications', data.notifications.toString());

  const response = await fetch(webhookUrl, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to register for webinar');
  }
} 