/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup'

const initialValues = {
  Rsociale: '',
  Activite: '',
  FormeJuridique: '',
  capitale: '',
  commantaire: '',
  Adresse:'',
  complement:'',
  codePostal:'',
  Ville:'',
  Region:'',
  Pays:'',
  Telephone:'',
  Telecopie:'',
  email:'',
  siteInternet:'',
  siret:'',
  idTVA:'',
  codeNAF:'',
  Retenue:'',
}
const IdentificationSchema = Yup.object().shape({
  Rsociale: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(35, 'Maximum 10 symbols')
    .required('raison sociale obligatoire'),
  Activite: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(15, 'Maximum 15 symbols')
    .required('activite obligatoire'),
  FormeJuridique: Yup.string()
    .min(5, 'Minimum 5 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('forme juridique est obligatoire'),
  capitale: Yup.number()
    .required('capitale est oblgatoire'),
  commantaire: Yup.string()
    .min(5, 'Minimum 5 symbols'),
    Adresse: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('adresse est obligatoire'),
    complement: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('co,plement est obligatoire'),
    codePostal: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('code Postal est obligatoire'),
    Ville: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('ville est obligatoire'),
    Region: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('Region est obligatoire'),
    Pays: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('pays est obligatoire'),
    Telephone: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('telephone est obligatoire'),
    Telecopie: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('telecopie est obligatoire'),
    email: Yup.string()
    .email('Wrong email format')
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('email est obligatoire'),
    siteInternet: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols'),
    
    siret: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('siret est obligatoire'),
    idTVA: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('identifiant TVa est obligatoire'),
    codeNAF: Yup.string()
    .min(6,'minimum 4 symbols')
    .max(20,'max 20 symbols')
    .required('Code NAF est obligatoire'),
    Retenue: Yup.number()
    .required('Rtenue est obligatoire'),
    



})





export function Identification() {
 
  const [, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: IdentificationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
    },
  })
  return (
    <>
      <div className='card '>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Identification</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group Rsociale */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Raison Sociale</label>
                <input
                  placeholder='Raison Sociale'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('Rsociale')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.Rsociale && formik.errors.Rsociale,
                    },
                    {
                      'is-valid': formik.touched.Rsociale && !formik.errors.Rsociale,
                    }
                  )}
                />
                {formik.touched.Rsociale && formik.errors.Rsociale && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Rsociale}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group Activite */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Activite</label>
                <input
                  placeholder='Activite'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('Activite')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.Activite && formik.errors.Activite,
                    },
                    {
                      'is-valid': formik.touched.Activite && !formik.errors.Activite,
                    }
                  )}
                />
                {formik.touched.Activite && formik.errors.Activite && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Activite}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

            </div>
            {/* begin::Form group FormeJuridique */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>FormemJuridique</label>
                <input
                  placeholder='Forme Juridique'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('FormeJuridique')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.FormeJuridique && formik.errors.FormeJuridique,
                    },
                    {
                      'is-valid': formik.touched.FormeJuridique && !formik.errors.FormeJuridique,
                    }
                  )}
                />
                {formik.touched.FormeJuridique && formik.errors.FormeJuridique && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.FormeJuridique}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group capitale */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>capitale</label>
                <input
                  placeholder='capitale'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('capitale')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.capitale && formik.errors.capitale,
                    },
                    {
                      'is-valid': formik.touched.capitale && !formik.errors.capitale,
                    }
                  )}
                />
                {formik.touched.capitale && formik.errors.capitale && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.capitale}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group commantaire */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>commantaire</label>
                <input
                  placeholder='commantaire'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('commantaire')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.commantaire && formik.errors.commantaire,
                    },
                    {
                      'is-valid': formik.touched.commantaire && !formik.errors.commantaire,
                    }
                  )}
                />
                {formik.touched.commantaire && formik.errors.commantaire && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.commantaire}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className='card '>
              <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Coordonnees</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group Adresse */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Adresse</label>
                <input
                  placeholder='Adresse'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('Adresse')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.Adresse && formik.errors.Adresse,
                    },
                    {
                      'is-valid': formik.touched.Adresse && !formik.errors.Adresse,
                    }
                  )}
                />
                {formik.touched.Adresse && formik.errors.Adresse && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Adresse}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group complement */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>complement</label>
                <input
                  placeholder='complement'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('complement')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.complement && formik.errors.complement,
                    },
                    {
                      'is-valid': formik.touched.complement && !formik.errors.complement,
                    }
                  )}
                />
                {formik.touched.complement && formik.errors.complement && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.complement}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

            </div>
            {/* begin::Form group codePostal */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Code Postal</label>
                <input
                  placeholder='Code Postal'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('codePostal')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.codePostal && formik.errors.codePostal,
                    },
                    {
                      'is-valid': formik.touched.codePostal && !formik.errors.codePostal,
                    }
                  )}
                />
                {formik.touched.codePostal && formik.errors.codePostal && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.codePostal}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group Ville */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Ville</label>
                <input
                  placeholder='Ville'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('Ville')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.Ville && formik.errors.Ville,
                    },
                    {
                      'is-valid': formik.touched.Ville && !formik.errors.Ville,
                    }
                  )}
                />
                {formik.touched.Ville && formik.errors.Ville && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Ville}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group Region */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Region</label>
                <input
                  placeholder='Region'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('Region')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.Region && formik.errors.Region,
                    },
                    {
                      'is-valid': formik.touched.Region && !formik.errors.Region,
                    }
                  )}
                />
                {formik.touched.Region && formik.errors.Region && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Region}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
             {/* begin::Form group Pays */}
             <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Pays</label>
                <input
                  placeholder='Pays'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('Pays')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.Pays && formik.errors.Pays,
                    },
                    {
                      'is-valid': formik.touched.Pays && !formik.errors.Pays,
                    }
                  )}
                />
                {formik.touched.Pays && formik.errors.Pays && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Pays}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
          </div>
        </div>
      </div><br></br>
      <div className='card '>
      <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Telecommunication</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group Telephone */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Telephone</label>
                <input
                  placeholder='Telepone'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('Telephone')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.Telephone && formik.errors.Telephone,
                    },
                    {
                      'is-valid': formik.touched.Telephone && !formik.errors.Telephone,
                    }
                  )}
                />
                {formik.touched.Telephone && formik.errors.Telephone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Telephone}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group Telecopie */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Telecopie</label>
                <input
                  placeholder='Telecopie'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('Telecopie')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.Telecopie && formik.errors.Telecopie,
                    },
                    {
                      'is-valid': formik.touched.Telecopie && !formik.errors.Telecopie,
                    }
                  )}
                />
                {formik.touched.Telecopie && formik.errors.Telecopie && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Telecopie}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

            </div>
            {/* begin::Form group email */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>E-mail</label>
                <input
                  placeholder='Forme Juridique'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('email')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.email && formik.errors.email,
                    },
                    {
                      'is-valid': formik.touched.email && !formik.errors.email,
                    }
                  )}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.email}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group siteInternet */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Site Internet</label>
                <input
                  placeholder='siteInternet'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('siteInternet')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.siteInternet && formik.errors.siteInternet,
                    },
                    {
                      'is-valid': formik.touched.siteInternet && !formik.errors.siteInternet,
                    }
                  )}
                />
                {formik.touched.siteInternet && formik.errors.siteInternet && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.siteInternet}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
          </div>
        </div>
      </div><br></br>
      <div className='card '>
      <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Immatriculation</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group siret */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>siret</label>
                <input
                  placeholder='Telepone'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('siret')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.siret && formik.errors.siret,
                    },
                    {
                      'is-valid': formik.touched.siret && !formik.errors.siret,
                    }
                  )}
                />
                {formik.touched.siret && formik.errors.siret && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.siret}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group idTVA */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Identifiant TVA</label>
                <input
                  placeholder='identifiant TVA'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('idTVA')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.idTVA && formik.errors.idTVA,
                    },
                    {
                      'is-valid': formik.touched.idTVA && !formik.errors.idTVA,
                    }
                  )}
                />
                {formik.touched.idTVA && formik.errors.idTVA && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.idTVA}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

            </div>
            {/* begin::Form group codeNAF */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Code NAF</label>
                <input
                  placeholder='Forme Juridique'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('codeNAF')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.codeNAF && formik.errors.codeNAF,
                    },
                    {
                      'is-valid': formik.touched.codeNAF && !formik.errors.codeNAF,
                    }
                  )}
                />
                {formik.touched.codeNAF && formik.errors.codeNAF && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.codeNAF}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
            {/* begin::Form group Retenue */}
            <div className='col-xl-6'>
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Site Internet</label>
                <input
                  placeholder='Retenue'
                  type='text'
                  autoComplete='off'
                  {...formik.getFieldProps('Retenue')}
                  className={clsx(
                    'form-control bg-transparent',
                    {
                      'is-invalid': formik.touched.Retenue && formik.errors.Retenue,
                    },
                    {
                      'is-valid': formik.touched.Retenue && !formik.errors.Retenue,
                    }
                  )}
                />
                {formik.touched.Retenue && formik.errors.Retenue && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.Retenue}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}
            </div>
          </div>
        </div>
      </div><br></br>
      <div className='card '>
      <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Compte Bancaire par defaut</span>
          </h3>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-xl-6'>
              {/* begin::Form group Banque */}
              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Banque</label>
               <select>

               </select>
              </div>
            </div>
            {/* end::Form group */}
            {/* begin::Form group cmptBancaire */}
            <div className='col-xl-6'>

              <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>compte Bancaire</label>
                <select className='custom-select custom-select-lg'>

                </select>
              </div>
              {/* end::Form group */}
              </div>
          </div>
        </div>
      </div><br></br> 
    </>
  )
}
