import { useEffect, useState } from 'react';


function Github() {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://api.github.com/user/sandeep07')
            .then(response => response.json())
            .then(data => setData(data))

    }, [])

    return (
        <>

            <div className='bg-orange-500 text-3xl p-4 text-white'>Github followers : {data.followers}
                <img src={data.avatar_url} alt="image" />
            </div>

        </>
    );
}

export default Github;