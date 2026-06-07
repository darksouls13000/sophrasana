export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prenom, nom, email, telephone, interet, message } = req.body

  if (!prenom || !nom || !email || !interet || !message) {
    return res.status(400).json({ error: 'Champs manquants' })
  }

  const interetLabels = {
    'yoga': 'Yoga Vinyasa',
    'sophrologie': 'Sophrologie',
    'bain-sonore': 'Bain de Sons',
    'individuel': 'Séance individuelle',
    'groupe': 'Séance de groupe',
    'entreprise': 'Séance en entreprise',
    'autre': 'Autre',
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Site Clara Hédoux <contact@sophrasana.fr>',
        to: 'clara.h.sophrologue@gmail.com',
        reply_to: email,
        subject: `Nouvelle demande de ${prenom} ${nom} — ${interetLabels[interet] || interet}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FBF7F2;">
            <h2 style="font-family: Georgia, serif; font-weight: 300; color: #5C3D2E; margin-bottom: 24px;">
              Nouvelle demande via sophrasana.vercel.app
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #7A5A4A; font-size: 14px; width: 140px;">Prénom</td>
                <td style="padding: 10px 0; color: #3D2B20; font-size: 14px;">${prenom}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #7A5A4A; font-size: 14px;">Nom</td>
                <td style="padding: 10px 0; color: #3D2B20; font-size: 14px;">${nom}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #7A5A4A; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; color: #3D2B20; font-size: 14px;"><a href="mailto:${email}" style="color: #D4788A;">${email}</a></td>
              </tr>
              ${telephone ? `
              <tr>
                <td style="padding: 10px 0; color: #7A5A4A; font-size: 14px;">Téléphone</td>
                <td style="padding: 10px 0; color: #3D2B20; font-size: 14px;">${telephone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; color: #7A5A4A; font-size: 14px;">Intérêt</td>
                <td style="padding: 10px 0; color: #3D2B20; font-size: 14px;">${interetLabels[interet] || interet}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #fff; border-radius: 12px; border-left: 3px solid #D4788A;">
              <p style="color: #7A5A4A; font-size: 13px; margin-bottom: 8px;">Message</p>
              <p style="color: #3D2B20; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #B09080;">
              Pour répondre, cliquez sur Répondre — l'email partira directement à ${email}
            </p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Erreur envoi email' })
    }

    return res.status(200).json({ success: true })

  } catch (err) {
    console.error('Server error:', err)
    return res.status(500).json({ error: 'Erreur serveur' })
  }
}
