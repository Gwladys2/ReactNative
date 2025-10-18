import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderStats from '../components/HeaderStats';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>🌿 Célestin Freinet</Text>
      <Text style={styles.subTitle}>1. Éléments biographiques</Text>

      {/* --- ORIGINES ET FORMATION --- */}
      <Text style={styles.sectionTitle}>📖 Origines et formation</Text>
      <Text style={styles.paragraph}>
        Célestin Freinet est né en 1896 dans un petit village rural des Alpes-Maritimes.{"\n"}
        → Il grandit dans un environnement simple, où les gens vivent surtout de l’artisanat et du travail manuel.{"\n"}
        → Cette vie « près du réel » influencera beaucoup sa vision de l’école.{"\n\n"}
        C’est un très bon élève, et en 1912, il réussit le concours d’entrée à l’école normale pour devenir instituteur.
      </Text>

      {/* --- GUERRE ET CONSÉQUENCES --- */}
      <Text style={styles.sectionTitle}>⚔️ La guerre et ses conséquences</Text>
      <Text style={styles.paragraph}>
        En 1914, il part à la Première Guerre mondiale. Il est blessé grièvement au poumon, reste deux ans en convalescence et sera handicapé à 70 %.{"\n"}
        → À cause de ses blessures, il a du mal à parler longtemps, ce qui l’empêchera d’enseigner « à l’ancienne », en parlant beaucoup.{"\n"}
        → Cela l’obligera à inventer une nouvelle manière d’enseigner, plus active et centrée sur les élèves.
      </Text>

      {/* --- ENGAGEMENT POLITIQUE --- */}
      <Text style={styles.sectionTitle}>✊ Engagement politique et social</Text>
      <Text style={styles.paragraph}>
        Après la guerre, il rejoint le parti communiste.{"\n"}
        → Pour lui, l’éducation est un moyen de changer la société : former des enfants libres, solidaires, capables de penser par eux-mêmes.{"\n"}
        → Il rejette l’école élitiste réservée aux « meilleurs » : il veut une école du peuple, démocratique et ouverte à tous.
      </Text>

      {/* --- PRINCIPES ÉDUCATIFS --- */}
      <Text style={styles.subTitle}>2. Principes éducatifs</Text>

      <Text style={styles.sectionTitle}>🏫 L’école du peuple</Text>
      <Text style={styles.paragraph}>
        Freinet veut une école pour tous, pas seulement pour les bons élèves.{"\n"}
        → L’école doit être ouverte sur la vie réelle : les apprentissages doivent avoir du sens concret.{"\n\n"}
        <Text style={styles.quote}>
          « Ne vous obstinez pas dans l’erreur d’une pédagogie du cheval qui n’a pas soif. »
        </Text>
      </Text>

      {/* --- TÂTONNEMENT EXPÉRIMENTAL --- */}
      <Text style={styles.sectionTitle}>🔍 Le tâtonnement expérimental</Text>
      <Text style={styles.paragraph}>
        C’est le cœur de sa méthode : les enfants apprennent par essais et erreurs.{"\n"}
        → Exemple : un enfant essaie de faire une expérience, se trompe, réfléchit, recommence, comprend.{"\n"}
        → C’est comme les scientifiques : on apprend en testant et en observant.{"\n\n"}
        Le rôle de l’enseignant est d’organiser un environnement propice à ces découvertes.
      </Text>

      {/* --- LIBRE EXPRESSION --- */}
      <Text style={styles.sectionTitle}>💬 La libre expression</Text>
      <Text style={styles.paragraph}>
        Les élèves doivent pouvoir exprimer leurs idées, leurs émotions et leurs opinions librement.{"\n"}
        → Cela les aide à se connaître et à mieux communiquer.
      </Text>

      {/* --- ÉDUCATION AU TRAVAIL --- */}
      <Text style={styles.sectionTitle}>⚒️ L’éducation au travail</Text>
      <Text style={styles.paragraph}>
        Pour Freinet, le travail est une source de développement personnel, pas une punition.{"\n"}
        → Il distingue le « vrai travail » (créatif, utile, porteur de sens) des simples « occupations ».
      </Text>

      {/* --- ÉCOLE CENTRÉE SUR L’ENFANT --- */}
      <Text style={styles.sectionTitle}>👧 Une école centrée sur l’enfant</Text>
      <Text style={styles.paragraph}>
        Comme d’autres pédagogues du XXe siècle (Montessori, Decroly...), Freinet pense que :{"\n"}
        → L’école doit s’adapter à l’enfant, et non l’inverse.{"\n"}
        → Chaque élève apprend à son rythme, selon ses intérêts et besoins.
      </Text>

      {/* --- DÉMARCHE PÉDAGOGIQUE --- */}
      <Text style={styles.subTitle}>3. Démarche pédagogique (méthodes de classe)</Text>

      <Text style={styles.sectionTitle}>🖨️ L’imprimerie scolaire</Text>
      <Text style={styles.paragraph}>
        Les enfants écrivent leurs propres textes, les impriment eux-mêmes et les diffusent (par exemple dans un journal de classe).{"\n"}
        → Cela donne du sens à l’écriture et valorise leur travail.
      </Text>

      <Text style={styles.sectionTitle}>✍️ Le texte libre</Text>
      <Text style={styles.paragraph}>
        Chaque enfant écrit librement sur le sujet qu’il souhaite.{"\n"}
        → Ensuite, la classe lit et commente ces textes.{"\n"}
        → Certains sont choisis pour être imprimés dans le journal scolaire.{"\n"}
        → Objectif : donner envie d’écrire et de partager ses idées.
      </Text>

      <Text style={styles.sectionTitle}>💌 La correspondance interscolaire</Text>
      <Text style={styles.paragraph}>
        Les classes correspondent avec d’autres écoles, parfois dans d’autres régions ou pays.{"\n"}
        → Les enfants écrivent pour de vrais destinataires, ce qui donne du sens à leurs écrits.{"\n"}
        → Cela ouvre la classe à d’autres cultures et réalités.
      </Text>

      <Text style={styles.sectionTitle}>📚 La « Bibliothèque de Travail » (BT)</Text>
      <Text style={styles.paragraph}>
        Ce sont de petits livrets rédigés pour les enfants, sur divers sujets (nature, histoire, métiers...).{"\n"}
        → Objectif : apprendre à chercher des informations par soi-même.
      </Text>

      <Text style={styles.sectionTitle}>🌍 Les démarches de découverte</Text>
      <Text style={styles.paragraph}>
        Apprendre en sortant de la classe, en observant le monde réel (la nature, le village, les métiers...).{"\n"}
        → On relie ainsi l’école et la vie quotidienne.
      </Text>

      <Text style={styles.sectionTitle}>🗓️ Le plan de travail</Text>
      <Text style={styles.paragraph}>
        Chaque élève construit avec l’enseignant son programme de la semaine, selon ses besoins et projets.{"\n"}
        → Cela rend l’apprentissage personnalisé et responsabilise l’enfant.
      </Text>

      <Text style={styles.sectionTitle}>🤝 Le conseil de classe</Text>
      <Text style={styles.paragraph}>
        Un moment collectif où les élèves et l’enseignant discutent, décident, organisent la vie de la classe.{"\n"}
        → On y parle de problèmes, de projets, de décisions.{"\n"}
        → Les élèves ont des rôles précis (président, secrétaire...).{"\n"}
        → C’est une leçon de démocratie au quotidien.
      </Text>

      {/* --- RÉSUMÉ --- */}
      <Text style={styles.subTitle}>🧩 En résumé</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryItem}>🧪 Apprendre par l’action → Les enfants expérimentent, cherchent, testent.</Text>
        <Text style={styles.summaryItem}>🎯 Donner du sens aux apprentissages → Tout ce qu’ils font a un lien avec leur vie réelle.</Text>
        <Text style={styles.summaryItem}>🌱 Responsabiliser l’élève → L’enfant devient acteur de son apprentissage.</Text>
        <Text style={styles.summaryItem}>🤝 Coopération et entraide → Les élèves apprennent ensemble, pas en compétition.</Text>
        <Text style={styles.summaryItem}>🌍 Ouverture à la société → L’école communique avec le monde extérieur.</Text>
      </View>

      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue')}>
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
    backgroundColor: '#FAFAFA',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 23,
    fontWeight: '700',
    color: '#1B5E20',
    marginVertical: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 18,
    color: '#33691E',
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 26,
    marginTop: 6,
    color: '#333',
    textAlign: 'justify',
  },
  quote: {
    fontStyle: 'italic',
    color: '#4E342E',
  },
  summaryBox: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 15,
    marginVertical: 20,
  },
  summaryItem: {
    fontSize: 17,
    lineHeight: 26,
    color: '#2E7D32',
    marginBottom: 5,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  link: {
    fontSize: 22,
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
