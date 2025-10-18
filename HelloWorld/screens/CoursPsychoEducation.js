import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>🧠 Psychologie du développement et de l’apprentissage</Text>


      {/* --- SECTION 1 --- */}
      <Text style={styles.sectionTitle}>1️⃣ Introduction : de quoi parle cette discipline ?</Text>

      <Text style={styles.subTitle}>➤ La psychologie du développement</Text>
      <Text style={styles.paragraph}>
        C’est une branche de la psychologie qui étudie comment les êtres humains se transforment tout au long de leur vie — surtout pendant l’enfance. Elle s’intéresse à :
      </Text>

      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>La croissance physique et biologique.</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Le développement cognitif (intelligence, pensée, mémoire).</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Le développement affectif et social (émotions, relations).</Text>
      </View>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>💬 Autrement dit : elle cherche à comprendre comment on devient ce qu’on est.</Text>
      </View>

      {/* --- SECTION 2 --- */}
      <Text style={styles.sectionTitle}>2️⃣ Un mot sur la psychologie</Text>
      <Text style={styles.paragraph}>
        La psychologie est une science humaine apparue au XIXᵉ siècle, qui voulait être aussi rigoureuse que les sciences naturelles (biologie, physique). 
        En voulant être “scientifique”, elle a parfois négligé certaines dimensions humaines (sociales, culturelles, spirituelles…).
      </Text>

      <Text style={styles.paragraph}>
        Historiquement, la psychologie s’est centrée sur l’individu isolé, ce qui a conduit à distinguer :
      </Text>

      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Psychologie : étude de l’homme individuel.</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Sociologie : étude de l’homme en société.</Text>
      </View>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>👉 Question : Si j’étais le dernier humain sur Terre, serais-je encore un homme ?</Text>
      </View>

      {/* --- SECTION 3 --- */}
      <Text style={styles.sectionTitle}>3️⃣ Le concept de « développement »</Text>
      <Text style={styles.subTitle}>a) Définition biologique</Text>
      <Text style={styles.paragraph}>
        Le développement, c’est le passage d’un état primitif à un état adulte stable par une série de transformations progressives.
      </Text>

      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>➜</Text>
        <Text style={styles.bulletText}>Quantitatif → croissance (taille, poids, vocabulaire…)</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>➜</Text>
        <Text style={styles.bulletText}>Qualitatif → transformation de la structure mentale (pensée, moralité…)</Text>
      </View>

      <Text style={styles.paragraph}>
        🧩 Les deux sont liés : le corps et l’esprit se développent ensemble.
      </Text>

      {/* --- SECTION 4 --- */}
      <Text style={styles.sectionTitle}>4️⃣ Que veut dire « génétique » ici ?</Text>
      <Text style={styles.paragraph}>
        ⚠️ Rien à voir avec les gènes ! Le mot vient du grec genesis = « naissance », « venue à l’être ». 
        Donc, la psychologie génétique = psychologie du développement.
      </Text>

      <Text style={styles.paragraph}>
        Elle étudie comment la pensée, les émotions et la personnalité se forment progressivement.
      </Text>

      {/* --- SECTION 5 --- */}
      <Text style={styles.sectionTitle}>5️⃣ Psychologie du développement ≠ Psychologie de l’enfant</Text>
      <Text style={styles.paragraph}>
        Ces deux expressions sont proches mais pas identiques :
      </Text>

      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Psychologie de l’enfant → comprendre son fonctionnement.</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Psychologie du développement → comprendre la construction du psychisme humain.</Text>
      </View>

      {/* --- SECTION 6 --- */}
      <Text style={styles.sectionTitle}>6️⃣ Pourquoi étudier la psychologie de l’enfant ?</Text>
      <Text style={styles.paragraph}>Trois grandes raisons :</Text>

      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Théorique : comprendre la formation du psychisme humain.</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Pratique n°1 : comprendre les troubles du développement.</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>Pratique n°2 : aider l’enfant à bien se développer.</Text>
      </View>

      {/* --- CONCLUSION --- */}
      <Text style={styles.sectionTitle}>🧭 Conclusion générale</Text>
      <Text style={styles.paragraph}>
        La psychologie du développement cherche à comprendre comment se construit l’être humain, de l’enfance à l’âge adulte, en reliant les dimensions biologiques, cognitives, affectives et sociales.
      </Text>

      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          « Mieux comprendre l’enfant, c’est mieux l’éduquer. »
        </Text>
      </View>

      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('PsychoEducation')}>
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
    marginBottom: 20,
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
    marginLeft: 12,
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
