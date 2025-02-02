import { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.results);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.login.uuid}>
                        {user.name.first} {user.name.last}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
