import clsx from 'clsx';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import { KTSVG } from '../../../../_metronic/helpers';

const initialValues = {
    UtilisateurName: '',
    UtilisateurPW: '',
    UtilisateurDescription: '',
    UtilisateurProfile:'',
    UtilisteurDepot:'',
    UtilisateurMail:'',
    UtilisteurGroup:''
  }
  const UtilisateurSchema = Yup.object().shape({
    UtilisateurName : Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(20, 'Maximum 10 symbols')
      .required('USer Name is required'),
      UtilisateurMail: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
      UtilisateurDescription: Yup.string()
      .min(5, 'Minimum 5 symbols')
      .max(20, 'Maximum 20 symbols')
      .required('PRofile Function is required'),
      UtilisateurPW: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Password is required'),
  
  })

  
export function Utilisateurs(){
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

    const [, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: UtilisateurSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
    },
  })
    return (
      <>
      <div className='card'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>List des Utilisateurs</span>
        </h3>
        <div className='card-toolbar'>
        <Link
          className='btn btn-sm btn-light-primary' onClick={handleClick}to='' >
          <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            Ajouter Utilisateur
        </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-200px rounded-start'>Nom Utilisateur</th>
                <th className='min-w-200px'>Description</th>
                <th className='min-w-200px'>E-mail</th>
                <th className='min-w-200px text-end rounded-end'> Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                     
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Andolsi
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    garage
                  </a>
                </td>
                <td>
                  <span className='badge badge-light-primary fs-7 fw-semibold'>andolsi@yahoo.fr</span>
                </td>
                <td className='text-end'>

                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
              </tr>
            
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>      
      <div className="d-flex justify-content-center align-items-center fixed-top" style={{ zIndex: 999 }}>
    <Alert className="w-50" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
    show={showAlert} onClose={() => setShowAlert(false)} dismissible  >
      <div className="card">
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bold fs-3 mb-1'>Gestion des Utilisateurs</span>
              </h3>
            </div>
            <div className="card-body">
        <div className='row g-5 g-xxl-8'>
          <div className='col-xl-6'>
              {/* begin::Form group UtilisateurName */}
          <div className='fv-row mb-8'>
            <label className='form-label fw-bolder text-dark fs-6'>Nom d'Utilisateur</label>
            <input
              placeholder="Nom d'Utilisateur"
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('UtilisateurName')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.UtilisateurName && formik.errors.UtilisateurName,
                },
                {
                  'is-valid': formik.touched.UtilisateurName && !formik.errors.UtilisateurName,
                }
              )}
            />
            {formik.touched.UtilisateurName && formik.errors.UtilisateurName && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.UtilisateurName}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}
            {/* begin::Form group UtilisateurDescription */}
          <div className='fv-row mb-8'>
            <label className='form-label fw-bolder text-dark fs-6'>Description</label>
            <input
              placeholder='Description'
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('UtilisateurDescription')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.UtilisateurDescription && formik.errors.UtilisateurDescription,
                },
                {
                  'is-valid': formik.touched.UtilisateurDescription && !formik.errors.UtilisateurDescription,
                }
              )}
            />
            {formik.touched.UtilisateurDescription && formik.errors.UtilisateurDescription && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.UtilisateurDescription}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}
           {/* begin::Form group UtilisateurMail */}
           <div className='fv-row mb-8'>
            <label className='form-label fw-bolder text-dark fs-6'>E-mail</label>
            <input
              placeholder="mail"
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('UtilisateurMail')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.UtilisateurMail && formik.errors.UtilisateurMail,
                },
                {
                  'is-valid': formik.touched.UtilisateurMail && !formik.errors.UtilisateurMail,
                }
              )}
            />
            {formik.touched.UtilisateurMail && formik.errors.UtilisateurMail && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.UtilisateurMail}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}
           {/* begin::Form group UtilisateurPW */}
           <div className='fv-row mb-8'>
            <label className='form-label fw-bolder text-dark fs-6'>Mot de Passe </label>
            <input
              placeholder="********"
              type='"password'
              autoComplete='off'
              {...formik.getFieldProps('UtilisateurPW')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.UtilisateurPW && formik.errors.UtilisateurPW,
                },
                {
                  'is-valid': formik.touched.UtilisateurPW && !formik.errors.UtilisateurPW,
                }
              )}
            />
            {formik.touched.UtilisateurPW && formik.errors.UtilisateurPW && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.UtilisateurPW}</span>
                </div>
              </div>
            )}
          </div>
          <a
            href='#'
            className='btn btn-sm btn-light-primary'
            
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            Ajouter
          </a>
          <a
            href='#'
            className='btn btn-sm btn-light-danger'
            style={{ marginLeft: '10px' }}
            onClick={() => setShowAlert(false)}
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            Anuuler
          </a>
          {/* end::Form group */}
          </div>
        </div>
        </div>
        </div>
        </Alert>
        </div>
        </>
      )
}