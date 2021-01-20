import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';
import Layout from '../components/Layout';
import Services from '../components/Services'

const Facility = () => {

    let { t } = useTranslation()
    let router = useRouter();

	return (

	    <Layout>
    		<Head>
                <title>{t('common:our-facility')} | {t('common:meta-title')}</title>
                <meta name="description" content={t('common:meta-description')} />
            </Head>

    	    <section className="section-padding sub-page mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-12 col-lg-10 offset-lg-1">
                                    <div className="section-tittle text-center">
                                        <h2>{t('common:facility-hero-title')}</h2>
                                        <p>{t('common:facility-text-1.0')}</p>
                                        <p>{t('common:facility-text-1.1')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="facility responsive-imgs">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Image src="/assets/img/about/img-4.jpg" width={760} height={320} data-aos="fade-up" alt={t('common:meta-title')} />
                                        <Image src="/assets/img/about/img-3.jpg" width={760} height={320} data-aos="fade-up" alt={t('common:meta-title')} />
                                        <Image src="/assets/img/about/img-2.jpg" width={760} height={320} data-aos="fade-up" alt={t('common:meta-title')} />
                                        <Image src="/assets/img/about/img-1.jpg" width={760} height={320} data-aos="fade-up" alt={t('common:meta-title')} />
                                    </div>
                                </div>
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-xl-2 col-lg-3 mx-auto mt-5">
                                        <div className="btn-action">
                                            <Link  href="/gallery"><a className="btn radius-btn" data-aos="zoom-in">{t('common:more-photos')}</a></Link>
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


export default Facility