import { ButtonHTMLAttributes } from 'react';
import * as S from './style'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

const FilterButton = ({...ButtonType}:ButtonType)=>{
  return(
    <S.FilterButton {...ButtonType}>
      <strong>Limpar Filtros</strong>
    </S.FilterButton>
  )
}

export default FilterButton;