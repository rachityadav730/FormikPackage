import './App.css';
import { Field, Form, Formik, FormikProps,ErrorMessage } from 'formik';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from "yup";


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


function App() {
  
  return (
    <div className="App">
     <h1>
      hello formik
     </h1>
     <Formik
       initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
       validationSchema={SignupSchema}

       onSubmit={(values, actions) => {
      console.log("valuesvalues",values, actions)
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
      {(props) => (
         <Form>

          {
            console.log("propspsp",props)
          }
         <Field type="text" name="name" placeholder="Email" />
         <Field type="email" name="email" placeholder="Email" />
         <button type="submit">Submit</button>
         <Field name="lastName">
             {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
               <div>
                 <input type="text" placeholder="Email" {...field} />
                 {meta.touched && meta.error && (
                   <div className="error">{meta.error}</div>
                 )}
               </div>
             )}
           </Field>
         </Form>
      )}
      </Formik>
    </div>
  );
}

export default App;
