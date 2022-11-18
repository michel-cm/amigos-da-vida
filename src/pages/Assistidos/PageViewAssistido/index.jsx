import * as C from './styles';
import { useParams } from 'react-router-dom';

export function PageViewAssistido(props) {

    const { id } = useParams();

    return (
        <C.Container>
           {
           `ADD Assistido ${id}`
           }
        </C.Container>
    );
}