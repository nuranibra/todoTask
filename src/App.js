import { Formik , Form , Field , ErrorMessage} from 'formik'
import { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import style from './assets/table.module.css'
import Table from 'react-bootstrap/Table';

function validate (values) {
  const error = {}
  if(!values.fullname?.trim()){
    error.fullname = 'full name cannot be empty'
  } 
  if(!values.age?.trim()){
    error.age = 'age cannot be empty'
  } 
  if(!values.position?.trim()){
    error.position = 'position cannot be empty'
  } 
  if(!values.phone?.trim()){
    error.phone = 'phone cannot be empty'
  }
  return error;
}

export default function App() {

  const [username, setUsername] = useState('')
  const [userAge, setUserAge] = useState('')
  const [userPosition, setUserPosition] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [bas,setBas] = useState(false)
  const [arr,setArr] = useState([])
  const [sil,setSil] = useState(false)

  const onSubmit = (values) => {
    console.log(values.fullname,values.age,values.position,values.phone)
    setUsername(values.fullname)
    setUserAge(values.age)
    setUserPosition(values.position)
    setUserPhone(values.phone)
    if(!bas){
      setBas(true)
    }
    if(bas){
      arr.push(
        <>
          <td key={v4()} className={style.obj}>{username}</td>
          <td key={v4()} className={style.obj}>{userAge}</td>
          <td key={v4()} className={style.obj}>{userPosition}</td>
          <td key={v4()} className={style.obj}>{userPhone}</td>
        </>
          )
          values.fullname = ''
          values.age = ''
          values.position = ''
          values.phone = ''
          setBas(false)
      }

  }

  useEffect(() => {
        <Table></Table>
        if(!sil){
          setSil(true)
        }
  },[sil])

  return (
    <>
      <div>
        <h1 className={style.text}>Todo App</h1>
      </div>
      <Formik
        initialValues={{
          fullname:'',
          age:'',
          position:'',
          phone:''
        }}
        validate={validate}
        onSubmit={onSubmit}
        >
          <Form className={style.formBox}>
            <div className={style.inpBox}>
              <Field name='fullname' className={style.inp} placeholder='Fullname'/>
              <ErrorMessage name='fullname'>
              {msg => <div style={{color:'red', textAlign:'center'}}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className={style.inpBox}>
              <Field name='age' className={style.inp} placeholder='Age'/>
              <ErrorMessage name='age'>
              {msg => <div style={{color:'red', textAlign:'center'}}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className={style.inpBox}>
              <Field name='position' className={style.inp} placeholder='Position'/>
              <ErrorMessage name='position'>
              {msg => <div style={{color:'red', textAlign:'center'}}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className={style.inpBox}>
              <Field name='phone' className={style.inp} placeholder='Phone'/>
              <ErrorMessage name='phone'>
                {msg => <div style={{color:'red', textAlign:'center'}}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <button type='submit' className={style.btn}>Add</button>
            </div>
          </Form>
      </Formik>
      <section>
        <div className={style.tableBox}>
          <Table striped bordered hover className={style.table}>
              <tr className={style.tr}>
                <th>Fullname</th>
                <th>Age</th>
                <th>Position</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {arr.map((item,index) => {
                return <tr className={style.tds} key={index}>
                  {item}
                  <td key={v4()} className={style.obj}><button className={style.editBtn}>Edit</button></td>
                  <td key={v4()} className={style.obj}><button className={style.deleteBtn} onClick={() => {
                    arr.pop(arr[index])
                    if(sil){
                      setSil(false)
                    }
                  }}>Delete</button></td>
                  </tr>
              })}
          </Table>
        </div>
      
      </section>
    </>
  );
}