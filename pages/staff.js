import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter, withRouter } from 'next/router';
import Layout from '../components/Layout';
import Services from '../components/Services'

const allstaff = [
    {
    id: "1",    
    staffName: "Jennifer Chiasson",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "She started working at Bimbo Daycare in December 2020. She is an educator with our afterschool program. ‘One of the best parts of being an educator is watching them grow, building a strong connection with them and getting to know each child personally.’ Outside of work, Jennifer loves listening to music and is a huge fan of Star Wars.",
    staffBiofr: "Elle a commencé à travailler à la Garderie Bimbo en décembre 2020. Elle est éducatrice avec la halte scolaire. ‘Une des meilleures parties d’être éducatrice est de les observer grandir, bâtir une forte connexion avec eux et apprendre à connaître chaque enfant personnellement.’ À l’extérieur du travail, Jennifer aime écouter de la musique et est une vraie mordue de Star Wars.",
    },
    {
    id: "2",    
    staffName: "Sarah Martin",
    staffImg: "/assets/img/about/staff-placeholder-3.png",
    staffBio: "She joined the team at Bimbo Daycare in September of 2020. She works as an educational assistant in the 4-year-old class as well as with the afterschool program. Sarah believes one of the greatest benefits of being an educator is watching the kids learn new things that will help them later in life. ‘Outside of daycare, I enjoy swimming and writing. It helps me relax after a busy day at work.’  ",
    staffBiofr: "Elle a joint l’équipe de la Garderie Bimbo en septembre 2020. Elle travaille en tant qu’aide éducatrice dans la classe des 4 ans ainsi qu’à la halte scolaire. Sarah croît qu’un des plus grands avantages d’être une éducatrice est de voir les enfants apprendre de nouvelles choses qui leur seront utiles plus tard dans la vie. ‘À l’extérieur de la garderie, j’aime la natation et l’écriture. Cela m’aide à me détendre après une journée occupée au travail.’",
    },
    {
    id: "3",    
    staffName: "Natacha Hussey",
    staffImg: "/assets/img/about/staff-placeholder-5.png",
    staffBio: "She has been part of the Bimbo Daycare team for over 5 years now. She is currently one of our preschool educators. Natacha has her diploma in Early childhood education. ‘One of the pleasures of being an early childhood educator is seeing the reactions on children’s faces when they accomplish something new on their own.’ When not at work, Natacha can be found being a busy mom of two or can be found snowboarding.",
    staffBiofr: "Elle fait partie de l’équipe de la Garderie Bimbo depuis plus de 5 ans. Elle est présentement éducatrice en prématernelle. Natacha a son diplôme en Éducation de la petite enfance. ‘Un des plaisirs d’être éducatrice est de voir les réactions des enfants lorsqu’ils réussissent à accomplir quelque chose de nouveau par eux-mêmes.’ Lorsqu’elle n’est pas au travail, Natacha est une maman occupée de deux enfants ou elle peut être aperçue à faire de la planche à neige.",
    },
    {
    id: "4",    
    staffName: "Kathy Robertson",
    staffImg: "/assets/img/about/staff-placeholder-6.png",
    staffBio: "She is an educator in our transition group for the past 3 years. A few of the things Kathy loves most about being an educator is watching the children learn new things and helping them explore the world around them. ‘Children are our future and I love being one of the people that is lucky enough to help them grow and learn.’ One of her passions outside of daycare is spending time adventuring with her beautiful family. Kathy lives a simple but beautiful life.",
    staffBiofr: "Elle est éducatrice avec le groupe de transition depuis les 3 dernières années. De son travail en tant qu’éducatrice, elle aime voir les enfants apprendre de nouvelles choses et les aider à explorer le monde autour d’eux. ‘Les enfants sont notre avenir et j’adore faire partie des personnes ayant la chance de les aider à grandir et apprendre.’ Une de ses passions en dehors de la garderie est de passer du temps à s’aventurer avec sa belle famille. Kathy vit une vie simple mais merveilleuse. ",
    },
    {
    id: "5",    
    staffName: "Nicole Haché",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "She has been working at Bimbo Daycare for over 17 years! She is an educator with children aged 0 to 23 months. She loves seeing how children learn quickly and discover every little thing. She loves listening to them laugh and seeing them accomplish new tasks (learning colors, painting, etc). Nicole has a passion for scrapbooking and loves walks along the water.",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis plus de 17 ans! Elle est éducatrice avec les enfants âgés de 0 à 23 mois. Elle aime voir comment les enfants apprennent rapidement et découvrent chaque petite chose. Elle aime les écouter rire et les voir accomplir de nouveaux défis (apprendre les couleurs, faire de la peinture, etc). Nicole a une passion pour le scrapbooking et aime les marches sur le bord de l’eau.",
    },
    {
    id: "6",    
    staffName: "Kassandra Landry",
    staffImg: "/assets/img/about/staff-placeholder-3.png",
    staffBio: "She has been an educator at Bimbo Daycare since January 2020. She is with children aged 15 to 23 months. She loves contributing to helping children in their development and growth. When Kassandra is not at work, she loves going for walks in nature and spending time with her pets.",
    staffBiofr: "Elle est éducatrice à la Garderie Bimbo depuis janvier 2020. Elle est avec les enfants âgés de 15 à 23 mois. Elle aime contribuer à aider les enfants dans leur développement et à bien grandir. Quand Kassandra n’est pas au travail, elle aime aller prendre des marches dans la nature et passer du temps avec ses animaux.",
    },
    {
    id: "7",    
    staffName: "Kim Charest Lagacé",
    staffImg: "/assets/img/about/staff-placeholder-5.png",
    staffBio: "She has been working at Bimbo Daycare for over 11 years. She is an educator with children aged 2 years old. In her role as educator, she loves being able to help children in their development as well as participating in their learning. ‘I love seeing their little smiles in the morning when they arrive at daycare and consoling them when they are upset about leaving mom and dad.’ When Kim is not at work, she loves walks, nature and hockey.",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis plus de 11 ans. Elle est éducatrice avec les enfants de 2 ans. Dans son rôle d’éducatrice, elle aime pouvoir aider les enfants à se développer ainsi que de participer à leur apprentissage. ‘J’aime voir leur petit sourire le matin quand ils arrivent à la garderie et les consoler quand ils ont de la peine de devoir quitter maman et papa.’ Quand Kim n’est pas au travail, elle aime les marches, le plein air et le hockey. ",
    },
    {
    id: "8",    
    staffName: "Noémy Frenette",
    staffImg: "/assets/img/about/staff-placeholder-6.png",
    staffBio: "She has been working at Bimbo Daycare since October 2020 with children aged 0 to 23 months. ‘As an educator, what I prefer the most are all the beautiful moments spent with the children, contributing to their learning and seeing them evolve over the months. I find it beautiful to witness. Outside of work, I love photography and crafts.’",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis octobre 2020 avec les enfants âgés de 0 à 23 mois. ‘En tant qu’éducatrice, ce que je préfère sont tous les beaux moments passés avec les enfants, de contribuer à leur apprentissage et de les voir évoluer au fil des mois. Je trouve que c’est beau à voir. En dehors du travail, j’adore la photographie et le bricolage.’",
    },
    {
    id: "9",    
    staffName: "Marie-Pier Labbé",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "She has been working at Bimbo Daycare since October 2020. She works as an educational assistant in the 3-year-old class. ‘I adore getting to know the children and discovering new ways to help them in their development.’ Outside of work, Marie-Pier loves puzzles and reading.",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis octobre 2020. Elle travaille comme aide éducatrice dans la classe des 3 ans. ‘J’adore apprendre à connaître les enfants et découvrir d’autres moyens de les aider dans leur développement.’ À l’extérieur du travail, Marie-Pier adore faire des casse-têtes et la lecture.",
    },
    {
    id: "10",    
    staffName: "Natalie Boudreau",
    staffImg: "/assets/img/about/staff-placeholder-3.png",
    staffBio: "She has been working at Bimbo Daycare for over 17 years but has 23 years of experience working in daycares. She works as an educator with preschool children who are aged 4 years old. ‘I have always adored children. I love seeing them grow and being able to teach them different things bringing them further in their development. I love when they tell me beautiful stories about themselves.’ When Natalie is not at work, she loves going out to restaurants with her friends.",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis plus de 17 ans mais elle a 23 ans d’expérience en garderie. Elle travaille comme éducatrice avec les enfants de la prématernelle, donc de 4 ans. ‘J’adore les enfants depuis toujours. J’aime les voir grandir et pouvoir leur apprendre différentes choses pour les amener plus loin dans leur apprentissage. J’adore quand ils me racontent des belles histoires à leur sujet.’ Quand Natalie n’est pas au travail, elle aime aller au restaurant avec ses amis. ",
    },
    {
    id: "11",    
    staffName: "Josiane Cormier",
    staffImg: "/assets/img/about/staff-placeholder-5.png",
    staffBio: "She has been working at Bimbo Daycare since 2018. She is an educator in the 4-year-old class and also an educator with the afterschool program. She loves seeing children flourish and becoming more and more independent. ‘Seeing the child’s smile, how he’s proud of himself after learning or doing something new independently for the first time.’ When Josiane is not at work, she likes spending quality time with her family.",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis 2018. Elle est éducatrice dans la classe des 4 ans et aussi éducatrice avec les enfants de la halte scolaire. Elle adore voir les enfants s’épanouir et devenir de plus en plus indépendants. ‘Voir le sourire de l’enfant, combien il est fier de lui d’avoir appris ou fait quelque chose de nouveau par lui-même pour la première fois’. Quand Josiane n’est pas au travail, elle aime passer du temps de qualité avec sa famille. ",
    },
    {
    id: "12",    
    staffName: "Sonia LeClair",
    staffImg: "/assets/img/about/staff-placeholder-6.png",
    staffBio: "She has been working at Bimbo Daycare for 17 years! She is an educator with children aged 3 years old. What she loves the most about being an educator is organizing activities with the children, their smiles, their hugs and their desire for independence. When Sonia is not at work, she loves crocheting, researching, listening to music, meditating and going to the beach.",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis 17ans! Elle est éducatrice avec les enfants âgés de 3 ans. Ce qu’elle aime le plus d’être une éducatrice est d’organiser des activités qu’elle fait avec les enfants, leurs sourires, leurs câlins et leur désir d’indépendance. Quand Sonia n’est pas au travail, elle aime faire du crochet, des recherches, écouter de la musique, faire de la méditation et aller à la plage.",
    },
    {
    id: "13",    
    staffName: "Fanny Galluchon",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "She has been working at Bimbo Daycare since 2018. She works as an educator with children aged 2 years old. ‘As educator, I love the happiness that the children bring me, their imagination, our awesome work team and our excellent director.’ Fanny’s hobbies are spending time outside with her children, puzzles and car rides.",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis 2018. Elle travaille comme éducatrice avec les enfants âgés de 2 ans. ‘En tant qu’éducatrice, j’adore le bonheur que les enfants m’apportent, leur imagination, notre super équipe de travail et notre excellente directrice.’ Les passe-temps de Fanny sont d’être dehors avec ses enfants, les casse-têtes et les balades en auto.",
    },
    {
    id: "14",    
    staffName: "Chantal Doiron",
    staffImg: "/assets/img/about/staff-placeholder-3.png",
    staffBio: "She has been working at Bimbo Daycare since 2010! She works as an educator with children aged 2 years old. ‘I love seeing their little faces in the morning with their smile. I love doing experiments or games where they make big messes like painting and water games.’ When Chantal is not at work, she likes outdoor walks, reading and watching series on Netflix.",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis 2010! Elle travaille comme éducatrice avec les enfants âgés de 2 ans. ‘J’adore voir leur petit visage le matin avec leur sourire. J’adore faire des expériences ou des jeux où ils font des gros dégâts comme la peinture et les jeux d’eau.’ Quand Chantal n’est pas au travail, elle aime les marches extérieures, lire et regarder des séries sur Netflix.",
    },
    {
    id: "15",    
    staffName: "Malvina Chiasson",
    staffImg: "/assets/img/about/staff-placeholder-5.png",
    staffBio: "She has been working at Bimbo Daycare for over 20 years! She works as an educator with children aged 0 to 23 months. ‘What I love about being an educator is going to the daycare every morning to greet the children with a smiling face. The first years of their lives are very important to their development. That is why I love letting them explore, socialize, have fun while playing. I hope that each child feels safe and happy at the daycare. My passions are reading, puzzles and outdoor walks. I also like doing volunteer work with the elderly in nursing homes.’",
    staffBiofr: "Elle travaille à la Garderie Bimbo depuis plus de 20 ans! Elle travaille comme éducatrice avec les enfants âgés de 0 à 23 mois. ‘Ce que j’aime comme éducatrice, c’est d’aller à la garderie chaque matin à la rencontre des enfants avec le sourire. Les premières années de leur vie sont très importantes pour leur développement. C’est pourquoi j’adore les laisser explorer, socialiser, avoir du plaisir en jouant. Je souhaite que chaque enfant se sente en sécurité et heureux à la garderie. Mes passions sont la lecture, les casse-têtes et les marches à l’extérieur. J’aime aussi faire du bénévolat pour les personnes âgées dans les foyers de soins.’",
    },
    {
    id: "16",    
    staffName: "Lisa Cyr",
    staffImg: "/assets/img/about/staff-placeholder-6.png",
    staffBio: "I joined the Garderie Bimbo Daycare team in August of 2020 as the new director. Although I am fairly new to the center, I have been working in the childcare sector since 2007. I have a passion for helping others grow. One of my favorite parts of being a director is the ability to give my educators a positive work place and to encourage them to always do their best. When not at the daycare, I can usually be found outdoors with my two children aged 7 and 2, we love going on family adventures. I also enjoy reading a good book.",
    staffBiofr: "J’ai joint l’équipe de la Garderie Bimbo Daycare en août 2020 à titre de nouvelle directrice. Bien que je suis assez nouvelle au centre, je travaille dans le secteur de la petite enfance depuis 2007. J’ai une passion pour aider les autres à grandir. Une de mes parties préférées d’être directrice est d’être capable de donner à mes éducateurs un lieu de travail positif et de les encourager à toujours faire de leur mieux. Quand je ne suis pas à la garderie, je peux être retrouvée à l’extérieur avec mes deux enfants âgés de 7 et 2 ans, nous aimons aller pour des aventures en famille. J’aime aussi la lecture.",
    },

]


 
export default function Page({props}) {


    let { t } = useTranslation();

    const router = useRouter();

    let changeLangButtonName;

    if (router.locale === 'fr') {
      changeLangButtonName = "Français";
    } else {
      changeLangButtonName = "English";
    }


    function shuffleArray(array) {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    
    function StaffList(props) {

      const allstaff = shuffleArray(props.allstaff);

      const Staffs = allstaff.slice(0, 22).map((staff) =>
        <div className="col-md-12" key={staff.id}>
            <div className="team-member keystaff d-flex align-items-center justify-content-between">
              <div className="member-info d-md-flex align-items-center">
                <div className="left-sec col-md-4">
                    <Image width={362} height={240} alt={staff.staffName} src={staff.staffImg} />
                    <h3 className="pt-2">{staff.staffName}</h3>
                </div>
                <div className="right-sec col-md-8 text-left">
                    <p>
                    {router.locale === "fr" ? staff.staffBiofr  : staff.staffBio  }
                    </p>
                </div>
              </div>
            </div>
        </div>
      );
      return (
         <>{Staffs}</> 
      );
    }
  

    return (
        <Layout>
            <Head>
                <title>{t('common:staff')} | {t('common:meta-title')}</title>
                <meta name="description" content={t('common:meta-description')} />
            </Head>

            <section className="section-padding sub-page mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-12 col-lg-10 offset-lg-1">
                                    <div className="section-tittle text-center" data-aos="fade-in" data-aos-duration="1500">
                                        <h2>{t('common:staff-hero-title')}</h2> 
                                        <p>{t('common:staff-text')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="keystaff" data-aos="fade-in" data-aos-duration="1500">
                                <div className="row">
                                     <StaffList allstaff={allstaff} />
                                </div>
                            </div>

                             
                        </div>
                    </div>
                </div>
            </section>

            <Services />

       </ Layout>
    )
}


 