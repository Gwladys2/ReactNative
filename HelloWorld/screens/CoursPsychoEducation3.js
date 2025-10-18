import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>
        La théorie freudienne des stades de la libido
      </Text>

      {/* --- 1. Sigmund Freud : repères biographiques --- */}
      <Text style={styles.sectionTitle}>1. Sigmund Freud : repères biographiques</Text>
      <Text style={styles.paragraph}>
        1856–1939 : médecin neurologue autrichien, fondateur de la psychanalyse. {'\n\n'}
        Diplômé en 1881, il s’intéresse aux maladies nerveuses dès 1883. {'\n\n'}
        Formation à Paris (1885-86) auprès de Charcot, spécialiste de l’hystérie à la Salpêtrière. {'\n\n'}
        Publie en 1895 avec Breuer <Text style={styles.italic}>Études sur l’hystérie</Text> : acte fondateur de la psychanalyse.
      </Text>

      {/* --- 2. L’hystérie et la naissance de la psychanalyse --- */}
      <Text style={styles.sectionTitle}>2. L’hystérie et la naissance de la psychanalyse</Text>
      <Text style={styles.paragraph}>
        Hystérie : trouble névrotique ancien, sans cause organique identifiable, se traduisant par des symptômes physiques (paralysies, crises, pertes de la parole ou de la vue). {'\n\n'}
        Freud et Breuer montrent que ces symptômes sont liés à des conflits psychiques inconscients. {'\n\n'}
        Le traitement repose sur la parole et la suggestion — naissance de la cure analytique.
      </Text>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          🧠 Contexte historique : Pendant la Première Guerre mondiale, les « obusites » (soldats traumatisés sans lésion) confirment l’existence de troubles psychiques liés au traumatisme psychique. Freud ouvre ainsi la voie à la compréhension du stress post-traumatique.
        </Text>
      </View>

      {/* --- 3. La théorie de la libido --- */}
      <Text style={styles.sectionTitle}>3. La théorie de la libido</Text>
      <Text style={styles.paragraph}>
        Freud est le seul psychologue à proposer une théorie énergétique du psychisme. {'\n\n'}
        <Text style={styles.bold}>Libido</Text> = énergie psychique issue des pulsions de vie et de sexualité. {'\n\n'}
        <Text style={styles.bold}>Pulsion</Text> : force biologique inconsciente orientant le comportement vers la réduction d’une tension.
      </Text>

      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Source : excitation interne (faim, soif, sexualité)</Text></View>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>But : apaiser la tension</Text></View>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Objet : ce qui permet de satisfaire la pulsion</Text></View>

      <Text style={styles.paragraph}>
        Deux grandes oppositions : {'\n'}
        (1905) Pulsions d’autoconservation vs pulsions sexuelles {'\n'}
        (1920) Pulsions de vie (Éros) vs pulsions de mort (Thanatos)
      </Text>

      {/* --- 4. La théorie de l’inconscient --- */}
      <Text style={styles.sectionTitle}>4. La théorie de l’inconscient</Text>
      <Text style={styles.paragraph}>
        Présentée dans <Text style={styles.italic}>L’interprétation des rêves</Text> (1900). {'\n\n'}
        L’inconscient est le réservoir d’idées et de désirs refoulés, inaccessibles à la conscience mais actifs dans nos comportements.
      </Text>

      <Text style={styles.subTitle}>Méthodes freudiennes :</Text>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Association libre : dire tout ce qui vient à l’esprit</Text></View>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Interprétation des rêves : « voie royale vers l’inconscient »</Text></View>

      <Text style={styles.subTitle}>La première topique :</Text>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Inconscient : contenu refoulé</Text></View>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Préconscient : souvenirs momentanément hors de la conscience</Text></View>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Conscient : perceptions et pensées actuelles</Text></View>

      {/* --- 5. La seconde topique --- */}
      <Text style={styles.sectionTitle}>5. La seconde topique : les trois instances du psychisme (1923)</Text>
      <Text style={styles.subTitle}>Le Ça</Text>
      <Text style={styles.paragraph}>
        Siège des pulsions, des instincts, du plaisir immédiat. {'\n'}
        Inconscient, amorale, gouverné par le principe de plaisir.
      </Text>

      <Text style={styles.subTitle}>Le Moi</Text>
      <Text style={styles.paragraph}>
        Instance consciente, rationnelle. {'\n'}
        Médiateur entre le ça, le surmoi et la réalité. {'\n'}
        Gouverné par le principe de réalité.
      </Text>

      <Text style={styles.subTitle}>Le Surmoi</Text>
      <Text style={styles.paragraph}>
        Héritier des interdits parentaux, moraux et culturels. {'\n'}
        Juge intérieur, censeur des pulsions.
      </Text>

      <Text style={styles.subTitle}>Développement :</Text>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Le ça existe dès la naissance.</Text></View>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Le moi se construit par les interactions avec l’environnement.</Text></View>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Le surmoi se forme plus tard par l’intériorisation des interdits et valeurs sociales.</Text></View>

      {/* --- 6. Les mécanismes de défense --- */}
      <Text style={styles.sectionTitle}>6. Les mécanismes de défense</Text>
      <Text style={styles.paragraph}>
        Le moi utilise ces mécanismes pour faire face aux conflits internes entre le ça et le surmoi :
      </Text>

      {[
        'Refoulement : rejet inconscient des désirs inacceptables.',
        'Sublimation : transformation d’une pulsion en activité socialement valorisée.',
        'Projection : attribuer à autrui ses propres désirs refoulés.',
        'Régression : retour à un stade antérieur du développement.',
        'Formation réactionnelle : adopter une attitude opposée à sa pulsion.',
        'Rationalisation : justification acceptable d’un comportement inavouable.',
        'Compensation : surinvestir un domaine pour compenser un échec.',
        'Fuite : éviter une situation douloureuse.'
      ].map((item, index) => (
        <View key={index} style={styles.bulletContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}

      {/* --- 7. Freud et le développement de l’enfant --- */}
      <Text style={styles.sectionTitle}>7. Freud et le développement de l’enfant</Text>
      <Text style={styles.paragraph}>
        Méthode rétrospective : Freud étudie les adultes névrosés pour reconstituer leur enfance. {'\n\n'}
        Démarche « archéologique » visant à retrouver les causes infantiles des troubles psychiques. {'\n\n'}
        Il n’élabore pas une théorie globale du développement mais influence durablement la psychologie de l’enfant et la psychologie clinique.
      </Text>

      <Text style={styles.subTitle}>Héritage :</Text>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Influence majeure sur la psychiatrie infantile.</Text></View>
      <View style={styles.bulletContainer}><Text style={styles.bullet}>•</Text><Text style={styles.bulletText}>Impact sur la psychologie génétique et les méthodes éducatives.</Text></View>

      {/* --- 8. La psychanalyse : théorie universelle ou culturelle ? --- */}
      <Text style={styles.sectionTitle}>8. La psychanalyse : théorie universelle ou culturelle ?</Text>
      <Text style={styles.paragraph}>
        Freud la considère comme universelle, applicable à toutes les sociétés. {'\n\n'}
        Toutefois, des critiques (Ortigues, 1966) montrent qu’elle décrit surtout la famille occidentale du début du XXe siècle. {'\n\n'}
        La psychanalyse reste marquée par le modèle patriarcal et hétérosexuel.
      </Text>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          Certains y voient un risque d’aliénation culturelle si elle ignore les évolutions sociales (genre, diversité familiale).
        </Text>
      </View>

      {/* --- 9. Focus : psychanalyse et homoparentalité --- */}
      <Text style={styles.sectionTitle}>9. Focus : psychanalyse et homoparentalité</Text>
      <Text style={styles.paragraph}>
        La psychanalyse classique peine à intégrer les nouvelles formes familiales. {'\n\n'}
        Elle distingue « parenté » (règles sociales) et « parentalité » (expérience psychique d’être parent). {'\n\n'}
        De nombreux psychanalystes français (Flavigny, Winter, Lévy-Soussan…) ont exprimé des réticences face à l’homoparentalité, accusée de menacer « l’ordre symbolique ». {'\n\n'}
        Laurie Laufer (2013) souligne que ce débat a révélé le caractère réactionnaire d’une partie du champ psychanalytique.
      </Text>

      {/* --- 10. Pourquoi encore parler de Freud ? --- */}
      <Text style={styles.sectionTitle}>10. Pourquoi encore parler de Freud ?</Text>
      <Text style={styles.paragraph}>
        Parce qu’il est le premier à placer l’affectivité et la relation sociale au centre du développement. {'\n\n'}
        Ses concepts restent essentiels pour comprendre les dynamiques inconscientes, malgré les évolutions sociétales (égalité des genres, diversité sexuelle). {'\n\n'}
        Sa pensée demeure un pilier fondateur des sciences humaines, même si elle doit être réinterrogée à la lumière des sociétés contemporaines.
      </Text>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          ✅ En résumé : Freud fonde la psychanalyse en étudiant l’hystérie et le rôle de l’inconscient. Il conçoit le développement comme une évolution psychique traversée par des pulsions, des conflits et des mécanismes de défense.
        </Text>
      </View>

      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('PsychoEducation3')}>
          🎯 Faire le QCM
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A237E',
    marginBottom: 30,
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0D47A1',
    marginTop: 30,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1565C0',
    marginTop: 15,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16.5,
    lineHeight: 27,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 10,
  },
  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: '700',
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginLeft: 18,
  },
  bullet: {
    fontSize: 20,
    color: '#1E88E5',
    marginRight: 8,
    marginTop: -2,
  },
  bulletText: {
    flex: 1,
    fontSize: 16.5,
    color: '#333',
    lineHeight: 25,
  },
  quoteBox: {
    backgroundColor: '#F9F9F9',
    borderLeftWidth: 4,
    borderLeftColor: '#1976D2',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginVertical: 18,
  },
  quote: {
    fontStyle: 'italic',
    color: '#424242',
    fontSize: 16,
    lineHeight: 24,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  link: {
    fontSize: 20,
    color: '#0D47A1',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
