import PropTypes from 'prop-types'
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';

 
const Cta = ({props}) => {

    let router = useRouter();
    let { t } = useTranslation()

    return(
    	<>
    	   <section className="say-something-aera section-padding">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5">
                            <div className="say-something-cap" data-aos="fade-right">
                                <h2>{t('common:cta-title')}</h2>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3">
                            <div className="say-btn">
                                <Link href="/contact"><a className="btn radius-btn" data-aos="zoom-in">{t('common:contact-us-now')}</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="say-shape">
                    <div className="say-shape2 d-none d-lg-block" >
                    <Image src="/assets/img/cta/say-shape-right.png" layout="responsive" width={738} height={300} data-aos="fade-up" alt="Contact background" />
                    </div>
                </div>
            </section>
    	</>
    )
}
export default Cta