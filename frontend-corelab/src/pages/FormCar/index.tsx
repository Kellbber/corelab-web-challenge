import { useParams } from 'react-router-dom'
import Modalform from '../../components/ModalForm'
import * as S from './style'

type Update = {
  update?: boolean
}

const formCar = (props: Update) => {

  const { id } = useParams();    
  return (
    <S.formCar>
      <S.formCarContent>
      <Modalform carId={id} update={props.update}/>
      </S.formCarContent>
        
    </S.formCar>
  )
}

export default formCar;