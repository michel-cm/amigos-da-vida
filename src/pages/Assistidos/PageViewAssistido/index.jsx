import * as C from './styles';
import { useParams } from 'react-router-dom';
import { assistido } from '../../../helpers/dataAssistido';

export function PageViewAssistido(props) {

    console.log(assistido)

    const { id } = useParams();

    return (
        <C.Container>
           {
           `Assistido ${id}`
           }
        </C.Container>
    );
}