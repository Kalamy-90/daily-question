import React from 'react';
    import { Settings, PlayCircle, HelpCircle, ListChecks, BarChart2, Shield, Zap, Award, LogIn, MessageCircle, Users, Edit3, Server, AlertTriangle, DatabaseZap, CalendarClock, FileText, UserCheck, BellRing, RotateCcw } from 'lucide-react';

    export const featuresData = [
      {
        icon: <MessageCircle className="h-10 w-10 text-blue-400" />,
        title: "Mode de Réponse Configurable",
        description: "Choisissez comment les utilisateurs soumettent leurs réponses : via un formulaire modal privé (recommandé pour éviter le spam dans le salon) ou directement par messages publics dans le salon des questions. Cette flexibilité permet d'adapter le bot aux préférences de votre communauté.",
      },
      {
        icon: <CalendarClock className="h-10 w-10 text-purple-400" />,
        title: "Questions Quotidiennes Automatisées",
        description: "Chaque jour, à une heure que vous définissez, le bot publie automatiquement une nouvelle question dans le salon de votre choix. Une base de questions variées (culture générale, histoire, science, etc.) est incluse. Vous pouvez également ajouter vos propres questions personnalisées ! Configurez un rôle à notifier pour que personne ne manque la question du jour.",
      },
      {
        icon: <Award className="h-10 w-10 text-yellow-400" />,
        title: "Annonce des Résultats et Récompenses",
        description: "À l'heure des résultats (également configurable), le bot annonce la bonne réponse et les gagnants. Définissez des récompenses personnalisées pour les 3 premiers : rôles Discord temporaires ou messages personnalisés. Les rôles peuvent être automatiquement retirés à la prochaine question. Par défaut, les points sont attribués : 5 pour le 1er, 3 pour le 2ème, et 1 pour le 3ème.",
      },
      {
        icon: <BarChart2 className="h-10 w-10 text-green-400" />,
        title: "Système de Classement Compétitif",
        description: "Suivez les scores des participants grâce à la commande /classement. Le classement affiche les meilleurs joueurs et la position de l'utilisateur qui lance la commande. Vous pouvez choisir d'activer ou de désactiver le système de points et de classement.",
      },
      {
        icon: <Settings className="h-10 w-10 text-blue-400" />,
        title: "Configuration Personnalisable par Serveur",
        description: "Commande /config : Une interface intuitive avec des menus déroulants et des modales pour ajuster tous les aspects du bot : Salon des questions, Heure de la question et des résultats, Rôle à mentionner (ping), Rôles administrateurs du bot, Récompenses (rôles Discord ou messages), Mode de réponse (formulaire privé ou messages publics), Suppression automatique des rôles de récompense, Fuseau horaire du serveur, Activation/Désactivation du classement, Salon de logs.",
      },
      {
        icon: <Edit3 className="h-10 w-10 text-indigo-400" />,
        title: "Gestion Avancée des Questions Personnalisées",
        description: "Commande /questions_perso : Ajoutez vos propres questions et réponses. Modifiez ou supprimez des questions existantes. Choisissez l'ordre d'apparition : séquentiel ou aléatoire. Une fois toutes les questions personnalisées posées (si en mode aléatoire), le bot repasse aux questions globales, puis réinitialise le cycle des questions perso.",
      },
      {
        icon: <UserCheck className="h-10 w-10 text-red-400" />,
        title: "Modération Intégrée pour le Jeu",
        description: "Bannissement du jeu : Les administrateurs peuvent bannir des utilisateurs (temporairement avec durée en jours ou définitivement) de participer aux questions. Invalidation de réponse : Un administrateur peut réagir avec ⚠️ pour annuler une réponse. Visualisez les utilisateurs bannis avec /listban.",
      },
      {
        icon: <FileText className="h-10 w-10 text-teal-400" />,
        title: "Journalisation (Logs) des Actions",
        description: "Configurez un salon de logs pour suivre les modifications de configuration importantes (changement d'heure, de salon, de rôles, etc.) et les actions de modération (ban/unban). Gardez une trace de qui a fait quoi et quand.",
      },
      {
        icon: <DatabaseZap className="h-10 w-10 text-orange-400" />,
        title: "Fiabilité et Sauvegarde",
        description: "Les configurations de tous les serveurs sont sauvegardées régulièrement dans un fichier server_configs.json et lors d'un arrêt propre du bot. Le bot tente de notifier les administrateurs en cas de problème (ex: salon de log introuvable).",
      },
      {
        icon: <RotateCcw className="h-10 w-10 text-purple-400" />,
        title: "Réinitialisation du Classement",
        description: "Nouvelle commande /reset_classement permettant aux administrateurs de remettre à zéro tous les points du classement. Une confirmation est demandée avant l'exécution pour éviter les erreurs. Idéal pour recommencer une nouvelle saison ou corriger des problèmes.",
      }
    ];

    export const commandsData = [
      { name: "/config", description: "Configuration complète (Admin).", icon: <Settings className="mr-2 h-5 w-5 text-blue-500" /> },
      { name: "/test_question [délai]", description: "Tester le système (Admin).", icon: <PlayCircle className="mr-2 h-5 w-5 text-green-500" /> },
      { name: "/help", description: "Aide et liste des commandes.", icon: <HelpCircle className="mr-2 h-5 w-5 text-yellow-500" /> },
      { name: "/questions_perso", description: "Gérer vos questions (Admin).", icon: <Edit3 className="mr-2 h-5 w-5 text-indigo-500" /> },
      { name: "/classement", description: "Afficher le classement.", icon: <BarChart2 className="mr-2 h-5 w-5 text-purple-500" /> },
      { name: "/reset_classement", description: "Réinitialiser le classement (Admin).", icon: <RotateCcw className="mr-2 h-5 w-5 text-orange-500" /> },
      { name: "/ban, /unban, /listban", description: "Modération des joueurs (Admin).", icon: <UserCheck className="mr-2 h-5 w-5 text-red-500" /> },
    ];

    export const howToStartStepsData = [
      { text: "Invitez Daily Question sur votre serveur.", icon: <LogIn className="mr-3 h-6 w-6 text-green-500" /> },
      { text: "Configurez via /config (salon des questions, heures, etc.).", icon: <Settings className="mr-3 h-6 w-6 text-blue-500" /> },
      { text: "Profitez ! Le bot s'occupe du reste.", icon: <Zap className="mr-3 h-6 w-6 text-yellow-500" /> },
    ];
    
    export const faqData = [
      {
        id: "faq1",
        question: "Gratuit ?",
        answer: "Oui ! Daily Question est entièrement gratuit."
      },
      {
        id: "faq2",
        question: "Permissions requises ?",
        answer: "Le bot a besoin des permissions d'administrateur par défaut pour une configuration simplifiée, mais les permissions minimales obligatoires sont : Voir les salons, Gérer les webhooks, Envoyer des messages, Envoyer des messages dans les fils, Intégrer des liens, Joindre des fichiers, Mentionner @everyone, @here et tous les rôles, Gérer les messages, Gérer les rôles, Voir les anciens messages."
      },
      {
        id: "faq3",
        question: "Besoin d'aide ?",
        answer: "Rejoignez notre serveur de support ! Le lien est disponible en haut et en bas de la page."
      }
    ];

    export const sectionAnimation = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    };
    
    export const itemAnimation = {
      hidden: { opacity: 0, y: 20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
        },
      }),
    };