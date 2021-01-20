import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';

const Features = ({props}) => {

    let { t } = useTranslation()
    let router = useRouter();

    return (
    	<>
    	<section className="best-features-area section-padding">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-12">
                         <div className="row">
                            <div className="col-lg-10 col-md-10">
                                <div className="section-tittle" data-aos="fade-down">
                                    <h2>{t('common:feature-hero-title')}</h2>
                                </div>
                            </div>
                        </div>
                         <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-lg-6">
                                <div className="single-features" data-aos="fade-down">
                                    <div className="features-icon">
                                        <span className="flaticon-support">1</span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>{t('common:feature-title-1')}</h3>
                                    </div>
                                </div>
                             
                                <div className="single-features" data-aos="fade-down">
                                    <div className="features-icon">
                                        <span className="flaticon-support">2</span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>{t('common:feature-title-2')}</h3>
                                    </div>
                                </div>
                             
                                <div className="single-features" data-aos="fade-down">
                                    <div className="features-icon">
                                        <span className="flaticon-support">3</span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>{t('common:feature-title-3')}</h3>
                                    </div>
                                </div>
                             
                                <div className="single-features" data-aos="fade-down">
                                    <div className="features-icon">
                                        <span className="flaticon-support">4</span>
                                    </div>
                                    <div className="features-caption">
                                        <h3>{t('common:feature-title-4')}</h3>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-6" className="img-fluid">
                                <Image src="/assets/img/hero/hero_left.png" width={559} height={716} data-aos="zoom-in" alt="KID" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    	</>
    )
}
export default Features