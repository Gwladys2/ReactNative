import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>🧠 Psychologie du développement – Partie 2</Text>
      <Text style={styles.intro}>
        Les premières sciences psychologiques : du behaviorisme à la notion de stade
      </Text>

      {/* --- SECTION 1 --- */}
      <Text style={styles.sectionTitle}>1️⃣ Le contexte : naissance de la psychologie scientifique</Text>
      <Text style={styles.paragraph}>
        Au début du XXᵉ siècle, la psychologie devient enfin une science à part entière. Trois grandes orientations se dessinent :
      </Text>

      <View style={styles.tableBox}>
        <Text style={styles.tableHeader}>Orientation — Principaux auteurs — Objet d’étude</Text>
        <Text style={styles.tableLine}>Comportementaliste — Pavlov, Watson, Skinner — Les comportements observables</Text>
        <Text style={styles.tableLine}>Clinique / Pathologique — Freud, Janet — L’inconscient, les troubles mentaux</Text>
        <Text style={styles.tableLine}>Psychologie de la perception (Gestalt) — Wertheimer, Köhler, Koffka — La perception comme un tout structuré</Text>
      </View>

      <Text style={styles.quote}>
        👉 Ces courants vont influencer toute la psychologie moderne et la psychologie de l’éducation.
      </Text>

      {/* --- SECTION 2 --- */}
      <Text style={styles.sectionTitle}>2️⃣ Le passage par l’enfance : une nécessité théorique</Text>
      <Text style={styles.paragraph}>
        Ni Watson ni Freud n’étaient spécialistes de l’enfance, mais tous deux ont compris que l’enfance est la clé pour comprendre l’humain adulte.
      </Text>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Freud : les premières expériences structurent la personnalité.</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Watson : les comportements appris très tôt conditionnent les habitudes futures.</Text>
      </View>

      <Text style={styles.paragraph}>
        ➡️ L’étude de l’enfant devient un outil essentiel pour comprendre la genèse du psychisme.
      </Text>

      {/* --- SECTION 3 --- */}
      <Text style={styles.sectionTitle}>3️⃣ Le behaviorisme : la science du comportement</Text>
      <Text style={styles.subTitle}>a) Définition</Text>
      <Text style={styles.paragraph}>
        Le behaviorisme est une science expérimentale du comportement humain et animal. Il se fonde sur une idée simple :
      </Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          « La psychologie doit étudier ce qui est observable : les comportements, pas les pensées. »
        </Text>
      </View>
      <Text style={styles.paragraph}>
        Il s’oppose à la psychologie introspective et se rapproche du positivisme d’Auguste Comte. Schéma de base : Stimulus (S) → Réponse (R).
      </Text>

      {/* --- SECTION 4 --- */}
      <Text style={styles.sectionTitle}>4️⃣ Pavlov et le conditionnement classique</Text>
      <Text style={styles.paragraph}>
        Pavlov découvre le conditionnement en observant les chiens :
      </Text>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>🔔</Text>
        <Text style={styles.bulletText}>Cloche → associée à la nourriture → le chien salive.</Text>
      </View>
      <Text style={styles.paragraph}>
        🎯 Idée clé : l’apprentissage est une association entre un stimulus et une réponse.
      </Text>

      {/* --- SECTION 5 --- */}
      <Text style={styles.sectionTitle}>5️⃣ Watson et le behaviorisme américain</Text>
      <Text style={styles.paragraph}>
        Watson affirme que tous les comportements humains peuvent être expliqués par le conditionnement.
      </Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          « Donnez-moi une douzaine d’enfants sains, et je m’engage à en faire un docteur, un artiste ou un voleur selon mon choix. »
        </Text>
      </View>
      <Text style={styles.paragraph}>
        ➡️ Vision déterministe : l’être humain est le produit de son environnement.
      </Text>

      {/* --- SECTION 6 --- */}
      <Text style={styles.sectionTitle}>6️⃣ L’expérience du petit Albert (1919)</Text>
      <Text style={styles.paragraph}>
        Watson et Rayner ont montré qu’un enfant pouvait apprendre la peur par association. Cette expérience est devenue célèbre, mais controversée pour des raisons éthiques.
      </Text>

      {/* --- SECTION 7 --- */}
      <Text style={styles.sectionTitle}>7️⃣ Skinner et le conditionnement opérant</Text>
      <Text style={styles.paragraph}>
        Skinner met l’accent sur les conséquences d’une action plutôt que sur ses causes. Schéma : Stimulus → Réponse → Conséquence (SRC).
      </Text>

      <Text style={styles.subTitle}>Expérience : la boîte de Skinner</Text>
      <Text style={styles.paragraph}>
        Le rat apprend par renforcement (récompense ou punition) : c’est l’apprentissage par essai-erreur.
      </Text>

      {/* --- SECTION 8 --- */}
      <Text style={styles.sectionTitle}>8️⃣ Renforcement et punition selon Skinner</Text>
      <Text style={styles.paragraph}>
        Types de renforcement :
      </Text>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>✅</Text>
        <Text style={styles.bulletText}>Renforcement positif : ajouter un élément agréable → augmente le comportement.</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>🚫</Text>
        <Text style={styles.bulletText}>Punition négative : retirer un privilège → diminue le comportement.</Text>
      </View>

      {/* --- SECTION 9 --- */}
      <Text style={styles.sectionTitle}>9️⃣ Conséquences pour l’apprentissage</Text>
      <Text style={styles.paragraph}>
        Le modèle béhavioriste définit l’apprentissage comme une succession d’associations renforcées. Utile pour les automatismes, mais limité pour la compréhension et la créativité.
      </Text>

      {/* --- SECTION 10 --- */}
      <Text style={styles.sectionTitle}>🔟 Après 1920 : vers la psychologie génétique</Text>
      <Text style={styles.paragraph}>
        Piaget, Wallon, Gesell, Vygotski introduisent la notion de développement par stades successifs.
      </Text>

      {/* --- CONCLUSION --- */}
      <Text style={styles.sectionTitle}>🧭 Conclusion générale</Text>
      <Text style={styles.paragraph}>
        Le behaviorisme a fondé une approche scientifique du comportement. Mais la psychologie génétique a montré que l’enfant construit activement sa pensée. Ensemble, ces approches expliquent comment apprentissage, environnement et maturation interagissent pour façonner l’être humain.
      </Text>

      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('PsychoEducation2')}>
          🎯 Faire le QCM
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A237E',
    marginBottom: 10,
  },
  intro: {
    fontSize: 18,
    textAlign: 'center',
    color: '#424242',
    marginBottom: 30,
    lineHeight: 26,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0D47A1',
    marginTop: 25,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1565C0',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16.5,
    lineHeight: 26,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 10,
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
    marginLeft: 16,
  },
  bullet: {
    fontSize: 18,
    marginRight: 8,
    color: '#1E88E5',
  },
  bulletText: {
    flex: 1,
    fontSize: 16.5,
    color: '#333',
    lineHeight: 25,
  },
  quoteBox: {
    backgroundColor: '#F5F5F5',
    borderLeftWidth: 4,
    borderLeftColor: '#1976D2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginVertical: 15,
  },
  quote: {
    fontStyle: 'italic',
    color: '#424242',
    fontSize: 16,
    lineHeight: 24,
  },
  tableBox: {
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  tableHeader: {
    fontWeight: '700',
    color: '#0D47A1',
    marginBottom: 8,
  },
  tableLine: {
    fontSize: 15.5,
    lineHeight: 23,
    color: '#333',
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 20,
  },
  link: {
    fontSize: 20,
    color: '#0D47A1',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
