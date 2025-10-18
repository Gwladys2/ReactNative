import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>🌼 Montessori & Céline Alvarez</Text>
      <Text style={styles.subTitle}>Actualisation de la pédagogie au XXIᵉ siècle</Text>

      {/* --- CONTEXTE DU COURS --- */}
      <Text style={styles.chapterTitle}>🔹 1. Contexte du cours</Text>
      <Text style={styles.paragraph}>
        Objectif : réfléchir à la réactualisation de la pédagogie Montessori au XXIᵉ siècle, en s’appuyant
        sur l’expérience de Céline Alvarez (2011-2014).
      </Text>
      <Text style={styles.paragraph}>
        Références principales :  
        Céline Alvarez (2016) : Les lois naturelles de l’enfant  
        Philippe Meirieu (2018) : La riposte  
        Sylvie Nonnon (2021) : Les discours sur la pédagogie Montessori  
        Roland Goigoux (2016) : article critique dans Le Monde
      </Text>

      {/* --- EXPERIENCE DE GENNEVILLIERS --- */}
      <Text style={styles.chapterTitle}>🔹 2. L’expérience de Gennevilliers</Text>
      <Text style={styles.subSectionTitle}>a) Historique</Text>
      <Text style={styles.paragraph}>
        Menée dans une école maternelle REP, ce projet personnel de Céline Alvarez s’inspire de Montessori et
        des neurosciences.  
        Durée : 3 ans (2011-2014). L’expérience attire une énorme attention médiatique.  
        Publication en 2016 du livre « Les lois naturelles de l’enfant » → succès national.
      </Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          « Mettre en lumière les invariants environnementaux et pédagogiques bénéfiques à l’enfant » (p.35)
        </Text>
      </View>

      {/* --- ORGANISATION PEDAGOGIQUE --- */}
      <Text style={styles.chapterTitle}>🔹 3. Organisation pédagogique de la classe</Text>
      <Text style={styles.subSectionTitle}>b) Fonctionnement</Text>
      <Text style={styles.paragraph}>
        Classe multi-âges (3 à 6 ans), deux adultes encadrants, matériel inspiré de Montessori.  
        La journée suit le rythme biologique et émotionnel de l’enfant : accueil individualisé,
        choix libre des activités, temps collectifs ponctuels, récréations non systématiques.
      </Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          « La classe ressemblait à une ruche bienheureuse, chacun poursuivait un objectif qui le motivait,
          à son rythme, sans jamais déranger l’activité d’autrui » (p.131)
        </Text>
      </View>

      {/* --- PRINCIPES DE LA DEMARCHE --- */}
      <Text style={styles.chapterTitle}>🔹 4. Principes fondateurs de la démarche Alvarez</Text>
      <Text style={styles.subSectionTitle}>a) L’éducabilité universelle et les neurosciences</Text>
      <Text style={styles.paragraph}>
        L’humain est pré-câblé pour apprendre. Si un enfant n’apprend pas, le milieu en est la cause.
        Référence à la plasticité cérébrale : le cerveau se développe selon les expériences vécues.
      </Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          « Lorsque nous interdisons à l’enfant d’agir librement pour notre confort, ce n’est pas lui que
          nous contraignons, mais son intelligence en train de se faire » (p.43)
        </Text>
      </View>

      <Text style={styles.subSectionTitle}>b) Principes éducatifs majeurs</Text>
      <Text style={styles.paragraph}>
        • Apprendre par l’expérience active → agir plutôt qu’écouter.  
        • Motivation endogène → l’élan vient de l’intérieur.  
        • Richesse du monde réel → manipulation concrète.  
        • Jeu libre → développement global naturel.  
        • Bienveillance et amour → climat sécurisant indispensable.
      </Text>

      {/* --- EXEMPLES DE PRATIQUES --- */}
      <Text style={styles.chapterTitle}>🔹 5. Exemples de pratiques mises en œuvre</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryItem}>🌱 Vie quotidienne : s’asseoir, verser de l’eau, ranger, observer…</Text>
        <Text style={styles.summaryItem}>👀 Affinement sensoriel : couleurs, formes, sons, textures…</Text>
        <Text style={styles.summaryItem}>🔢 Mathématiques : perles, barres numériques, progression 1 à 10</Text>
        <Text style={styles.summaryItem}>📝 Langage : sons, correspondances graphie/phonèmes, lecture progressive</Text>
        <Text style={styles.summaryItem}>🌎 Culture : découverte du monde, géographie, exploration guidée</Text>
      </View>

      {/* --- RESULTATS OBSERVES --- */}
      <Text style={styles.chapterTitle}>🔹 6. Résultats observés</Text>
      <Text style={styles.paragraph}>
        Tous les enfants lisent à 6 ans, niveaux de maths supérieurs à la moyenne.  
        Autonomie, curiosité, concentration et coopération remarquables.  
        Avance d’environ un an sur les programmes standards.
      </Text>

      {/* --- ANALYSE CRITIQUE --- */}
      <Text style={styles.chapterTitle}>🔹 7. Analyse critique et limites</Text>
      <Text style={styles.subSectionTitle}>a) Méthodologie</Text>
      <Text style={styles.paragraph}>
        Peu de données quantitatives, représentativité limitée (une seule classe REP), transfert difficile
        dans le système public.
      </Text>
      <Text style={styles.subSectionTitle}>b) Philosophie et politique</Text>
      <Text style={styles.paragraph}>
        Vision idéalisée de l’enfant, succès médiatique, risque de marketing éducatif, individualisme pédagogique.
      </Text>
      <Text style={styles.subSectionTitle}>c) Sociologie</Text>
      <Text style={styles.paragraph}>
        Écart entre pratiques publiques lentes et société valorisant le choix personnel, explosion des écoles
        privées hors contrat.
      </Text>
      <Text style={styles.subSectionTitle}>d) Dérives commerciales</Text>
      <Text style={styles.paragraph}>
        Prolifération d’objets éducatifs sans lien réel avec Montessori, appropriation bourgeoise renforçant
        les inégalités sociales.
      </Text>

      {/* --- CONCLUSION --- */}
      <Text style={styles.conclusionTitle}>🔹 8. Conclusion</Text>
      <Text style={styles.paragraph}>
        Points positifs : redécouverte de l’enfant acteur, motivation intrinsèque, influence sur les enseignants.
        Points critiques : simplification du message, appropriation commerciale, tension liberté vs valeurs collectives.
      </Text>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryItem}>🌱 Montessori : observation et expérimentation</Text>
        <Text style={styles.summaryItem}>🧠 Alvarez : neurosciences et plasticité cérébrale</Text>
        <Text style={styles.summaryItem}>🏫 Environnement : préparé (Montessori) vs flexible (Alvarez)</Text>
        <Text style={styles.summaryItem}>👩‍🏫 Rôle adulte : guide/observateur vs facilitateur bienveillant</Text>
        <Text style={styles.summaryItem}>⚠️ Critiques : élitiste et spirituelle vs médiatique et individualiste</Text>
      </View>

      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue4')}>
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
    backgroundColor: '#FFFDF7',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#388E3C',
    marginBottom: 25,
  },
  chapterTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B5E20',
    marginTop: 25,
    marginBottom: 8,
  },
  subSectionTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#558B2F',
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 27,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 10,
  },
  quoteBox: {
    backgroundColor: '#FFF8E1',
    borderLeftWidth: 5,
    borderLeftColor: '#FFD54F',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  quote: {
    fontStyle: 'italic',
    color: '#5D4037',
    fontSize: 16,
    lineHeight: 24,
  },
  summaryBox: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 15,
    marginVertical: 15,
  },
  summaryItem: {
    fontSize: 16,
    color: '#2E7D32',
    lineHeight: 24,
    marginBottom: 5,
  },
  conclusionTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#004D40',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 20,
  },
  link: {
    fontSize: 20,
    color: '#1565C0',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
