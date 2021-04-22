import { useContext, useEffect, useState } from 'react';
import friends from '../../friends.json';
import { useRouter } from 'next/router';
import { PixCard } from './PixCard';

export function Friend() {
    const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            let list = friends;
            setFriendList(list);
        }
        loadAll();
    }, []);

    return (
        <>
            {friendList.map((item, key) => (
                <>
                    <PixCard key={key} img={item.img} nome={item.nome} optionCelular={item.optionCelular} optionCpf={item.optionCpf} optionEmail={item.optionEmail}/>
                </>
            ))}
        </>
    );
}