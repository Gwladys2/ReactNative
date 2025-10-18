import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>🌟 Alexander Sutherland Neill</Text>
      <Text style={styles.subTitle}>Pédagogie libertaire et école Summerhill</Text>

      {/* --- CONTEXTE DU COURS --- */}
      <Text style={styles.chapterTitle}>🔹 1. Présentation du cours</Text>
      <Text style={styles.paragraph}>
        But : comprendre la pensée pédagogique d’Alexander Sutherland Neill et son approche de l’éducation libertaire.
      </Text>
      <Text style={styles.paragraph}>
        Ce que tu dois savoir faire à la fin :{'\n'}
        • Décrire Summerhill et ses principes{'\n'}
        • Comprendre le self-government (autogestion){'\n'}
        • Expliquer comment Neill définit le bonheur et la réussite{'\n'}
        • Situer Summerhill dans le contexte historique des années 1920{'\n'}
        • Identifier ses influences et critiques{'\n'}
        • Discuter de son héritage dans l’éducation
      </Text>
      <Text style={styles.paragraph}>
        En résumé : ce chapitre fixe les objectifs : tu vas étudier une approche centrée sur la liberté et l’autonomie des enfants.
      </Text>

      {/* --- BIOGRAPHIE --- */}
      <Text style={styles.chapterTitle}>🔹 2. Biographie de A.S. Neill</Text>
      <Text style={styles.paragraph}>
        Né en 1883 en Écosse, dans une famille protestante stricte. Son enfance est perçue comme « ratée ».{'\n'}
        Il devient élève-maître dans l’école de son père, puis poursuit des études universitaires en lettres.{'\n'}
        Carrière : instituteur puis directeur d’école.
      </Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          « Ma tâche est futile… » → critique de l’éducation traditionnelle qui ne prépare pas les enfants au bonheur.
        </Text>
      </View>
      <Text style={styles.paragraph}>
        Idée principale : Neill valorise le bien-être de l’enfant, la liberté et le bonheur plutôt que l’autorité et la discipline stricte.
      </Text>

      {/* --- ECOLE SUMMERHILL --- */}
      <Text style={styles.chapterTitle}>🔹 3. L’école de Summerhill (1921)</Text>
      <Text style={styles.paragraph}>
        Localisation : Suffolk, Angleterre, enfants de 5 à 17 ans.{'\n'}
        Activités : danse, théâtre, musique, ateliers, piscine… tout est libre.
      </Text>
      <Text style={styles.subSectionTitle}>Principes fondamentaux</Text>
      <Text style={styles.paragraph}>
        • Liberté : choix des activités, pas d’obligation{'\n'}
        • Désir et motivation : apprendre par envie, pas contrainte{'\n'}
        • Pas de punition : problèmes discutés collectivement{'\n'}
        • Autogestion : assemblée générale, tribunal des élèves, égalité des voix{'\n'}
        • Liberté ≠ anarchie : respecter celle des autres{'\n'}
        • Mixité et éducation sexuelle : non censurée
      </Text>
      <Text style={styles.paragraph}>
        En résumé : Summerhill est un espace où les enfants sont responsables de leur apprentissage et de la vie collective.
      </Text>

      {/* --- OBJECTIFS PEDAGOGIQUES --- */}
      <Text style={styles.chapterTitle}>🔹 4. Objectifs pédagogiques de Neill</Text>
      <Text style={styles.paragraph}>
        • Bonheur : finalité principale{'\n'}
        • Imagination : créativité et idées comptent plus que fautes{'\n'}
        • Émotions : nourrir cœur et corps{'\n'}
        • Liberté responsable : apprendre à distinguer le bien et le mal par expérience{'\n'}
        • Rôle de l’enseignant : guide, non autoritaire
      </Text>

      {/* --- CONTEXTE ET INFLUENCES --- */}
      <Text style={styles.chapterTitle}>🔹 5. Contexte et influences</Text>
      <Text style={styles.paragraph}>
        Années 1920 : bouleversements post-Première Guerre mondiale{'\n'}
        Influences : mouvements progressistes, psychanalyse freudienne, pédagogies de Rousseau, Dewey, Montessori{'\n'}
        Summerhill : modernisation et libération de l’éducation
      </Text>

      {/* --- CRITIQUES ET HERITAGE --- */}
      <Text style={styles.chapterTitle}>🔹 6. Critiques et héritage</Text>
      <Text style={styles.subSectionTitle}>Points positifs</Text>
      <Text style={styles.paragraph}>
        • Éducation centrée sur l’enfant{'\n'}
        • Influence durable sur pédagogies alternatives{'\n'}
        • Promotion du bien-être et de la liberté
      </Text>
      <Text style={styles.subSectionTitle}>Points négatifs</Text>
      <Text style={styles.paragraph}>
        • Peut être perçu comme laxisme{'\n'}
        • Difficulté à transposer dans l’école traditionnelle{'\n'}
        En résumé : Summerhill inspire beaucoup d’écoles alternatives mais reste contesté
      </Text>

      {/* --- CONCLUSION --- */}
      <Text style={styles.conclusionTitle}>🔹 7. Conclusion</Text>
      <Text style={styles.paragraph}>
        Neill est une figure majeure de la pédagogie libertaire.{'\n'}
        Idée clé : former des enfants libres, heureux, autonomes et responsables, avec une éducation humaniste et démocratique.
      </Text>

      {/* --- REFERENCES --- */}
      <Text style={styles.chapterTitle}>🔹 8. Références essentielles</Text>
      <Text style={styles.paragraph}>
        • Neill, A.S. (2004) : Libres enfants de Summerhill{'\n'}
        • Saffange, J.-F. (2002, 2013) : textes sur Neill dans Quinze pédagogues{'\n'}
        • Gauthier & Tardif (1996) : La pédagogie. Théories et pratiques{'\n'}
        • Meirieu, P. (2000) : réflexion sur le désir de l’enfant dans l’éducation
      </Text>

      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue5')}>
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
