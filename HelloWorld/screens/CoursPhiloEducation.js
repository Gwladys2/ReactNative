import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>🧠 Philosophie de l’éducation</Text>

      {/* --- SECTION 1 --- */}
      <Text style={styles.sectionTitle}>1. Qu’est-ce que la philosophie de l’éducation ?</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>💡</Text>
        <Text style={styles.bulletText}>Philosophie = amour de la sagesse (Sophia), née de l’étonnement (thaumazein).</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>💡</Text>
        <Text style={styles.bulletText}>Ce n’est pas un ensemble de savoirs figés, mais une activité de réflexion et de mise en question.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>💡</Text>
        <Text style={styles.bulletText}>Kerlan (2003) : activité de construction théorique et démarche de vie et de pensée.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>💡</Text>
        <Text style={styles.bulletText}>Hadji (1989) : interroge la légitimité des pratiques et des valeurs.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>💡</Text>
        <Text style={styles.bulletText}>Pour Kant et Reboul, on n’apprend pas la philosophie, on apprend à philosopher.</Text>
      </View>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>« Dès qu’un éducateur réfléchit sur le sens de son entreprise, il philosophe. » — Reboul (2011, p.5)</Text>
      </View>

      {/* --- SECTION 2 --- */}
      <Text style={styles.sectionTitle}>2. Pourquoi faire encore de la philosophie en sciences de l’éducation ?</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>🎯</Text>
        <Text style={styles.bulletText}>Interroge ce que les sciences (psychologie, neurosciences, didactique…) ne questionnent pas :</Text>
      </View>
      <View style={styles.subBulletPoint}>
        <Text style={styles.bulletSub}>•</Text>
        <Text style={styles.bulletText}>La légitimité des pratiques éducatives</Text>
      </View>
      <View style={styles.subBulletPoint}>
        <Text style={styles.bulletSub}>•</Text>
        <Text style={styles.bulletText}>Les valeurs qui les sous-tendent</Text>
      </View>
      <View style={styles.subBulletPoint}>
        <Text style={styles.bulletSub}>•</Text>
        <Text style={styles.bulletText}>Les finalités de l’éducation (Pourquoi éduquer ? Pour quoi ?)</Text>
      </View>

      <Text style={styles.paragraph}>Les 4 grandes questions selon Michel Fabre :</Text>
      <View style={styles.subBulletPoint}>
        <Text style={styles.bulletSub}>1.</Text>
        <Text style={styles.bulletText}>Que prétendons-nous faire quand nous évaluons ? (Hadji, 1989)</Text>
      </View>
      <View style={styles.subBulletPoint}>
        <Text style={styles.bulletSub}>2.</Text>
        <Text style={styles.bulletText}>Que voulons-nous dire quand nous formons ? (Fabre, 1994)</Text>
      </View>
      <View style={styles.subBulletPoint}>
        <Text style={styles.bulletSub}>3.</Text>
        <Text style={styles.bulletText}>Qu’est-ce qui mérite d’être enseigné ? (Reboul, 1989)</Text>
      </View>
      <View style={styles.subBulletPoint}>
        <Text style={styles.bulletSub}>4.</Text>
        <Text style={styles.bulletText}>Sur quoi fondons-nous notre autorité d’éducateur ? (Houssaye, 1996)</Text>
      </View>

      {/* --- SECTION 3 --- */}
      <Text style={styles.sectionTitle}>3. Les caractéristiques du questionnement philosophique</Text>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>🔹</Text>
        <Text style={styles.bulletText}>Total : Peut porter sur tout (Dieu, art, éducation, science…). L’éducation est un fait humain universel.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>🔹</Text>
        <Text style={styles.bulletText}>Radical : Cherche les fondements : pas « comment éduquer ? » mais « pourquoi et pour quoi éduquer ? ».</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>🔹</Text>
        <Text style={styles.bulletText}>Existentiel : Engage la vie humaine, le sens de l’existence, la liberté, la mort, la transmission.</Text>
      </View>
      <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>🔹</Text>
        <Text style={styles.bulletText}>Rationnel : Repose sur la raison et la logique, sans recours à la foi ou au dogme.</Text>
      </View>

      {/* --- SECTION 4 --- */}
<Text style={styles.sectionTitle}>4. Les méthodes de la philosophie de l’éducation</Text>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>📚</Text>
  <Text style={styles.bulletText}>Méthode historique → Étudier les philosophes pour comprendre comment nos problèmes ont déjà été posés et résolus.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🔍</Text>
  <Text style={styles.bulletText}>Méthode critique / épistémologique → Interroger les valeurs, les limites et la scientificité des sciences de l’éducation.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🧠</Text>
  <Text style={styles.bulletText}>Analyse logique → Examiner le langage, dissoudre les fausses questions, clarifier les concepts.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>⚖️</Text>
  <Text style={styles.bulletText}>Méthode a contrario → Définir un concept par son contraire (ex. comprendre la justice à partir de l’injustice).</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🔄</Text>
  <Text style={styles.bulletText}>Dialectique → Mettre en tension des idées opposées pour construire une synthèse.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>👁️</Text>
  <Text style={styles.bulletText}>Phénoménologie (Kerlan) → Décrire le vécu et l’expérience éducative elle-même, dans sa réalité concrète.</Text>
</View>
<Text style={styles.paragraph}>
  Ces méthodes forment une « boîte à outils » philosophique (Wittgenstein) : le choix de l’outil dépend du problème posé.
</Text>

{/* --- SECTION 5 --- */}
<Text style={styles.sectionTitle}>5. Les fonctions de la philosophie de l’éducation</Text>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>✨</Text>
  <Text style={styles.bulletText}>Élucidatrice → Interroger les traditions et les idées pour comprendre les problèmes éducatifs actuels. Exemple : Que signifie vraiment « éduquer » ?</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>📊</Text>
  <Text style={styles.bulletText}>Épistémologique → Examiner les méthodes et résultats des sciences de l’éducation. Exemple : Quelle scientificité pour la pédagogie ?</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>⚖️</Text>
  <Text style={styles.bulletText}>Axiologique → Questionner les valeurs et finalités de l’éducation. Exemple : Quelle éthique de l’éducateur ? Quelle justice à l’école ?</Text>
</View>
<Text style={styles.paragraph}>➡️ Ces fonctions permettent de penser l’éducation dans toute sa complexité.</Text>

{/* --- SECTION 6 --- */}
<Text style={styles.sectionTitle}>6. Philosopher dans l’éducation : une pratique vivante</Text>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>💭</Text>
  <Text style={styles.bulletText}>Philosopher en éducation, c’est penser l’acte d’éduquer : buts, limites, valeurs.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>📝</Text>
  <Text style={styles.bulletText}>Formuler une problématique → construire une question, identifier une tension, chercher un sens.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🌱</Text>
  <Text style={styles.bulletText}>Exemple : Avons-nous des devoirs seulement envers les humains ou aussi envers la nature ?</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🔗</Text>
  <Text style={styles.bulletText}>Philosopher = lier théorie et expérience, raison et vécu.</Text>
</View>

{/* --- SECTION 7 --- */}
<Text style={styles.sectionTitle}>7. Synthèse générale</Text>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>✅</Text>
  <Text style={styles.bulletText}>La philosophie de l’éducation est une pensée critique et interrogative, pas une doctrine.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>✅</Text>
  <Text style={styles.bulletText}>Cherche à comprendre les finalités de l’éducation.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>✅</Text>
  <Text style={styles.bulletText}>Articule tradition philosophique (Platon, Kant, Dewey…) et problématiques contemporaines.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>✅</Text>
  <Text style={styles.bulletText}>S’appuie sur disciplines variées : psychologie, pédagogie, sociologie, politique, didactique, anthropologie.</Text>
</View>
<View style={styles.bulletPoint}>
  <Text style={styles.bullet}>🎯</Text>
  <Text style={styles.bulletText}>Finalité : Aider à penser l’éducation plutôt qu’à appliquer simplement des méthodes.</Text>
</View>


      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('PhiloEducation')}>
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

