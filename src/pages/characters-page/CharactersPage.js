import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
    ;
import { characterService } from "../../services";
import { Characters } from "../../components";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const {ids} = useParams();

    useEffect(() => {
        characterService.getById(ids).then(({data}) => setCharacters(data))
    }, []);

    return (
        <div>
            <Characters characters={characters}/>
        </div>
    );
};

export { CharactersPage };