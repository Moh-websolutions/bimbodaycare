import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';
import Layout from '../components/Layout';
import AllServices from '../components/AllServices'

const Services = ({props}) => {
    
    let { t } = useTranslation()
    let router = useRouter();

	return (
		<Layout>
			<Head>
				<title>{t('common:services')} | {t('common:meta-title')}</title>
                <meta name="description" content={t('common:meta-description')} />
	        </Head>
	        <section className="section-padding sub-page mt-5">
		        <div className="container">
		            <div className="row justify-content-center">
		                <div className="col-lg-12">
	 	                    <div className="row">
		                        <div className="col-12 col-lg-10 offset-lg-1">
		                            <div className="section-tittle text-center">
		                              <h2>{t('common:services-hero-title')}</h2>
		                              <p>{t('common:services-text-1')}</p>
		                              <h4>{t('common:services-text-2.0')}</h4><h4 className="color-red">{t('common:services-text-2.1')}</h4>
		                              <br/><h3 className="color-orange">{t('common:services-text-3')} </h3>
		                            </div>
		                        </div>
		                    </div>

		                   
		                </div>
		            </div>
		        </div>
		        <AllServices />
		    </section>
		</ Layout>
    )
}


export default Services