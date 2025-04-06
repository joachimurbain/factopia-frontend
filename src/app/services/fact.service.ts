import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactService {
  private facts: string[] = [
    "Les titres en majuscules ou très sensationnalistes sont souvent des pièges à clics.",
    "Une info sans source fiable ? Méfiance : pas de source, pas de preuve.",
    "Les fake news sont parfois des vieilles infos recyclées : vérifie la date !",
    "Une image choquante ? Elle peut avoir été sortie de son contexte.",
    "Partager avant de vérifier, c’est risquer de propager une fausse info.",
    "Les fake news exploitent nos émotions : si ça te choque ou t’indigne, prends du recul.",
    "Les vraies infos citent leurs sources (et pas juste “selon certaines personnes…”).",
    "L’URL d’un site douteux est souvent un indice : méfie-toi des copies de sites officiels.",
    "Une personne connue qui partage une info ≠ vérité garantie. Même les experts peuvent se tromper.",
    "Les deepfakes peuvent imiter des voix et des visages : vérifie toujours sur plusieurs sources.",
    "Tu peux faire une recherche inversée d’image avec Google ou TinEye.",
    "Des sites comme Snopes ou Hoaxbuster vérifient les rumeurs populaires.",
    "Tu peux tester une info sur fact-checking.fr, Les Décodeurs, ou AFP Factuel.",
    "Un site fiable a souvent une page 'À propos' claire et des mentions légales.",
    "Lire un article en entier (pas juste le titre) permet d’éviter les malentendus.",
    "Plusieurs sources indépendantes qui disent la même chose ? C’est bon signe.",
    "Trop beau pour être vrai ? C’est peut-être… faux.",
    "Les fautes d’orthographe ou le langage agressif sont souvent des signaux d’alerte.",
    "Les sites sérieux utilisent le protocole HTTPS (petit cadenas dans l’URL).",
    "En période de crise, les fausses infos se multiplient. Reste vigilant·e.",
    "Pose-toi toujours la question : “Qui a intérêt à ce que je croie ça ?”",
    "Une info qui confirme parfaitement ce que tu penses ? Attention au biais de confirmation.",
    "Les réseaux sociaux ne classent pas les infos par fiabilité, mais par viralité.",
    "Croiser les sources dans plusieurs langues peut aider à voir plus clair.",
    "Les fake news jouent souvent sur le secret ou le complot ('ce que les médias ne vous disent pas…').",
    "Une vraie étude scientifique est publiée dans une revue avec comité de lecture.",
    "Les fake news utilisent parfois de faux experts : vérifie leurs qualifications.",
    "Un média professionnel corrige ses erreurs — c’est un signe de fiabilité.",
    "Un argument d’autorité ('c’est vrai parce que X l’a dit') n’est pas une preuve.",
    "Prendre 5 minutes pour vérifier, c’est 100 fois mieux que regretter un partage.",
    "Les threads sur X/Twitter sont convaincants, mais pas toujours exacts.",
    "Même une vidéo peut mentir : coupe, montage, voix modifiée…",
    "Les filtres IA rendent certaines images quasi impossibles à distinguer du réel.",
    "Les algorithmes nous montrent ce qu’on aime, pas forcément ce qui est vrai.",
    "Les fake news sont souvent recyclées d’une crise à l’autre.",
    "Certains sites mélangent vrai et faux pour mieux manipuler.",
    "Plus une info est partagée vite, plus elle est suspecte.",
    "“Vu sur Facebook” n’est pas une preuve 😅",
    "Une opinion bruyante n’est pas une vérité scientifique.",
    "Une citation sortie de son contexte peut dire l’inverse du message d’origine.",
    "Prends quelques secondes de recul avant de partager.",
    "Les bots et faux comptes amplifient les fake news. Regarde le profil !",
    "Les vraies infos résistent aux questions. Les fake news s’effondrent quand on gratte.",
    "En parler autour de toi est un bon moyen de diffuser l’esprit critique.",
    "Dire “je ne sais pas” est parfois plus sage que d’inventer.",
    "L’objectif de certaines fake news, c’est la division. Ne tombe pas dans le piège.",
    "Une info contradictoire n’est pas toujours fausse : elle peut refléter la complexité du réel.",
    "Une question sincère vaut mieux qu’une croyance aveugle.",
    "Un partage sur les réseaux peut toucher des milliers de personnes.",
    "Cultiver le doute, c’est cultiver l’intelligence."
  ];

  getRandomFact(): string {
    const randomIndex = Math.floor(Math.random() * this.facts.length);
    return this.facts[randomIndex];
  }
} 