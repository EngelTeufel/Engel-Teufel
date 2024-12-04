const EMAIL_ENDPOINTS = {
  model: 'model@engelteufel.com',
  bewerbung: 'bewerbung@engelteufel.com',
  info: 'info@engelteufel.com'
};

export const sendEmail = async (type, data) => {
  let targetEmail;
  
  // Bestimme die Ziel-E-Mail-Adresse basierend auf dem Typ
  switch (type) {
    case 'model':
      targetEmail = EMAIL_ENDPOINTS.model;
      break;
    case 'bewerbung':
      targetEmail = EMAIL_ENDPOINTS.bewerbung;
      break;
    case 'contact':
      targetEmail = EMAIL_ENDPOINTS.info;
      break;
    default:
      targetEmail = EMAIL_ENDPOINTS.info;
  }

  // Hier würde die tatsächliche E-Mail-Versand-Logik implementiert werden
  // z.B. mit einem E-Mail-Service wie SendGrid, AWS SES, etc.
  
  try {
    // Beispiel für eine API-Anfrage zum E-Mail-Versand
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: targetEmail,
        data: data
      }),
    });

    if (!response.ok) {
      throw new Error('E-Mail konnte nicht gesendet werden');
    }

    return { success: true };
  } catch (error) {
    console.error('Fehler beim E-Mail-Versand:', error);
    throw error;
  }
};
