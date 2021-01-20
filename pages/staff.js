import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';
import Layout from '../components/Layout';
import Services from '../components/Services'

const Staff = ({props}) => {
    
    let { t } = useTranslation()
	let router = useRouter;

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
		                            <div className="col-md-4">
		                                <div className="team-member keystaff d-flex align-items-center justify-content-between">
		                                  <div className="member-info">
		                                    <Image width={362} height={240} alt={t('commmon:staff')} src="/assets/img/about/staff-placeholder-2.png" />
		                                    <h3>Rachel Landry</h3>
		                                    <p>Director</p>
		                                    
		                                    <p> <Link href="mailto:info@bimbodaycare.ca"><a><span>info@bimbodaycare.ca</span></a></Link></p>
		                                    <p><a href="tel:5065488069"><span>506 548-8069</span></a></p>
		                                  </div>
		                                </div>
		                            </div>

		                            <div className="col-md-4">
		                                <div className="team-member keystaff d-flex align-items-center justify-content-between">
		                                  <div className="member-info">
		                                    <Image width={362} height={240} alt={t('commmon:staff')} src="/assets/img/about/staff-placeholder-1.png" />
		                                    <h3>Kyle Wilcox</h3>
		                                    <p>General Director</p>
		                                    
		                                    <p> <Link href="mailto:info@bimbodaycare.ca"><a><span>info@bimbodaycare.ca</span></a></Link></p>
		                                    <p><a href="tel:5065488069"><span>506 548-8069</span></a></p>
		                                  </div>
		                                </div>
		                            </div>

		                            <div className="col-md-4">
		                                <div className="team-member keystaff d-flex align-items-center justify-content-between">
		                                  <div className="member-info">
		                                    <Image width={362} height={240} alt={t('commmon:staff')} src="/assets/img/about/staff-placeholder-3.png" />
		                                    <h3>Kamila Banks</h3>
		                                    <p>CEO</p>
		                                    
		                                    <p> <Link href="mailto:info@bimbodaycare.ca"><a><span>info@bimbodaycare.ca</span></a></Link></p>
		                                    <p><a href="tel:5065488069"><span>506 548-8069</span></a></p>
		                                  </div>
		                                </div>
		                            </div>

		                            <div className="col-md-4">
		                                <div className="team-member keystaff d-flex align-items-center justify-content-between">
		                                  <div className="member-info">
		                                    <Image width={362} height={240} alt={t('commmon:staff')} src="/assets/img/about/staff-placeholder-4.png" />
		                                    <h3>Kobe Searle</h3>
		                                    <p>Director</p>
		                                    
		                                   <p> <Link href="mailto:info@bimbodaycare.ca"><a><span>info@bimbodaycare.ca</span></a></Link></p>
		                                    <p><a href="tel:5065488069"><span>506 548-8069</span></a></p>
		                                  </div>
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


export default Staff