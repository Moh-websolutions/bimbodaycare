import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';


const services = [
  {
    id: "1",    
    title: "Spacious classrooms for all age groups ",
    titlefr: "Salles de classe spacieuse pour chaque group d’âge ",
    description:"",
    descriptionfr:"",
    image:"/assets/img/hero/camera-big.png",
    width:"581",
    height: "228",
    },
  
    {  
    id: "2",    
    title: "Afterschool Program ",
    titlefr: "Programme préscolaire",
    description:"",
    descriptionfr:"",
    image:"/assets/img/hero/clock-big.png",
    width:"640",
    height: "398",
    },

    {
    id: "3",    
    title: "Indoor and outdoor playgrounds",
    titlefr: "Parc intérieurs et extérieures ",
    description:"",
    descriptionfr:"",
    image:"/assets/img/hero/education-big.png",
    width:"399",
    height: "304",
    },

    {
    id: "4",    
    title: "French Curriculum",
    titlefr: "Curriculum français",
    description:"",
    descriptionfr:"",
    image:"/assets/img/hero/chatbox-big.png",
    width:"640",
    height: "253",
    },

    {
    id: "5",    
    title: "All food is prepared onsite from a well-balanced menu ",
    titlefr: "Tous les repas sont préparés sur place a partir d’un menu équilibre ",
    description:"",
    descriptionfr:"",
    image:"/assets/img/hero/apple.png",
    width:"640",
    height: "398",
    },

    {
    id: "6",    
    title: "Infant nursery",
    titlefr: "Pouponnière",
    description:"",
    descriptionfr:"",    
    image:"/assets/img/hero/kid.png",
    width:"379",
    height: "374",
    },

    {
    id: "7",    
    title: "Located at the college",
    titlefr: "Situe au Collège",
    description:"",
    descriptionfr:"",
    image:"/assets/img/hero/college.png",
    width:"640",
    height: "398",
    },
    
    {    
    id:"8", 
    title: "Let's Get in Touch",
    titlefr: "Entrons en contact",
    description:"For more information about our daycare or preschool services contact us today, and feel free to call us at 506-548-8069 today!",
    descriptionfr: "Pour plus d'informations sur nos services de garde ou préscolaires, contactez-nous dès aujourd'hui et n'hésitez pas à nous appeler au 506-548-8069 dès aujourd'hui!",
    image:"/assets/img/hero/phone.png",
    width:"640",
    height: "398",
    },

];
 

function ServicesList(props) {

    let { t } = useTranslation()
    let router = useRouter();

  const services = props.services;
  const Items = services.slice(0, 8).map((item) =>
  
    <div className="quality__col" key={item.id}>
        <div className="quality__item" data-aos="zoom-in-right" data-aos-easing="ease-in-sine">
          <div className="quality__icon"><div  className="quality__pic"><Image src={item.image} width={item.width} height={item.height} alt={item.title} /></div></div>
          <div className="quality__details">
            <div className="quality__category">{router.locale === "fr" ? item.titlefr  : item.title  }</div>
            <div className="quality__text">{item.description}</div>
           </div>
        </div>
     </div>
    
  );
  return (
     <>{Items}</> 
  );
}
const allServices = () => {
	return (

    <div className="mt-5">
        <div className="quality">
          <div className="quality__body">

            <ServicesList services={services} />
            
          </div>
          <div className="quality__circles" >
            <div className="quality__circle" data-aos="zoom-in-right" data-aos-easing="ease-in-sine" data-aos-delay="1200"> </div>
            <div className="quality__circle"> </div>
          </div>
      </div>
    </div> 
	)
}


export default allServices