import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';
import Layout from '../components/Layout';
import Services from '../components/Services'


const gallerys = [
    {    
    thumbnail:"/assets/img/gallery/img-1.jpg",
    image:"/assets/img/gallery/1.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-2.jpg",
    image:"/assets/img/gallery/2.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-3.jpg",
    image:"/assets/img/gallery/3.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-4.jpg",
    image:"/assets/img/gallery/4.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-5.jpg",
    image:"/assets/img/gallery/5.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-6.jpg",
    image:"/assets/img/gallery/6.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-7.jpg",
    image:"/assets/img/gallery/7.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-8.jpg",
    image:"/assets/img/gallery/8.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-9.jpg",
    image:"/assets/img/gallery/9.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-10.jpg",
    image:"/assets/img/gallery/10.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-11.jpg",
    image:"/assets/img/gallery/11.jpg",
    },
    {    
    thumbnail:"/assets/img/gallery/img-12.jpg",
    image:"/assets/img/gallery/12.jpg",
    },

];


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

function GalleriesList(props) {

  const gallerys = shuffleArray(props.gallerys);

  const Items = gallerys.slice(0, 40).map((gallery) =>
    <>
	    <li className="single-listing-gallery text-center" data-src={gallery.image}>
		  <Link href="javascript:void(0)"><a>
		    <Image layout="fill" src={gallery.thumbnail} alt="" />
		  </a></Link>
		</li>
	</>
  );
  return (
     <>{Items}</> 
  );
}



const Gallery = () => {
    
    let { t } = useTranslation()
    let router = useRouter();
	
    return (
	   <Layout>
    		<Head>
                <title>{t('common:gallery')} | {t('common:meta-title')}</title>
                <meta name="description" content={t('common:meta-description')} />
            </Head>

    	    <section className="section-padding sub-page mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                             
                            <div className="row">
                                <div className="col-12 col-lg-10 offset-lg-1">
                                    <div className="section-tittle text-center">
                                        <h2>{t('common:gallery-hero-title')}</h2>
                                        <p>{t('common:gallery-text')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="facility">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="demo-gallery">
                                          <ul id="animated-thumbnials" className="list-unstyled listing-pro-gallery clearfix">

                                            <GalleriesList gallerys={gallerys} />
                                             
                                          </ul>
                                        </div>
                                    </div>
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


export default Gallery