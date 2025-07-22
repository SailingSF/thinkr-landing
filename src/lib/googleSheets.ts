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

  // Use URL parameters with GET request to completely avoid CORS
  const params = new URLSearchParams({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    role: data.role,
    webinarInterest: data.webinarInterest,
    phone: data.phone || '',
    notifications: data.notifications.toString(),
    timestamp: new Date().toISOString()
  });

  await fetch(`${webhookUrl}?${params.toString()}`, {
    method: 'GET',
    mode: 'no-cors'
  });

  // Note: With no-cors mode, we can't check response status, but the request will complete
  // The Google Apps Script will process the data regardless
} 