import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>
        📘 La théorie freudienne des stades de la libido (suite)
      </Text>

      <Text style={styles.paragraph}>
       <Text style={styles.sectionTitle}> 1. Les stades chez Freud{'\n\n'}</Text>
        Chaque stade de développement psychosexuel correspond à un mode d’organisation spécifique de la vie sexuelle, défini par :{'\n\n'}
        - Le primat d’une zone érogène (bouche, anus, organes génitaux) source principale de plaisir ;{'\n'}
        - Un type d’activité lié à la relation d’objet (absence d’objet, objet partiel, objet total).{'\n\n'}
        Le moi se construit en canalisant l’énergie du ça, en investissant progressivement le corps propre puis le corps de l’autre.
      </Text>

      <Text style={styles.sectionTitle}>2. La période fœtale et le narcissisme primaire</Text>
      <Text style={styles.paragraph}>
        Narcissisme primaire (Laplanche & Pontalis) : état archaïque sans relation à l’objet, caractérisé par une indifférenciation du moi et du ça, semblable à la vie intra-utérine.{'\n\n'}
        Le nourrisson est entièrement tourné vers lui-même ; son moi se confond avec le ça.{'\n\n'}
        La différenciation sujet/objet se fait plus tard → naissance du narcissisme secondaire (retour de la libido sur le moi après avoir investi des objets).{'\n\n'}
        Freud utilise cette notion pour comprendre les psychoses : repli total sur soi, perte du contact avec la réalité.
      </Text>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          💤 Analogie avec le sommeil : Le sommeil reproduit symboliquement la vie intra-utérine : retrait du monde, bien-être global, sentiment de sécurité totale. 
          La naissance devient un traumatisme fondateur, source d’une nostalgie inconsciente du bonheur perdu — origine de la quête de plaisir.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>3. Le stade oral et le désir d’incorporation</Text>
      <Text style={styles.paragraph}>
        Âge : première année de vie.{'\n'}
        Zone érogène dominante : bouche (lèvres, langue, cavité buccale).{'\n'}
        Activité principale : succion → plaisir indépendant du besoin vital.{'\n'}
        Le nourrisson découvre un plaisir auto-érotique (lié à lui-même) et hétéro-érotique (lié à la relation à l’autre).
      </Text>

      <Text style={styles.subTitle}>🔄 Mécanisme d’étayage</Text>
      <Text style={styles.paragraph}>
        La pulsion sexuelle s’appuie d’abord sur une fonction vitale (nutrition). La bouche, d’abord organe de survie, devient organe de plaisir.
        Apparition de la relation d’objet à travers le sein maternel.
      </Text>

      <Text style={styles.subTitle}>❤️ L’identification primitive</Text>
      <Text style={styles.paragraph}>
        Le stade oral est marqué par l’incorporation : fantasme d’absorber l’objet d’amour (le sein, la mère). Première forme d’identification, sans distinction claire entre « avoir » et « être » l’objet.
        Cette relation duelle à la mère structure les premières bases du moi.
      </Text>

      <Text style={styles.subTitle}>🔎 Mélanie Klein et Winnicott</Text>
      <Text style={styles.paragraph}>
        Klein souligne l’importance des images maternelles dans l’inconscient (mère bonne/mère mauvaise).{'\n'}
        Winnicott introduit la notion de fonction maternelle :{'\n\n'}
        - Holding : soutien et protection (fonction pare-excitation).{'\n'}
        - Handling : manipulation corporelle qui aide le bébé à sentir les limites de son corps.{'\n'}
        - Object-presenting : présentation de l’objet qui permet au bébé de croire qu’il crée le monde.{'\n\n'}
        La mère suffisamment bonne est celle qui répond « assez » aux besoins de l’enfant sans le surprotéger.
      </Text>

      <Text style={styles.subTitle}>👶 Spitz : les organisateurs de la personnalité</Text>
      <Text style={styles.paragraph}>
        - Sourire social (2 mois) : première reconnaissance de l’autre.{'\n'}
        - Angoisse du 8e mois : reconnaissance de la mère, peur de l’étranger.{'\n'}
        - Apparition du « non » (18 mois) : affirmation du moi.{'\n\n'}
        → L’absence de ces liens (hospitalisme) entraîne de graves troubles psychiques.
      </Text>

      <Text style={styles.sectionTitle}>4. Le stade anal et le sadomasochisme</Text>
      <Text style={styles.paragraph}>
        Âge : environ 2 à 4 ans. Zone érogène dominante : anus. Le plaisir se déplace vers la fonction d’expulsion/rétention.
        L’éducation de la propreté devient centrale : elle introduit la relation à la loi, au contrôle, à la récompense et à la punition.
      </Text>

      <Text style={styles.subTitle}>⚖️ Sadomasochisme et ambivalence</Text>
      <Text style={styles.paragraph}>
        Masochisme : plaisir mêlé à la douleur (souffrance liée à la rétention ou aux contraintes éducatives).{'\n'}
        Sadisme : plaisir à dominer, à exercer une emprise.{'\n'}
        Ces deux tendances forment le sadomasochisme, lieu d’apparition de l’ambivalence affective (amour/haine).{'\n'}
        Scène primitive : représentation fantasmée des rapports sexuels parentaux, vécue comme violente, forgeant la base de la différence des sexes.
      </Text>

      <Text style={styles.sectionTitle}>5. Le stade phallique, l’Œdipe et la castration</Text>
      <Text style={styles.paragraph}>
        Âge : environ 4 à 6 ans. Zone érogène dominante : organes génitaux.
        Découverte de la différence des sexes, éveil de la curiosité sexuelle et des activités masturbatoires.
      </Text>

      <Text style={styles.subTitle}>⚡ Le complexe d’Œdipe</Text>
      <Text style={styles.paragraph}>
        Désir pour le parent du sexe opposé, rivalité envers le parent du même sexe.{'\n'}
        Deux formes : Positive (amour pour la mère / haine du père) et Négative (amour pour le père / haine de la mère).{'\n'}
        Rôle structurant : l’enfant apprend à renoncer à ses désirs pour intégrer les interdits et construire son identité.
      </Text>

      <Text style={styles.subTitle}>⚖️ Le complexe de castration</Text>
      <Text style={styles.paragraph}>
        L’enfant découvre la différence anatomique et l’interprète comme une privation.
        Le garçon redoute de perdre son phallus → angoisse de castration.
        La fille perçoit son absence comme un manque à compenser (désir d’enfant).
      </Text>

      <Text style={styles.subTitle}>👩‍👧 Identification et différence de sexes</Text>
      <Text style={styles.paragraph}>
        Le garçon s’identifie au père (loi, autorité). La fille s’identifie à la mère, mais de façon plus progressive.
        Ces identifications permettent la formation du Surmoi, instance morale issue de l’intériorisation de l’interdit parental.
      </Text>

      <Text style={styles.sectionTitle}>6. La période de latence</Text>
      <Text style={styles.paragraph}>
        Âge : de 6 ans à la puberté. Caractérisée par un refoulement massif de la sexualité infantile.
        Apparition des digues psychiques (pudeur, dégoût, morale). Construction du Surmoi par identification au père.
        Sublimation : dérivation de l’énergie sexuelle vers des activités socialement valorisées (art, savoir, sport).
      </Text>

      <Text style={styles.subTitle}>💭 Fonction paternelle</Text>
      <Text style={styles.paragraph}>
        La fonction paternelle limite la fusion mère-enfant et inscrit l’enfant dans le social.
        C’est la figure de la loi qui permet à l’enfant de se séparer et de devenir sujet.
      </Text>

      <Text style={styles.sectionTitle}>7. La puberté</Text>
      <Text style={styles.paragraph}>
        Deuxième grande poussée de la sexualité : la libido se met au service de la reproduction biologique.
        Résurgence des désirs œdipiens et des fantasmes infantiles.
        L’adolescent doit se détacher des parents pour construire sa propre subjectivité.
      </Text>

      <Text style={styles.sectionTitle}>✅ En résumé</Text>
      <Text style={styles.paragraph}>
        Freud décrit le développement psychique comme un parcours de la libido à travers différentes zones corporelles.
        Chaque stade fonde une nouvelle relation à soi et à l’autre.
        Les conflits non résolus peuvent entraîner fixations ou régressions à des stades antérieurs.
        La psychanalyse éclaire ainsi la construction du moi, la genèse du désir et les origines de la vie psychique.
      </Text>

      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('PsychoEducation4')}>
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
