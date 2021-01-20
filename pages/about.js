import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';
import Layout from '../components/Layout';
import Services from '../components/Services'

const About = ({props}) => {

    let { t } = useTranslation()
    let router = useRouter();

    return(
        <Layout>
            <Head>
                <title>{t('common:about')} | {t('common:meta-title')}</title>
                <meta name="description" content={t('common:meta-description')} />
            </Head>

            <section className="section-padding sub-page mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                           
                            <div className="row">
                                <div className="col-12 col-lg-10 offset-lg-1">
                                    <div className="section-tittle text-center" data-aos="fade-in" data-aos-duration="1500">
                                        <h2>{t('common:about-hero-title')}</h2>
                                        <p>{t('common:about-text-1.0')}</p>
                                        <p>{t('common:about-text-1.1')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-10  offset-lg-1 my-5 text-center" data-aos="fade-in" data-aos-duration="1500">
                                    <div className="img-fluid" >
                                        <Image src="/assets/img/about/kids.png" width={791} height={716}  alt={t('common:about-hero-title')} />
                                    </div>
                                </div>
                                
                            </div>

                          
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-2 col-lg-3 mx-auto mt-5">
                                    <div className="btn-action">
                                        <Link href="/contact"><a className="btn radius-btn" data-aos="zoom-in">{t('common:contact-us-now')}</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Services />

        </Layout>
        )
}


export default About