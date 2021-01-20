import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';

import Layout from '../components/Layout'
import Services from '../components/Services'


const Contact = ({props}) => {

  let { t } = useTranslation()
  let router = useRouter();

	return (
  	<Layout>
    		<Head>
            <title>{t('common:contact')} | {t('common:meta-title')}</title>
            <meta name="description" content={t('common:meta-description')} />
        </Head>

  	    <section className="section-padding sub-page mt-5">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-12">
                           <div className="row">
                              <div className="col-12 col-lg-10 offset-lg-1">
                                  <div className="section-tittle text-center" data-aos="fade-in" data-aos-duration="1500">
                                      <h2>{t('common:contact-hero-title')}</h2>
                                      <p>{t('common:contact-text')}</p>
                                  </div>
                              </div>
                          </div>

                          
                          <div className="row mt-5">
                             
                            <div className="col-lg-7 mb-3">
                              <form className="form-contact contact_form" action="#" method="post" id="contactForm" novalidate="novalidate">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="form-group">
                                      <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder={t('common:enter-message')}></textarea>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <input className="form-control valid" name="name" id="name" type="text" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter your name'" placeholder={t('common:enter-name')} />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <input className="form-control valid" name="email" id="email" type="email" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter email address'" placeholder={t('common:enter-email')} />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <input className="form-control" name="subject" id="subject" type="text" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Subject'" placeholder={t('common:enter-subject')} />
                                    </div>
                                  </div>
                                <div className="col-12 mx-auto">
                                    <div className="form-group">
                                      <button type="submit" className="btn radius-btn">{t('common:send')}</button>
                                     </div>
                                 </div>
                                </div>
                              </form>
                            </div>

                            <div className="col-lg-4 offset-lg-1">

                              <div className="media contact-info">
                                <span className="contact-info__icon color-blue"><i className="fad fa-home"></i></span>
                                <div className="media-body">
                                  <h3 className="color-blue">Garderie Bimbo Daycare Inc.</h3>
                                  <p>644 University Ave Bathurst, NB <br/>E2A 2W6</p>
                                </div>
                              </div>
                              
                              <div className="media contact-info">
                                <span className="contact-info__icon color-orange"><i className="fad fa-at"></i></span>
                                <div className="media-body">
                                  <h3 className="color-orange">{t('common:email-us')}</h3>
                                  <p><a href="mailto:garderiebimborachel@gmail.com" className="color-orange">garderiebimborachel@gmail.com</a></p>
                                </div>
                              </div>
                              <div className="media contact-info">
                                <span className="contact-info__icon color-green"><i className="fad fa-phone"></i></span>
                                <div className="media-body">
                                  <h3 className="color-green">Phone / Fax</h3>
                                  <p><b>Phone:</b> 506-548-8069 <br/> <b>Fax:</b> 506-548-8069</p>
                                </div>
                              </div>

                              <div className="media contact-info">
                                <span className="contact-info__icon color-red"><i className="fad fa-clock"></i></span>
                                <div className="media-body">
                                  <h3 className="color-red">{t('common:hours-of-operation')}</h3>
                                  <p></p>
                                 <table>
                                      <tbody>
                                      <tr>
                                          <th>{t('common:monday')}</th>
                                          <td>{t('common:open-hours')}</td>
                                      </tr>
                                      <tr>
                                          <th>{t('common:tuesday')}</th>
                                          <td>{t('common:open-hours')}</td>
                                      </tr>
                                      <tr>
                                          <th>{t('common:wednesday')}</th>
                                          <td>{t('common:open-hours')}</td>
                                      </tr>
                                      <tr>
                                          <th>{t('common:thursday')}</th>
                                          <td>{t('common:open-hours')}</td>
                                      </tr>
                                      <tr>
                                          <th>{t('common:friday')}</th>
                                          <td>{t('common:open-hours')}</td>
                                      </tr>
                                      <tr>
                                           <td colspan="2" className="color-red"><i>{t('common:covid-opening-hours')}</i></td>
                                      </tr>
                                      </tbody>
                                  </table>
                                </div>
                              </div>

                            </div>

                          </div>

                          <div className="row align-items-center">
                              <div className="col-md-12 mt-4 mb-5">
                                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d565.3579610424409!2d-65.67394801247231!3d47.62008870156322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec0d161ca56a9a98!2sBimbo%20Day%20Care!5e0!3m2!1sen!2sca!4v1607010048036!5m2!1sen!2sca" width="100%" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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


export default Contact