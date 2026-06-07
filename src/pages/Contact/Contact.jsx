import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '', interet: '', message: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const required = ['prenom', 'nom', 'email', 'interet', 'message']
    const newErrors = {}
    required.forEach(field => { if (!form[field].trim()) newErrors[field] = true })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)

    // TODO: brancher Resend ou Formspree ici
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  return (
    <main>
      <section className="contact-hero">
        <div>
          <p className="contact-hero__eyebrow">Contact</p>
          <h1 className="contact-hero__title">Parlons de <em>votre projet</em></h1>
          <p className="contact-hero__sub">Une question, une envie de démarrer ? Je vous réponds dans les 48h.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main__inner">

          {/* Sidebar infos */}
          <aside className="contact-info">
            <div className="contact-info__card">
              <p className="contact-info__label">Me retrouver</p>
              <h2 className="contact-info__title">Des séances <em>adaptées</em> à votre vie</h2>
              <p className="contact-info__text">
                Que vous souhaitiez commencer le yoga, travailler sur votre gestion du stress
                ou simplement vous offrir une pause de bien-être, je suis là pour vous accompagner.
              </p>
              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="contact-info__item-text">
                    <strong>Studio Omana — Venelles</strong>
                    <span>Lundi &amp; vendredi jusqu'à fin juillet</span>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <div className="contact-info__item-text">
                    <strong>À domicile — dès septembre</strong>
                    <span>Sur rendez-vous, selon vos disponibilités</span>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className="contact-info__item-text">
                    <strong>Réponse sous 48h</strong>
                    <span>Je vous reviens rapidement</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Formulaire */}
          <div className="contact-form-wrapper">
            {sent ? (
              <div className="form-success">
                <div className="form-success__icon">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="form-success__title">Message envoyé !</h3>
                <p className="form-success__text">
                  Merci pour votre message.<br />
                  Je vous réponds dans les 48h. À très bientôt 🌿
                </p>
                <Link to="/" className="btn-primary">← Retour à l'accueil</Link>
              </div>
            ) : (
              <>
                <h2 className="contact-form__title">Envoyer un message</h2>
                <p className="contact-form__subtitle">Remplissez ce formulaire et je vous contacterai rapidement.</p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="prenom">Prénom <span>*</span></label>
                      <input type="text" id="prenom" name="prenom" className={`form-input${errors.prenom ? ' form-error' : ''}`} placeholder="Votre prénom" value={form.prenom} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="nom">Nom <span>*</span></label>
                      <input type="text" id="nom" name="nom" className={`form-input${errors.nom ? ' form-error' : ''}`} placeholder="Votre nom" value={form.nom} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Adresse e-mail <span>*</span></label>
                    <input type="email" id="email" name="email" className={`form-input${errors.email ? ' form-error' : ''}`} placeholder="vous@exemple.fr" value={form.email} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="telephone">Téléphone</label>
                    <input type="tel" id="telephone" name="telephone" className="form-input" placeholder="06 XX XX XX XX" value={form.telephone} onChange={handleChange} />
                    <p className="form-hint">Facultatif — pour un rappel si vous préférez</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="interet">Ce qui vous intéresse <span>*</span></label>
                    <select id="interet" name="interet" className={`form-select${errors.interet ? ' form-error' : ''}`} value={form.interet} onChange={handleChange}>
                      <option value="" disabled>Choisissez une pratique</option>
                      <option value="yoga">Yoga Vinyasa</option>
                      <option value="sophrologie">Sophrologie</option>
                      <option value="bain-sonore">Bain de Sons</option>
                      <option value="individuel">Séance individuelle</option>
                      <option value="groupe">Séance de groupe</option>
                      <option value="entreprise">Séance en entreprise</option>
                      <option value="autre">Autre / Je ne sais pas encore</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Votre message <span>*</span></label>
                    <textarea id="message" name="message" className={`form-textarea${errors.message ? ' form-error' : ''}`} placeholder="Dites-moi ce qui vous amène, vos attentes, vos disponibilités…" value={form.message} onChange={handleChange} />
                  </div>

                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? 'Envoi en cours…' : 'Envoyer mon message'}
                    {!loading && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </main>
  )
}
