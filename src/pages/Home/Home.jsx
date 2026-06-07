import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero__inner">
          <div>
            <p className="hero__eyebrow anim anim-1">Yoga · Sophrologie · Bains Sonores</p>
            <h1 className="hero__title anim anim-2">
              Un chemin vers<br />
              <em>l'équilibre</em> et<br />
              le bien-être
            </h1>
            <p className="hero__subtitle anim anim-3">
              Séances sur mesure, adaptées à vos besoins — alliant le mouvement conscient
              du Yoga Vinyasa, la douceur de la Sophrologie et la profondeur des Bains Sonores.
            </p>
            <div className="hero__actions anim anim-4">
              <Link to="/contact" className="btn-primary">
                Prendre contact
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="#prestations" className="btn-secondary">Découvrir mes prestations</a>
            </div>
          </div>

          <div className="anim anim-3">
            <div className="hero__card">
              <div className="hero__avatar">C</div>
              <div className="hero__card-name">Clara Hédoux</div>
              <div className="hero__card-title">Professeure de Yoga &amp; Sophrologue</div>
              <div className="hero__tags">
                <span className="tag tag--rose">Yoga Vinyasa</span>
                <span className="tag tag--peach">Sophrologie</span>
                <span className="tag tag--brown">Bains Sonores</span>
              </div>
              <p className="hero__quote">
                "Allier corps, souffle et conscience pour retrouver votre équilibre naturel."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="bio">
        <div className="bio__inner">
          <div>
            <p className="bio__label">À propos de Clara</p>
            <h2 className="bio__title">Formée à l'écoute,<br /><em>guidée par la passion</em></h2>
            <p className="bio__text">
              C'est après une licence en psychologie que je me suis formée à la sophrologie,
              pour accompagner vers un mieux-être en mobilisant les ressources déjà présentes
              en chacun avec des méthodes douces.
            </p>
            <p className="bio__text">
              Deux ans plus tard, j'ai suivi un teacher training intensif de 200h en Yoga Vinyasa
              avec l'école Alma Sadhana. Ce que j'adore dans le yoga Vinyasa, c'est le mouvement
              fluide et le côté chorégraphié des enchaînements — j'intègre des transitions à la
              fois créatives et logiques dans mes flows.
            </p>
            <p className="bio__text">
              Mon objectif : allier sophrologie, yoga Vinyasa et bain sonore pour créer des
              séances sur mesure, adaptées à vos besoins.
            </p>
          </div>
          <div className="bio__stats">
            <div className="bio__stat">
              <div className="bio__stat-num">200h</div>
              <div className="bio__stat-label">Teacher training Yoga Vinyasa — Alma Sadhana</div>
            </div>
            <div className="bio__stat">
              <div className="bio__stat-num">Bac+3</div>
              <div className="bio__stat-label">Licence en psychologie</div>
            </div>
            <div className="bio__stat">
              <div className="bio__stat-num">Sur mesure</div>
              <div className="bio__stat-label">Séances adaptées à chaque personne</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="prestations" id="prestations">
        <div className="section-header">
          <p className="section-label">Mes pratiques</p>
          <h2 className="section-title">Trois voies vers <em>votre équilibre</em></h2>
        </div>
        <div className="prestations__grid">
          <div className="prestation-card prestation-card--yoga">
            <div className="prestation-card__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C97B52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="4" r="2"/><path d="M12 6v5M9 11l-3 5M15 11l3 5M6 20c1.5 0 3-1 3-2.5M18 20c-1.5 0-3-1-3-2.5M9 17.5h6"/>
              </svg>
            </div>
            <h3 className="prestation-card__title">Yoga Vinyasa</h3>
            <div className="prestation-card__subtitle">Aligner le corps et l'esprit</div>
            <p className="prestation-card__desc">
              Le Yoga Vinyasa vous offre une expérience dynamique et méditative où le mouvement
              est synchronisé avec la respiration. Laissez-vous porter par des enchaînements fluides
              qui tonifient vos muscles, améliorent votre souplesse et réduisent le stress.
            </p>
          </div>

          <div className="prestation-card prestation-card--sopho">
            <div className="prestation-card__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4788A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <h3 className="prestation-card__title">Sophrologie</h3>
            <div className="prestation-card__subtitle">Calme profond &amp; émotions</div>
            <p className="prestation-card__desc">
              Besoin de retrouver un calme profond et une meilleure gestion des émotions ?
              La Sophrologie vous apprend, via la respiration et la visualisation, à relâcher
              les tensions et à renforcer la confiance en vous.
            </p>
          </div>

          <div className="prestation-card prestation-card--sons">
            <div className="prestation-card__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B05570" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
              </svg>
            </div>
            <h3 className="prestation-card__title">Bain de Sons</h3>
            <div className="prestation-card__subtitle">Relaxation profonde</div>
            <p className="prestation-card__desc">
              Plongez dans un océan de sons apaisants. Ces vibrations douces vous mènent à une
              relaxation profonde, harmonisant vos énergies. Un moment de pure détente méditative —
              laissez-vous bercer et régénérer.
            </p>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="formats">
        <div className="section-header">
          <p className="section-label">Formats proposés</p>
          <h2 className="section-title">Des séances <em>pour chaque besoin</em></h2>
        </div>
        <div className="formats__grid">
          <div className="format-card">
            <div className="format-card__number">01</div>
            <h3 className="format-card__title">Séances Individuelles</h3>
            <p className="format-card__desc">
              Un moment pour vous, dans un cadre d'écoute et de confiance. Accompagnement
              sur mesure centré sur vos besoins : stress, sommeil, émotions, préparation mentale…
            </p>
          </div>
          <div className="format-card">
            <div className="format-card__number">02</div>
            <h3 className="format-card__title">Séances de Groupe</h3>
            <p className="format-card__desc">
              Partager, respirer, se recentrer… ensemble. Séances en groupe, en entreprise
              ou en collectif ouvert, favorisant la détente et la cohésion.
            </p>
          </div>
          <div className="format-card">
            <div className="format-card__number">03</div>
            <h3 className="format-card__title">Relaxation Sonore</h3>
            <p className="format-card__desc">
              Une immersion sensorielle grâce aux sons des bols de cristal — une parenthèse
              de calme et de recentrage, un relâchement profond physique et mental.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location">
        <div className="location__inner">
          <div>
            <p className="location__label">Où me retrouver</p>
            <h2 className="location__title">Vos séances, <em>près de chez vous</em></h2>

            <div className="location__item">
              <div className="location__icon">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="location__item-text">
                <strong>Studio Omana — Venelles</strong>
                <span>Cours en studio jusqu'à fin juillet<br />Les lundi et vendredi</span>
              </div>
            </div>

            <div className="location__item">
              <div className="location__icon">
                <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div className="location__item-text">
                <strong>À domicile — dès septembre</strong>
                <span>Sur rendez-vous, selon vos disponibilités</span>
              </div>
            </div>

            <div className="location__item">
              <div className="location__icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="location__item-text">
                <strong>Me contacter</strong>
                <span>Pour toute question ou demande de réservation</span>
              </div>
            </div>

            <Link to="/contact" className="location__cta">
              Réserver une séance
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="location__map">
            <div className="location__map-placeholder">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <p>Studio Omana</p>
              <small>Venelles, Bouches-du-Rhône</small>
            </div>
            <p className="location__map-note">
              ✦ En studio les lundi &amp; vendredi jusqu'à fin juillet<br />
              ✦ À domicile sur rendez-vous dès septembre
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
