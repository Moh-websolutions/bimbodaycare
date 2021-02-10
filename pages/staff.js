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
    staffBio: "Jennifer Chiasson, started working at Garderie Bimbo in December 2020, she is an educator with our afterschool age children. One of the best parts of being an educator is watching them grow and building a strong connection and getting to know each child personally. Outside of work Jennifer loves listening to music and is a huge fan of Star Wars.",
    staffBiofr: "Jennifer Chiasson, started working at Garderie Bimbo in December 2020, she is an educator with our afterschool age children. One of the best parts of being an educator is watching them grow and building a strong connection and getting to know each child personally. Outside of work Jennifer loves listening to music and is a huge fan of Star Wars.",
    },
    {
    id: "2",    
    staffName: "Sarah Martin",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Sarah Martin, Joined the team at garderie bimbo in September of 2020 she works as an educational assistant in the 4-year-old class as well as an educator with the afterschool children, Sarah has previous experience in childcare as she worked in an early learning childcare center before. Sarah believes one of the greatest benefits of being an educator is watching the kids learn new things that will help them later in life. Outside of daycare I enjoy swimming and writing it helps me relax after a busy day at work. ",
    staffBiofr: "Sarah Martin, Joined the team at garderie bimbo in September of 2020 she works as an educational assistant in the 4-year-old class as well as an educator with the afterschool children, Sarah has previous experience in childcare as she worked in an early learning childcare center before. Sarah believes one of the greatest benefits of being an educator is watching the kids learn new things that will help them later in life. Outside of daycare I enjoy swimming and writing it helps me relax after a busy day at work. ",
    },
    {
    id: "3",    
    staffName: "Natacha Hussey",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Natacha Hussey has been part of the Garderie Bimbo Daycare team for over 5 years now, she is currently one of our preschool educators. Natacha has a diploma in early childhood education, one of the pleasures of being an early childhood educator is seeing the reactions on children’s faces when they accomplish something new on their own. When not at work Natacha can be found being a busy mom of two or also be found snowboarding. ",
    staffBiofr: "Natacha Hussey has been part of the Garderie Bimbo Daycare team for over 5 years now, she is currently one of our preschool educators. Natacha has a diploma in early childhood education, one of the pleasures of being an early childhood educator is seeing the reactions on children’s faces when they accomplish something new on their own. When not at work Natacha can be found being a busy mom of two or also be found snowboarding. ",
    },
    {
    id: "4",    
    staffName: "Kathy Robertson ",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Kathy Robertson has been working in our transition group for the past 3 years, few of the things Kathy loves most about being an educator is watching the children learn new things, and helping them explore the world around them. Children are our future and I love being one of the people that is lucky enough to help them grow and learn. One of her passion out side of daycare is spending time adventuring with her beautiful family, Kathy lives a simple but beautiful life. ",
    staffBiofr: "Kathy Robertson has been working in our transition group for the past 3 years, few of the things Kathy loves most about being an educator is watching the children learn new things, and helping them explore the world around them. Children are our future and I love being one of the people that is lucky enough to help them grow and learn. One of her passion out side of daycare is spending time adventuring with her beautiful family, Kathy lives a simple but beautiful life. ",
    },
    {
    id: "5",    
    staffName: "Nicole Hache",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Nicole Hache, travaille à la garderie bimbo depuis plus de 17 ans, elle travaille comme éducatrice à la garderie avec les enfants âgés de 0 à 23 mois. Certaines des choses qu’elle aime le plus d’être une éducatrice est de regarder comment les enfants apprennent rapidement, en les écoutant rire, découvrir chaque petite chose, apprendre pleins de nouveau défi (couleurs, peinture, ect) Une passion Nicole a à l’extérieur de la garderie est de scrapbooking, et marche sur le bord de l’eau.",
    staffBiofr: "Nicole Hache, travaille à la garderie bimbo depuis plus de 17 ans, elle travaille comme éducatrice à la garderie avec les enfants âgés de 0 à 23 mois. Certaines des choses qu’elle aime le plus d’être une éducatrice est de regarder comment les enfants apprennent rapidement, en les écoutant rire, découvrir chaque petite chose, apprendre pleins de nouveau défi (couleurs, peinture, ect) Une passion Nicole a à l’extérieur de la garderie est de scrapbooking, et marche sur le bord de l’eau.",
    },
    {
    id: "6",    
    staffName: "Kassandra",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Kassandra, travaille à la garderie bimbo depuis Janvier 2020, elle travaille comme éducatrice avec les enfants âgés de 15 à 23 mois. Certaines des choses qu’elle aime le plus d’être une éducatrice est faire partir d’aider les enfants dans leur développement et à grandir. Quand Kassandra n’est pas au travaille elle aime prendre des marches dans la nature, travaille sur son groupe de pink zebra est aussi passer du temps avec ses animaux ",
    staffBiofr: "Kassandra, travaille à la garderie bimbo depuis Janvier 2020, elle travaille comme éducatrice avec les enfants âgés de 15 à 23 mois. Certaines des choses qu’elle aime le plus d’être une éducatrice est faire partir d’aider les enfants dans leur développement et à grandir. Quand Kassandra n’est pas au travaille elle aime prendre des marches dans la nature, travaille sur son groupe de pink zebra est aussi passer du temps avec ses animaux ",
    },
    {
    id: "7",    
    staffName: "Kim",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Kim travaille à la garderie bimbo depuis plus de 11ans, elle travaille comme éducatrice avec les enfants de 2 ans. Certaines des choses qu’elle aime le plus d’être une éducatrice est pourvoir aider les enfants a se développer puis aider a leur apprentissage, j’aime voir leur petit sourire le matin quand ils arrive a la garderie et les consoler quand ils ont de la peine devoir quitter maman et papa. Quand Kim n’est pas au travaille elle aime prendre des marches, plein air, hockey. ",
    staffBiofr: "Kim travaille à la garderie bimbo depuis plus de 11ans, elle travaille comme éducatrice avec les enfants de 2 ans. Certaines des choses qu’elle aime le plus d’être une éducatrice est pourvoir aider les enfants a se développer puis aider a leur apprentissage, j’aime voir leur petit sourire le matin quand ils arrive a la garderie et les consoler quand ils ont de la peine devoir quitter maman et papa. Quand Kim n’est pas au travaille elle aime prendre des marches, plein air, hockey. ",
    },
    {
    id: "8",    
    staffName: "Noemy Frenette",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Noemy Frenette travaille à la garderie bimbo depuis Octobre 2020, avec les enfants âges 0 à 23 mois. En tant qu’éducatrice, ce que je préfère est tout le beau moment passe avec les enfants à leurs apprendre des choses et es voire évolues au fils des mois, je trouve que c’est beau à voir. En dehors du travaille j’adore la photographie et le bricolage. ",
    staffBiofr: "Noemy Frenette travaille à la garderie bimbo depuis Octobre 2020, avec les enfants âges 0 à 23 mois. En tant qu’éducatrice, ce que je préfère est tout le beau moment passe avec les enfants à leurs apprendre des choses et es voire évolues au fils des mois, je trouve que c’est beau à voir. En dehors du travaille j’adore la photographie et le bricolage. ",
    },
    {
    id: "9",    
    staffName: "Marie Pier",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Marie Pier, travaille à la garderie bimbo depuis Octobre 2020, elle travaille comme aide éducatrice dans la classe des 3 ans. J’adore apprendre a connaitre les enfants et découvre d’autres moyens de les aider dans leur développement. Dehors du travaille Marie Pier adore faire des casses tète and lire. ",
    staffBiofr: "Marie Pier, travaille à la garderie bimbo depuis Octobre 2020, elle travaille comme aide éducatrice dans la classe des 3 ans. J’adore apprendre a connaitre les enfants et découvre d’autres moyens de les aider dans leur développement. Dehors du travaille Marie Pier adore faire des casses tète and lire. ",
    },
    {
    id: "10",    
    staffName: "Natalie",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Natalie, travaille à la garderie bimbo depuis plus que 17ans mais elle a 23ans expérience en garderie, elle travaille comme éducatrice avec les enfants de prématernelle âge de 4ans. J’adore les enfants depuis toujours, j’aime les voir grandir et d’être capable de leur apprendre plusieurs choses pour les amener plus loin dans leur apprentissage et j’adore quand ils me raconter des belles histoires à leur sujet. Quand Natalie n’est pas au travaille elle aime aller au restaurant avec ses amis. ",
    staffBiofr: "Natalie, travaille à la garderie bimbo depuis plus que 17ans mais elle a 23ans expérience en garderie, elle travaille comme éducatrice avec les enfants de prématernelle âge de 4ans. J’adore les enfants depuis toujours, j’aime les voir grandir et d’être capable de leur apprendre plusieurs choses pour les amener plus loin dans leur apprentissage et j’adore quand ils me raconter des belles histoires à leur sujet. Quand Natalie n’est pas au travaille elle aime aller au restaurant avec ses amis. ",
    },
    {
    id: "11",    
    staffName: "Josiane",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Josiane, travaille à la garderie bimbo depuis 3ans, elle travaille comme éducatrice dans la classe des 4ans et aussi éducatrices avec les enfants halte scolaire. Certaines des choses qu’elle aime le plus d’être une éducatrice voire les enfants s’épanouir et devenir de plus en plus indépendant. Voir le sourire de l’enfant comment il est fier de lui avoir appris ou fait quelque chose de nouveaux par lui-même pour la première fois. Quand Josiane n’est pas au travaille elle aime passer du temps de qualité avec sa famille. ",
    staffBiofr: "Josiane, travaille à la garderie bimbo depuis 3ans, elle travaille comme éducatrice dans la classe des 4ans et aussi éducatrices avec les enfants halte scolaire. Certaines des choses qu’elle aime le plus d’être une éducatrice voire les enfants s’épanouir et devenir de plus en plus indépendant. Voir le sourire de l’enfant comment il est fier de lui avoir appris ou fait quelque chose de nouveaux par lui-même pour la première fois. Quand Josiane n’est pas au travaille elle aime passer du temps de qualité avec sa famille. ",
    },
    {
    id: "12",    
    staffName: "Sonia",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Sonia, travaille à la garderie bimbo depuis 17ans, elle travaille comme éducatrice avec les enfants âgés de 3ans. Les choses qu’elle aime le plus d’être une éducatrice est les activités leurs sourires, leurs col cols leurs indépendance ect.  Quand Sonia n’est pas au travaille elle aime faire du crochet, recherches, music, méditations, plage.",
    staffBiofr: "Sonia, travaille à la garderie bimbo depuis 17ans, elle travaille comme éducatrice avec les enfants âgés de 3ans. Les choses qu’elle aime le plus d’être une éducatrice est les activités leurs sourires, leurs col cols leurs indépendance ect.  Quand Sonia n’est pas au travaille elle aime faire du crochet, recherches, music, méditations, plage.",
    },
    {
    id: "13",    
    staffName: "Fanny",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Fanny, travaille à la garderie bimbo depuis 3ans, elle travaille comme éducatrice avec les enfants âgés de 2ans. J’adore entant éducatrices le bonheur que les enfants m’apportent, leur imagination notre super équipe de travaille et super directrice. Les passe-temps à Fanny sont d’être dehors avec mes enfants, j’adore faire des casse-têtes, prendre des drives en auto. ",
    staffBiofr: "Fanny, travaille à la garderie bimbo depuis 3ans, elle travaille comme éducatrice avec les enfants âgés de 2ans. J’adore entant éducatrices le bonheur que les enfants m’apportent, leur imagination notre super équipe de travaille et super directrice. Les passe-temps à Fanny sont d’être dehors avec mes enfants, j’adore faire des casse-têtes, prendre des drives en auto. ",
    },
    {
    id: "14",    
    staffName: "Chantal",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Chantal, travaille à la garderie bimbo depuis 11ans, elle travaille comme éducatrice avec les enfants âgés 2ans. J’adore voire leur petit visage le matin avec leur sourire. J’adore faire des expériences ou des jeux ou ils font des gros dégâts comme la peinture, des jeux d’eau. Quand Chantal n’est pas au travaille elle aime prendre des marches, lire et regarder des séries sur Netflix. ",
    staffBiofr: "Chantal, travaille à la garderie bimbo depuis 11ans, elle travaille comme éducatrice avec les enfants âgés 2ans. J’adore voire leur petit visage le matin avec leur sourire. J’adore faire des expériences ou des jeux ou ils font des gros dégâts comme la peinture, des jeux d’eau. Quand Chantal n’est pas au travaille elle aime prendre des marches, lire et regarder des séries sur Netflix. ",
    },
    {
    id: "15",    
    staffName: "Malvina",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Malvina, travaille à la garderie bimbo depuis 20ans elle travaille comme éducatrice avec les enfants âgés de 0 à 23 mois. Ce que j’aime comme éducatrices, C’est aller à la garderie chaque matin a la rencontre des enfants avec le sourire. Les premières années de leur vie est très important pour leur développement, c’est pour quoi j’adore les laisser explorer, socialisée, relaxes, avoir du plaisir en jouant, et que chaque enfant se sente en sécurité et heureux à la garderie. Mes passion c’est faire des casse-tête, lire, aller pour des marches, est aussi j’aime faire du bénévole pour les personne âges dans les foyer.  ",
    staffBiofr: "Malvina, travaille à la garderie bimbo depuis 20ans elle travaille comme éducatrice avec les enfants âgés de 0 à 23 mois. Ce que j’aime comme éducatrices, C’est aller à la garderie chaque matin a la rencontre des enfants avec le sourire. Les premières années de leur vie est très important pour leur développement, c’est pour quoi j’adore les laisser explorer, socialisée, relaxes, avoir du plaisir en jouant, et que chaque enfant se sente en sécurité et heureux à la garderie. Mes passion c’est faire des casse-tête, lire, aller pour des marches, est aussi j’aime faire du bénévole pour les personne âges dans les foyer.  ",
    },
    {
    id: "16",    
    staffName: "Lisa Cyr, ",
    staffImg: "/assets/img/about/staff-placeholder-2.png",
    staffBio: "Lisa Cyr, I joined the Garderie Bimbo Daycare team in August of 2020 as the new director. Although I am fairly new to the center I have been working in the childcare sector since 2007. I have a passion for helping other grow. One of my favorite parts of being a director is the ability to give my educators a positive work place and to encourage them to always do their best. When not at the daycare I can usually be found outdoors with my two children aged 7 and 2, we love going on family adventures and enjoy reading a good book. ",
    staffBiofr: "Lisa Cyr, je me suis jointe à l’équipe de la Garderie Bimbo Daycare en août 2020 à titre de nouvelle directrice. Bien que je sois assez nouveau au centre, je travaille dans le secteur de la garde d’enfants depuis 2007. J’ai une passion pour aider les autres à grandir. Une de mes parties préférées d’être directrice est d’être capable de donner à mes éducateurs un lieu de travail positif et de les encourager à toujours faire de leur mieux. Quand je ne suis pas à la garderie, je peux être trouvé à l’extérieur avec mes deux enfants âgés de 7 et 2 ans, nous aimons aller sur des aventures en famille, j’aime aussi lire ",
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
 
  	const Staffs = allstaff.slice(0, 22).map((staff) =>
  		<div className="col-md-12">
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
  	)

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
		                            {Staffs} 

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


 