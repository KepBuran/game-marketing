'use client';

export default function Page() {
  const getAllUsers = async () => {
    const url = 'http://localhost:3000/api/users'

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('GetAllUsers error:' + response.statusText);
      })
      .then(data => {
        console.log('GetAllUsers data received:', data);
      })
      .catch(error => {
        console.error('GetAllUsers error:', error);
      });
  }

  const getUser = async (id: string) => {
    const url = `http://localhost:3000/api/users/${id}`
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('getUser error:' + response.statusText);
      })
      .then(data => {
        console.log('getUser data received:', data);
      })
      .catch(error => {
        console.error('getUser error:', error);
      });
  }

  return (
    <div className="flex gap-5">
      <button className="bg-red-600 p-2" onClick={getAllUsers}>
        Get All Users
      </button>
      <button className="bg-red-600 p-2" onClick={() => getUser('1')}>
        Get User 1
      </button>
      {/* <button className="bg-red-600 p-2" onClick={() => updateUser('1', { name: 'John' })}>
        Update User 1
      </button>
      <button className="bg-red-600 p-2" onClick={() => deleteUser('1')}>
        Delete User 1
      </button> */}
    </div>
  )

}