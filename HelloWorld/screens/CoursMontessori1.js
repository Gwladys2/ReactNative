import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';

export default function LessonScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      {/* --- TITRE PRINCIPAL --- */}
      <Text style={styles.mainTitle}>🌼 Maria Montessori</Text>
      <Text style={styles.subTitle}>« Aide-moi à faire tout seul »</Text>

      {/* --- BIOGRAPHIE --- */}
      <Text style={styles.chapterTitle}>🔹 1. Éléments biographiques</Text>
      <Text style={styles.paragraph}>
        Maria Montessori (1870-1952), née en Italie, à une époque où l’éducation féminine est rare,
        devient la première femme médecin d’Italie. Elle se passionne pour la neurologie,
        la psychiatrie, la psychologie et l’anthropologie.
      </Text>
      <Text style={styles.paragraph}>
        En travaillant avec des enfants dits « déficients », elle comprend que leurs difficultés
        viennent souvent de l’environnement éducatif. Elle crée alors du matériel pédagogique inspiré
        d’Itard et de Séguin, qui démontre des progrès spectaculaires.
      </Text>

      <Text style={styles.subSectionTitle}>🏫 La Casa dei Bambini (1907)</Text>
      <Text style={styles.paragraph}>
        Premier centre pour enfants de 3 à 6 ans à Rome, dans un quartier ouvrier. Montessori y met
        en place son matériel et adapte le mobilier à la taille des enfants. Les résultats sont
        impressionnants : autonomie, calme, concentration, apprentissage rapide de la lecture et de
        l’écriture.
      </Text>
      <Text style={styles.paragraph}>
        Ce succès se diffuse dans le monde entier : Europe, États-Unis, Chine, Japon, Russie. Soutenue
        par des penseurs comme Piaget, Freud ou Gandhi, elle fonde en 1929 l’Association Montessori
        Internationale (AMI). Opposée au régime de Mussolini, elle s’exile et défend une vision de
        l’éducation comme « arme pour la paix ».
      </Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>
          🌍 Aujourd’hui, plus de 20 000 écoles Montessori existent dans le monde, dont de nombreuses
          écoles privées hors contrat en France.
        </Text>
      </View>

      {/* --- PRINCIPES --- */}
      <Text style={styles.chapterTitle}>🔹 2. Principes éducatifs</Text>

      <Text style={styles.subSectionTitle}>a) Vision de l’enfant</Text>
      <Text style={styles.paragraph}>
        « L’enfant porte en soi la clé de son existence individuelle. »  
        Chaque enfant possède un plan de développement naturel et spontané. L’adulte, s’il intervient
        trop, risque de freiner cette évolution. Montessori parle d’un « esprit absorbant » :
        l’enfant apprend par observation, exploration et imitation.
      </Text>

      <Text style={styles.subSectionTitle}>b) Fondement spirituel</Text>
      <Text style={styles.paragraph}>
        Montessori accorde une dimension spirituelle à sa pédagogie : Dieu aurait donné à l’enfant des
        lois naturelles de développement. L’éducateur doit les respecter et les accompagner sans les
        contraindre. L’éducation révèle l’ordre divin de la nature.
      </Text>

      <Text style={styles.subSectionTitle}>c) Concentration et attention</Text>
      <Text style={styles.paragraph}>
        L’enfant se concentre profondément lorsqu’il choisit librement une activité motivante.  
        Interrompre ou forcer un enfant nuit à son développement intérieur. Le respect de ce rythme
        favorise la stabilité émotionnelle et la confiance en soi.
      </Text>

      <Text style={styles.subSectionTitle}>d) Autonomie</Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quote}>« Aide-moi à faire tout seul. »</Text>
      </View>
      <Text style={styles.paragraph}>
        L’environnement Montessori est conçu pour favoriser l’indépendance : mobilier adapté, matériel
        accessible, autonomie dans les gestes quotidiens. L’adulte guide sans imposer. L’enfant agit,
        expérimente et apprend de lui-même.
      </Text>

      <Text style={styles.subSectionTitle}>e) Pédagogie scientifique</Text>
      <Text style={styles.paragraph}>
        La pédagogie Montessori est issue de l’observation et de l’expérimentation.  
        Elle repose sur une méthode scientifique où la pratique nourrit la théorie, avec une attention
        particulière portée aux stades de développement.
      </Text>

      <Text style={styles.subSectionTitle}>f) Posture de l’adulte</Text>
      <Text style={styles.paragraph}>
        L’adulte est humble et discret. Il observe avant d’intervenir, agit avec bienveillance et
        confiance. L’éducateur devient un guide, non une autorité imposée.
      </Text>

      {/* --- DÉMARCHE PÉDAGOGIQUE --- */}
      <Text style={styles.chapterTitle}>🔹 3. Démarche pédagogique</Text>

      <Text style={styles.subSectionTitle}>a) Bienveillance</Text>
      <Text style={styles.paragraph}>
        L’éducateur Montessori ne punit pas : il encourage.  
        Les erreurs deviennent des occasions d’apprentissage, et la confiance remplace la peur.  
        L’enfant apprend à se corriger lui-même.
      </Text>

      <Text style={styles.subSectionTitle}>b) Environnement préparé</Text>
      <Text style={styles.paragraph}>
        Chaque espace est conçu pour être simple, ordonné et beau.  
        Ce cadre sécurisant favorise la concentration, la paix et la coopération entre enfants.
      </Text>

      <Text style={styles.subSectionTitle}>c) Matériel pédagogique spécifique</Text>
      <Text style={styles.paragraph}>
        Chaque matériel a un objectif unique (taille, couleur, son, forme...).  
        Il est sensoriel, auto-correctif et limité en nombre pour stimuler la patience et la
        coopération.  
        L’enfant passe du concret à l’abstrait, du simple au complexe.
      </Text>

      {/* --- CONCLUSION --- */}
      <Text style={styles.conclusionTitle}>🔹 Conclusion : l’héritage Montessori</Text>
      <View style={styles.summaryBox}>
        <Text style={styles.summaryItem}>🌱 L’enfant au centre de l’apprentissage</Text>
        <Text style={styles.summaryItem}>💬 Une liberté encadrée et bienveillante</Text>
        <Text style={styles.summaryItem}>🤝 Une responsabilisation progressive</Text>
        <Text style={styles.summaryItem}>✨ Une confiance en la nature de l’enfant</Text>
      </View>
      <Text style={styles.paragraph}>
        Maria Montessori a bouleversé l’éducation en plaçant l’enfant au cœur de son apprentissage.
        Sa méthode, fondée sur la liberté et la confiance, continue d’influencer les écoles
        alternatives et les approches modernes de la psychologie du développement.
      </Text>

      {/* --- LIEN QCM --- */}
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue3')}>
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
    backgroundColor: '#FFFDF7', // fond crème doux
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

