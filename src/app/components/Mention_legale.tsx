import '../styles/MentionsLegales.css';

export default function MentionsLegales() {
  return (
    <main className="mentions-dark">
      <div className="mentions-wrapper">
        <h1>Mentions Légales</h1>
        
        <div className="mentions-grid">
          <section>
            <h2><span className="accent">//</span> Éditeur</h2>
            <p>
              <strong>Elazar Cohen</strong><br />
              Designer & Développeur<br />
              elazarcohen01@gmail.com
            </p>
          </section>

        

          <section>
            <h2><span className="accent">//</span> Propriété</h2>
            <p>
              © {new Date().getFullYear()} Tous droits réservés.<br />
              Crédits photos : Unsplash
            </p>
          </section>

          <section>
            <h2><span className="accent">//</span> Données</h2>
            <p>
              Aucun tracking.<br />
              Formulaire 100% confidentiel.
            </p>
          </section>
        </div>

        <div className="mentions-footer">
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </main>
  );
}