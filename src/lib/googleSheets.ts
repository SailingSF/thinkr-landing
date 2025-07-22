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

  // For development: Use a simple GET request to avoid CORS preflight
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  if (isDevelopment) {
    // Use GET request with URL parameters to avoid CORS preflight
    const params = new URLSearchParams({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
      webinarInterest: data.webinarInterest,
      phone: data.phone || '',
      notifications: data.notifications.toString(),
      _method: 'POST'
    });

    const response = await fetch(`${webhookUrl}?${params.toString()}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to register for webinar');
    }
  } else {
    // Production: Use proper POST request
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
        webinarInterest: data.webinarInterest,
        phone: data.phone || '',
        notifications: data.notifications
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to register for webinar');
    }
  }
} 