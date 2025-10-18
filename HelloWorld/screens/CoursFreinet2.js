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
      <Text style={styles.subTitle}>“Une école Freinet au XXIᵉ siècle”</Text>

      {/* --- INTRODUCTION --- */}
      <Text style={styles.sectionTitle}>🧩 Introduction : pourquoi parler encore de Freinet ?</Text>
      <Text style={styles.paragraph}>
        Le cours s’ouvre sur une question centrale :
      </Text>
      <Text style={styles.paragraph}>
        👉 Que signifie « une école Freinet » aujourd’hui ? Est-ce une survivance du passé,
        ou une pédagogie encore capable d’inspirer l’école du XXIᵉ siècle ?
      </Text>
      <Text style={styles.paragraph}>
        Pour répondre, le document s’appuie sur une étude de cas concrète : l’école Freinet
        de Mons-en-Barœul, dans le Nord de la France. Cette école publique fonctionne selon
        les principes freinetiens, et permet d’observer comment ces idées se traduisent
        aujourd’hui dans la pratique quotidienne.
      </Text>
      <Text style={styles.paragraph}>
        Le but n’est pas seulement de décrire une méthode, mais de comprendre comment une
        école peut être un espace démocratique, un lieu d’apprentissage actif et de
        coopération réelle.
      </Text>

      {/* --- PARTIE 1 --- */}
      <Text style={styles.chapterTitle}>1️⃣ L’école comme institution</Text>
      <Text style={styles.subSectionTitle}>1.1 Freinet et la notion d’institution</Text>

      <Text style={styles.paragraph}>
        Freinet ne voyait pas l’école comme un simple bâtiment où l’on transmet des savoirs,
        mais comme une véritable institution sociale. Cela signifie qu’elle doit être
        pensée, organisée et régulée comme une petite société démocratique.
      </Text>

      <Text style={styles.quote}>
        💡 Exemple : dans une classe Freinet, les élèves peuvent décider collectivement des
        règles de vie, des projets à mener, ou des sanctions à appliquer — toujours avec
        l’aide et la médiation du maître.
      </Text>

      <Text style={styles.paragraph}>
        Ce processus d’institutionnalisation existe à plusieurs niveaux : l’Éducation
        nationale (cadre global), l’école (chaque établissement a sa culture et ses règles)
        et les classes (le niveau le plus concret, où se vit la démocratie scolaire).
      </Text>

      <Text style={styles.subSectionTitle}>1.2 L’école centrée sur les apprentissages</Text>
      <Text style={styles.paragraph}>
        Cette démocratie scolaire n’est pas une fin en soi : elle est au service des
        apprentissages. Freinet refusait de séparer l’éducation morale, sociale et
        intellectuelle.
      </Text>

      <Text style={styles.paragraph}>
        👉 L’école Freinet est organisée pour que toute activité ait un sens éducatif :
        discussions au conseil de classe, projets collectifs, productions concrètes
        (texte, journal, exposé, expérience scientifique…).
      </Text>

      <Text style={styles.subSectionTitle}>1.3 L’idéal démocratique vécu au quotidien</Text>
      <Text style={styles.paragraph}>
        Freinet ne voulait pas seulement « enseigner la démocratie », mais la faire vivre :
        conseils de classe, responsabilités tournantes, règles communes et ouverture vers
        l’extérieur.
      </Text>

      {/* --- PARTIE 2 --- */}
      <Text style={styles.chapterTitle}>2️⃣ Les élèves et les apprentissages</Text>
      <Text style={styles.subSectionTitle}>2.1 Tout élève peut apprendre</Text>

      <Text style={styles.paragraph}>
        Freinet part d’une conviction forte : « Il n’y a pas d’enfants inéducables, il n’y a
        que de mauvais dispositifs d’apprentissage. »
      </Text>

      <Text style={styles.paragraph}>
        L’échec n’est pas une faute, mais un indicateur pour l’enseignant : adapter le
        cadre, diversifier les situations, trouver le bon rythme ou outil.
      </Text>

      <Text style={styles.subSectionTitle}>2.2 L’enfant comme sujet apprenant</Text>
      <Text style={styles.paragraph}>
        Dans une école Freinet, l’enfant est acteur : il découvre, questionne, expérimente.
        L’enseignant devient un guide, un créateur de situations d’apprentissage.
      </Text>

      <Text style={styles.subSectionTitle}>2.3 Les modes d’apprentissage selon Freinet</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryItem}>📘 Apprendre en questionnant</Text>
        <Text style={styles.summaryItem}>🧠 Apprendre en faisant</Text>
        <Text style={styles.summaryItem}>💬 Apprendre en se distanciant</Text>
        <Text style={styles.summaryItem}>🔁 Apprendre en variant les rôles</Text>
        <Text style={styles.summaryItem}>🎨 Apprendre en expérimentant</Text>
        <Text style={styles.summaryItem}>🤝 Apprendre dans la sécurité</Text>
        <Text style={styles.summaryItem}>📖 Apprendre dans une histoire</Text>
      </View>

      {/* --- PARTIE 3 --- */}
      <Text style={styles.chapterTitle}>3️⃣ Le rôle du maître</Text>
      <Text style={styles.paragraph}>
        L’enseignant n’est pas un chef, mais un guide. Il garantit le cadre, soutient sans
        imposer, encadre la liberté. Freinet disait : « L’enseignant doit être à la fois
        ferme et fraternel. »
      </Text>

      {/* --- PARTIE 4 --- */}
      <Text style={styles.chapterTitle}>4️⃣ L’évaluation et la question de la violence</Text>
      <Text style={styles.subSectionTitle}>4.1 Transformer les rapports à la violence</Text>
      <Text style={styles.paragraph}>
        Dans l’école Freinet de Mons-en-Barœul, la parole remplace la punition. Le conseil
        régule les conflits, renforce la justice et la sécurité. La violence perd son
        prestige.
      </Text>

      <Text style={styles.subSectionTitle}>4.2 Le passage en 6ᵉ : un défi</Text>
      <Text style={styles.paragraph}>
        Le passage vers le collège peut être difficile, mais les anciens élèves Freinet
        font preuve d’autonomie, de confiance et de capacité réflexive.
      </Text>

      <Text style={styles.subSectionTitle}>4.3 Les mathématiques en pédagogie Freinet</Text>
      <Text style={styles.paragraph}>
        Les mathématiques sont abordées à travers des projets concrets et discussions
        collectives : une approche logique et vivante.
      </Text>

      {/* --- CONCLUSION --- */}
      <Text style={styles.conclusionTitle}>🧭 Conclusion : une pédagogie vivante</Text>
      <Text style={styles.paragraph}>
        L’école Freinet du XXIᵉ siècle est une pédagogie coopérative, réflexive et ouverte
        sur le monde. Elle reste un modèle démocratique, émancipateur et rigoureux où
        l’enfant apprend à penser et à vivre ensemble.
      </Text>

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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#388E3C',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#33691E',
    marginVertical: 10,
  },
  chapterTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B5E20',
    marginTop: 25,
    marginBottom: 5,
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
    lineHeight: 26,
    color: '#333',
    marginBottom: 10,
    textAlign: 'justify',
  },
  quote: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#4E342E',
    marginVertical: 8,
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
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
