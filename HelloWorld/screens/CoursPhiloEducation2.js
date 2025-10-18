import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>🧠 Philosophie de l’éducation partie 2</Text>
{/* --- SECTION 1 --- */}
<Text style={styles.sectionTitle}>1. Instruire vs Éduquer</Text>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>💡</Text>
  <Text style={styles.bulletText}>
    Instruire = transmettre des savoirs, connaissances, informations concrètes (maths, français, histoire…)
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🌱</Text>
  <Text style={styles.bulletText}>
    Éduquer = accompagner le développement global de l’individu : valeurs, comportements, socialisation, autonomie, esprit critique
  </Text>
</View>
<Text style={styles.paragraph}>
  Question centrale : L’école doit-elle uniquement transmettre des savoirs ou aussi former des citoyens capables de penser et agir ?  
  Point clé de l’école républicaine : ne pas imposer de dogme, mais donner aux élèves les outils pour réfléchir par eux-mêmes et participer à la vie démocratique.
</Text>

{/* --- SECTION 2 --- */}
<Text style={styles.sectionTitle}>2. Détour historique – Condorcet et l’instruction publique</Text>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🕰️</Text>
  <Text style={styles.bulletText}>
    Qui ? Nicolas de Condorcet, philosophe et mathématicien français, révolutionnaire
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>📅</Text>
  <Text style={styles.bulletText}>
    Quand ? Pendant la Révolution française (1791-1792)
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>💭</Text>
  <Text style={styles.bulletText}>
    Idée centrale : l’instruction publique doit servir à former des citoyens libres et éclairés
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🎯</Text>
  <Text style={styles.bulletText}>
    Missions : Former des citoyens capables d’exercer leurs droits et devoirs, développer les talents de chacun, garantir l’égalité réelle
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>⚖️</Text>
  <Text style={styles.bulletText}>
    Principes : Instruction gratuite, universelle, laïque. Refuser dogmatisme, obscurantisme, et conformisme
  </Text>
</View>

{/* --- SECTION 3 --- */}
<Text style={styles.sectionTitle}>3. Pour qui ? À quoi ? Comment ?</Text>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>👥</Text>
  <Text style={styles.bulletText}>
    Pour qui ? Chaque individu : développer ses capacités et accéder à la culture
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🎓</Text>
  <Text style={styles.bulletText}>
    À quoi ? Devenir humain, capable de réflexion et d’action sociale
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🧩</Text>
  <Text style={styles.bulletText}>
    Comment ? Trois dimensions :{'\n'}
    <View style={styles.subBulletPoint}>
      <Text style={styles.bulletSub}>•</Text>
      <Text style={styles.bulletText}>Culture et valeurs : transmettre savoirs, normes et valeurs</Text>
    </View>
    <View style={styles.subBulletPoint}>
      <Text style={styles.bulletSub}>•</Text>
      <Text style={styles.bulletText}>Individu et sa nature : développement personnel, autonomie, esprit critique</Text>
    </View>
    <View style={styles.subBulletPoint}>
      <Text style={styles.bulletSub}>•</Text>
      <Text style={styles.bulletText}>Société et son ordre : préparer à vivre dans une communauté, respecter règles communes</Text>
    </View>
  </Text>
</View>
<Text style={styles.quote}>
  « Dans tous les cas, on apprend à devenir homme » – Reboul
</Text>

{/* --- SECTION 4 --- */}
<Text style={styles.sectionTitle}>4. Cas concret : l’engagement</Text>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🌍</Text>
  <Text style={styles.bulletText}>
    Exemple concret : comment l’éducation peut encourager l’engagement citoyen
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🎯</Text>
  <Text style={styles.bulletText}>
    Objectif : former à la participation à la vie collective, à la responsabilité, à l’action pour le bien commun
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>📚</Text>
  <Text style={styles.bulletText}>
    Références contemporaines : éducation à l’écocitoyenneté, à la morale, au développement durable
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>⚠️</Text>
  <Text style={styles.bulletText}>
    Risque : endoctrinement → l’école doit apprendre aux élèves à réfléchir par eux-mêmes
  </Text>
</View>

{/* --- SECTION 5 --- */}
<Text style={styles.sectionTitle}>5. Synthèse</Text>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>✅</Text>
  <Text style={styles.bulletText}>
    Pas d’opposition stricte : instruire et éduquer sont complémentaires
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>📖</Text>
  <Text style={styles.bulletText}>
    Histoire et philosophie : l’instruction publique vise l’émancipation, l’autonomie et la citoyenneté
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>❓</Text>
  <Text style={styles.bulletText}>
    Question ouverte : quelles valeurs transmettre, comment et à qui ?
  </Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🏫</Text>
  <Text style={styles.bulletText}>
    Résumé final : l’école ne se limite pas à transmettre des savoirs, elle forme aussi des citoyens capables de penser, critiquer et agir
  </Text>
</View>



      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('PhiloEducation2')}>
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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#33691E',
    marginTop: 20,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 28,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 12,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    marginRight: 8,
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 17,
    lineHeight: 26,
    color: '#333',
  },
  subBulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 28,
    marginBottom: 6,
  },
  bulletSub: {
    fontSize: 16,
    marginRight: 6,
    marginTop: 1,
  },
  quoteBox: {
    backgroundColor: '#FFF8E1',
    borderLeftWidth: 5,
    borderLeftColor: '#FFD54F',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginVertical: 12,
  },
  quote: {
    fontStyle: 'italic',
    color: '#5D4037',
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
    color: '#1565C0',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

